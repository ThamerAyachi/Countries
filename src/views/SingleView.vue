<template>
	<div class="xl:mx-52 mx-5 my-10">
		<!-- button to go back -->
		<div class="flex">
			<router-link
				to="/"
				class="flex items-center space-x-3 shadow-md rounded bg-white py-2 px-7"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
					/>
				</svg>

				<span>Back</span></router-link
			>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			countryName: this.$route.params.name.replaceAll("_", " "),
			country: {},
		};
	},
	async mounted() {
		try {
			const rest = await this.$store.dispatch(
				"getCountryByName",
				this.countryName
			);
			if (rest.status == 200) this.country = rest.data;
		} catch (e) {
			console.log(e);
		}
	},
};
</script>

<style lang="scss" scoped></style>
