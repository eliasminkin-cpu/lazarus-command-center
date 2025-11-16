import { NextResponse } from "next/server"
import { notion } from "@/lib/notion"

// ANGEPASST AN VENATOR's NOTION SCHEMA
// Properties: "Status (neu)", "Priorität (neu)", "Fällig am"

const TASKS_DB_ID = process.env.NOTION_TASKS_DB_ID || ""

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const priority = searchParams.get("priority")
    const status = searchParams.get("status")

    if (!TASKS_DB_ID) {
      return NextResponse.json(
        { error: "NOTION_TASKS_DB_ID not configured" },
        { status: 500 }
      )
    }

    const filter: any = { and: [] }
    
    if (priority) {
      filter.and.push({
        property: "Priorität (neu)",
        select: { equals: priority },
      })
    }

    if (status) {
      filter.and.push({
        property: "Status (neu)",
        status: { equals: status },
      })
    }

    const response = await notion.databases.query({
      database_id: TASKS_DB_ID,
      filter: filter.and.length > 0 ? filter : undefined,
      sorts: [
        { property: "Priorität (neu)", direction: "ascending" },
        { property: "Fällig am", direction: "ascending" },
      ],
    })

    const tasks = response.results.map((page: any) => {
      const props = page.properties
      
      // Extract title
      let title = "Untitled"
      if (props.Name?.title?.[0]?.plain_text) {
        title = props.Name.title[0].plain_text
      } else if (props.Task?.title?.[0]?.plain_text) {
        title = props.Task.title[0].plain_text
      }

      return {
        id: page.id,
        title,
        priority: props["Priorität (neu)"]?.select?.name || null,
        status: props["Status (neu)"]?.status?.name || null,
        deadline: props["Fällig am"]?.date?.start || null,
        mission: props.Mission?.select?.name || null,
        sector: props.Sektor?.rich_text?.[0]?.plain_text || null,
        description: props.Beschreibung?.rich_text?.[0]?.plain_text || props.Notizen?.rich_text?.[0]?.plain_text || null,
        created_time: page.created_time,
        last_edited_time: page.last_edited_time,
      }
    })

    return NextResponse.json(tasks)
  } catch (error: any) {
    console.error("Error fetching tasks:", error)
    return NextResponse.json(
      { error: error.message || "Failed to fetch tasks" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, priority, status, deadline, mission, sector, description } = body

    if (!TASKS_DB_ID) {
      return NextResponse.json(
        { error: "NOTION_TASKS_DB_ID not configured" },
        { status: 500 }
      )
    }

    const properties: any = {
      Name: {
        title: [{ text: { content: title } }],
      },
    }

    if (priority) properties["Priorität (neu)"] = { select: { name: priority } }
    if (status) properties["Status (neu)"] = { status: { name: status } }
    if (deadline) properties["Fällig am"] = { date: { start: deadline } }
    if (mission) properties.Mission = { select: { name: mission } }
    if (sector) properties.Sektor = { rich_text: [{ text: { content: sector } }] }
    if (description) properties.Notizen = { rich_text: [{ text: { content: description } }] }

    const response = await notion.pages.create({
      parent: { database_id: TASKS_DB_ID },
      properties,
    })

    return NextResponse.json({ id: response.id, success: true })
  } catch (error: any) {
    console.error("Error creating task:", error)
    return NextResponse.json(
      { error: error.message || "Failed to create task" },
      { status: 500 }
    )
  }
}