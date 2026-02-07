import { browser } from "$app/environment";

let counter: HTMLSpanElement | null = null;
if (browser) {
  counter = document.getElementById('counter') as HTMLSpanElement | null;
}

async function fetchCurrentCounter() {
    const res = await fetch('/api/counter');
    if (!res.ok) throw new Error('Failed to fetch counter');
    const data = await res.json();
    return data.counter as number;
}

async function postIncrement() {
    const res = await fetch('/api/counter', { method: 'POST' });
    if (!res.ok) throw new Error('Failed to increment counter');
    const data = await res.json();
    return data.counter as number;
}

export async function initializeCounter() {
    await updateCounter();
}
export async function updateCounter() {
    if (counter) {
        const currentValue = await fetchCurrentCounter();
        counter.textContent = currentValue.toString();
    }
}
export async function counterIncrement() {
    await postIncrement();
    await updateCounter();
}

