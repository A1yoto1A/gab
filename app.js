const app = new Vue({
  el: "#app",
  data() {
    return {
      step: 0,
    };
  },
  created() {
    this.startCount();
  },
  methods: {
    startCount() {
      setTimeout(() => {
        this.step++;
      }, 4000);
    },
    validateButtonEvent() {
      this.step++;
    },
  },
  watch: {
    step(val) {
      if (val === 3) {
        this.startCount();
      }
    },
  },
});
