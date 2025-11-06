"use client"

import { useState } from "react"
import LoginPage from "@/components/login-page"
import DashboardPage from "@/components/dashboard-page"
import SignalsPage from "@/components/signals-page"
import BancaPage from "@/components/banca-page"
import ProfilePage from "@/components/profile-page"
import SupportPage from "@/components/support-page"
import NotificationsPage from "@/components/notifications-page"
import BottomNav from "@/components/bottom-nav"
import SideNav from "@/components/side-nav"

type PageType = "login" | "dashboard" | "signals" | "banca" | "notifications" | "profile" | "support"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentPage, setCurrentPage] = useState<PageType>("login")

  const handleLogin = (email: string, password: string) => {
    if (email && password) {
      setIsAuthenticated(true)
      setCurrentPage("dashboard")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentPage("login")
  }

  const navigateTo = (page: PageType) => {
    setCurrentPage(page)
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <SideNav currentPage={currentPage} onNavigate={navigateTo} onLogout={handleLogout} />
      <main className="flex-1 flex flex-col overflow-auto">
        <div className="flex-1">
          {currentPage === "dashboard" && <DashboardPage onNavigate={navigateTo} />}
          {currentPage === "signals" && <SignalsPage />}
          {currentPage === "banca" && <BancaPage />}
          {currentPage === "profile" && <ProfilePage onNavigate={navigateTo} onLogout={handleLogout} />}
          {currentPage === "support" && <SupportPage />}
          {currentPage === "notifications" && <NotificationsPage />}
        </div>
      </main>
      <BottomNav currentPage={currentPage} onNavigate={navigateTo} onLogout={handleLogout} />
    </div>
  )
}
