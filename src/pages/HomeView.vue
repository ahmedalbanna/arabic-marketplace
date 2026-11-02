<template>
  <div class="home">
    <!-- Header -->
    <header class="header">
      <div class="header-top">
        <button class="icon-btn">☰</button>
        <div class="search-bar">
          <input type="text" placeholder="ابحث عن منتجات..." />
          <button>🔍</button>
        </div>
        <button class="icon-btn" @click="goToCart">🛒</button>
      </div>
      <!-- Categories -->
      <div class="categories">
        <div class="category-item" v-for="cat in categories" :key="cat.id" @click="goToExplore">
          <div class="category-icon">{{ cat.icon }}</div>
          <span class="category-name">{{ cat.name }}</span>
        </div>
      </div>
    </header>

    <!-- Banner -->
    <section class="banner">
      <div class="banner-content">
        <h2>عروض اليوم</h2>
        <p>خصومات تصل إلى 50%</p>
      </div>
    </section>

    <!-- Products -->
    <section class="products">
      <h3 class="section-title">منتجات مميزة</h3>
      <div class="product-grid">
        <div class="product-card" v-for="product in products" :key="product.id" @click="goToProduct(product.id)">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <div class="product-info">
            <p class="product-name">{{ product.name }}</p>
            <div class="product-price">
              <span class="price">{{ product.price }} ر.ي</span>
              <span class="old-price" v-if="product.oldPrice">{{ product.oldPrice }} ر.ي</span>
            </div>
            <span class="discount" v-if="product.discount">{{ product.discount }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Nav -->
    <nav class="bottom-nav">
      <button class="nav-item active">
        <span>🏠</span>
        <span>الرئيسية</span>
      </button>
      <button class="nav-item" @click="goToExplore">
        <span>🔍</span>
        <span>استكشاف</span>
      </button>
      <button class="nav-item" @click="goToCart">
        <span>🛒</span>
        <span>السلة</span>
      </button>
      <button class="nav-item" @click="goToVendor">
        <span>🏪</span>
        <span>البائع</span>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const categories = ref([
  { id: 1, name: 'إلكترونيات', icon: '📱' },
  { id: 2, name: 'ملابس', icon: '👕' },
  { id: 3, name: 'أثاث', icon: '🛏️' },
  { id: 4, name: 'طعام', icon: '🍔' },
  { id: 5, name: 'الجمال', icon: '💄' },
])

const products = ref([
  { id: 1, name: 'هاتف سامسونج جالكسي', price: 450000, oldPrice: 550000, discount: '-18%', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400' },
  { id: 2, name: 'ساعة ذكية', price: 85000, oldPrice: 120000, discount: '-29%', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
  { id: 3, name: 'حذاء رياضي', price: 65000, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400' },
  { id: 4, name: 'سماعات بلوتوث', price: 35000, oldPrice: 45000, discount: '-22%', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' },
])

const goToProduct = (id: number) => router.push(`/product/${id}`)
const goToCart = () => router.push('/cart')
const goToExplore = () => router.push('/explore')
const goToVendor = () => router.push('/vendor')
</script>

<style scoped>
.home {
  padding-bottom: 70px;
  background-color: var(--color-surface);
  min-height: 100vh;
}

.header {
  background-color: var(--color-surface-container-lowest);
  padding: var(--space-md);
  border-bottom: 1px solid var(--color-border);
}

.header-top {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
  margin-bottom: var(--space-md);
}

.icon-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: var(--space-sm);
}

.search-bar {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: var(--color-surface-container);
  border-radius: var(--radius-default);
  padding: var(--space-xs) var(--space-sm);
}

.search-bar input {
  flex: 1;
  border: none;
  background: none;
  padding: var(--space-sm);
  font-family: var(--font-family);
  outline: none;
}

.search-bar button {
  background: none;
  border: none;
  cursor: pointer;
}

.categories {
  display: flex;
  gap: var(--space-md);
  overflow-x: auto;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  min-width: 60px;
  cursor: pointer;
}

.category-icon {
  width: 50px;
  height: 50px;
  background-color: var(--color-primary-container);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.category-name {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.banner {
  margin: var(--space-md);
  height: 150px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  padding: var(--space-lg);
  color: var(--color-on-primary);
}

.banner-content h2 {
  margin: 0 0 var(--space-xs) 0;
  font-size: 1.5rem;
}

.banner-content p {
  margin: 0;
}

.products {
  padding: var(--space-md);
}

.section-title {
  margin: 0 0 var(--space-md) 0;
  font-size: 1.1rem;
}

.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
}

.product-card {
  background-color: var(--color-surface-container-lowest);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
  cursor: pointer;
}

.product-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.product-info {
  padding: var(--space-sm);
  position: relative;
}

.product-name {
  margin: 0 0 var(--space-xs) 0;
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-price {
  display: flex;
  gap: var(--space-xs);
  align-items: center;
}

.price {
  color: var(--color-primary);
  font-weight: 600;
}

.old-price {
  color: var(--color-text-muted);
  text-decoration: line-through;
  font-size: 0.75rem;
}

.discount {
  position: absolute;
  top: var(--space-xs);
  left: var(--space-xs);
  background-color: var(--color-tertiary);
  color: var(--color-on-tertiary);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-size: 0.7rem;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-surface-container-lowest);
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-around;
  padding: var(--space-xs) 0;
}

.nav-item {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  font-size: 0.7rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  font-family: var(--font-family);
}

.nav-item.active {
  color: var(--color-primary);
}
</style>
