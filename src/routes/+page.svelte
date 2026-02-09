<script lang="ts">
  import { onMount } from "svelte";
  import { fetchCurrentCounter, incrementCounter } from "../utils/logic";

  let count: number = 0;

  onMount(async () => {
    count = await fetchCurrentCounter();
  });

  async function handleIncrement() {
    count = await incrementCounter();
  }
</script>

<div class="counter-card">
  <h1>Welcome to Button Counter App</h1>

  <span class="count-value">{count}</span>

  <button class="increment-btn" on:click={handleIncrement}>
    Increase Counter
  </button>

  <div class="status">
    <span class="dot"></span>
    <span>Live from Turso Database</span>
  </div>
</div>
