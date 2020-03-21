import Vue from "vue";
import Vuex from "vuex";
import SignIn from "./modules/signin";
import SignUp from "./modules/signup.module";
import Schedules from "./modules/schedule";
import Repayments from "./modules/repayments";
import Profile from "./modules/profile";
import IndicatorModule from "./modules/indicators.module";
import SectorsModule from "./modules/sectors.module";
import IndicatorSourceModule from "./modules/indicator.source.module";
import CurrentReleasesModule from "./modules/current.release.module";
import DisaggregationModule from "./modules/disaggregation.module";

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
      SectorsModule,
      IndicatorSourceModule,
      CurrentReleasesModule,
      DisaggregationModule

    }
  });
};

export default store;
