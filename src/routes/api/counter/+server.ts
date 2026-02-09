import { json } from "@sveltejs/kit";
import {
  getCurrentCounter,
  incrementCounter,
  decrementCounter
} from "../../../database/db.server";

export async function GET() {
  const value = await getCurrentCounter();
  return json({ counter: value });
}

export async function POST({ request }) {
  const { action } = await request.json();

  if (action === "increment") {
    await incrementCounter();
  }

  if (action === "decrement") {
    await decrementCounter();
  }

  const value = await getCurrentCounter();
  return json({ counter: value });
}
