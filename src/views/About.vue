<template>
  <section class="wrapp_content">
    <header>
      <h1>Profile {{ seller.name }}</h1>
      <base-button @click="isEdited = !isEdited" class="btn-primary">
        <font-awesome-icon icon="pen" class="icon" />
      </base-button>
    </header>

    <div class="card seller_card">
      <div :class="{ hidden: !isEdited }" class="edit_profile">
        <upload :updateAvatar="updateAvatar" />
      </div>
      <div class="profile__info">
        <div class="profile__avatar">
          <img :src="seller.avatar" />
        </div>

        <div class="profile__header">
          {{ seller.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Upload from "@/components/Upload.vue";
import { mapState } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPen } from "@fortawesome/free-solid-svg-icons";

library.add(faPen);

export default {
  name: "About",
  components: { Upload },
  data() {
    return {
      isEdited: false,
    };
  },
  computed: { ...mapState(["seller"]) },
  methods: {
    updateAvatar(url) {
      console.log("ok upload", url);
    },
  },
};
</script>

<style scoped>
.seller_card {
  display: flex;
  gap: 24px;
}

.edit_profile {
  width: 300px;
  opacity: 1;
  transition: all 0.3s ease;
  overflow: hidden;
  border-right: 1px solid var(--lightGrey);
  padding-right: 24px;
}

.hidden {
  width: 0px;
  opacity: 0;
}

.profile__info {
  display: flex;
  gap: 24px;
  flex-grow: 1;
}

.profile__avatar {
  width: 60px;
}

.profile__avatar img {
  width: 100%;
  border-radius: 50%;
}

.profile__header {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}
</style>
