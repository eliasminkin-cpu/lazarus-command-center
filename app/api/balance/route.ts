import { NextResponse } from "next/server"
import { notion, DB_IDS, extractTitle, extractNumber, extractDate, extractSelect, type NotionBalanceEntry } from "@/lib/notion"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")

    if (!DB_IDS.BALANCE) {
      return NextResponse.json(
        { error: "NOTION_BALANCE_DB_ID not configured" },
        { status: 500 }
      )
    }

    const filter: any = status
      ? {
          property: "Status",
          select: { equals: status },
        }
      : undefined

    const response = await notion.databases.query({
      database_id: DB_IDS.BALANCE,
      filter,
      sorts: [
        { property: "Datum", direction: "descending" },
      ],
    })

    const entries: NotionBalanceEntry[] = response.results.map((page: any) => ({
      id: page.id,
      action: extractTitle(page.properties),
      cost: extractNumber(page.properties.Cost),
      healing: extractNumber(page.properties.Healing),
      date: extractDate(page.properties.Datum) || new Date().toISOString(),
      status: extractSelect(page.properties.Status) as any || "pending",
    }))

    return NextResponse.json(entries)
  } catch (error: any) {
    console.error("Error fetching balance entries:", error)
    return NextResponse.json(
      { error: error.message || "Failed to fetch balance entries" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { action, cost, healing, date, status } = body

    if (!DB_IDS.BALANCE) {
      return NextResponse.json(
        { error: "NOTION_BALANCE_DB_ID not configured" },
        { status: 500 }
      )
    }

    const properties: any = {
      Aktion: {
        title: [{ text: { content: action } }],
      },
      Cost: { number: cost || 0 },
      Healing: { number: healing || 0 },
    }

    if (date) properties.Datum = { date: { start: date } }
    if (status) properties.Status = { select: { name: status } }

    const response = await notion.pages.create({
      parent: { database_id: DB_IDS.BALANCE },
      properties,
    })

    return NextResponse.json({ id: response.id, success: true })
  } catch (error: any) {
    console.error("Error creating balance entry:", error)
    return NextResponse.json(
      { error: error.message || "Failed to create balance entry" },
      { status: 500 }
    )
  }
}