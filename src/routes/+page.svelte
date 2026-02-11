<script lang="ts">
  import { onMount } from "svelte";
  import { fetchCurrentCounter, incrementCounter, decrementCounter, resetCounter} from "../utils/logic";
  import { useCounterPolling } from "../lib/useCounterPolling";
  import { lang } from "../lib/stores/lang";
  import { t } from "../lib/stores/t";

  // Initialize the counter and buttons
  let count = 0;
  let incrementBtn: HTMLButtonElement | undefined;
  let decrementBtn: HTMLButtonElement | undefined;
  let resetBtn: HTMLButtonElement | undefined;

  // Fetch Counter value from the Turso Database when the component mounts and set up polling to keep it updated in real-time.

  onMount(async () => {
    count = await fetchCurrentCounter();

    useCounterPolling(fetchCurrentCounter, v => {
      if (v !== count) count = v;
    });
  });

  // Function for language switching

  function toggleLang() {
    lang.update((l) => (l === 'en' ? 'jp' : 'en'));
  }

  // Functions for incrementing, decrementing, and resetting the counter to 0.

  async function handleIncrement() {
    count = await incrementCounter();
  }

  async function handleDecrement() {
    count = await decrementCounter();
  }

  async function handleReset() {
    count = await resetCounter();
  }

  // Keyboard event handler for Spacebar (Increase Counter)

  async function spaceBarHandler(event: KeyboardEvent) {
    if (event.code === "Space") {
      event.preventDefault();
      applyKeyVisual(event);
      await handleIncrement();
    }
  }

   // Keyboard event handlers for Backspace (Decrease Counter)

  async function backspaceHandler(event: KeyboardEvent) {
    if (event.code === "Backspace") {
      event.preventDefault();
      applyKeyVisual(event);
      await handleDecrement();
    }
  }

  // Keyboard event handler for Zero Key (Reset Counter to 0)

  async function zeroKeyHandler(event: KeyboardEvent) {
    if (event.code === "Digit0") {
      event.preventDefault();
      applyKeyVisual(event);
      await handleReset();
    }
  }

  // Function to set Hover state to buttons even when clicking the keyboard keys

  function setHoverSate(btn: HTMLButtonElement | undefined, active: boolean) {
    if(!btn) return;
    btn.classList.toggle("hover", active);
  }

  function applyKeyVisual(event: KeyboardEvent) {
    if (event.code === "Space") {
      setHoverSate(incrementBtn, true);
    } else if (event.code === "Backspace") {
      setHoverSate(decrementBtn, true);
    } else if (event.code === "Digit0") {
      setHoverSate(resetBtn, true);
    }
  }

  function resetKeyVisual(event: KeyboardEvent) {
    if (event.code === "Space") {
      setHoverSate(incrementBtn, false);
    } else if (event.code === "Backspace") {
      setHoverSate(decrementBtn, false);
    } else if (event.code === "Digit0") {
      setHoverSate(resetBtn, false);
    }
  }

  // Set up event listeners and remove them

  onMount(() => {
    window.addEventListener("keydown", spaceBarHandler);
    window.addEventListener("keydown", backspaceHandler);
    window.addEventListener("keydown", zeroKeyHandler);
    window.addEventListener("keyup", resetKeyVisual);

    return () => {
      window.removeEventListener("keydown", spaceBarHandler);
      window.removeEventListener("keydown", backspaceHandler);
      window.removeEventListener("keydown", zeroKeyHandler);
      window.removeEventListener("keyup", resetKeyVisual);
    };
  });

</script>

<div class="counter-card">
  <button class="lang-switch" on:click={toggleLang}>
  <span class="icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M2 12h20"></path>
      <path d="M12 2a15 15 0 0 1 0 20"></path>
      <path d="M12 2a15 15 0 0 0 0 20"></path>
    </svg>
  </span>

  <span class="label">{$t.lang}</span>
  </button>
  <h1>{$t.greeting}</h1>

  <span class="count-value">{count}</span>

  <button class="increment-btn" bind:this={incrementBtn} on:click={handleIncrement}>
    {$t.incrementBtn}
  </button>
  <button class="decrement-btn" bind:this={decrementBtn} on:click={handleDecrement} disabled={count === 0}>
    {$t.decrementBtn}
  </button>
  
  <button class="reset-btn" bind:this={resetBtn} on:click={handleReset}>
    {$t.resetBtn}
  </button>
  
  <div class="status">
    <span class="dot"></span>
    <span>{$t.status}</span>
  </div>
</div>
