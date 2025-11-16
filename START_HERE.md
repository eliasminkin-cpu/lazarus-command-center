# ⚫ START HERE - Lazarus Command Center

## Was ist das?

Ein **vollwertiges Custom Frontend** für dein Notion Workspace mit:
- ✅ **Black-Ops Design** (Schwarz/Rot, militärisch-taktisch)
- ✅ **Full CRUD** (Create, Read, Update, Delete)
- ✅ **Echtzeit-Sync** mit Notion
- ✅ **PoP-System** (NOW/BUILD/SCALE)
- ✅ **KPI-Tracking**
- ✅ **Balance Ledger** (ethische Bilanzierung)
- ✅ **Production-Ready** (deploybar auf Vercel/Netlify/Docker)

---

## Quick Navigation

### 🎯 Ich will sofort starten
→ **[QUICKSTART.md](./QUICKSTART.md)** (5 Minuten bis läuft)

### 📖 Ich will alles verstehen
→ **[COMPLETE_SETUP.md](./COMPLETE_SETUP.md)** (0 bis Production)

### 🚀 Ich will deployen
→ **[DEPLOYMENT.md](./DEPLOYMENT.md)** (Vercel/Netlify/Docker)

### 📚 Ich will Features nutzen
→ **[USAGE.md](./USAGE.md)** (How-To für alle Features)

### 🔧 Ich will erweitern
→ **[CONTRIBUTING.md](./CONTRIBUTING.md)** (Code Guidelines)

### 🏗️ Ich will Architektur verstehen
→ **[ARCHITECTURE.md](./ARCHITECTURE.md)** (Technical Deep-Dive)

### ⚡ Ich will schnelle Infos
→ **[CHEATSHEET.md](./CHEATSHEET.md)** (Commands & APIs)

### 🗺️ Ich will sehen was kommt
→ **[ROADMAP.md](./ROADMAP.md)** (Feature Pipeline)

---

## Fastest Path to Running

