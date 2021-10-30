import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import Vuelidate from "vuelidate";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//library.add(faUserSecret)

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Vuelidate);

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
