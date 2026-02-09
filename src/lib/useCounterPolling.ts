import { onDestroy } from "svelte";

const POLL_INTERVAL = 500;

export function useCounterPolling(
  fetchCounter: () => Promise<number>,
  onUpdate: (value: number) => void
) {
  let interval: ReturnType<typeof setInterval>;

  async function poll() {
    try {
      const value = await fetchCounter();
      onUpdate(value);
    } catch (err) {
      console.error("Polling failed:", err);
    }
  }

  interval = setInterval(poll, POLL_INTERVAL);

  onDestroy(() => {
    clearInterval(interval);
  });
}
