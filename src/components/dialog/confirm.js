import Confirm from './confirm.vue'
import Vue from 'vue'

class ConfirmInstance {
  constructor(_props) {
    const {
        title,
        content,
        cancelText,
        confirmText,
        opOpen: openCallback,
        onClose: closeCallBack,
        onConfirm: confirmCallBack,
        onCancel: cancelCallBack
      } = _props,
      confirmInstance = new Vue({
        data: Object.assign({}, _props, {
          show: false
        }),
        render(h) {
          return h(Confirm, {
            props: {
              value: this.show,
              title,
              content,
              cancelText,
              confirmText
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
              },
              onConfirm() {
                confirmCallBack && confirmCallBack()
              },
              onCancel() {
                cancelCallBack && cancelCallBack()
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
      component = confirmInstance.$mount()
    document.body.appendChild(component.$el)
    this.model = confirmInstance.$children[0]
  }
  open() {
    this.model.showValue = true
  }
}
export default props => {
  const Instance = new ConfirmInstance(props)
  return Instance.open()
}
