<template>
  <section class="wrapp">
    <main>
      <h1>Dashboard</h1>
      <div class="chart card">
        <span class="dataRange">January - May, 2021</span>
        <WsChart />
      </div>

      <BaseBlockOverview header="Last orders" class="card">
        <ul>
          <li v-for="order in LastOrdersMoc" :key="order.id" class="item">
            <div class="itemLeft">
              <div class="itemLabel">
                <img src="@/assets/cartIcon.svg" :alt="order.product" />
              </div>
              <div class="itemDetails">
                <p class="itemTitle">Product: {{ order.product }}</p>
                <span class="itemTime">
                  {{ order.date }} • {{ order.location }}
                </span>
              </div>
            </div>
            <span class="itemPrice"> {{ order.price.toFixed(2) }} $ </span>
          </li>
        </ul>
      </BaseBlockOverview>
    </main>
    <aside class="asideOverview">
      <BlockProgress header="Sales" :data="salesMoc" />
      <Banner
        >Upgrade <br />
        to pro</Banner
      >
    </aside>
  </section>
</template>

<script>
// moc
import { LastOrdersMoc, salesMoc } from "@/store/moc";

// Components
import WsChart from "@/components/WsChart";
import BlockProgress from "@/components/BlockProgress";
import Banner from "@/components/Banner";

export default {
  name: "Home",
  components: { WsChart, BlockProgress, Banner },
  data() {
    return {
      LastOrdersMoc,
      salesMoc,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapp {
  display: grid;
  grid-template-columns: 1fr 30%;

  main {
    padding: 5rem;
  }
}

.dataRange {
  margin-top: 1rem;
  opacity: 0.5;
  margin-bottom: 2rem;
}

.item {
  margin: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.itemLeft {
  display: flex;
  align-items: center;
}

.itemLabel {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary);

  display: flex;
  justify-content: center;
  align-items: center;
}

.itemDetails {
  margin-left: 1rem;
}

.itemTitle {
  font-weight: 500;
}

.itemTime {
  opacity: 0.5;
}

.itemPrice {
  font-weight: 600;
}

.asideOverview {
  background: var(--lightBlue);
  margin: 2rem;
  border-radius: 24px;
  padding: 4rem 2rem 1rem;
}
</style>
