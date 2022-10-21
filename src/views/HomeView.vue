<template>
	<div class="home">
		<div class="xl:mx-52 mx-5 my-10">
			<!-- inputs -->
			<div class="lg:flex justify-between items-center">
				<!-- search input -->
				<div
					class="bg-white flex items-center px-6 py-3 rounded shadow space-x-3 font-semibold text-dg my-3"
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
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>

					<input
						type="search"
						placeholder="Search for a country..."
						class="lg:pr-28"
					/>
				</div>

				<!-- select input -->
				<div>
					<select
						class="bg-white py-3 px-5 rounded shadow font-semibold text-gray-800"
					>
						<option value="" disabled selected>Filter by Region</option>
						<option value="">Africa</option>
						<option value="">America</option>
						<option value="">Asia</option>
						<option value="">Europe</option>
						<option value="">Oceania</option>
					</select>
				</div>
			</div>

			<!-- content -->
			<div class="my-10">
				<!-- elements -->
				<div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 xl:gap-5">
					<div
						v-for="(c, i) in countries"
						:key="i"
						class="bg-white mx-10 rounded shadow overflow-hidden"
					>
						<!-- flag -->
						<div class="w-full">
							<img :src="c.flags.png" alt="" class="h-40 w-full" />
						</div>

						<!-- description -->
						<div class="py-3 px-5">
							<!-- name -->
							<div class="font-bold my-3">
								{{ c.name.official }}
							</div>

							<!-- information -->
							<div class="text-sm mb-3">
								<p>
									<span class="font-semibold mr-1">Population:</span
									>{{ c.population }}
								</p>
								<p>
									<span class="font-semibold mr-1">Region:</span>{{ c.region }}
								</p>
								<p>
									<span class="font-semibold mr-1">Capital:</span
									>{{ c.capital[0] }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HomeView",
	data() {
		return {
			allCountries: [],
			countries: [],
			oxe: 0,
		};
	},
	components: {},
	async mounted() {
		const data = await this.$store.dispatch("getAllCountries");

		this.allCountries = data;
		for (let i = this.oxe; i < this.oxe + 12; i++) {
			this.countries.push(this.allCountries[i]);
		}
		console.log(this.countries);
	},
};
</script>
