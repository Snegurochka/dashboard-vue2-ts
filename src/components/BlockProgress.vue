<template>
  <section>
    <header>
      <span class="title">{{ header }}</span>
    </header>
    <ul>
      <li v-for="(item, ind) in data" :key="ind">
        <div class="label">
          <span class="labelTitle">
            {{ item.label }}
          </span>
          <span class="value">
            {{ item.value }}
          </span>
        </div>
        <div class="bar">
          <div
            :style="{ width: `${(item.value / getSum) * 100}%` }"
            class="coloredBar"
          ></div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "BlockProgress",
  props: {
    header: {
      trpe: String,
    },
    data: {
      type: Array,
    },
  },
  computed: {
    getSum() {
      return this.data.reduce((prev, current) => prev + current.value, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 3rem;
}

.label {
  display: flex;
  justify-content: space-between;
}

.labelTitle {
  font-weight: 500;
}

.bar {
  height: 5px;
  width: 100%;
  background-color: #eceff5;
  position: relative;
  border-radius: 5px;
  margin-bottom: 2rem;
  margin-top: 1rem;
}

.coloredBar {
  height: 5px;
  background-color: #31ba96;
  position: absolute;
  border-radius: 5px;
}
</style>
