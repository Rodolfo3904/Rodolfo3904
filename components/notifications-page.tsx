"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState({
    novaEntrada: true,
    metaBatida: true,
    alertaPerda: true,
    relatorios: false,
  })

  const toggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold neon-text mb-2">Notificações</h1>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div>
                  <p className="font-semibold text-foreground capitalize">
                    {key === "novaEntrada"
                      ? "Nova Entrada Confirmada"
                      : key === "metaBatida"
                        ? "Meta Diária Batida"
                        : key === "alertaPerda"
                          ? "Alerta de Perda"
                          : "Relatórios Diários"}
                  </p>
                </div>
                <button
                  onClick={() => toggle(key as keyof typeof notifications)}
                  className={`w-12 h-6 rounded-full transition-all ${value ? "bg-primary" : "bg-secondary"}`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-background transition-all ${value ? "translate-x-6" : "translate-x-1"}`}
                  ></div>
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
