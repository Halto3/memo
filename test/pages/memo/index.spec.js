import { mount } from '@vue/test-utils'
import App from '@/pages/memo/index.vue'

describe('Memo', () => {
  test('Is a Vue instance', () => {
    const wrapper = mount(App)
    const title = wrapper.find('#aiueo')
    console.log(title.text())
    expect(title.text()).toBe('aiueo')
  })
})
