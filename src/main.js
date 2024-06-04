import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'

import ToastService from 'primevue/toastservice'
import DialogService from 'primevue/dialogservice'
import ConfirmationService from 'primevue/confirmationservice'

const app = createApp(App)

app.use(PrimeVue)
app.use(ToastService)
app.use(DialogService)
app.use(ConfirmationService)

app.mount('#app')
