import axios from "axios";
import router from "../../router";

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
  uploadImages({ rootState }, event) {
    const fullUrl = `https://api.imgur.com/3/image`;
    const config = {
      headers: { Authorization: `Bearer ${rootState.auth.token}` },
    };
    const images = event.target.files;

    const promises = [];

    images.forEach((image) => {
      const formData = new FormData();
      formData.append("image", image);
      const promise = axios.post(fullUrl, formData, config);
      promises.push(promise);
    });

    Promise.all(promises)
      .then(() => {
        router.push({ name: "ImageList" });
      })
      .catch((err) => console.error(err));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
