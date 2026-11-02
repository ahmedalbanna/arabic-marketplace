<template>
  <div class="product">
    <header class="header">
      <button @click="goBack">←</button>
      <button @click="goToCart">🛒</button>
    </header>

    <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" alt="product" class="product-image" />

    <div class="product-details">
      <h1 class="product-title">هاتف سامسونج جالكسي S21</h1>
      <div class="product-price">
        <span class="price">450000 ر.ي</span>
        <span class="old-price">550000 ر.ي</span>
        <span class="discount">-18%</span>
      </div>

      <section class="description">
        <h3>الوصف</h3>
        <p>هاتف ذكي عالي الأداء مع شاشة AMOLED مقاس 6.2 إنش، كاميرا مزدوجة احترافية، وبطارية تدوم طويلاً</p>
      </section>

      <section class="vendor">
        <h3>البائع</h3>
        <div class="vendor-info">
          <div class="vendor-avatar">🏪</div>
          <div>
            <p class="vendor-name">متجر التقنية اليمنية</p>
            <p class="vendor-rating">★ 4.8 (120 تقييم)</p>
          </div>
        </div>
      </section>
    </div>

    <div class="actions">
      <button class="btn-secondary" @click="addToCart">أضف للسلة</button>
      <button class="btn-primary">اشتري الآن</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.back()
const goToCart = () => router.push('/cart')
const addToCart = () => {
  alert('تم إضافة المنتج للسلة')
  router.push('/cart')
}
</script>

<style scoped>
.product {
  padding-bottom: 80px;
  background-color: var(--color-background);
}

.header {
  display: flex;
  justify-content: space-between;
  padding: var(--space-md);
  background-color: var(--color-surface-container-lowest);
}

.header button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.product-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.product-details {
  padding: var(--space-md);
}

.product-title {
  margin: 0 0 var(--space-md) 0;
  font-size: 1.3rem;
}

.product-price {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
  margin-bottom: var(--space-lg);
}

.price {
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 600;
}

.old-price {
  color: var(--color-text-muted);
  text-decoration: line-through;
}

.discount {
  background-color: var(--color-tertiary);
  color: var(--color-on-tertiary);
  padding: 4px 8px;
  border-radius: var(--radius-sm);
}

.description, .vendor {
  margin-bottom: var(--space-lg);
}

.description h3, .vendor h3 {
  margin: 0 0 var(--space-sm) 0;
}

.vendor-info {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
  padding: var(--space-md);
  background-color: var(--color-surface-container);
  border-radius: var(--radius-default);
}

.vendor-avatar {
  width: 50px;
  height: 50px;
  background-color: var(--color-primary-container);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.vendor-name {
  margin: 0;
  font-weight: 600;
}

.vendor-rating {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
}

.actions {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-md);
  background-color: var(--color-surface-container-lowest);
  border-top: 1px solid var(--color-border);
}

.btn-primary, .btn-secondary {
  flex: 1;
  padding: var(--space-md);
  border: none;
  border-radius: var(--radius-default);
  font-family: var(--font-family);
  font-size: 1rem;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.btn-secondary {
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);
}
</style>
