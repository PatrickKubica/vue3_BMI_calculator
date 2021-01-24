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
import useBmiCalculator from '@/composables/useBmiCalculator';

export default {
  setup() {
    const {
      height, weight, calculatedBmi, hasError,
    } = useBmiCalculator();

    return {
      height,
      weight,
      calculatedBmi,
      hasError,
    };
  },
};
</script>
