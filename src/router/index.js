import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import AddProject from '../views/AddProject.vue';
import EditProject from '../views/EditProject.vue';
import SignUp from '../views/Signup.vue';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/addProject',
    name: 'AddProject',
    component: AddProject
  },
  {
    path: '/editProject/:id',
    name: 'EditProject',
    component: EditProject,
    props:true
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
    
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
