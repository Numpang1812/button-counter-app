const POLL_INTERVAL = 500;

let pollTimeout: ReturnType<typeof setTimeout> | null = null;
let isPolling = false;
let currentValue = 0;

export function startPolling(
    getValue: () => Promise<number>,
    update: (v: number) => void
) {
    if (isPolling) return;
    isPolling = true;

    const pollOnce = async () => {
        try {
        const latest = await getValue();
        if (latest !== currentValue) {
            currentValue = latest;
            update(latest);
        }
        } catch (err) {
        console.error("Polling failed:", err);
        }

        if (isPolling) {
        pollTimeout = setTimeout(pollOnce, POLL_INTERVAL);
        }
    };

    pollTimeout = setTimeout(pollOnce, POLL_INTERVAL);
}

export function stopPolling() {
    isPolling = false;
    if (pollTimeout) {
        clearTimeout(pollTimeout);
        pollTimeout = null;
    }
}

export function setInitialValue(value: number) {
    currentValue = value;
}
