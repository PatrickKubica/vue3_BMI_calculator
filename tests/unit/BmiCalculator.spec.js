import { mount } from '@vue/test-utils';
import BmiCalculator from '@/components/BmiCalculator.vue';

describe('BmiCalculator.vue', () => {
  it('renders the BMI calculator', () => {
    const wrapper = mount(BmiCalculator);

    expect(wrapper.text()).toMatch('BMI Calculator');
    expect(wrapper.text()).toMatch('body height in centimeters');
    expect(wrapper.text()).toMatch('body weight in kilogram');
    expect(wrapper.text()).toMatch('BMI:');
  });

  it('calculates the BMI', async () => {
    const wrapper = mount(BmiCalculator);

    await wrapper.find('#height').setValue(194);
    await wrapper.find('#weight').setValue(88);

    expect(wrapper.find('#result').text()).toBe('BMI: 23');
  });
});
