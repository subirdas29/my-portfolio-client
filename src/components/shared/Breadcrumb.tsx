import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
      <Link href="/" className="flex items-center gap-1 hover:text-amber-500 transition-colors">
        <Home className="w-3 h-3" />
        <span>Home</span>
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="w-3 h-3 text-slate-300 dark:text-slate-600" />
          {item.href ? (
            <Link href={item.href} className="hover:text-amber-500 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-900 dark:text-white font-medium line-clamp-1 max-w-[200px]">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
