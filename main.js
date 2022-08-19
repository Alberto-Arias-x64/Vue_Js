const { createApp } = Vue

const app = createApp({
  data() {
    return {
      message: 'Hello Vue! XD'
    }
  },
  template:`
  <h1>{{message}}</h1>
  <Card/>
  `
})

app.component(
  'Card',
  {
    template:`<h1>Familia hoy se come</h1>`
  }
)

app.mount('#app')