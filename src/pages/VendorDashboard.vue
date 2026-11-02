<template>
  <div class="vendor">
    <header class="header">
      <button @click="goBack">←</button>
      <h1>لوحة تحكم البائع</h1>
      <button>➕</button>
    </header>

    <div class="stats">
      <div class="stat-card">
        <p class="stat-value">15</p>
        <p class="stat-label">المنتجات</p>
      </div>
      <div class="stat-card">
        <p class="stat-value">8</p>
        <p class="stat-label">الطلبات</p>
      </div>
      <div class="stat-card">
        <p class="stat-value">12,450,000</p>
        <p class="stat-label">المبيعات (ر.ي)</p>
      </div>
    </div>

    <section class="orders">
      <h3>الطلبات الحديثة</h3>
      <div class="order-item" v-for="order in orders" :key="order.id">
        <div class="order-info">
          <p class="order-id">طلب #{{ order.id }}</p>
          <p class="order-customer">{{ order.customer }}</p>
          <p class="order-amount">{{ order.amount }} ر.ي</p>
        </div>
        <span class="order-status" :class="order.status">{{ order.statusText }}</span>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.push('/')

const orders = ref([
  { id: 1001, customer: 'أحمد محمد', amount: 450000, status: 'pending', statusText: 'قيد الانتظار' },
  { id: 1002, customer: 'فاطمة علي', amount: 85000, status: 'shipped', statusText: 'تم الشحن' },
  { id: 1003, customer: 'محمد حسن', amount: 120000, status: 'delivered', statusText: 'تم التسليم' },
])
</script>

<style scoped>
.vendor {
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

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-sm);
  padding: var(--space-md);
}

.stat-card {
  background-color: var(--color-surface-container-lowest);
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  text-align: center;
  border: 1px solid var(--color-border);
}

.stat-value {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-primary);
}

.stat-label {
  margin: var(--space-xs) 0 0 0;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.orders {
  padding: 0 var(--space-md) var(--space-md);
}

.orders h3 {
  margin: 0 0 var(--space-md) 0;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md);
  background-color: var(--color-surface-container-lowest);
  margin-bottom: var(--space-sm);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.order-info p {
  margin: var(--space-xs) 0;
}

.order-id {
  font-weight: 600;
}

.order-customer {
  color: var(--color-text-secondary);
}

.order-amount {
  color: var(--color-primary);
  font-weight: 600;
}

.order-status {
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
}

.order-status.pending {
  background-color: var(--color-tertiary-container);
  color: var(--color-on-tertiary-container);
}

.order-status.shipped {
  background-color: var(--color-primary-container);
  color: var(--color-on-primary-container);
}

.order-status.delivered {
  background-color: var(--color-secondary-container);
  color: var(--color-on-secondary-container);
}
</style>
