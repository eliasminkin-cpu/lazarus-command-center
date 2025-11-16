"use client"

import { NotionKPI } from "@/lib/notion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus, Target } from "lucide-react"
import { getSectorIcon } from "@/lib/utils"

interface KPICardProps {
  kpi: NotionKPI
}

export function KPICard({ kpi }: KPICardProps) {
  const progress = (kpi.value / kpi.target) * 100
  const isOnTarget = progress >= 100
  const isClose = progress >= 80 && progress < 100

  const Icon = kpi.trend === "up" ? TrendingUp : kpi.trend === "down" ? TrendingDown : Minus

  return (
    <Card className="ops-card">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-sm font-mono leading-tight flex-1">
            {kpi.name}
          </CardTitle>
          <Icon
            className={`h-4 w-4 ${
              kpi.trend === "up"
                ? "text-green-500"
                : kpi.trend === "down"
                ? "text-lazarus-red"
                : "text-lazarus-gray"
            }`}
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {kpi.sector && (
            <Badge variant="outline" className="sector-badge">
              {getSectorIcon(kpi.sector)} {kpi.sector}
            </Badge>
          )}
          
          <Badge
            className={`sector-badge ${
              isOnTarget
                ? "bg-green-500/10 border-green-500 text-green-500"
                : isClose
                ? "bg-yellow-500/10 border-yellow-500 text-yellow-500"
                : "bg-lazarus-red/10 border-lazarus-red text-lazarus-red"
            }`}
          >
            {progress.toFixed(0)}%
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-baseline gap-2">
          <span className="font-tactical text-3xl text-lazarus-red font-bold">
            {kpi.value.toLocaleString("de-DE")}
          </span>
          <span className="text-lazarus-gray text-xs">
            / {kpi.target.toLocaleString("de-DE")}
          </span>
        </div>

        <div className="space-y-1">
          <div className="h-2 bg-lazarus-black-lighter rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                isOnTarget
                  ? "bg-green-500"
                  : isClose
                  ? "bg-yellow-500"
                  : "bg-lazarus-red"
              }`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] text-lazarus-gray">
            <span>0</span>
            <span className="flex items-center gap-1">
              <Target className="h-2 w-2" />
              Target
            </span>
            <span>{kpi.target}</span>
          </div>
        </div>

        {!isOnTarget && (
          <div className="pt-2 border-t border-lazarus-red/10">
            <p className="text-[10px] text-lazarus-gray-light">
              Gap: <span className="text-lazarus-red font-bold">
                {(kpi.target - kpi.value).toLocaleString("de-DE")}
              </span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}