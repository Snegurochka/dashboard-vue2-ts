<template>
  <section class="wrapper">
    <header>
      <span class="title">{{ header }}</span>
      <button>
        <img :src="optionIcon" />
      </button>
    </header>
    <slot />
  </section>
</template>

<script>
import optionIcon from "@/assets/menuIcon.png";

export default {
  name: "BaseBlockOverview",
  props: {
    header: {
      type: String,
    },
  },
  data() {
    return {
      optionIcon,
    };
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  margin-top: 3rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 0.5px solid var(--lightGrey);
  }

  button {
    cursor: pointer;
  }
}

.title {
  font-size: 18px;
  font-weight: 600;
}
</style>
