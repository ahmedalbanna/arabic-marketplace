<template>
  <div class="cart">
    <header class="header">
      <button @click="goBack">←</button>
      <h1>سلة التسوق</h1>
      <div></div>
    </header>

    <div class="cart-items">
      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        <img :src="item.image" :alt="item.name" />
        <div class="item-details">
          <p class="item-name">{{ item.name }}</p>
          <p class="item-price">{{ item.price }} ر.ي</p>
          <div class="quantity">
            <button @click="decrease(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increase(item)">+</button>
          </div>
        </div>
        <button class="remove" @click="remove(item)">🗑️</button>
      </div>
    </div>

    <div class="summary">
      <div class="summary-row">
        <span>المجموع الفرعي</span>
        <span>{{ subtotal }} ر.ي</span>
      </div>
      <div class="summary-row">
        <span>التوصيل</span>
        <span>5000 ر.ي</span>
      </div>
      <div class="summary-row total">
        <span>الإجمالي</span>
        <span>{{ total }} ر.ي</span>
      </div>
    </div>

    <button class="checkout-btn" @click="goToCheckout">إتمام الطلب</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.back()
const goToCheckout = () => router.push('/checkout')

const cartItems = ref([
  { id: 1, name: 'هاتف سامسونج جالكسي', price: 450000, quantity: 1, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200' },
  { id: 2, name: 'سماعات بلوتوث', price: 35000, quantity: 2, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200' },
])

const increase = (item: any) => item.quantity++
const decrease = (item: any) => { if (item.quantity > 1) item.quantity-- }
const remove = (item: any) => { cartItems.value = cartItems.value.filter(i => i.id !== item.id) }

const subtotal = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0))
const total = computed(() => subtotal.value + 5000)
</script>

<style scoped>
.cart {
  padding-bottom: 100px;
  background-color: var(--color-surface);
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md);
  background-color: var(--color-surface-container-lowest);
  border-bottom: 1px solid var(--color-border);
}

.header h1 {
  margin: 0;
  font-size: 1.2rem;
}

.header button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.cart-items {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.cart-item {
  display: flex;
  gap: var(--space-sm);
  background-color: var(--color-surface-container-lowest);
  padding: var(--space-sm);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  align-items: center;
}

.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: var(--radius-default);
}

.item-details {
  flex: 1;
}

.item-name {
  margin: 0 0 var(--space-xs) 0;
  font-size: 0.9rem;
}

.item-price {
  margin: 0 0 var(--space-xs) 0;
  color: var(--color-primary);
  font-weight: 600;
}

.quantity {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.quantity button {
  width: 25px;
  height: 25px;
  border: 1px solid var(--color-border);
  background: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.remove {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}

.summary {
  margin: var(--space-md);
  padding: var(--space-md);
  background-color: var(--color-surface-container-lowest);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-sm);
}

.summary-row.total {
  font-weight: 600;
  font-size: 1.1rem;
  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-border);
  margin-top: var(--space-sm);
}

.checkout-btn {
  margin: 0 var(--space-md);
  width: calc(100% - 2rem);
  padding: var(--space-md);
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  border: none;
  border-radius: var(--radius-default);
  font-family: var(--font-family);
  font-size: 1rem;
  cursor: pointer;
}
</style>
