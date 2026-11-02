<template>
  <div class="cart">
    <!-- Header -->
    <header class="header">
      <button class="back-btn" @click="goBack">←</button>
      <h1 class="page-title">سلة التسوق</h1>
      <div class="header-spacer"></div>
    </header>

    <!-- Cart Items -->
    <div class="cart-items">
      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        <img :src="item.image" :alt="item.name" class="item-image" />
        <div class="item-details">
          <p class="item-name">{{ item.name }}</p>
          <p class="item-price">{{ item.price.toLocaleString() }} ر.ي</p>
          <div class="quantity-control">
            <button class="qty-btn" @click="decrease(item)">−</button>
            <span class="qty-value">{{ item.quantity }}</span>
            <button class="qty-btn" @click="increase(item)">+</button>
          </div>
        </div>
        <button class="remove-btn" @click="remove(item)">🗑️</button>
      </div>
    </div>

    <!-- Order Summary -->
    <div class="summary">
      <div class="summary-row">
        <span>المجموع الفرعي</span>
        <span>{{ subtotal.toLocaleString() }} ر.ي</span>
      </div>
      <div class="summary-row">
        <span>التوصيل</span>
        <span>5,000 ر.ي</span>
      </div>
      <div class="summary-row total">
        <span>الإجمالي</span>
        <span>{{ total.toLocaleString() }} ر.ي</span>
      </div>
    </div>

    <!-- Checkout Button -->
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
  { id: 1, name: 'هاتف سامسونج جالاكسي S24', price: 150000, quantity: 1, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200' },
  { id: 2, name: 'سماعات لاسلكية برو', price: 12000, quantity: 2, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200' },
])

const increase = (item: any) => item.quantity++
const decrease = (item: any) => { if (item.quantity > 1) item.quantity-- }
const remove = (item: any) => { cartItems.value = cartItems.value.filter(i => i.id !== item.id) }

const subtotal = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0))
const total = computed(() => subtotal.value + 5000)
</script>

<style scoped>
.cart {
  padding-bottom: 90px;
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

.back-btn {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
}

.page-title {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
}

.header-spacer {
  width: 40px;
}

.cart-items {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.cart-item {
  display: flex;
  gap: var(--space-md);
  background-color: var(--color-surface-container-lowest);
  padding: var(--space-sm);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  align-items: center;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: var(--radius-default);
  flex-shrink: 0;
}

.item-details {
  flex: 1;
}

.item-name {
  margin: 0 0 var(--space-xs) 0;
  font-size: 0.9rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.item-price {
  margin: 0 0 var(--space-xs) 0;
  color: var(--color-primary);
  font-weight: 600;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.qty-btn {
  width: 30px;
  height: 30px;
  border: 1px solid var(--color-border);
  background: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 1rem;
  font-family: var(--font-family);
}

.qty-value {
  min-width: 20px;
  text-align: center;
}

.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  flex-shrink: 0;
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
  font-size: 0.9rem;
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
  font-weight: 600;
  cursor: pointer;
}
</style>
EOF
echo "done"