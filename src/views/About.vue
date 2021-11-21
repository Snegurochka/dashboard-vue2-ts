<template>
  <section class="wrapp_content">
    <h1>Profile</h1>
    <div class="card">
      <upload :updateAvatar="updateAvatar" />
    </div>
  </section>
</template>

<script>
import Upload from "@/components/Upload.vue";
export default {
  components: { Upload },
  name: "About",
  methods: {
    updateAvatar(url) {
      console.log("ok upload", url);
    },
  },
};
</script>

<style></style>
