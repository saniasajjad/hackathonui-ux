"use client"

import { buttonVariants } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { cn } from "@/lib/utils"
import { Home, Car, BarChart3, Wallet2, MessageSquare, Calendar, Settings, HelpCircle, Moon, LogOut, Menu, X } from 'lucide-react'
import Link from "next/link"
import { PropsWithChildren, useState } from "react"
import { Switch } from "@/components/ui/switch"
import Navabar from "@/components/navbar"

interface SidebarItem {
  href: string
  icon: LucideIcon
  text: string
}

interface SidebarCategory {
  category: string
  items: SidebarItem[]
}

const SIDEBAR_ITEMS: SidebarCategory[] = [
  {
    category: "MAIN MENU",
    items: [
      { href: "/dashboard", icon: Home, text: "Dashboard" },
      { href: "/car-rent", icon: Car, text: "Car Rent" },
      { href: "#", icon: BarChart3, text: "Insight" },
      { href: "#", icon: Wallet2, text: "Reimburse" },
      { href: "#", icon: MessageSquare, text: "Inbox" },
      { href: "#", icon: Calendar, text: "Calendar" },
    ],
  },
  {
    category: "PREFERENCES",
    items: [
      { href: "#", icon: Settings, text: "Settings" },
      { href: "#", icon: HelpCircle, text: "Help & Center" },
    ],
  },
]

const Sidebar = ({ onClose }: { onClose?: () => void }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className="flex flex-col h-full py-6">
       <h1 className="text-[color:var(--primary-dark-500)] mb-5 text-2xl font-[700] ">
              <Link href={"/" }>MORENT</Link>
            </h1>
      <div className="flex-grow space-y-8">
        {SIDEBAR_ITEMS.map(({ category, items }) => (

          <div key={category}>
            <p className="px-6 text-xs font-medium text-gray-400 mb-4">
              {category}
            </p>
            <div className="space-y-1">
              {items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-6 py-4 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors",
                    item.href === "/dashboard" && "bg-[#4743E0] rounded-xl text-white hover:bg-[#4743E0]/90 hover:text-white"
                  )}
                  onClick={onClose}
                >
                  <item.icon className="size-5" />
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 space-y-4">
        <div className="flex items-center justify-between py-2.5 text-sm text-gray-500">
          <div className="flex items-center gap-3">
            <Moon className="size-5" />
            Dark Mode
          </div>
          <Switch
            checked={isDarkMode}
            onCheckedChange={setIsDarkMode}
          />
        </div>
        <button
          className="flex w-full items-center gap-3 text-sm text-red-500 hover:text-red-600 py-2.5"
          onClick={() => console.log('logout')}
        >
          <LogOut className="size-5" />
          Log Out
        </button>
      </div>
    </div>
  )
}

const Layout = ({ children }: PropsWithChildren) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="relative h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* sidebar for desktop */}
      <div className="hidden md:block w-64 border-r border-gray-100 h-full relative z-10 p-4 px-auto">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* mobile header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-100">
          <span className="text-lg px-4 font-semibold">Rental</span>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="text-gray-500 hover:text-gray-900"
          >
            <Menu className="size-6" />
          </button>
        </div>

        {/* main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
          {children}
        </main>

        <Modal
          className="p-0"
          showModal={isDrawerOpen}
          setShowModal={setIsDrawerOpen}
        >
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-500 hover:text-gray-900"
            >
              <X className="size-6" />
            </button>
          </div>
          <Sidebar onClose={() => setIsDrawerOpen(false)} />
        </Modal>
      </div>
    </div>
  )
}

export default Layout
