import IconCross from './index.js'
import { mount } from '@vue/test-utils'

describe('IconCross.vue', () => {
  it('is a component', () => {
    const wrapper = mount(IconCross)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders a snapshot', () => {
    const wrapper = mount(IconCross)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
