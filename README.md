# ⚫ LAZARUS COMMAND CENTER

**Tactical Notion Command Center für das Lazarus Syndikat**

![Black-Ops Interface](https://img.shields.io/badge/STATUS-OPERATIONAL-DC2626?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJMMiAyMmgyMHoiIGZpbGw9IiNEQzI2MjYiLz48L3N2Zz4=)
![Next.js](https://img.shields.io/badge/Next.js-14.1-000000?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Notion API](https://img.shields.io/badge/Notion-API-000000?style=flat-square&logo=notion)

---

## 🎯 MISSION

Vollwertiges Custom-Frontend für dein Notion-Workspace mit militärisch-taktischer UI. Volle CRUD-Funktionalität für Tasks, KPIs, Balance Ledger und Sektoren-Management.

**Features:**
- ✅ Full CRUD für Notion-Datenbanken
- ✅ Black-Ops Design (Schwarz/Rot)
- ✅ Echtzeit-Synchronisation mit Notion
- ✅ PoP-System (NOW/BUILD/SCALE)
- ✅ Prioritäten-Management (P1/P2/P3)
- ✅ Sektoren-Navigation (S I - S X)
- ✅ KPI-Dashboard
- ✅ Balance Ledger Tracking
- ✅ Responsive & schnell

---

## 🚀 DEPLOYMENT

### 1. Repository Clonen

\`\`\`bash
git clone https://github.com/eliasminkin-cpu/lazarus-command-center.git
cd lazarus-command-center
\`\`\`

### 2. Dependencies Installieren

\`\`\`bash
npm install
# oder
yarn install
# oder
pnpm install
\`\`\`

### 3. Environment Variables Einrichten

Kopiere \`.env.example\` zu \`.env.local\`:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Füge deine Notion API Credentials ein:

\`\`\`env
# Notion Integration Token (https://www.notion.so/my-integrations)
NOTION_API_KEY=secret_your_notion_integration_token_here

# Database IDs (aus Notion URLs extrahieren)
NOTION_TASKS_DB_ID=your_tasks_master_database_id
NOTION_KPI_DB_ID=your_kpi_sektoren_database_id
NOTION_BALANCE_DB_ID=your_balance_ledger_database_id
NOTION_SYNERGY_DB_ID=your_synergy_matrix_database_id
\`\`\`

**Wie bekomme ich die Database IDs?**

1. Öffne deine Notion-Datenbank im Browser
2. Die URL sieht so aus: \`notion.so/workspace/DATABASE_ID?v=...\`
3. Kopiere die \`DATABASE_ID\` (32-stelliger String)

### 4. Notion Integration Setup

1. Gehe zu [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Klicke auf "New Integration"
3. Benenne sie "Lazarus Command Center"
4. Wähle dein Workspace
5. Setze **Capabilities**: Read, Update, Insert Content
6. Kopiere den "Internal Integration Token"
7. **Wichtig**: Teile deine Notion-Datenbanken mit der Integration:
   - Öffne jede Datenbank in Notion
   - Klicke auf "..." (oben rechts)
   - "Add connections" → Wähle "Lazarus Command Center"

### 5. Development Server Starten

\`\`\`bash
npm run dev
\`\`\`

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

---

## 📦 PRODUCTION DEPLOYMENT

### Vercel (Empfohlen)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/eliasminkin-cpu/lazarus-command-center)

1. Klicke auf "Deploy with Vercel"
2. Authentifiziere mit GitHub
3. Füge Environment Variables hinzu:
   - \`NOTION_API_KEY\`
   - \`NOTION_TASKS_DB_ID\`
   - \`NOTION_KPI_DB_ID\`
   - \`NOTION_BALANCE_DB_ID\`
   - \`NOTION_SYNERGY_DB_ID\`
4. Deploy!

### Alternative Deployments

**Netlify:**
\`\`\`bash
npm run build
netlify deploy --prod
\`\`\`

**Docker:**
\`\`\`bash
docker build -t lazarus-command-center .
docker run -p 3000:3000 --env-file .env.local lazarus-command-center
\`\`\`

---

## 🗂️ PROJEKT-STRUKTUR

\`\`\`
lazarus-command-center/
├── app/
│   ├── api/                 # API Routes für Notion Integration
│   │   ├── tasks/          # CRUD für Tasks
│   │   ├── kpis/           # KPI Endpoints
│   │   └── balance/        # Balance Ledger
│   ├── dashboard/          # Haupt-Dashboard
│   ├── tasks/              # Task Management
│   ├── kpis/               # KPI Tracking
│   ├── balance/            # Balance Ledger
│   ├── layout.tsx          # Root Layout
│   └── globals.css         # Lazarus Design System
├── components/
│   ├── ui/                 # Base UI Components
│   ├── tasks/              # Task-spezifische Components
│   ├── kpis/               # KPI-spezifische Components
│   └── layout/             # Layout Components (Nav, Header)
├── lib/
│   ├── notion.ts           # Notion Client & Helpers
│   └── utils.ts            # Utility Functions
├── public/                 # Static Assets
├── .env.example            # Environment Template
├── tailwind.config.ts      # Tailwind + Lazarus Theme
└── package.json
\`\`\`

---

## 🎨 DESIGN SYSTEM

### Lazarus Farbpalette

\`\`\`css
lazarus-black:       #0A0A0A    /* Hintergrund */
lazarus-black-light: #1A1A1A    /* Cards */
lazarus-red:         #DC2626    /* Primary Actions */
lazarus-red-dark:    #991B1B    /* Hover States */
lazarus-gray:        #6B7280    /* Muted Text */
\`\`\`

### Typography

- **Monospace**: JetBrains Mono (Code, Body)
- **Tactical**: Rajdhani (Headers, UI-Elements)

### Custom Classes

\`\`\`css
.ops-card         /* Tactical Card */
.ops-badge        /* Status Badge */
.ops-button       /* Primary Button */
.tactical-header  /* Section Header */
.status-indicator /* Pulsing Status */
\`\`\`

---

## 🔧 NOTION DATABASE SETUP

Deine Notion-Datenbanken müssen folgende Properties haben:

### **TASKS_MASTER**
| Property | Type | Options |
|----------|------|---------|
| Name | Title | - |
| PoP | Select | NOW, BUILD, SCALE |
| Priorität | Select | P1, P2, P3 |
| Status | Select | Offen, In Progress, Done |
| Deadline | Date | - |
| Owner | Person | - |
| Sektor | Select | S I, S II, S III, ... |
| Beschreibung | Rich Text | - |

### **KPI_SEKTOREN**
| Property | Type |
|----------|------|
| Name | Title |
| Wert | Number |
| Ziel | Number |
| Sektor | Select |
| Trend | Select (up, down, stable) |

### **BALANCE_LEDGER**
| Property | Type |
|----------|------|
| Aktion | Title |
| Cost | Number |
| Healing | Number |
| Datum | Date |
| Status | Select (pending, balanced, overdue) |

---

## 🛠️ TECH STACK

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS + Custom Theme
- **API**: Notion SDK
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Date Handling**: date-fns
- **Icons**: Lucide React

---

## 📖 USAGE

### Tasks Erstellen

\`\`\`typescript
// POST /api/tasks
const response = await fetch('/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'New Mission',
    pop: 'NOW',
    priority: 'P1',
    sector: 'S I',
    deadline: '2025-12-01'
  })
})
\`\`\`

### Tasks Filtern

\`\`\`typescript
// GET /api/tasks?pop=NOW&priority=P1
const tasks = await fetch('/api/tasks?pop=NOW&priority=P1')
  .then(res => res.json())
\`\`\`

---

## 🔒 SECURITY

- Environment Variables niemals committen
- \`.env.local\` ist in \`.gitignore\`
- Notion Integration Token ist secret
- API Routes validieren Input
- Production: HTTPS verwenden

---

## 🐛 TROUBLESHOOTING

**"NOTION_API_KEY not configured"**
→ Prüfe \`.env.local\`, stelle sicher dass File existiert

**"Failed to fetch tasks"**
→ Notion Integration muss mit DBs geteilt sein
→ Database IDs korrekt?
→ Integration hat Read/Write Permissions?

**"409 Conflict" beim Deployment**
→ GitHub Branch ist nicht synced
→ Lösung: Pull latest changes

**Styling fehlt**
→ \`npm install\` ausführen
→ Tailwind-Plugin fehlt?
→ Cache leeren: \`rm -rf .next && npm run dev\`

---

## 🤝 CONTRIBUTING

Dieses Projekt ist für das Lazarus Syndikat gebaut. Für Änderungen:

1. Fork das Repository
2. Erstelle Feature Branch (\`git checkout -b feature/amazing-feature\`)
3. Commit Changes (\`git commit -m '⚡ Add feature'\`)
4. Push to Branch (\`git push origin feature/amazing-feature\`)
5. Öffne Pull Request

**Commit Prefixes:**
- \`🎯\` Init/Setup
- \`🎨\` Styling
- \`⚙️\` Config
- \`🧩\` Components
- \`🔌\` API
- \`📝\` Documentation
- \`🐛\` Bugfix
- \`⚡\` Performance

---

## 📜 LICENSE

Proprietär - Lazarus Syndikat

---

## 🎖️ OPERATIVE NOTES

**Sektor-Codierung:**
- S I - Operator (Taktisch, Zugriff)
- S II - Zugriff (Verdeckt)
- S III - Integratio (Heilung, Ethik)
- S IV - Analyst (Daten, KPI)
- S V - Psychologe (Motivation)
- S VI - Content (Kommunikation)
- S VII - Zona Externa (Stress-Test)
- S VIII - Aurum (Schutz)
- S X - Techneum (Systeme, KI)

**PoP-System:**
- NOW - Sofort-Aktionen (< 48h)
- BUILD - Mittelfristig (1-4 Wochen)
- SCALE - Langfristig (> 1 Monat)

**ROE Levels:**
- 0: Präsenz (beobachten)
- 1: Dialog (kommunizieren)
- 2: Kontrolle (eingreifen)
- 3: Schutz (abwehren)
- 4: Abbruch (stoppen)

---

## 🚨 SUPPORT

Bei Problemen oder Fragen:

1. Check [Issues](https://github.com/eliasminkin-cpu/lazarus-command-center/issues)
2. Öffne neues Issue mit:
   - Detaillierte Beschreibung
   - Error Messages (falls vorhanden)
   - Environment Info (OS, Node-Version)
   - Screenshots (falls UI-Problem)

---

**⚫ LAZARUS SYNDIKAT | Operativ seit 2025 | Notion Command & Control**

*"Ergebnisse, keine Protokolle."*