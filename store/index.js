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

import LoginsModule from "./modules/logins.module";
import DisaggregationValuesModule from "./modules/disagregation.values.module";
import MainlandModule from "./modules/mainland.module";
import PeriodTypeModule from "./modules/period.type.module";
import PrivilegeModule from "./modules/privilege.module";
import PublicationsModule from "./modules/publications.module";
import RuralsModule from "./modules/rural.module";
import TotalFemaleModule from "./modules/totalfemale.module";


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
      DisaggregationModule, LoginsModule, DisaggregationValuesModule, MainlandModule, PeriodTypeModule, PrivilegeModule,
      PublicationsModule, RuralsModule, TotalFemaleModule

    }
  });
};

export default store;
