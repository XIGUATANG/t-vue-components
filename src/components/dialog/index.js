import Alert from './alert.vue'
import Vue from 'vue'

class AlertInstance {
  constructor(_props) {
    const { title, content, buttonText, opOpen: openCallback, onClose: closeCallBack } = _props,
      alertInstance = new Vue({
        data: Object.assign({}, _props, {
          show: false
        }),
        render(h) {
          return h(Alert, {
            props: {
              value: this.show,
              title,
              content,
              buttonText
            },
            on: {
              change: val => {
                this.show = val
              },
              onOpen: () => {
                openCallback && openCallback()
              },
              onClose: () => {
                this.remove()
                closeCallBack && closeCallBack()
              }
            }
          })
        },
        methods: {
          remove() {
            setTimeout(() => {
              this.destroy()
            }, 300)
          },
          destroy() {
            this.$children[0].show = false
            setTimeout(() => {
              this.$destroy()
              if (document.body.contains(this.$el)) {
                document.body.removeChild(this.$el)
              }
            }, 0)
          }
        }
      }),
      component = alertInstance.$mount()
    document.body.appendChild(component.$el)
    this.model = alertInstance.$children[0]
  }
  open() {
    this.model.showValue = true
  }
}
export default props => {
  const Instance = new AlertInstance(props)
  return Instance.open()
}
