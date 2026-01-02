import { Redis } from "@upstash/redis"

// Initialize Redis client for Edge Runtime
// Set these environment variables in your .env.local:
// UPSTASH_REDIS_REST_URL=your_url
// UPSTASH_REDIS_REST_TOKEN=your_token

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

// Views helpers
export async function getViews(slug: string): Promise<number> {
  const views = await redis.get<number>(`views:${slug}`)
  return views ?? 0
}

export async function incrementViews(slug: string): Promise<number> {
  return redis.incr(`views:${slug}`)
}

export async function getAllViews(): Promise<Record<string, number>> {
  const keys = await redis.keys("views:*")
  if (keys.length === 0) return {}

  const values = await redis.mget<number[]>(...keys)

  return keys.reduce(
    (acc, key, i) => {
      const slug = key.replace("views:", "")
      acc[slug] = values[i] ?? 0
      return acc
    },
    {} as Record<string, number>
  )
}