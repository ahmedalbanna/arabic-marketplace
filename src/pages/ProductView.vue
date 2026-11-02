<template>
  <div class="product">
    <!-- Header -->
    <header class="header">
      <button class="back-btn" @click="goBack">←</button>
      <h1 class="page-title">تفاصيل المنتج</h1>
      <button class="cart-btn" @click="goToCart">🛒</button>
    </header>

    <!-- Product Image -->
    <div class="image-section">
      <img :src="product.image" :alt="product.name" class="product-image" />
    </div>

    <!-- Product Details -->
    <div class="product-details">
      <div class="header-info">
        <h1 class="product-title">{{ product.name }}</h1>
        <div class="product-rating">
          <span class="stars">⭐⭐⭐⭐⭐</span>
          <span class="rating-count">({{ product.rating }})</span>
        </div>
      </div>

      <div class="product-price">
        <span class="price">{{ product.price.toLocaleString() }} ر.ي</span>
        <span class="old-price" v-if="product.oldPrice">{{ product.oldPrice.toLocaleString() }} ر.ي</span>
        <span class="discount">-{{ Math.round((1 - product.price / product.oldPrice) * 100) }}%</span>
      </div>

      <!-- Description -->
      <section class="description-section">
        <h3 class="section-title">الوصف</h3>
        <p class="description-text">{{ product.description }}</p>
      </section>

      <!-- Vendor Info -->
      <section class="vendor-section">
        <div class="vendor-header">
          <h3 class="section-title">البائع</h3>
          <button class="vendor-btn">زيارة المتجر</button>
        </div>
        <div class="vendor-info">
          <div class="vendor-avatar">🏪</div>
          <div class="vendor-details">
            <p class="vendor-name">{{ product.vendor.name }}</p>
            <p class="vendor-rating">
              <span>★ {{ product.vendor.rating }}</span>
              <span class="rating-text">({{ product.vendor.reviews }} تقييم)</span>
            </p>
            <span class="verified-badge">موثق</span>
          </div>
        </div>
      </section>
    </div>

    <!-- Bottom Actions -->
    <div class="actions">
      <button class="btn-outline" @click="addToCart">أضف للسلة</button>
      <button class="btn-primary">اشتري الآن</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const product = {
  id: 1,
  name: 'هاتف سامسونج جالاكسي S24',
  price: 150000,
  oldPrice: 250000,
  rating: 4.8,
  description: 'هاتف ذكي عالي الأداء مع شاشة AMOLED مقاس 6.2 إنش، كاميرا مزدوجة احترافية، وبطارية تدوم طويلاً',
  image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600',
  vendor: {
    name: 'متجر التقنية اليمنية',
    rating: 4.8,
    reviews: 120
  }
}

const goBack = () => router.back()
const goToCart = () => router.push('/cart')
const addToCart = () => {
  alert('تم إضافة المنتج للسلة')
  router.push('/cart')
}
</script>

<style scoped>
.product {
  padding-bottom: 90px;
  background-color: var(--color-background);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md);
  background-color: var(--color-surface-container-lowest);
  border-bottom: 1px solid var(--color-border);
}

.back-btn, .cart-btn {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
}

.page-title {
  margin: 0;
  font-size: 1rem;
  color: var(--color-text-secondary);
}

.image-section {
  width: 100%;
  height: 350px;
  background-color: var(--color-surface-container);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-details {
  padding: var(--space-md);
}

.header-info {
  margin-bottom: var(--space-sm);
}

.product-title {
  margin: 0 0 var(--space-xs) 0;
  font-size: 1.4rem;
  font-weight: 600;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
  font-size: 0.85rem;
}

.stars {
  color: var(--color-tertiary);
}

.rating-count {
  color: var(--color-text-secondary);
}

.product-price {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
  margin-bottom: var(--space-lg);
}

.price {
  color: var(--color-primary);
  font-size: 1.6rem;
  font-weight: 600;
}

.old-price {
  color: var(--color-text-muted);
  text-decoration: line-through;
  font-size: 1.1rem;
}

.discount {
  background-color: var(--color-tertiary-container);
  color: var(--color-on-tertiary-container);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.85rem;
}

.description-section, .vendor-section {
  margin-bottom: var(--space-lg);
}

.section-title {
  margin: 0 0 var(--space-sm) 0;
  font-size: 1rem;
  font-weight: 600;
}

.description-text {
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.vendor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-sm);
}

.vendor-btn {
  background: none;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font-family: var(--font-family);
  font-size: 0.75rem;
  cursor: pointer;
}

.vendor-info {
  display: flex;
  gap: var(--space-md);
  align-items: center;
  padding: var(--space-md);
  background-color: var(--color-surface-container);
  border-radius: var(--radius-default);
  border: 1px solid var(--color-border);
}

.vendor-avatar {
  width: 56px;
  height: 56px;
  background-color: var(--color-primary-container);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  flex-shrink: 0;
}

.vendor-details {
  flex: 1;
}

.vendor-name {
  margin: 0;
  font-weight: 600;
  font-size: 0.95rem;
}

.vendor-rating {
  margin: var(--space-xs) 0 0 0;
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.8rem;
}

.rating-text {
  color: var(--color-text-secondary);
}

.verified-badge {
  background-color: var(--color-primary-container);
  color: var(--color-on-primary);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: 0.7rem;
  font-weight: 600;
  margin-top: var(--space-xs);
  display: inline-block;
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

.btn-primary, .btn-outline {
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

.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 1.5px solid var(--color-primary);
}
</style>
EOF
echo "done"