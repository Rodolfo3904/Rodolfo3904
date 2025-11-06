"use client"

export default function BottomNav({
  currentPage,
  onNavigate,
  onLogout,
}: {
  currentPage: string
  onNavigate: (page: string) => void
  onLogout: () => void
}) {
  const menuItems = [
    { id: "dashboard", label: "Início", icon: "🏠" },
    { id: "signals", label: "Sinais", icon: "📡" },
    { id: "banca", label: "Banca", icon: "💰" },
    { id: "profile", label: "Perfil", icon: "👤" },
    { id: "support", label: "Suporte", icon: "❓" },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border/50 backdrop-blur-sm">
      <div className="flex justify-around items-center h-20">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-all ${
              currentPage === item.id ? "text-primary neon-glow" : "text-muted-foreground"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
