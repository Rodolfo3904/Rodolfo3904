"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProfilePage({
  onNavigate,
  onLogout,
}: {
  onNavigate: (page: string) => void
  onLogout: () => void
}) {
  const [plan, setPlan] = useState<"FREE" | "VIP">("FREE")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold neon-text mb-2">Perfil</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Dados do Usuário</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Nome</p>
                <p className="text-foreground font-semibold">Usuário BOT MASTER</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">E-mail</p>
                <p className="text-foreground font-semibold">usuario@botmaster.com</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Plano Atual</p>
                <p className={`text-foreground font-bold ${plan === "VIP" ? "text-primary" : ""}`}>{plan}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Selecionar Plano</h3>
            <div className="space-y-3">
              <button
                onClick={() => setPlan("FREE")}
                className={`w-full p-3 rounded border transition-all ${
                  plan === "FREE"
                    ? "bg-primary/20 border-primary text-primary"
                    : "bg-secondary border-border hover:border-primary"
                }`}
              >
                Plano Free
              </button>
              <a
                href="https://lastlink.com/p/CAE21BC85/checkout-payment/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full p-3 rounded border border-primary bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all">
                  Comprar Plano VIP
                </button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button onClick={onLogout} className="bg-red-500 hover:bg-red-600">
          Sair
        </Button>
      </div>
    </div>
  )
}
