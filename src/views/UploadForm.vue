<template>
  <div class="dropper">
    <input @change="uploadImages" type="file" multiple accept="image/*" />
    <span>Drag images here</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UploadForm",
  methods: {
    ...mapActions(["uploadImages"])
  }
};
</script>

<style>
.dropper {
  height: 30vh;
  border: 2px dashed rgb(255, 210, 210);
  border-radius: 5px;
  display: flex; /*상하 정렬 전 키워드 */
  justify-content: center;
  align-items: center;
  position: relative; /*종속되는 태그들*/
}
.dropper:hover {
  background: #fd5465;
}

input {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
</style>