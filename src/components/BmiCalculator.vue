<template>
  <form>
    <div class="form-group">
      <h1 class="pb-5">BMI Calculator</h1>
      <label for="height">body height in centimeters </label>
      <input
        type="number"
        v-model="height"
        id="height"
        class="form-control text-center"
      />
    </div>
    <div class="form-group">
      <label for="weight">body weight in kilogram </label>
      <input
        type="number"
        v-model="weight"
        id="weight"
        class="form-control text-center"
      />
      <h2 id="result" class="pt-5">BMI: {{ calculatedBmi }}</h2>
    </div>
    <div class="form-group">
      <div v-show="hasError" class="alert alert-danger" role="alert">
        height and weight need to be positive numbers
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'BmiCalculator',
  data() {
    return {
      height: 166,
      weight: 71,
    };
  },
  computed: {
    calculatedBmi() {
      if (!this.isInputValid()) {
        return '';
      }
      const height = this.height / 100;
      const bmi = this.weight / (height * height);
      return bmi.toFixed(1);
    },
    hasError() {
      if (this.isInputValid()) {
        return false;
      }
      return true;
    },
  },
  methods: {
    isInputValid() {
      if (Math.sign(this.height) === 1 && Math.sign(this.weight) === 1) {
        return true;
      }
      return false;
    },
  },
};
</script>
