# 🎯 COMPLETE SETUP - Von 0 bis Production

## Phase 1: Lokales Setup (10 Min)

### 1.1 Prerequisites

**Benötigt:**
- Node.js 18+ ([nodejs.org](https://nodejs.org))
- npm oder yarn
- Git
- Code Editor (VS Code empfohlen)
- Notion Account mit Workspace

**Check Installation:**
\`\`\`bash
node -v    # sollte v18.0.0 oder höher sein
npm -v     # sollte 9.0.0 oder höher sein
git --version
\`\`\`

### 1.2 Code Setup

\`\`\`bash
# Clone Repository
git clone https://github.com/eliasminkin-cpu/lazarus-command-center.git
cd lazarus-command-center

# Install Dependencies
npm install

# Copy Environment Template
cp .env.example .env.local
\`\`\`

---

## Phase 2: Notion Setup (15 Min)

### 2.1 Notion Integration erstellen

1. **Öffne:** [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)

2. **Klicke:** "New integration"

3. **Konfiguration:**
   - **Name:** \`Lazarus Command Center\`
   - **Associated workspace:** Wähle dein Workspace
   - **Type:** Internal
   - **Capabilities:**
     - ✅ Read content
     - ✅ Update content
     - ✅ Insert content
     - ❌ Comment (nicht benötigt)
   - **Content Capabilities:**
     - ✅ Read content
     - ✅ Update content
     - ✅ Insert content
     - ❌ No user information (empfohlen)

4. **Submit**

5. **Kopiere den "Internal Integration Token"**
   - Format: \`secret_...\`
   - Speichere ihn sicher (brauchst du gleich)

### 2.2 Notion Datenbanken vorbereiten

Du brauchst **mindestens 1 Datenbank** (TASKS_MASTER). Die anderen sind optional.

#### Option A: Bestehende Datenbanken nutzen

Wenn du schon TASKS_MASTER, KPI_SEKTOREN etc. hast:

**Für jede Datenbank:**

1. Öffne Datenbank in Notion (als Full Page, nicht Inline)
2. Klicke **"..."** (oben rechts, neben "Share")
3. **"Add connections"**
4. Suche **"Lazarus Command Center"**
5. **Klicke drauf** → Grüner Haken erscheint
6. Fertig

**Database ID finden:**

1. Datenbank in Notion öffnen
2. URL ansehen: \`https://www.notion.so/workspace/DATABASE_ID?v=VIEW_ID\`
3. DATABASE_ID ist der Teil zwischen workspace/ und ?v=
4. Beispiel: \`notion.so/workspace/1a2b3c4d5e6f/?v=...\` → ID = \`1a2b3c4d5e6f\`
5. Mit oder ohne Bindestriche kopieren (beides funktioniert)

#### Option B: Neue Datenbanken erstellen

**TASKS_MASTER:**

1. Neue Database in Notion erstellen
2. Benenne sie: \`TASKS_MASTER\`
3. Füge folgende Properties hinzu:

| Property | Type | Options |
|----------|------|---------|
| Name | Title | (automatisch) |
| PoP | Select | NOW, BUILD, SCALE |
| Priorität | Select | P1, P2, P3 |
| Status | Select | Offen, In Progress, Done |
| Deadline | Date | - |
| Owner | Person | - |
| Sektor | Select | S I, S II, S III, S IV, S V, S VI, S VII, S VIII, S X |
| Beschreibung | Text | - |

4. **Share mit Integration** (siehe Option A)
5. **Kopiere Database ID**

**KPI_SEKTOREN:** (optional)

| Property | Type | Options |
|----------|------|---------|
| Name | Title | - |
| Wert | Number | Format: Number |
| Ziel | Number | Format: Number |
| Sektor | Select | S I, S II, ... |

**BALANCE_LEDGER:** (optional)

| Property | Type | Options |
|----------|------|---------|
| Aktion | Title | - |
| Cost | Number | - |
| Healing | Number | - |
| Datum | Date | - |
| Status | Select | pending, balanced, overdue |

### 2.3 Environment Variables Eintragen

Öffne \`.env.local\` in deinem Code Editor:

\`\`\`env
# Notion Integration Token (von Schritt 2.1)
NOTION_API_KEY=secret_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p

# Database IDs (von Schritt 2.2)
NOTION_TASKS_DB_ID=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
NOTION_KPI_DB_ID=2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q
NOTION_BALANCE_DB_ID=3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r
NOTION_SYNERGY_DB_ID=4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s
\`\`\`

**Wenn du nur TASKS nutzt:**
- Lass andere DB_IDs leer oder kommentiere aus mit \`#\`

---

## Phase 3: Erste Tests (5 Min)

### 3.1 Development Server starten

\`\`\`bash
npm run dev
\`\`\`

**Erwartete Ausgabe:**
\`\`\`
  ▲ Next.js 14.1.0
  - Local:        http://localhost:3000
  - ready in 2.3s
\`\`\`

### 3.2 Landingpage prüfen

1. Öffne: [http://localhost:3000](http://localhost:3000)
2. Solltest sehen:
   - "LAZARUS COMMAND CENTER" Headline
   - Features Grid (4 Cards)
   - Sektoren Grid (9 Sektoren)
   - Stats (3 Kacheln)
3. **"Enter Command Center"** Button sollte da sein

### 3.3 Dashboard prüfen

1. Klicke **"Enter Command Center"** oder gehe zu [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
2. Solltest sehen:
   - Header mit "Command Center"
   - Stats: Total Tasks, NOW Tasks, etc.
   - KPI Overview (wenn DB konfiguriert)
   - Task List (leer wenn keine Tasks)
   - **"New Task"** Button

### 3.4 Task erstellen (Test)

1. Klicke **"New Task"**
2. Dialog öffnet sich
3. Fülle aus:
   - **Title:** "Test Task - System Check"
   - **PoP:** NOW
   - **Priority:** P1
   - **Status:** Offen
   - Rest optional
4. **"Create Task"**
5. Task sollte:
   - In Command Center erscheinen
   - In Notion TASKS_MASTER sichtbar sein (reload Notion)

**Wenn Task NICHT erscheint:**
- Console Logs prüfen (F12 → Console Tab)
- Siehe Troubleshooting unten

---

## Phase 4: Production Deploy (10 Min)

### Option A: Vercel (Empfohlen)

1. **Gehe zu:** [https://vercel.com/new](https://vercel.com/new)

2. **Import Git Repository:**
   - Connect GitHub Account (wenn noch nicht)
   - Wähle \`lazarus-command-center\`
   - Klicke **Import**

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** \`./\`
   - **Build Command:** \`npm run build\` (default ok)

4. **Environment Variables hinzufügen:**

   Klicke "Environment Variables" ausklappen:

   | Name | Value |
   |------|-------|
   | \`NOTION_API_KEY\` | \`secret_...\` (dein Token) |
   | \`NOTION_TASKS_DB_ID\` | \`abc123...\` |
   | \`NOTION_KPI_DB_ID\` | \`def456...\` |
   | \`NOTION_BALANCE_DB_ID\` | \`ghi789...\` |
   | \`NOTION_SYNERGY_DB_ID\` | \`jkl012...\` |

   **Alle Environments auswählen:** Production, Preview, Development

5. **Deploy** klicken

6. Warten (1-2 Min) → **Visit** klicken

7. **Production URL:** \`https://dein-project.vercel.app\`

### Option B: Netlify

\`\`\`bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
\`\`\`

Folge Prompts → Environment Variables wie oben eingeben.

### Option C: Docker / Self-Hosted

\`\`\`bash
# Build Image
docker build -t lazarus-command-center .

# Run Container
docker run -d \
  -p 3000:3000 \
  --env-file .env.local \
  --name lazarus-cc \
  lazarus-command-center
\`\`\`

**Zugriff:** [http://localhost:3000](http://localhost:3000)

---

## Troubleshooting

### ❌ "NOTION_API_KEY not configured"

**Problem:** Environment Variables nicht geladen

**Lösung:**
1. Prüfe: Datei heißt \`.env.local\` (NICHT \`.env.txt\` oder \`.env\`)
2. Prüfe: File im Root-Verzeichnis (neben \`package.json\`)
3. Prüfe: \`NOTION_API_KEY=\` hat keinen Space zwischen \`=\` und Wert
4. Dev-Server neu starten: Ctrl+C → \`npm run dev\`

### ❌ "Failed to fetch tasks"

**Problem:** Notion API Error

**Mögliche Ursachen:**

**A) Datenbank nicht geteilt**
- Lösung: Siehe Phase 2.2 → Für JEDE DB "Add connections"

**B) Falsche Database ID**
- Prüfe URL: \`notion.so/workspace/[32_ZEICHEN]?v=...\`
- ID muss genau 32 Zeichen haben
- Bindestriche sind optional

**C) Integration hat keine Permissions**
- Gehe zu [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
- Klicke deine Integration
- Prüfe Capabilities: Read, Update, Insert ✓

**D) Property-Namen falsch**
- DB muss Properties EXAKT wie dokumentiert haben
- Groß-/Kleinschreibung wichtig
- "Priorität" NICHT "Prioritat" oder "Priority"

### ❌ Styling fehlt / sieht komisch aus

**Lösung:**
\`\`\`bash
# Cache löschen
rm -rf .next
rm -rf node_modules

# Neu installieren
npm install

# Dev-Server starten
npm run dev
\`\`\`

### ❌ Vercel Build Fails

**Common Errors:**

**"Module not found"**
→ \`package.json\` korrekt?
→ \`npm install\` lokal durchlaufen lassen → dann commit & push

**"Environment variable missing"**
→ Vercel Dashboard → Project Settings → Environment Variables → alle eingetragen?

**"Build timeout"**
→ Vercel Free Tier: 45s limit
→ Upgrade oder Build lokal optimieren

---

## Verification Checklist

Nach kompletten Setup:

- [ ] Landingpage lädt (http://localhost:3000)
- [ ] Dashboard zeigt Stats
- [ ] "New Task" erstellt Task in Notion
- [ ] Task ist in beiden Systemen sichtbar
- [ ] KPIs werden geladen (wenn DB konfiguriert)
- [ ] Balance Entries werden geladen (wenn DB konfiguriert)
- [ ] Edit-Button funktioniert
- [ ] Delete-Button archiviert in Notion
- [ ] Filter (NOW/BUILD/SCALE) funktioniert
- [ ] Responsive Design auf Mobile ok
- [ ] Production Deploy erfolgreich
- [ ] Production URL erreichbar

---

## Next Steps

### A) Content hinzufügen

1. Erstelle 5-10 Test-Tasks in verschiedenen PoP/Priority
2. Erstelle 3-5 KPIs mit Wert/Ziel
3. Erstelle 2-3 Balance Entries

### B) Customize

**Design:**
- \`app/globals.css\` → Farben anpassen
- \`tailwind.config.ts\` → Theme erweitern
- \`components/ui/\` → Components stylen

**Funktionalität:**
- \`app/api/\` → Neue Endpoints
- \`app/dashboard/\` → Dashboard erweitern
- Neue Pages hinzufügen

### C) Team Onboarding

1. **Deployment-URL teilen**
2. **Quick Demo:**
   - Dashboard Overview
   - Task erstellen
   - Filter nutzen
3. **Notion-Link** parallel offen halten → zeigen dass Sync funktioniert

### D) Automation Setup

**Planned Integrations:**

**Slack Webhook:**
\`\`\`javascript
// In app/api/tasks/route.ts (POST)
// Nach Task-Erstellung:
await fetch(SLACK_WEBHOOK_URL, {
  method: 'POST',
  body: JSON.stringify({
    text: \`🎯 Neue Task: \${title} | \${pop} | \${priority}\`
  })
})
\`\`\`

**GitHub Issues Sync:**
\`\`\`javascript
// Task.description enthält: "GH:#123"
// → Auto-Link zu GitHub Issue
\`\`\`

**Calendar Integration:**
\`\`\`javascript
// Task mit Deadline
// → Optional: Google Calendar Event erstellen
\`\`\`

---

## Backup & Recovery

### Notion als Single Source of Truth

- Command Center ist **View-Layer**
- Notion ist **Data Layer**
- Bei Command-Center-Problemen: Daten sind sicher in Notion

### Code Backup

\`\`\`bash
# Regelmäßig pushen
git add .
git commit -m "Updates"
git push origin main
\`\`\`

### Database Backup

**Manuell:**
- Notion → Settings → Export workspace

**Automatisch:**
- Notion API + Cron Job
- Weekly Export als JSON

---

## Maintenance

### Updates einspielen

\`\`\`bash
# Hole neueste Änderungen
git pull origin main

# Dependencies updaten
npm install

# Restart
npm run dev
\`\`\`

### Monitoring

**Local:**
- Console Logs
- Network Tab (F12)

**Production (Vercel):**
- Dashboard → Functions → Logs
- Analytics → Traffic
- Speed Insights

---

## Advanced Configuration

### Custom Domain (Vercel)

1. Vercel Dashboard → Project → Settings → Domains
2. Add Domain: \`command.lazarus-syndikat.de\`
3. DNS Records bei deinem Provider setzen
4. Verify → SSL auto-provisioned

### Performance Tuning

**In \`next.config.js\`:**

\`\`\`javascript
module.exports = {
  // Existing config
  output: 'standalone', // Für Docker
  experimental: {
    staleTimes: {
      dynamic: 30, // 30s API Cache
    },
  },
  compress: true, // Gzip
}
\`\`\`

### Security Headers

\`\`\`javascript
// next.config.js
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
      ],
    },
  ]
}
\`\`\`

---

## Cost Estimation

### Free Tier (Ausreichend für Start)

**Vercel:**
- Unlimited deployments
- 100 GB bandwidth/month
- Serverless Functions included

**Notion:**
- Free Personal Plan: ausreichend
- API: unlimitiert (Rate-Limited)

### Paid (Bei Skalierung)

**Vercel Pro ($20/month):**
- Bessere Performance
- Analytics
- Team Features

**Notion Plus ($8/month):**
- Unlimited blocks
- Better performance
- Version history

**Total:** ~$30/month für production-ready setup

---

## FAQ

**Q: Kann ich mehrere Workspaces nutzen?**
A: Ja, erstelle mehrere Integrations und nutze verschiedene .env Files.

**Q: Mobile App?**
A: PWA-Support geplant. Aktuell: responsive web interface.

**Q: Offline-Modus?**
A: Nicht supported. Notion API braucht Internet.

**Q: Daten-Privacy?**
A: Alle Daten bleiben in deinem Notion Workspace. Command Center ist nur View-Layer.

**Q: Multi-User?**
A: Aktuell: alle Nutzer sehen gleiche Daten. Auth-System geplant.

**Q: Wie schnell ist Sync?**
A: Notion → Command Center: bei Reload. Command Center → Notion: instant (< 1s).

---

## Support

**Dokumentation:**
- [README.md](./README.md) - Übersicht
- [QUICKSTART.md](./QUICKSTART.md) - 5-Min Setup
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment Details
- [USAGE.md](./USAGE.md) - Feature Guide
- [FEATURES.md](./FEATURES.md) - Feature List

**Issues:** [GitHub Issues](https://github.com/eliasminkin-cpu/lazarus-command-center/issues)

---

**⚫ Setup Complete. Time to Operate.**