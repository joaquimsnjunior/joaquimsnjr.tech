// Simple Redis client implementation
// You might want to replace this with a real Redis client like ioredis or redis

type ViewsData = {
  slug: string;
  views: number;
}[];

class Redis {
  private data: Record<string, any> = {
    views: [] as ViewsData
  };

  async get(key: string): Promise<any> {
    return this.data[key] || null;
  }

  async set(key: string, value: any): Promise<void> {
    this.data[key] = value;
  }

  async incr(key: string): Promise<number> {
    if (typeof this.data[key] !== 'number') {
      this.data[key] = 0;
    }
    return ++this.data[key];
  }
}

export const redis = new Redis();