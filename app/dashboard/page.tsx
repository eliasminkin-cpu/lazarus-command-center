"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TaskCard } from "@/components/tasks/task-card"
import { TaskCreateDialog } from "@/components/tasks/task-create-dialog"
import { NotionTask, NotionKPI, NotionBalanceEntry } from "@/lib/notion"
import { Target, TrendingUp, TrendingDown, Minus, Scale, AlertTriangle } from "lucide-react"

export default function DashboardPage() {
  const [tasks, setTasks] = useState<NotionTask[]>([])
  const [kpis, setKpis] = useState<NotionKPI[]>([])
  const [balance, setBalance] = useState<NotionBalanceEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "NOW" | "BUILD" | "SCALE">("all")

  const loadData = async () => {
    setLoading(true)
    try {
      const [tasksRes, kpisRes, balanceRes] = await Promise.all([
        fetch("/api/tasks"),
        fetch("/api/kpis"),
        fetch("/api/balance?status=pending"),
      ])

      const [tasksData, kpisData, balanceData] = await Promise.all([
        tasksRes.json(),
        kpisRes.json(),
        balanceRes.json(),
      ])

      setTasks(tasksData)
      setKpis(kpisData)
      setBalance(balanceData)
    } catch (error) {
      console.error("Error loading data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleDeleteTask = async (taskId: string) => {
    if (!confirm("Task wirklich löschen?")) return

    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Failed to delete task")

      setTasks(tasks.filter((t) => t.id !== taskId))
    } catch (error) {
      console.error("Error deleting task:", error)
      alert("Failed to delete task")
    }
  }

  const filteredTasks = filter === "all" 
    ? tasks 
    : tasks.filter((t) => t.pop === filter)

  const nowTasks = tasks.filter((t) => t.pop === "NOW")
  const p1Tasks = tasks.filter((t) => t.priority === "P1")
  const totalBalance = balance.reduce((sum, entry) => sum + (entry.cost - entry.healing), 0)

  return (
    <div className="min-h-screen bg-lazarus-black">
      {/* Header */}
      <div className="border-b border-lazarus-red/20 bg-lazarus-black-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-tactical text-4xl font-bold tracking-tight uppercase">
                <span className="text-lazarus-red">▮</span> Command Center
              </h1>
              <p className="text-lazarus-gray text-sm font-mono mt-1">
                Tactical Operations Dashboard
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 border border-lazarus-red/30 bg-lazarus-red/10">
                <span className="w-2 h-2 bg-lazarus-red rounded-full animate-pulse-red" />
                <span className="text-lazarus-red text-xs font-mono uppercase">
                  Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-lazarus-gray font-mono">LOADING DATA...</div>
          </div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="ops-card">
                <CardHeader className="pb-3">
                  <CardDescription className="text-xs text-lazarus-gray uppercase tracking-wider">
                    Total Tasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-tactical text-4xl text-lazarus-red font-bold">
                    {tasks.length}
                  </div>
                </CardContent>
              </Card>

              <Card className="ops-card">
                <CardHeader className="pb-3">
                  <CardDescription className="text-xs text-lazarus-gray uppercase tracking-wider">
                    NOW Tasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-tactical text-4xl text-yellow-500 font-bold">
                    {nowTasks.length}
                  </div>
                </CardContent>
              </Card>

              <Card className="ops-card">
                <CardHeader className="pb-3">
                  <CardDescription className="text-xs text-lazarus-gray uppercase tracking-wider">
                    P1 Priority
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-tactical text-4xl text-lazarus-red font-bold">
                    {p1Tasks.length}
                  </div>
                </CardContent>
              </Card>

              <Card className="ops-card">
                <CardHeader className="pb-3">
                  <CardDescription className="text-xs text-lazarus-gray uppercase tracking-wider">
                    Balance Debt
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`font-tactical text-4xl font-bold ${totalBalance > 0 ? 'text-lazarus-red' : 'text-green-500'}`}>
                    {totalBalance > 0 ? '+' : ''}{totalBalance}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* KPI Section */}
            {kpis.length > 0 && (
              <div>
                <h2 className="tactical-header text-xl mb-4">
                  ▮ KPI Overview
                </h2>
                <div className="ops-grid">
                  {kpis.slice(0, 6).map((kpi) => {
                    const progress = (kpi.value / kpi.target) * 100
                    const Icon = kpi.trend === "up" ? TrendingUp : kpi.trend === "down" ? TrendingDown : Minus

                    return (
                      <Card key={kpi.id} className="ops-card">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-sm font-mono">{kpi.name}</CardTitle>
                            <Icon className={`h-4 w-4 ${
                              kpi.trend === "up" ? "text-green-500" :
                              kpi.trend === "down" ? "text-lazarus-red" :
                              "text-lazarus-gray"
                            }`} />
                          </div>
                          {kpi.sector && (
                            <Badge variant="outline" className="sector-badge w-fit">
                              {kpi.sector}
                            </Badge>
                          )}
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex items-baseline gap-2">
                              <span className="font-tactical text-2xl text-lazarus-red font-bold">
                                {kpi.value}
                              </span>
                              <span className="text-lazarus-gray text-xs">
                                / {kpi.target}
                              </span>
                            </div>
                            <div className="h-1 bg-lazarus-black-lighter rounded-full overflow-hidden">
                              <div
                                className="h-full bg-lazarus-red transition-all"
                                style={{ width: `${Math.min(progress, 100)}%` }}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Balance Ledger Alert */}
            {totalBalance > 10 && (
              <Card className="border-lazarus-red bg-lazarus-red/5">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-lazarus-red" />
                    <CardTitle className="text-lazarus-red">Balance Ledger Warning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lazarus-gray-light text-sm font-mono">
                    Aktueller Balance-Debt: <strong className="text-lazarus-red">{totalBalance}</strong>
                    {" "}→ Ausgleichs-Aktion erforderlich
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Tasks Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="tactical-header text-xl">
                  ▮ Active Tasks
                </h2>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant={filter === "all" ? "default" : "outline"}
                      onClick={() => setFilter("all")}
                    >
                      All
                    </Button>
                    <Button
                      size="sm"
                      variant={filter === "NOW" ? "default" : "outline"}
                      onClick={() => setFilter("NOW")}
                    >
                      NOW
                    </Button>
                    <Button
                      size="sm"
                      variant={filter === "BUILD" ? "default" : "outline"}
                      onClick={() => setFilter("BUILD")}
                    >
                      BUILD
                    </Button>
                    <Button
                      size="sm"
                      variant={filter === "SCALE" ? "default" : "outline"}
                      onClick={() => setFilter("SCALE")}
                    >
                      SCALE
                    </Button>
                  </div>
                  <TaskCreateDialog onTaskCreated={loadData} />
                </div>
              </div>

              {filteredTasks.length === 0 ? (
                <Card className="ops-card">
                  <CardContent className="py-12 text-center">
                    <Target className="h-12 w-12 text-lazarus-gray mx-auto mb-4" />
                    <p className="text-lazarus-gray font-mono">
                      Keine Tasks gefunden. Erstelle einen neuen Task.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="ops-grid">
                  {filteredTasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onDelete={handleDeleteTask}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}