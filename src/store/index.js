import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import state from "./state.js";
import * as getters from "./getters.js";
import * as mutations from "./mutations.js";
import * as actions from "./actions.js";

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
