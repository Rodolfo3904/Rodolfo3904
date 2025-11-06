"use client"

export default function SideNav({
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
    <aside className="hidden md:flex w-64 bg-card border-r border-border/50 flex-col p-6 backdrop-blur-sm">
      <h1 className="text-2xl font-bold neon-text mb-8">BOT MASTER</h1>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full text-left px-4 py-2 rounded transition-all ${
              currentPage === item.id
                ? "bg-primary text-primary-foreground neon-glow"
                : "hover:bg-secondary/50 text-foreground"
            }`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <button
        onClick={onLogout}
        className="w-full px-4 py-2 rounded bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-all"
      >
        Sair
      </button>
    </aside>
  )
}
