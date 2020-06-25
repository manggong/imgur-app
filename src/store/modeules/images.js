import axios from "axios";

const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

const mutations = {
  setImages: (state, images) => {
    return (state.images = images);
  },
};

const actions = {
  // rootState == store/index.js
  fetchImages({ rootState, commit }) {
    const fullUrl = `https://api.imgur.com/3/account/me/images`;
    const config = {
      headers: { Authorization: `Bearer ${rootState.auth.token}` },
    };
    axios
      .get(fullUrl, config)
      .then((response) => {
        console.log(response.data.data);
        commit("setImages", response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  uploadImages() {},
};

export default {
  state,
  getters,
  mutations,
  actions,
};
