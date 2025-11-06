import { type NextRequest, NextResponse } from "next/server"

// Simular um store em memória (em produção, use banco de dados)
const signals: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Webhook do Telegram envia atualizações de canais
    if (body.channel_post) {
      const message = body.channel_post
      const signal = parseSignal(message.text || "", message.chat.id)

      if (signal) {
        signal.timestamp = new Date().toLocaleTimeString("pt-BR")
        signals.unshift(signal)

        // Manter apenas os últimos 50 sinais
        if (signals.length > 50) {
          signals.pop()
        }
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[v0] Erro ao processar webhook:", error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // GET /api/telegram/webhook retorna os sinais armazenados
    return NextResponse.json(signals)
  } catch (error) {
    console.error("[v0] Erro ao obter sinais:", error)
    return NextResponse.json([])
  }
}

// Parse de mensagens do Telegram para extrair sinal
function parseSignal(text: string, chatId: number) {
  // Reconhecer padrões de sinal como:
  // CALL 25000 / 25500 / 24500
  // PUT 24800 / 24200 / 25300

  const callMatch = text.match(/CALL\s+(\d+)\s*\/\s*(\d+)\s*\/\s*(\d+)/i)
  const putMatch = text.match(/PUT\s+(\d+)\s*\/\s*(\d+)\s*\/\s*(\d+)/i)

  if (callMatch) {
    return {
      id: Date.now().toString(),
      type: "CALL",
      entry: Number.parseInt(callMatch[1]),
      target: Number.parseInt(callMatch[2]),
      stop: Number.parseInt(callMatch[3]),
      channel: getChannelType(chatId),
      status: "pending",
      method: extractMethod(text),
    }
  }

  if (putMatch) {
    return {
      id: Date.now().toString(),
      type: "PUT",
      entry: Number.parseInt(putMatch[1]),
      target: Number.parseInt(putMatch[2]),
      stop: Number.parseInt(putMatch[3]),
      channel: getChannelType(chatId),
      status: "pending",
      method: extractMethod(text),
    }
  }

  return null
}

function getChannelType(chatId: number): "VIP" | "FREE" {
  const vipId = Number.parseInt(process.env.TELEGRAM_VIP_CHANNEL_ID || "-1002252082917")
  return chatId === vipId ? "VIP" : "FREE"
}

function extractMethod(text: string): string {
  if (text.includes("Fibonacci")) return "Fibonacci"
  if (text.includes("TH") || text.includes("Padrão")) return "Padrão TH"
  if (text.includes("Suporte") || text.includes("Resistência")) return "Suporte/Resistência"
  return "Método Automático"
}
