'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const generateSessionId = () => {
  if (typeof window === 'undefined') return '';
  let sid = sessionStorage.getItem('_sid');
  if (!sid) {
    sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem('_sid', sid);
  }
  return sid;
};

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const lastTracked = useRef<string>('');
  const pageStartTime = useRef<number>(Date.now());

  useEffect(() => {
    const baseApi = process.env.NEXT_PUBLIC_BASE_API;
    if (!baseApi) return;

    const sessionId = generateSessionId();

    // Send duration for previous page on navigation
    if (lastTracked.current && lastTracked.current !== pathname) {
      const duration = Math.round((Date.now() - pageStartTime.current) / 1000);
      fetch(`${baseApi}/analytics/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: lastTracked.current,
          sessionId,
          duration,
          event: 'pageleave',
        }),
        keepalive: true,
      }).catch(() => {});
    }

    if (lastTracked.current === pathname) return;
    lastTracked.current = pathname;
    pageStartTime.current = Date.now();

    fetch(`${baseApi}/analytics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: pathname,
        referrer: document.referrer || undefined,
        sessionId,
      }),
      keepalive: true,
    }).catch(() => {});

    // Track max scroll depth
    let maxScrollPct = 0;
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = Math.round((scrolled / total) * 100);
      if (pct > maxScrollPct) maxScrollPct = pct;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Send duration + scroll depth on tab close/navigate away
    const handleUnload = () => {
      const duration = Math.round((Date.now() - pageStartTime.current) / 1000);
      fetch(`${baseApi}/analytics/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: pathname, sessionId, duration, event: 'pageleave', scrollDepth: maxScrollPct }),
        keepalive: true,
      }).catch(() => {});
    };
    window.addEventListener('beforeunload', handleUnload);
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return null;
}
