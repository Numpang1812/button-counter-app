<script>
	import { updateCounter, initializeCounter, counterIncrement } from "../utils/logic";
    import "../styles/global.css";
    initializeCounter();
    updateCounter();
</script>
<div class="header-container">
    <h1>Welcome to Button Counter App</h1>
</div>
<div class="counter-container">
    <p>Here is the current counter: </p>
    <span id="counter">0</span>
    <button onclick={counterIncrement}>Increase Counter</button>
</div>


