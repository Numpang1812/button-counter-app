export async function fetchCurrentCounter() {
    const res = await fetch('/api/counter');
    if (!res.ok) throw new Error('Failed to fetch counter');
    const data = await res.json();
    return data.counter as number;
}

export async function incrementCounter() {
    const res = await fetch('/api/counter', { method: 'POST' });
    if (!res.ok) throw new Error('Failed to increment counter');
    const data = await res.json();
    return data.counter as number;
}
