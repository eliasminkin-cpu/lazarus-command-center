# 🤝 CONTRIBUTING - Code Guidelines

## Code Style

### TypeScript

**Strict Mode:** Enabled
\`\`\`typescript
// Good
const task: NotionTask = { ... }

// Bad
const task: any = { ... }
\`\`\`

**Naming Conventions:**
- **Components:** PascalCase (\`TaskCard.tsx\`)
- **Functions:** camelCase (\`formatDate\`)
- **Constants:** UPPER_SNAKE_CASE (\`DB_IDS\`)
- **Types:** PascalCase (\`NotionTask\`)

### React

**Functional Components:**
\`\`\`typescript
// Good
export function TaskCard({ task }: TaskCardProps) {
  return <Card>...</Card>
}

// Avoid
export const TaskCard = ({ task }: TaskCardProps) => {
  return <Card>...</Card>
}
\`\`\`

**Hooks Order:**
1. useState
2. useEffect
3. Custom hooks
4. Event handlers
5. Render logic

---

## Adding New Features

### 1. New API Endpoint

**Example: Add Comments API**

\`\`\`typescript
// app/api/comments/route.ts
import { NextResponse } from "next/server"
import { notion } from "@/lib/notion"

export async function GET() {
  // Implementation
}

export async function POST(request: Request) {
  const body = await request.json()
  // Implementation
}
\`\`\`

### 2. New Component

**Example: CommentCard**

\`\`\`typescript
// components/comments/comment-card.tsx
"use client"

import { Card } from "@/components/ui/card"

interface CommentCardProps {
  comment: Comment
}

export function CommentCard({ comment }: CommentCardProps) {
  return (
    <Card className="ops-card">
      {/* Implementation */}
    </Card>
  )
}
\`\`\`

### 3. New Page

**Example: Comments Page**

\`\`\`typescript
// app/comments/page.tsx
"use client"

import { useState, useEffect } from "react"

export default function CommentsPage() {
  const [comments, setComments] = useState([])
  
  useEffect(() => {
    fetch("/api/comments")
      .then(res => res.json())
      .then(setComments)
  }, [])
  
  return <div>{/* Render */}</div>
}
\`\`\`

---

## Notion Integration

### Adding New Database

1. **Define Type:**

\`\`\`typescript
// lib/notion.ts
export type NotionComment = {
  id: string
  text: string
  author: string
  created_time: string
}
\`\`\`

2. **Add DB ID to env:**

\`\`\`env
# .env.example
NOTION_COMMENTS_DB_ID=your_db_id
\`\`\`

3. **Create API Route:**

\`\`\`typescript
// app/api/comments/route.ts
export async function GET() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_COMMENTS_DB_ID,
  })
  
  const comments = response.results.map(page => ({
    id: page.id,
    text: extractRichText(page.properties.Text),
    author: extractPeople(page.properties.Author),
    created_time: page.created_time,
  }))
  
  return NextResponse.json(comments)
}
\`\`\`

### Property Extractors

\`\`\`typescript
// lib/notion.ts

// Title
extractTitle(properties)

// Rich Text
extractRichText(property)

// Select
extractSelect(property)

// Date
extractDate(property)

// Number
extractNumber(property)

// People
extractPeople(property)

// Checkbox
function extractCheckbox(property: any): boolean {
  return property?.checkbox || false
}

// Multi-Select
function extractMultiSelect(property: any): string[] {
  if (!property?.multi_select) return []
  return property.multi_select.map((opt: any) => opt.name)
}
\`\`\`

---

## Styling Guidelines

### Tailwind Classes

**Prefer Tailwind over custom CSS:**

\`\`\`typescript
// Good
<div className="bg-lazarus-black border border-lazarus-red/20 p-4">

// Avoid
<div style={{ background: '#0A0A0A', border: '1px solid...' }}>
\`\`\`

### Component Variants

Use \`class-variance-authority\`:

\`\`\`typescript
const cardVariants = cva(
  "ops-card", // base
  {
    variants: {
      variant: {
        default: "border-lazarus-red/20",
        highlighted: "border-lazarus-red",
      },
      size: {
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
      },
    },
  }
)
\`\`\`

### Custom Classes

Only for repeated patterns:

\`\`\`css
/* app/globals.css */
@layer components {
  .ops-special-card {
    @apply bg-lazarus-black-light border border-lazarus-red/20 hover:border-lazarus-red/40;
  }
}
\`\`\`

---

## Testing

### Unit Tests (Future)

\`\`\`typescript
// __tests__/utils.test.ts
import { formatDate } from "@/lib/utils"

describe("formatDate", () => {
  it("formats ISO date correctly", () => {
    expect(formatDate("2025-11-16")).toBe("16.11.2025")
  })
})
\`\`\`

### Component Tests (Future)

\`\`\`typescript
// __tests__/TaskCard.test.tsx
import { render, screen } from "@testing-library/react"
import { TaskCard } from "@/components/tasks/task-card"

test("renders task title", () => {
  const task = { id: "1", title: "Test", ... }
  render(<TaskCard task={task} />)
  expect(screen.getByText("Test")).toBeInTheDocument()
})
\`\`\`

---

## Performance Best Practices

### API Routes

**Caching:**
\`\`\`typescript
export const revalidate = 30 // 30s cache
\`\`\`

**Limit Results:**
\`\`\`typescript
const response = await notion.databases.query({
  database_id: DB_ID,
  page_size: 50, // Limit results
})
\`\`\`

### Components

**Memoization:**
\`\`\`typescript
import { memo } from "react"

export const TaskCard = memo(function TaskCard({ task }) {
  // Only re-renders when task changes
})
\`\`\`

**Lazy Loading:**
\`\`\`typescript
const HeavyComponent = lazy(() => import("./HeavyComponent"))
\`\`\`

---

## Pull Request Process

1. **Fork Repository**
2. **Create Branch:**
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`

3. **Make Changes**
   - Follow code style
   - Add comments for complex logic
   - Update docs if needed

4. **Test Locally:**
   \`\`\`bash
   npm run dev
   npm run build  # Ensure no build errors
   \`\`\`

5. **Commit:**
   \`\`\`bash
   git add .
   git commit -m "⚡ Add amazing feature"
   \`\`\`

6. **Push:**
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`

7. **Create PR on GitHub:**
   - Clear title
   - Description: What & Why
   - Screenshots (if UI change)

---

## Code Review Checklist

**Before Submitting PR:**

- [ ] Code follows style guide
- [ ] No console.logs in production code
- [ ] Types defined (no \`any\`)
- [ ] Error handling implemented
- [ ] Works locally (\`npm run dev\`)
- [ ] Builds successfully (\`npm run build\`)
- [ ] Docs updated (if needed)
- [ ] No secrets in code
- [ ] Responsive design (if UI)

---

## Release Process

**Versioning:** Semantic (v1.0.0)

1. **Update version in package.json**
2. **Create changelog:**
   \`\`\`markdown
   ## v1.1.0 - 2025-11-20
   
   ### Added
   - Task Edit Dialog
   - KPI Trends
   
   ### Fixed
   - Mobile navigation
   
   ### Changed
   - Improved error messages
   \`\`\`

3. **Tag release:**
   \`\`\`bash
   git tag -a v1.1.0 -m "Release v1.1.0"
   git push origin v1.1.0
   \`\`\`

4. **GitHub Release:** Create from tag with changelog

---

**⚫ Code with Precision. Deploy with Confidence.**