import { json } from '@sveltejs/kit';
import { getCurrentCounter, incrementCounter } from '../../../database/db.server';

export async function GET() {
  const value = await getCurrentCounter();
  return json({ counter: value });
}

export async function POST() {
  await incrementCounter();
  const value = await getCurrentCounter();
  return json({ counter: value });
}