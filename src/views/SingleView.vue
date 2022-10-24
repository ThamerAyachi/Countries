<template>
	<div>{{ countryName }}</div>
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
