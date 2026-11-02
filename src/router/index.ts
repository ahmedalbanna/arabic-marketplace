import { createRouter, createWebHistory } from 'vue-router'
import ResponsiveLayout from '@/components/ResponsiveLayout.vue'
import ProductView from '@/pages/ProductView.vue'
import CartView from '@/pages/CartView.vue'
import CheckoutView from '@/pages/CheckoutView.vue'
import VendorDashboard from '@/pages/VendorDashboard.vue'
import Explore from '@/pages/Explore.vue'
import LoginView from '@/pages/LoginView.vue'
import AddressView from '@/pages/AddressView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ResponsiveLayout
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/vendor',
      name: 'vendor',
      component: VendorDashboard
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/address',
      name: 'address',
      component: AddressView
    }
  ]
})

export default router