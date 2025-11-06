"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const chartData = [
  { day: "Seg", greens: 12, reds: 2 },
  { day: "Ter", greens: 15, reds: 3 },
  { day: "Qua", greens: 18, reds: 1 },
  { day: "Qui", greens: 16, reds: 4 },
  { day: "Sex", greens: 19, reds: 2 },
  { day: "Sab", greens: 14, reds: 3 },
  { day: "Dom", greens: 119, reds: 5 },
]

export default function DashboardPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background p-4 md:p-6">
      <div className="mb-8 fade-in">
        <h1 className="text-3xl md:text-4xl font-bold neon-text mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo ao BOT MASTER PRO</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-green-500/50 transition-all">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-sm mb-2">Resultado do Dia</p>
            <p className="text-3xl font-bold text-green-500">119 GREENS</p>
            <p className="text-xs text-muted-foreground mt-2">Taxa de acerto: 95.9%</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-red-500/50 transition-all">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-sm mb-2">Derrotas</p>
            <p className="text-3xl font-bold text-red-500">05 REDS</p>
            <p className="text-xs text-muted-foreground mt-2">Gerenciamento de risco ativo</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-sm mb-2">Status do Bot</p>
            <p className="text-3xl font-bold text-green-500">ONLINE ✅</p>
            <p className="text-xs text-muted-foreground mt-2">Último sinal: há 2min</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm mb-8">
        <CardContent className="pt-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Evolução Semanal</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,255,100,0.1)" />
              <XAxis dataKey="day" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid rgba(0,255,100,0.3)" }}
                formatter={(value) => `${value} sinais`}
              />
              <Line type="monotone" dataKey="greens" stroke="#00ff64" strokeWidth={2} name="Ganhos" />
              <Line type="monotone" dataKey="reds" stroke="#ff0040" strokeWidth={2} name="Perdas" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => onNavigate("signals")}
          className="p-6 bg-card/50 border border-border/50 rounded-lg hover:border-primary hover:bg-primary/10 transition-all neon-shadow group"
        >
          <p className="text-2xl font-bold text-primary group-hover:text-green-400">📡</p>
          <p className="text-foreground font-semibold mt-2">Ver Sinais ao Vivo</p>
          <p className="text-xs text-muted-foreground mt-1">Tempo real Telegram</p>
        </button>

        <button
          onClick={() => onNavigate("signals")}
          className="p-6 bg-card/50 border border-border/50 rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
        >
          <p className="text-2xl font-bold text-muted-foreground">🎁</p>
          <p className="text-foreground font-semibold mt-2">Canal Free</p>
          <p className="text-xs text-muted-foreground mt-1">Sinais básicos</p>
        </button>

        <button
          onClick={() => onNavigate("signals")}
          className="p-6 bg-card/50 border border-border/50 rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
        >
          <p className="text-2xl font-bold text-primary">👑</p>
          <p className="text-foreground font-semibold mt-2">Canal VIP</p>
          <p className="text-xs text-muted-foreground mt-1">Sinais premium</p>
        </button>
      </div>
    </div>
  )
}
