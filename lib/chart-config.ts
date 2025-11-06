import type React from "react"
export type ChartConfig = {
  [k in string]:
    | {
        label: string
        color?: string
        icon?: React.ComponentType<{ className?: string }>
      }
    | { label?: string; color?: string; icon?: React.ComponentType<{ className?: string }> }
}
