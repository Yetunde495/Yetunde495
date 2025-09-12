"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="glass border-primary/20 hover:border-primary/40"
      // className="flex items-center cursor-pointer justify-center w-8 h-8 rounded-full bg-white/30 hover:bg-gray-300 dark:hover:bg-white/40 transition-colors"

    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4 text-[#713cbc] dark:text-gray-200" />
      ) : (
        <Sun className="h-4 w-4 text-gray-800 dark:text-gray-200" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}