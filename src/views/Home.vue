<template>
  <div class="home">
    <BaseDashCard>
      <h2 slot="heading">Total Earn: 320$</h2>
      <span>from 22-12-21</span>
    </BaseDashCard>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>
