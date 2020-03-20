import Vue from "vue";
import Vuex from "vuex";
import SignIn from "./modules/signin";
import SignUp from "./modules/signup";
import Schedules from "./modules/schedule";
import Repayments from "./modules/repayments";
import Profile from "./modules/profile";
import IndicatorModule from "./modules/indicators.module";
import SectorsModule from "./modules/sectors.module";

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    state: {

    },
    modules: {
      SignIn,
      SignUp,
      Schedules,
      Repayments,
      Profile,
      IndicatorModule,
      SectorsModule

    }
  });
};

export default store;
