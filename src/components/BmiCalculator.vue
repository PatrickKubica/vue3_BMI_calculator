<template>
  <div>
    <h1>BMI Calculator</h1>
    <label for="height">body height in centimeters </label>
    <input type="number" v-model="height" id="height" />
    <br />
    <label for="weight">body weight in kilogram </label>
    <input type="number" v-model="weight" id="weight" />
    <p id="result">BMI: {{ calculatedBmi }}</p>
    <div v-show="hasError" class="alert alert-danger" role="alert">
      height and weight need to be positive numbers
    </div>
  </div>
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
      return parseInt(this.weight / (height * height), 10);
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
