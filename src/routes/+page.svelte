<script lang="ts">
    import { onMount } from "svelte";
	import { fetchCurrentCounter, incrementCounter } from "../utils/logic";
    import "../styles/global.css";
    let counter = $state(0);
    onMount(async () => {
        counter = await fetchCurrentCounter();
        document.getElementById("counter")!.textContent = counter.toString();
    });
    const increaseCounter = async () => {
        counter = await incrementCounter();
        document.getElementById("counter")!.textContent = counter.toString();
    };
</script>
<div class="header-container">
    <h1>Welcome to Button Counter App</h1>
</div>
<div class="counter-container">
    <p>Here is the current counter: </p>
    <span id="counter">0</span>
    <button onclick={increaseCounter}>Increase Counter</button>
</div>


