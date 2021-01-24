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
    await wrapper.find('#weight').setValue(89);

    expect(wrapper.find('#result').text()).toBe('BMI: 23');
  });

  it('shows error when input invalid', async () => {
    const wrapper = mount(BmiCalculator);

    await wrapper.find('#height').setValue(-194);
    await wrapper.find('#weight').setValue(89);

    expect(wrapper.find('#result').text()).toBe('BMI:');
    expect(wrapper.find('.alert-danger').text()).toBe('height and weight need to be positive numbers');

    await wrapper.find('#height').setValue(194);
    await wrapper.find('#weight').setValue(-89);

    expect(wrapper.find('#result').text()).toBe('BMI:');
    expect(wrapper.find('.alert-danger').text()).toBe('height and weight need to be positive numbers');

    await wrapper.find('#height').setValue(-194);
    await wrapper.find('#weight').setValue(-89);

    expect(wrapper.find('#result').text()).toBe('BMI:');
    expect(wrapper.find('.alert-danger').text()).toBe('height and weight need to be positive numbers');

    await wrapper.find('#height').setValue(0);
    await wrapper.find('#weight').setValue(89);

    expect(wrapper.find('#result').text()).toBe('BMI:');
    expect(wrapper.find('.alert-danger').text()).toBe('height and weight need to be positive numbers');

    await wrapper.find('#height').setValue('test');
    await wrapper.find('#weight').setValue(-89);

    expect(wrapper.find('#result').text()).toBe('BMI:');
    expect(wrapper.find('.alert-danger').text()).toBe('height and weight need to be positive numbers');
  });
});
