<template>
	<div class="2xl:mx-52 xl:mx-32 mx-5 my-10">
		<!-- button to go back -->
		<div class="flex text-sm">
			<router-link
				to="/"
				class="flex items-center space-x-3 shadow-md rounded bg-white py-1 px-5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-4 h-4"
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

		<!-- element -->
		<div class="grid lg:grid-cols-2 grid-cols-1 gap-4 my-16">
			<div class="w-full flex justify-center">
				<img :src="country.flags.svg" alt="" class="max-h-80" />
			</div>
			<div class="lg:p-5">
				<p class="text-2xl font-bold my-5 lg:mb-5 lg:my-0">
					{{ country.name.common }}
				</p>

				<!-- content grid -->
				<div class="grid md:grid-cols-2 grid-cols-1 space-y-5 md:space-y-0">
					<!-- part one -->
					<div class="space-y-2">
						<p>
							<span class="font-semibold">Native Name: </span>
							<span>
								{{ nativeName }}
							</span>
						</p>
						<p>
							<span class="font-semibold">Population: </span>
							<span>
								{{ country.population }}
							</span>
						</p>
						<p>
							<span class="font-semibold">Region: </span>
							<span>
								{{ country.region }}
							</span>
						</p>
						<p>
							<span class="font-semibold">Sup Region: </span>
							<span>
								{{ country.subregion }}
							</span>
						</p>
						<p>
							<span class="font-semibold">Capital: </span>
							<span>
								{{ country.capital[0] }}
							</span>
						</p>
					</div>
					<!-- part two -->
					<div class="space-y-2">
						<p>
							<span class="font-semibold">Top Level Domain: </span>
							<span>
								{{ country.tld[0] }}
							</span>
						</p>
						<p>
							<span class="font-semibold">Currencies: </span>
							<span>
								{{ currenciesName }}
							</span>
						</p>
						<p>
							<span class="font-semibold">Languages: </span>
							<span v-for="(l, i) in languages" :key="i">
								{{ l + (languages[i + 1] ? ", " : "") }}
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { numberFormat } from "../assets/methods.js";

export default {
	data() {
		return {
			countryName: this.$route.params.name.replaceAll("_", " "),
			country: {
				name: { common: "" },
				flags: { png: "https://flagcdn.com/w320/bg.png" },
				population: 0,
				region: "",
				subregion: "",
				capital: "",
				tld: [""],
			},
			currencies: {},
			currenciesName: "",
			languages: [],
			nativeName: "",
		};
	},
	async mounted() {
		try {
			const rest = await this.$store.dispatch(
				"getCountryByName",
				this.countryName
			);
			if (rest.status == 200) this.country = rest.data[0];

			this.currencies = rest.data[0].currencies;
			Object.keys(rest.data[0].languages).forEach((l) => {
				this.languages.push(rest.data[0].languages[l]);
			});
			this.nativeName =
				rest.data[0].name.nativeName[
					Object.keys(rest.data[0].name.nativeName)[0]
				].common;
		} catch (e) {
			console.log(e);
		}

		this.country.population = numberFormat(this.country.population);
		this.currenciesName = this.currencies[Object.keys(this.currencies)[0]].name;

		// console.log(this.nativeName);
	},
};
</script>

<style lang="scss" scoped></style>
