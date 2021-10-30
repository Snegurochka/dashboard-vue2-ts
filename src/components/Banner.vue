<template>
  <div class="banner">
    <div class="text"><slot></slot></div>
    <div class="banner_icon"></div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
.banner {
  width: 90%;
  height: 168px;
  border-radius: 20px;
  background: #a279d7;
  margin: 120px auto 24px;
  position: relative;
  cursor: pointer;
  transition: all 200ms ease;
}

.banner:hover {
  opacity: 0.8;
}

.banner_icon {
  position: absolute;
  bottom: -12px;
  right: -7px;
  width: 147px;
  height: 162px;
  background: url("./../assets/banner_bg.png") no-repeat;
}

.text {
  color: var(--white);
  font-size: 24px;
  padding: 24px;
}
</style>
