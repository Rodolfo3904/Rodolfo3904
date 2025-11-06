"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function BancaPage() {
  const [banca, setBanca] = useState(1000)
  const [metaDiaria, setMetaDiaria] = useState(5)
  const [stopLoss, setStopLoss] = useState(200)

  const stakeProporcion = banca * 0.02
  const metaValor = banca * (metaDiaria / 100)
  const progressoMeta = (metaValor / stakeProporcion) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold neon-text mb-2">Gestão de Banca</h1>
        <p className="text-muted-foreground">Controle seu capital e gerenciamento de risco</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <label className="text-sm font-semibold block mb-2">Banca Inicial (R$)</label>
            <input
              type="number"
              value={banca}
              onChange={(e) => setBanca(Number(e.target.value))}
              className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground"
            />
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <label className="text-sm font-semibold block mb-2">Meta Diária (%)</label>
            <input
              type="number"
              value={metaDiaria}
              onChange={(e) => setMetaDiaria(Number(e.target.value))}
              className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground"
            />
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <label className="text-sm font-semibold block mb-2">Stop Loss (R$)</label>
            <input
              type="number"
              value={stopLoss}
              onChange={(e) => setStopLoss(Number(e.target.value))}
              className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground"
            />
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold text-foreground mb-2">Stake Sugerida</p>
            <p className="text-2xl font-bold text-primary">R$ {stakeProporcion.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="pt-6">
          <p className="text-sm font-semibold text-foreground mb-4">Progresso da Meta Diária</p>
          <div className="bg-secondary rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-green-500 transition-all duration-500"
              style={{ width: `${Math.min(progressoMeta, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            R$ {metaValor.toFixed(2)} de R$ {stakeProporcion.toFixed(2)}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
