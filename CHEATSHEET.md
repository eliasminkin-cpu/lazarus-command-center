# ⚡ CHEATSHEET - Quick Reference

## Setup Commands

\`\`\`bash
# Clone & Install
git clone https://github.com/eliasminkin-cpu/lazarus-command-center.git
cd lazarus-command-center
npm install

# Environment
cp .env.example .env.local
# → Edit .env.local with your Notion credentials

# Run
npm run dev              # Development
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Lint code
\`\`\`

---

## Environment Variables

\`\`\`env
NOTION_API_KEY=secret_your_token_here
NOTION_TASKS_DB_ID=database_id_32_chars
NOTION_KPI_DB_ID=database_id_32_chars
NOTION_BALANCE_DB_ID=database_id_32_chars
NOTION_SYNERGY_DB_ID=database_id_32_chars
\`\`\`

**Get Database ID from URL:**
\`notion.so/workspace/[THIS_IS_THE_ID]?v=...\`

---

## API Quick Reference

### Tasks

\`\`\`bash
# Get all tasks
GET /api/tasks

# Get filtered tasks
GET /api/tasks?pop=NOW&priority=P1

# Create task
POST /api/tasks
{
  "title": "Mission",
  "pop": "NOW",
  "priority": "P1",
  "sector": "S I",
  "deadline": "2025-12-01"
}

# Update task
PUT /api/tasks/[id]
{ "status": "Done" }

# Delete task
DELETE /api/tasks/[id]
\`\`\`

### KPIs

\`\`\`bash
# Get KPIs
GET /api/kpis?sector=S IV

# Create KPI
POST /api/kpis
{
  "name": "Conversion Rate",
  "value": 3.2,
  "target": 5.0,
  "sector": "S IV"
}
\`\`\`

### Balance

\`\`\`bash
# Get pending entries
GET /api/balance?status=pending

# Create entry
POST /api/balance
{
  "action": "Operation XYZ",
  "cost": 15,
  "healing": 0,
  "status": "pending"
}
\`\`\`

---

## Notion Property Names

**TASKS_MASTER:**
- Name (Title)
- PoP (Select: NOW, BUILD, SCALE)
- Priorität (Select: P1, P2, P3)
- Status (Select: Offen, In Progress, Done)
- Deadline (Date)
- Owner (Person)
- Sektor (Select: S I - S X)
- Beschreibung (Text)

**KPI_SEKTOREN:**
- Name (Title)
- Wert (Number)
- Ziel (Number)
- Sektor (Select)

**BALANCE_LEDGER:**
- Aktion (Title)
- Cost (Number)
- Healing (Number)
- Datum (Date)
- Status (Select: pending, balanced, overdue)

---

## CSS Classes

\`\`\`css
/* Cards */
.ops-card              /* Tactical card with border */
.ops-grid              /* Responsive grid layout */

/* Buttons */
.ops-button            /* Primary red button */
.ops-button-secondary  /* Outline button */

/* Text */
.tactical-header       /* Section headers */

/* Badges */
.ops-badge             /* Status badge */
.sector-badge          /* Sektor badge */
.pop-now               /* NOW badge (red) */
.pop-build             /* BUILD badge (yellow) */
.pop-scale             /* SCALE badge (blue) */
.priority-p1           /* P1 badge (red) */
.priority-p2           /* P2 badge (yellow) */
.priority-p3           /* P3 badge (gray) */

/* Inputs */
.ops-input             /* Form input field */

/* Indicators */
.status-indicator      /* Pulsing status dot */
\`\`\`

---

## Colors

\`\`\`css
lazarus-black:         #0A0A0A
lazarus-black-light:   #1A1A1A
lazarus-black-lighter: #2A2A2A
lazarus-red:           #DC2626
lazarus-red-dark:      #991B1B
lazarus-red-light:     #EF4444
lazarus-gray:          #6B7280
lazarus-gray-dark:     #374151
lazarus-gray-light:    #9CA3AF
\`\`\`

---

## Sektor Icons

\`\`\`
S I   → ⚡  Operator
S II  → 🔓  Zugriff
S III → 🩺  Integratio
S IV  → 📊  Analyst
S V   → 🧠  Psychologe
S VI  → 📝  Content
S VII → 🌐  Zona Externa
S VIII → 🛡️  Aurum
S X   → ⚙️  Techneum
\`\`\`

---

## Git Workflow

\`\`\`bash
# Check status
git status

# Make changes
git add .
git commit -m "🎯 Your message"

# Push
git push origin main

# Pull latest
git pull origin main

# Create feature branch
git checkout -b feature/new-feature
# ... work ...
git push origin feature/new-feature
# → Create Pull Request on GitHub
\`\`\`

**Commit Prefixes:**
- 🎯 Init/Setup
- 🎨 Styling
- ⚙️ Config
- 🧩 Component
- 🔌 API
- 📝 Docs
- 🐛 Fix
- ⚡ Performance

---

## Deployment

### Vercel

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
\`\`\`

**One-Click:**
[Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/eliasminkin-cpu/lazarus-command-center)

### Docker

\`\`\`bash
# Build
docker build -t lazarus-cc .

# Run
docker run -d -p 3000:3000 --env-file .env.local --name lazarus lazarus-cc

# Stop
docker stop lazarus

# Logs
docker logs -f lazarus

# Remove
docker rm -f lazarus
\`\`\`

---

## Troubleshooting Quick Fixes

\`\`\`bash
# Clear cache
rm -rf .next && npm run dev

# Reinstall
rm -rf node_modules package-lock.json
npm install

# Check env vars
cat .env.local

# Notion integration check
curl https://api.notion.com/v1/users/me \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Notion-Version: 2022-06-28"
\`\`\`

---

## File Locations

\`\`\`
Config:           package.json, tsconfig.json, tailwind.config.ts
Environment:      .env.local
API:              app/api/**/*.ts
Pages:            app/**/page.tsx
Components:       components/**/*.tsx
Styles:           app/globals.css
Utilities:        lib/*.ts
Documentation:    *.md files
\`\`\`

---

## Keyboard Shortcuts (Planned)

\`\`\`
Ctrl/Cmd + K     → Quick Command
N                → New Task
/                → Search
Esc              → Close Dialog
Ctrl/Cmd + S     → Save (in forms)
\`\`\`

---

## URLs

**Local:**
- Landing: http://localhost:3000
- Dashboard: http://localhost:3000/dashboard

**Production:**
- your-project.vercel.app
- custom-domain.com (if configured)

**External:**
- Notion Workspace: notion.so/your-workspace
- Notion Integrations: notion.so/my-integrations
- GitHub Repo: github.com/eliasminkin-cpu/lazarus-command-center

---

## Support Resources

**Docs:**
- [README.md](./README.md) - Overview
- [QUICKSTART.md](./QUICKSTART.md) - 5-Min Setup
- [COMPLETE_SETUP.md](./COMPLETE_SETUP.md) - Full Guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deploy Guide
- [FEATURES.md](./FEATURES.md) - Feature List
- [USAGE.md](./USAGE.md) - How to Use
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical Docs

**External:**
- Notion API: [developers.notion.com](https://developers.notion.com)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Radix UI: [radix-ui.com](https://radix-ui.com)

---

**⚫ Keep this sheet bookmarked. Reference for speed.**