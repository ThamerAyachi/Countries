import instance from "@/axios";
import { createStore } from "vuex";

export default createStore({
	state: {},
	getters: {},
	mutations: {},
	actions: {
		getAllCountries: async () => {
			try {
				const rest = await instance.get("all");
				return rest.data;
			} catch (err) {
				return err;
			}
		},
	},
	modules: {},
});
