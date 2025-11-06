"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LoginPage({ onLogin }: { onLogin: (email: string, password: string) => void }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(email, password)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <Card className="relative w-full max-w-md border-primary/30 bg-card/80 backdrop-blur-xl">
        <CardContent className="pt-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold neon-text mb-2">BOT MASTER PRO</h1>
            <p className="text-muted-foreground text-sm">Sistema de Sinais de Trading</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 neon-shadow mt-6"
            >
              Entrar no BOT MASTER
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Ainda não tem conta?{" "}
            <a href="#" className="text-primary hover:text-primary/80 font-semibold">
              Cadastre-se
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
