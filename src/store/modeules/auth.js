import qs from "qs";
import router from "../../router";
import cookies from "vue-cookies";

const state = {
  token: cookies.get("imgur_token"),
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};

const actions = {
  logout({ commit }) {
    //Token 값 null로 바꾸기
    commit("setToken", null);
    cookies.remove("imgur_token");
  },
  login() {
    const ROOT_URL = `https://api.imgur.com`;
    const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token",
    };
    const fullUrl = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    window.location.href = fullUrl;
  },
  finalizeLogin({ commit }, hashString) {
    const queryObject = qs.parse(hashString.replace("#", ""));
    commit("setToken", queryObject.access_token);
    cookies.set("imgur_token", queryObject.access_token);
    router.push("/");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

// `http://localhost:8081/oauth2/callback
// #
// access_token=68b7acd5cce0d7b4b916a3db9d7c76be629ccad4
// &
// expires_in=315360000
// &
// token_type=bearer
// &
// refresh_token=6b96932f25d41f76225c9fc3df21ebfbb83e6beb
// &
// account_username=manggong95
// &
// account_id=133451359
// `
