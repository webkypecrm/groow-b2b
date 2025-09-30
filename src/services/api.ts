// Use relative or absolute imports depending on your setup
import axios from "axios";

const BASE = process.env.NEXT_PUBLIC_API_URL || ""; // ensure .env.local has NEXT_PUBLIC_API_URL

export async function serverFetch(endpoint: string) {
  const res = await fetch(`${BASE}${endpoint}`);
  if (!res.ok) throw new Error("Failed to fetch: " + res.status);
  return res.json();
}

export const clientApi = axios.create({
  baseURL: BASE,
  headers: {
    "Content-Type": "application/json",
  },
});
