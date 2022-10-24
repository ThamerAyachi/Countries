<template>
	<div>{{ countryName }}</div>
</template>

<script>
export default {
	data() {
		return {
			countryName: this.$route.params.name.replaceAll("_", " "),
		};
	},
};
</script>

<style lang="scss" scoped></style>
