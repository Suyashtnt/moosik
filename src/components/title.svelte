<script lang="ts">
	export let content: String;
</script>

<style lang="postcss">
	.content1 {
		text-align: center;
		margin: 0 auto;
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 400;
		margin: 0 0 0.5em 0;

		@media (min-width: 480px) {
			font-size: 4em;
		}
	}
</style>

<p class="content1">{content}</p>
