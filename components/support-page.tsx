"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SupportPage() {
  const faqs = [
    {
      category: "Geral",
      questions: [
        { q: "Como funciona o BOT MASTER?", a: "O bot envia sinais em tempo real via Telegram" },
        { q: "Qual é a taxa de acerto?", a: "A taxa média é de 95% conforme histórico" },
      ],
    },
    {
      category: "Técnico",
      questions: [
        { q: "Como conectar o Telegram?", a: "Acesse o menu de notificações e autorize o bot" },
        { q: "Posso usar em celular?", a: "Sim, o app é totalmente responsivo" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold neon-text mb-2">Suporte</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {faqs.map((section) => (
          <Card key={section.category} className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-foreground mb-4">{section.category}</h3>
              <div className="space-y-3">
                {section.questions.map((item, idx) => (
                  <div key={idx}>
                    <p className="text-sm font-semibold text-primary">{item.q}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.a}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-primary/30 bg-primary/5 mb-8">
        <CardContent className="pt-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Fale Conosco</h3>
          <a href="https://t.me/m/3Q_G4JnlNWQx" target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-primary hover:bg-primary/90 neon-shadow">Falar no Telegram</Button>
          </a>
        </CardContent>
      </Card>
    </div>
  )
}
