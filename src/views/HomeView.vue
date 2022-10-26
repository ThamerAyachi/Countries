<template>
	<div class="home dark:text-white">
		<div class="2xl:mx-52 xl:mx-32 mx-5 my-10">
			<!-- inputs -->
			<div class="md:flex justify-between items-center">
				<!-- search input -->
				<div
					class="bg-white dark:bg-dElement dark:text-white flex items-center px-6 py-3 rounded shadow space-x-3 font-semibold text-dg my-3"
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
						type="text"
						placeholder="Search for a country..."
						class="lg:pr-28 dark:bg-dElement"
						v-model="research"
						@input="searchByName()"
					/>
				</div>

				<!-- select input -->
				<div>
					<select
						v-model="select"
						@change="byRegion()"
						class="bg-white dark:bg-dElement dark:text-white py-3 px-5 rounded shadow font-semibold text-gray-800"
					>
						<option value="" disabled selected>Filter by Region</option>
						<option>Africa</option>
						<option>Americas</option>
						<option>Asia</option>
						<option>Europe</option>
						<option>Oceania</option>
					</select>
				</div>
			</div>

			<!-- content -->
			<div class="my-10">
				<!-- spine effect -->
				<div
					v-if="!countries[0] && dataFound == 0"
					class="w-full flex justify-center my-32"
				>
					<svg
						aria-hidden="true"
						class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
					<span class="sr-only">Loading...</span>
				</div>
				<div
					v-else-if="!countries[0] && dataFound == 1"
					class="w-full flex justify-center my-32 text-gray-700 dark:text-white"
				>
					Countries not found.
				</div>
				<!-- elements -->
				<div
					v-else
					class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 xl:gap-5"
				>
					<router-link
						:to="`/single/${c.name.official.replaceAll(' ', '_')}`"
						v-for="(c, i) in countries"
						:key="i"
						class="bg-white dark:bg-dElement xl:mx-5 mx-3 rounded shadow overflow-hidden my-5 hover:rotate-3 transform duration-200"
					>
						<!-- flag -->
						<div class="w-full overflow-hidden">
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
					</router-link>
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
			dataFound: 0,
			research: "",
			select: "",
		};
	},
	components: {},
	methods: {
		searchByName() {
			this.countries = [];
			this.allCountries.forEach((c) => {
				if (
					c.name.official.toLowerCase().includes(this.research.toLowerCase())
				) {
					this.countries.push(c);
				}
			});
		},
		byRegion() {
			this.countries = [];
			this.allCountries.forEach((c) => {
				if (c.region == this.select) {
					this.countries.push(c);
				}
			});
		},
	},
	async mounted() {
		const data = await this.$store.dispatch("getAllCountries");

		this.allCountries = data;

		this.allCountries.map((c) => {
			if (!c.capital) {
				c.capital = ["Null"];
			}
		});
		this.countries = this.allCountries;
		this.dataFound = 1;
	},
};
</script>
