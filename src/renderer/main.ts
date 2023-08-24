import { createApp } from 'vue'
import router from "./routers/router";
import App from './App.vue'
import "github-markdown-css/github-markdown.css"

const app = createApp(App);
app.use(router)

app.mount('#app');
