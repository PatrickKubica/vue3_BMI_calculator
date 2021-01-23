<template>
  <div>
    <h1>BMI Calculator</h1>
    <label for="height">body height in centimeters </label>
    <input type="number" v-model="height" id="height" />
    <br />
    <label for="weight">body weight in kilogram </label>
    <input type="number" v-model="weight" id="weight" />
    <p>BMI: {{ calculatedBmi }}</p>
  </div>
</template>

<script>
export default {
  name: 'BmiCalculator',
  data() {
    return {
      height: '',
      weight: '',
    };
  },
  computed: {
    calculatedBmi() {
      if (this.height === '' || this.weight === '') {
        return '';
      }
      const height = this.height / 100;
      return parseInt(this.weight / (height * height), 10);
    },
  },
};
</script>
