import instance from "@/axios";
import { createStore } from "vuex";
import { numberFormat } from "../assets/methods.js";

export default createStore({
	state: {
		COUNTRIES: [],
	},
	getters: {
		GET_COUNTRIES(state) {
			return state.COUNTRIES;
		},
	},
	mutations: {
		SET_COUNTRIES(state, data) {
			state.COUNTRIES = data;
		},
	},
	actions: {
		getAllCountries: async ({ commit, getters }) => {
			if (getters.GET_COUNTRIES.length > 0) {
				return getters.GET_COUNTRIES;
			}
			try {
				const rest = await instance.get("all");
				commit("SET_COUNTRIES", rest.data);
				let data = [];
				rest.data.forEach((c) => {
					c.population = numberFormat(c.population);
					data.push(c);
				});

				return data;
			} catch (err) {
				return err;
			}
		},
		getCountryByName: async (p, name) => {
			try {
				const rest = await instance.get(`name/${name}`);
				return rest;
			} catch (err) {
				return err;
			}
		},
	},
	modules: {},
});
