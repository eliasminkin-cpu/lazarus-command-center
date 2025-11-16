import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, CheckCircle2, BarChart3, Scale, Shield } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Target,
      title: "Task Command",
      description: "Vollständige CRUD-Kontrolle über Tasks mit PoP-System",
      link: "/dashboard",
    },
    {
      icon: BarChart3,
      title: "KPI Tracking",
      description: "Echtzeit-Metriken und Sektor-Performance",
      link: "/dashboard",
    },
    {
      icon: Scale,
      title: "Balance Ledger",
      description: "Ethische Bilanzierung und Ausgleichsplanung",
      link: "/dashboard",
    },
    {
      icon: Shield,
      title: "Sektoren-System",
      description: "S I bis S X operative Kategorisierung",
      link: "/dashboard",
    },
  ]

  const sectors = [
    { code: "S I", name: "Operator", color: "text-lazarus-red" },
    { code: "S II", name: "Zugriff", color: "text-yellow-500" },
    { code: "S III", name: "Integratio", color: "text-green-500" },
    { code: "S IV", name: "Analyst", color: "text-blue-500" },
    { code: "S V", name: "Psychologe", color: "text-purple-500" },
    { code: "S VI", name: "Content", color: "text-pink-500" },
    { code: "S VII", name: "Zona Externa", color: "text-orange-500" },
    { code: "S VIII", name: "Aurum", color: "text-amber-500" },
    { code: "S X", name: "Techneum", color: "text-cyan-500" },
  ]

  return (
    <div className="min-h-screen bg-lazarus-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 scanline opacity-10" />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-lazarus-red/30 bg-lazarus-red/10 text-lazarus-red text-xs font-mono uppercase tracking-widest">
              <span className="w-2 h-2 bg-lazarus-red rounded-full animate-pulse-red" />
              System Operational
            </div>
            
            <h1 className="font-tactical text-6xl md:text-8xl font-bold tracking-tighter uppercase">
              <span className="text-white">LAZARUS</span>
              <br />
              <span className="text-lazarus-red">COMMAND CENTER</span>
            </h1>
            
            <p className="text-lazarus-gray text-lg md:text-xl max-w-2xl mx-auto font-mono">
              Tactical Notion Command Center. Full CRUD Control. Black-Ops Interface.
            </p>
            
            <div className="flex items-center justify-center gap-4 pt-4">
              <Link href="/dashboard">
                <Button size="lg" className="ops-button">
                  ▮ Enter Command Center
                </Button>
              </Link>
              <Link href="https://github.com/eliasminkin-cpu/lazarus-command-center">
                <Button size="lg" variant="outline">
                  View Source
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="tactical-header text-center mb-12 text-2xl">
          Operative Capabilities
        </h2>
        <div className="ops-grid">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Link key={i} href={feature.link}>
                <Card className="ops-card h-full group cursor-pointer">
                  <CardHeader>
                    <Icon className="w-10 h-10 text-lazarus-red mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lazarus-gray-light">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Sektoren System */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="tactical-header text-center mb-12 text-2xl">
          Sektor Classification
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sectors.map((sector) => (
            <div
              key={sector.code}
              className="bg-lazarus-black-light border border-lazarus-red/20 p-4 hover:border-lazarus-red/40 transition-all"
            >
              <div className={`font-tactical text-2xl font-bold ${sector.color}`}>
                {sector.code}
              </div>
              <div className="text-lazarus-gray text-xs font-mono uppercase mt-2">
                {sector.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-8 bg-lazarus-black-light border border-lazarus-red/20">
            <div className="font-tactical text-5xl text-lazarus-red font-bold">100%</div>
            <div className="tactical-header mt-2">Notion Integration</div>
          </div>
          <div className="text-center p-8 bg-lazarus-black-light border border-lazarus-red/20">
            <div className="font-tactical text-5xl text-lazarus-red font-bold">CRUD</div>
            <div className="tactical-header mt-2">Full Operations</div>
          </div>
          <div className="text-center p-8 bg-lazarus-black-light border border-lazarus-red/20">
            <div className="font-tactical text-5xl text-lazarus-red font-bold">⚡</div>
            <div className="tactical-header mt-2">Real-Time Sync</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-lazarus-red/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lazarus-gray text-sm font-mono">
            ⚫ LAZARUS SYNDIKAT | Operativ seit 2025
          </p>
          <p className="text-lazarus-gray-dark text-xs font-mono mt-2">
            "Ergebnisse, keine Protokolle."
          </p>
        </div>
      </footer>
    </div>
  )
}