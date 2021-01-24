import { computed } from 'vue';

export default (height, weight, hasError) => {
  const calculatedBmi = computed(() => {
    if (!hasError.value) {
      const heightInMeters = height.value / 100;
      const bmi = weight.value / (heightInMeters * heightInMeters);
      return bmi.toFixed(1);
    }
    return '';
  });

  return {
    calculatedBmi,
  };
};
