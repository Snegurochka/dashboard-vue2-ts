<script>
import { Bar } from "vue-chartjs";

export default {
  name: "Chart",
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [40, 20, 60, 80, 30],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style></style>
