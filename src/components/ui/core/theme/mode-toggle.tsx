"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react" // ১. useState এবং useEffect ইম্পোর্ট করুন

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false) // ২. একটি মাউন্টেড স্টেট নিন

  // ৩. useEffect ব্যবহার করে নিশ্চিত করুন যে কম্পোনেন্টটি ক্লায়েন্টে লোড হয়েছে
  useEffect(() => {
    setMounted(true)
  }, [])

  // ৪. মাউন্ট হওয়ার আগে আইকন রেন্ডার করবেন না, তাহলে সার্ভার-ক্লায়েন্ট mismatch হবে না
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="opacity-0">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="rounded-full transition-all duration-300"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}