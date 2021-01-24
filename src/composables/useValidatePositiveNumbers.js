import { computed } from 'vue';

export default (number1, number2) => {
  const hasError = computed(() => {
    if (Math.sign(number1.value) === 1 && Math.sign(number2.value) === 1) {
      return false;
    }
    return true;
  });

  return {
    hasError,
  };
};
