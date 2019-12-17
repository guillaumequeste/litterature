import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'jquery'
import 'popper.js'
import VuePageTransition from 'vue-page-transition'
import Accueil from './components/Accueil'
import Auteurs from './components/Auteurs'
import Contact from './components/Contact.vue'
import Auteur from './components/Auteur.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VuePageTransition)

let router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: Accueil,
            name: 'Accueil'
        },
        {
            path: '/auteurs',
            component: Auteurs,
            name: 'Auteurs'
        },
        {
            path: '/contact',
            component: Contact,
            name: 'contact'
        },
        {
            path: '/auteur/:id',
            component: Auteur,
            name: 'auteur'
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

export default router