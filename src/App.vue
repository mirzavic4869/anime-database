<template>
	<div class="App">
		<header>
			<h1>My<strong>Anime</strong>List</h1>
			<form class="search-box">
				<input type="search" class="search-field" placeholder="Search for an anime..." required />
			</form>
		</header>
		<main>
			<div class="cards">
				<Card />
			</div>
		</main>
	</div>
</template>

<script>
	import Card from "./components/Card.vue";

	export default {
		setup() {
			return {
				Card,
			};
		},
	};
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}

	a {
		text-decoration: none;
	}

	header {
		padding: 5rem 0;
	}

	h1 {
		color: rgb(75, 75, 75);
		font-size: 3rem;
		font-weight: 600;
		text-align: center;
		text-transform: uppercase;
		margin-bottom: 2rem;

		strong {
			color: rgb(79, 79, 202);
		}
		&:hover {
			color: rgb(31, 31, 31);
		}
	}
	.search-box {
		display: flex;
		justify-content: center;
		padding: 0 4rem;

		.search-field {
			appearance: none;
			background: none;
			border: none;
			outline: none;

			background-color: #f3f3f3;
			box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);

			display: block;
			width: 100%;
			max-width: 600px;
			padding: 15px;
			border-radius: 8px;

			color: #313131;
			font-size: 20px;
			transition: 0.4s;

			&::placeholder {
				color: #aaa;
			}

			&:focus,
			&:valid {
				color: white;
				background-color: rgb(79, 79, 202);
				box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
			}
		}
	}
</style>
