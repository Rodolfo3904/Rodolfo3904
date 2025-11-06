"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Signal {
  id: string
  type: "CALL" | "PUT"
  entry: number
  target: number
  stop: number
  timestamp: string
  channel: "VIP" | "FREE"
  status: "pending" | "won" | "lost"
  method: string
}

export default function SignalsPage() {
  const [signals] = useState<Signal[]>([
    {
      id: "1",
      type: "CALL",
      entry: 25000,
      target: 25500,
      stop: 24500,
      timestamp: "14:30",
      channel: "VIP",
      status: "won",
      method: "Padrão TH",
    },
    {
      id: "2",
      type: "PUT",
      entry: 24800,
      target: 24200,
      stop: 25300,
      timestamp: "14:15",
      channel: "FREE",
      status: "won",
      method: "Suporte/Resistência",
    },
    {
      id: "3",
      type: "CALL",
      entry: 24500,
      target: 25000,
      stop: 24000,
      timestamp: "13:45",
      channel: "VIP",
      status: "pending",
      method: "Fibonacci",
    },
  ])

  const [filterChannel, setFilterChannel] = useState<"ALL" | "VIP" | "FREE">("ALL")

  const filteredSignals = signals.filter((s) => filterChannel === "ALL" || s.channel === filterChannel)

  const copySignal = (signal: Signal) => {
    const text = `SINAL ${signal.type}\nEntrada: ${signal.entry}\nTarget: ${signal.target}\nStop: ${signal.stop}`
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold neon-text mb-2">Sinais ao Vivo</h1>
        <p className="text-muted-foreground">Integração Telegram em Tempo Real</p>
      </div>

      <div className="flex gap-2 mb-6">
        {(["ALL", "VIP", "FREE"] as const).map((channel) => (
          <button
            key={channel}
            onClick={() => setFilterChannel(channel)}
            className={`px-4 py-2 rounded font-semibold transition-all ${
              filterChannel === channel
                ? "bg-primary text-primary-foreground neon-glow"
                : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            {channel}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredSignals.map((signal) => (
          <Card key={signal.id} className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div>
                  <p className="text-xs text-muted-foreground">Tipo</p>
                  <p className={`font-bold text-lg ${signal.type === "CALL" ? "text-green-500" : "text-red-500"}`}>
                    {signal.type}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Entrada</p>
                  <p className="font-bold text-primary">{signal.entry}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Target</p>
                  <p className="font-bold text-green-500">{signal.target}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Stop</p>
                  <p className="font-bold text-red-500">{signal.stop}</p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => copySignal(signal)} className="bg-primary hover:bg-primary/90" size="sm">
                    Copiar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
