import { ref, computed } from 'vue';

export default () => {
  const height = ref(166);
  const weight = ref(71);

  const isInputValid = () => {
    if (Math.sign(height.value) === 1 && Math.sign(weight.value) === 1) {
      return true;
    }
    return false;
  };

  const calculatedBmi = computed(() => {
    if (isInputValid()) {
      const heightInMeters = height.value / 100;
      const bmi = weight.value / (heightInMeters * heightInMeters);
      return bmi.toFixed(1);
    }
    return '';
  });

  const hasError = computed(() => {
    if (isInputValid()) {
      return false;
    }
    return true;
  });

  return {
    height,
    weight,
    calculatedBmi,
    hasError,
  };
};
