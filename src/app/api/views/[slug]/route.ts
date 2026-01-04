import { NextRequest } from "next/server"
import { getViews, incrementViews } from "@/lib/redis"

export const runtime = "edge"

type RouteContext = {
  params: Promise<{ slug: string }>
}

// GET /api/views/[slug] - Get view count
export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { slug } = await context.params
    const views = await getViews(slug)

    return Response.json(
      { views },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
        },
      }
    )
  } catch (error) {
    console.error("Error fetching views:", error)
    return Response.json({ views: 0 }, { status: 500 })
  }
}

// POST /api/views/[slug] - Increment view count
export async function POST(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { slug } = await context.params
    const views = await incrementViews(slug)

    return Response.json({ views })
  } catch (error) {
    console.error("Error incrementing views:", error)
    return Response.json({ error: "Failed to increment views" }, { status: 500 })
  }
}
