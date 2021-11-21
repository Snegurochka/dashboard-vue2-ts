<template>
  <div class="wrapper">
    <div class="card-header">
      <span>Avatar</span>
      <font-awesome-icon icon="upload" class="icon" />
    </div>
    <div
      class="drop_area"
      :class="{ dragover: is_dragover }"
      @drag.prevent.stop=""
      @dragstart.prevent.stop=""
      @dragend.prevent.stop="is_dragover = false"
      @dragover.prevent.stop="is_dragover = true"
      @dragenter.prevent.stop="is_dragover = true"
      @dragleave.prevent.stop="is_dragover = false"
      @drop.prevent.stop="upload($event)"
    >
      <h5>Drop your file here</h5>
    </div>
    <input type="file" multiple @change="upload($event)" />
    <hr />

    <div></div>
  </div>
</template>

<script>
import { storage } from "@/plugins/firebase";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

library.add(faUpload);

export default {
  name: "Upload",
  data() {
    return {
      is_dragover: false,
    };
  },
  methods: {
    upload($event) {
      this.is_dragover = false;
      const file = $event.dataTransfer
        ? $event.dataTransfer.files[0]
        : $event.target.files[0];

      if (file.type !== "image/png") {
        return;
      }

      const storageRef = storage.ref();
      const fileRef = storageRef.child(`avatars/${file.name}`);
      const task = fileRef.put(file);

      console.log(file);
    },
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 300px;
}
.card-header {
  display: flex;
  justify-content: space-between;
}
.drop_area {
  cursor: pointer;
  text-align: center;
  margin: 24px 0;
  padding: 48px;
  border: 1px dashed var(--darkGrey);
  background: var(--lightBlue);
  color: var(--darkGrey);
  transition: all 0.3s ease;
}

.drop_area:hover,
.dragover {
  background: var(--primary);
}
</style>
