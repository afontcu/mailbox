import MailboxMessageContent from './index.js'
import { mount } from '@vue/test-utils'

const propsData = {
  uid: '1',
  sender: 'sender',
  subject: 'subject',
  time_sent: 1456744407,
  message: 'lorem ipsum',
}

describe('MailboxMessageContent.vue', () => {
  it('is a component', () => {
    const wrapper = mount(MailboxMessageContent, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(MailboxMessageContent, { propsData })
    expect(wrapper.classes()).toContain('MailboxMessageContent')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(MailboxMessageContent, { propsData })
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
