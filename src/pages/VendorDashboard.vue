<template>
  <div class="vendor">
    <!-- Header -->
    <header class="header">
      <button class="back-btn" @click="goBack">←</button>
      <h1 class="page-title">لوحة تحكم البائع</h1>
      <button class="add-btn">➕</button>
    </header>

    <!-- Stats -->
    <div class="stats">
      <div class="stat-card">
        <div class="stat-icon">📦</div>
        <p class="stat-value">{{ stats.products }}</p>
        <p class="stat-label">منتج</p>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📋</div>
        <p class="stat-value">{{ stats.orders }}</p>
        <p class="stat-label">طلب</p>
      </div>
      <div class="stat-card">
        <div class="stat-icon">💰</div>
        <p class="stat-value">{{ stats.sales.toLocaleString() }}</p>
        <p class="stat-label">ر.ي مبيعات</p>
      </div>
    </div>

    <!-- Recent Orders -->
    <section class="orders-section">
      <div class="section-header">
        <h3 class="section-title">الطلبات الحديثة</h3>
        <button class="view-all">عرض الكل</button>
      </div>
      <div class="orders-list">
        <div class="order-item" v-for="order in orders" :key="order.id">
          <div class="order-info">
            <p class="order-id">طلب #{{ order.id }}</p>
            <p class="order-customer">{{ order.customer }}</p>
            <p class="order-date">{{ order.date }}</p>
          </div>
          <div class="order-amount">
            <span class="amount">{{ order.amount.toLocaleString() }} ر.ي</span>
          </div>
          <span class="order-status" :class="order.status">{{ order.statusText }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.push('/')

const stats = {
  products: 15,
  orders: 8,
  sales: 12450000
}

const orders = ref([
  { id: 1001, customer: 'أحمد محمد', amount: 450000, status: 'pending', statusText: 'قيد الانتظار', date: 'منذ ساعتين' },
  { id: 1002, customer: 'فاطمة علي', amount: 85000, status: 'shipped', statusText: 'تم الشحن', date: 'منذ 5 ساعات' },
  { id: 1003, customer: 'محمد حسن', amount: 120000, status: 'delivered', statusText: 'تم التسليم', date: 'أمس' },
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

.add-btn {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
  padding: var(--space-md);
}

.stat-card {
  background-color: var(--color-surface-container-lowest);
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
}

.stat-icon {
  font-size: 1.8rem;
  margin-bottom: var(--space-xs);
}

.stat-value {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-primary);
}

.stat-label {
  margin: 0;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.orders-section {
  padding: 0 var(--space-md) var(--space-md);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
}

.section-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.view-all {
  background: none;
  border: none;
  color: var(--color-primary);
  font-family: var(--font-family);
  font-size: 0.85rem;
  cursor: pointer;
  text-decoration: underline;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md);
  background-color: var(--color-surface-container-lowest);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.order-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.order-id {
  margin: 0;
  font-weight: 600;
  font-size: 0.85rem;
}

.order-customer {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.85rem;
}

.order-date {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.7rem;
}

.order-amount {
  text-align: right;
}

.amount {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.9rem;
}

.order-status {
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
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
EOF
echo "done"