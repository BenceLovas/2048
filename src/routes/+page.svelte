<script lang="ts">
	import type Tile from './Tile';

	let tileGrid: Tile[][] = [
		[{value: null}, {value: null}, {value: null}, {value: null}],
		[{value: null}, {value: null}, {value: null}, {value: null}],
		[{value: null}, {value: null}, {value: null}, {value: null}],
		[{value: null}, {value: null}, {value: null}, {value: null}]
	];
</script>

<h1>2048</h1>
<div class="tileGrid">
	{#each tileGrid as tileRow}
		<div class="tileRow">
			{#each tileRow as tile}
				<div class="tile">
					<div>{tile.value ? tile : ''}</div>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.tileGrid {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.tileRow {
		display: flex;
		gap: 8px;
	}

	.tile {
		width: 50px;
		height: 50px;
		background-color: bisque;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
