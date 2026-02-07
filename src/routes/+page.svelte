<script>
	import { updateCounter, initializeCounter, counterIncrement } from "../utils/logic";
    initializeCounter();
    updateCounter();
</script>
<h1>Welcome to Button Counter App</h1>
<div>
    <p>Here is the current counter: </p>
    <span id="counter">0</span>
    <button onclick={counterIncrement}>Increase Counter</button>
</div>

