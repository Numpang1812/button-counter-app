export async function fetchCurrentCounter() {
  const res = await fetch("/api/counter");
  if (!res.ok) throw new Error("Failed to fetch counter");

  const data = await res.json();
  return data.counter as number;
}

export async function incrementCounter() {
  const res = await fetch("/api/counter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ action: "increment" })
  });

  if (!res.ok) throw new Error("Failed to increment counter");

  const data = await res.json();
  return data.counter as number;
}

export async function decrementCounter() {
  const res = await fetch("/api/counter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ action: "decrement" })
  });

  if (!res.ok) throw new Error("Failed to decrement counter");

  const data = await res.json();
  return data.counter as number;
}
