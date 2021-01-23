<template>
  <BmiCalculator/>
</template>

<script>
import BmiCalculator from './components/BmiCalculator.vue';

export default {
  name: 'App',
  components: {
    BmiCalculator,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
