<template>
	<div class="app">
		<header>
			<h1>My<strong>Anime</strong>List</h1>
			<form class="search-box" @submit.prevent="HandleSearch">
				<input type="search" class="search-field" placeholder="Search for an anime..." required v-model="search_query" />
			</form>
		</header>
		<main>
			<div class="cards" v-if="animeList.length > 0">
				<Card v-for="anime in animeList" :key="anime.mal_id" :anime="anime" />
			</div>
			<div class="no-results" v-else>
				<h3>Sorry, we have no results...</h3>
			</div>
		</main>
	</div>
</template>

<script>
	import { ref } from "vue";

	import Card from "./components/Card.vue";

	export default {
		setup() {
			const search_query = ref("");
			const animeList = ref([]);
			const HandleSearch = async () => {
				animeList.value = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search_query.value}`)
					.then((res) => res.json())
					.then((data) => data.results);
				search_query.value = "";
			};
			return {
				Card,
				search_query,
				animeList,
				HandleSearch,
			};
		},
		components: { Card },
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

	h3 {
		text-align: center;
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

	main {
		max-width: 1200px;
		margin: 0 auto;
		padding-left: 30px;
		padding-right: 30px;
		.cards {
			display: flex;
			flex-wrap: wrap;
			margin: 0 -8px;
		}
	}
</style>
