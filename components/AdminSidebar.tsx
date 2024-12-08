"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Car, BarChart3, Wallet2, MessageSquare, Calendar, Settings, HelpCircle, LogOut, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface SidebarLink {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const mainLinks: SidebarLink[] = [
  { title: "Dashboard", href: "/dashboard", icon: Home },
  { title: "Car Rent", href: "/car-rent", icon: Car },
  { title: "Insight", href: "/insight", icon: BarChart3 },
  { title: "Reimburse", href: "/reimburse", icon: Wallet2 },
  { title: "Inbox", href: "/inbox", icon: MessageSquare },
  { title: "Calendar", href: "/calendar", icon: Calendar },
]

const preferenceLinks: SidebarLink[] = [
  { title: "Settings", href: "/settings", icon: Settings },
  { title: "Help & Center", href: "/help", icon: HelpCircle },
]

export default function SidebarNavigation() {
  const pathname = usePathname()
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground">
            MAIN MENU
          </SidebarGroupLabel>
          <SidebarMenu>
            {mainLinks.map((link) => (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === link.href}
                  className={cn(
                    "w-full gap-2 justify-start px-2 hover:bg-muted/50",
                    pathname === link.href && "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  <Link href={link.href}>
                    <link.icon className="h-4 w-4" />
                    <span>{link.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground">
            PREFERENCES
          </SidebarGroupLabel>
          <SidebarMenu>
            {preferenceLinks.map((link) => (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === link.href}
                  className="w-full gap-2 justify-start px-2 hover:bg-muted/50"
                >
                  <Link href={link.href}>
                    <link.icon className="h-4 w-4" />
                    <span>{link.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton className="w-full gap-2 justify-between px-2 hover:bg-muted/50">
                <div className="flex items-center gap-2">
                  {isDarkMode ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                  <span>Dark Mode</span>
                </div>
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                  aria-label="Toggle dark mode"
                />
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                className="w-full gap-2 justify-start px-2 text-destructive hover:bg-destructive/10"
              >
                <LogOut className="h-4 w-4" />
                <span>Log Out</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
