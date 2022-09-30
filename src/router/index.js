import { createWebHistory, createRouter } from "vue-router";
import App from "../App.vue";
import Login from "../components/Login.vue";

const routes = [
	{
		path: "/",
		name: "Login",
		component: Login,
	},
	{
		path: "/app",
		name: "App",
		component: App,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
