
import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import moment from 'moment'

// createApp(App).mount('#app')
const app = createApp(App)

app.use(Maska)
app.config.globalProperties.$moment = moment //propriedade global
app.config.globalProperties.$moment.locale('pt-br')
app.mount('#app')