\`\`\`bash
# 1. Clone
git clone https://github.com/eliasminkin-cpu/lazarus-command-center.git
cd lazarus-command-center

# 2. Install
npm install

# 3. Config
cp .env.example .env.local
# → Fülle .env.local mit deinen Notion Credentials

# 4. Run
npm run dev
\`\`\`

**Dann:** [http://localhost:3000](http://localhost:3000)

**Details:** Siehe [QUICKSTART.md](./QUICKSTART.md)

---

## Was du brauchst

**Voraussetzungen:**
- Node.js 18+ ([Download](https://nodejs.org))
- Notion Account mit Workspace
- 10 Minuten Zeit

**Notion Setup:**
1. Notion Integration erstellen ([my-integrations](https://www.notion.so/my-integrations))
2. Datenbanken mit Integration teilen
3. Database IDs kopieren
4. In \`.env.local\` eintragen

**Details:** Siehe [COMPLETE_SETUP.md](./COMPLETE_SETUP.md) → Phase 2

---

## Notion Datenbanken

**Minimal (nur 1 DB nötig):**
- **TASKS_MASTER** - Task Management

**Optional (für Full Features):**
- **KPI_SEKTOREN** - KPI Tracking
- **BALANCE_LEDGER** - Ethische Bilanzierung
- **SYNERGY_MATRIX** - Team-Synergien (future)

**Property-Schemas:** Siehe [COMPLETE_SETUP.md](./COMPLETE_SETUP.md) → Phase 2.2

---

## Repository Struktur

\`\`\`
lazarus-command-center/
├─ app/              # Next.js Pages & API Routes
├─ components/       # React Components
├─ lib/              # Utilities & Notion Client
├─ public/           # Static Assets
├─ *.md              # Documentation
└─ config files      # TS, Tailwind, etc.
\`\`\`

**Details:** Siehe [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## Features im Überblick

### ✅ Task Management
- Create, Edit, Delete Tasks
- PoP-Filter (NOW/BUILD/SCALE)
- Priority-System (P1/P2/P3)
- Sektor-Assignment
- Deadline Tracking

### ✅ KPI Dashboard
- Value vs. Target
- Progress Visualization
- Trend Indicators
- Sektor-Grouping

### ✅ Balance Ledger
- Cost/Healing Tracking
- Auto-Balance-Calculation
- Status Management
- Debt Alerts

**Vollständige Liste:** Siehe [FEATURES.md](./FEATURES.md)

---

## Deployment Optionen

### 1. Vercel (Empfohlen)
- **Schwierigkeit:** ⭐☆☆☆☆
- **Zeit:** 5 Min
- **Kosten:** Free Tier ausreichend
- **Link:** [Deploy Button](https://vercel.com/new/clone?repository-url=https://github.com/eliasminkin-cpu/lazarus-command-center)

### 2. Netlify
- **Schwierigkeit:** ⭐⭐☆☆☆
- **Zeit:** 10 Min
- **Kosten:** Free Tier ok
- **Guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)

### 3. Docker
- **Schwierigkeit:** ⭐⭐⭐☆☆
- **Zeit:** 15 Min
- **Kosten:** Server-Kosten
- **Guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## Support

### Dokumentation

**Alle Docs im Repo:**
- README.md - Haupt-Overview
- START_HERE.md - Dieser Guide
- QUICKSTART.md - 5-Min Setup
- COMPLETE_SETUP.md - Full Setup
- DEPLOYMENT.md - Deploy Details
- USAGE.md - Feature Guide
- FEATURES.md - Feature List
- ARCHITECTURE.md - Tech Docs
- CHEATSHEET.md - Quick Reference
- ROADMAP.md - Future Plans
- CONTRIBUTING.md - Dev Guide

### Issues & Bugs

**GitHub Issues:** [Neues Issue erstellen](https://github.com/eliasminkin-cpu/lazarus-command-center/issues/new)

**Template:**
\`\`\`markdown
**Problem:** Kurze Beschreibung

**Steps to Reproduce:**
1. ...
2. ...

**Expected:** Was sollte passieren
**Actual:** Was passiert wirklich

**Environment:**
- OS: macOS / Windows / Linux
- Node: v20.0.0
- Browser: Chrome 120

**Screenshots:** (falls UI-Problem)
\`\`\`

---

## Next Steps

**Nach Setup:**

1. **Test durchlaufen:**
   - [ ] Task erstellen
   - [ ] Task bearbeiten
   - [ ] Task löschen
   - [ ] Filter nutzen
   - [ ] In Notion prüfen (Sync ok?)

2. **Customize:**
   - Farben anpassen (\`globals.css\`)
   - Logo ändern
   - Texte übersetzen/anpassen

3. **Deploy:**
   - Vercel One-Click
   - Production URL teilen
   - Team onboarden

4. **Erweitern:**
   - Neue Features aus [ROADMAP.md](./ROADMAP.md)
   - Eigene Ideen umsetzen
   - PRs erstellen

---

## Community

**Discord:** (coming soon)
**GitHub Discussions:** [Aktivieren?](https://github.com/eliasminkin-cpu/lazarus-command-center/discussions)
**Twitter/X:** Tag @lazarus_ops (if sharing)

---

## Credits

**Built for:** Lazarus Syndikat
**Operator:** Venator Daemonum
**Agent:** RUNBEAR
**Tech:** Next.js, Notion API, TypeScript, Tailwind

**Inspiration:**
- Military Command Centers
- Tactical Operations Software
- Cyberpunk Aesthetics
- Notion Powerusers

---

## License

MIT License - Siehe [LICENSE](./LICENSE)

**TL;DR:** Nutze, modifiziere, teile es frei. Keine Garantien, aber volle Freiheit.

---

## Final Words

**Du hast jetzt:**
- ✅ Vollwertiges Notion Frontend
- ✅ Production-Ready Code
- ✅ Complete Documentation
- ✅ Deploy-fähiges System
- ✅ Erweiterbare Architecture

**Was du machen kannst:**
1. **Nutzen** (wie es ist)
2. **Anpassen** (Design/Features)
3. **Erweitern** (neue Funktionen)
4. **Teilen** (mit Team/Community)
5. **Deployen** (für echte Nutzung)

**Nächster Schritt:**
→ [QUICKSTART.md](./QUICKSTART.md) öffnen und loslegen

---

**⚫ LAZARUS SYNDIKAT**

*"Das System ist operational. Zeit für Taten."*

**▮**