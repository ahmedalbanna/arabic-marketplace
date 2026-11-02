<template>
  <div class="desktop-home">
    <header class="header">
      <div class="header-container">
        <div class="logo">سوق اليمن</div>
        <div class="search-bar">
          <input type="text" placeholder="ابحث عن منتجات، ماركات وأكثر..." />
          <button>🔍 بحث</button>
        </div>
        <div class="header-actions">
          <button @click="goToVendor">لوحة البائع</button>
          <button @click="goToCart">🛒 السلة</button>
        </div>
      </div>
    </header>

    <nav class="categories-nav">
      <div class="nav-container">
        <a href="#" v-for="cat in categories" :key="cat.id">{{ cat.name }}</a>
      </div>
    </nav>

    <main class="main">
      <section class="banner">
        <h1>أكبر سوق إلكتروني في اليمن</h1>
        <p>اشتري كل ما تحتاجه بأفضل الأسعار</p>
      </section>

      <section class="products-section">
        <h2>منتجات مميزة</h2>
        <div class="product-grid">
          <div class="product-card" v-for="product in products" :key="product.id" @click="goToProduct(product.id)">
            <img :src="product.image" :alt="product.name" />
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <div class="price-row">
                <span class="price">{{ product.price }} ر.ي</span>
                <span class="old-price" v-if="product.oldPrice">{{ product.oldPrice }} ر.ي</span>
              </div>
              <button class="add-cart">أضف للسلة</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const categories = ref([
  { id: 1, name: 'إلكترونيات' },
  { id: 2, name: 'ملابس وأزياء' },
  { id: 3, name: 'منزل ومطبخ' },
  { id: 4, name: 'الجمال والعناية' },
  { id: 5, name: 'رياضة' },
])

const products = ref([
  { id: 1, name: 'هاتف سامسونج جالكسي S21', price: 450000, oldPrice: 550000, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400' },
  { id: 2, name: 'لابتوب HP EliteBook', price: 850000, oldPrice: 950000, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400' },
  { id: 3, name: 'ساعة ذكية Apple Watch', price: 320000, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
  { id: 4, name: 'كاميرا كانون DSLR', price: 750000, image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400' },
])

const goToProduct = (id: number) => router.push(`/product/${id}`)
const goToCart = () => router.push('/cart')
const goToVendor = () => router.push('/vendor')
</script>

<style scoped>
.desktop-home {
  background-color: var(--color-background);
}

.header {
  background-color: var(--color-surface-container-lowest);
  border-bottom: 2px solid var(--color-primary);
  padding: var(--space-md) 0;
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--margin-desktop);
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-primary);
}

.search-bar {
  flex: 1;
  display: flex;
  max-width: 600px;
}

.search-bar input {
  flex: 1;
  padding: var(--space-md);
  border: 2px solid var(--color-primary);
  border-radius: 0 var(--radius-default) var(--radius-default) 0;
  font-family: var(--font-family);
  font-size: 0.95rem;
}

.search-bar button {
  padding: var(--space-md) var(--space-xl);
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  border: none;
  border-radius: var(--radius-default) 0 0 var(--radius-default);
  cursor: pointer;
  font-family: var(--font-family);
}

.header-actions {
  display: flex;
  gap: var(--space-md);
}

.header-actions button {
  padding: var(--space-sm) var(--space-md);
  background: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-default);
  cursor: pointer;
  font-family: var(--font-family);
}

.categories-nav {
  background-color: var(--color-surface-container-lowest);
  border-bottom: 1px solid var(--color-border);
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--margin-desktop);
  display: flex;
  gap: var(--space-xl);
}

.nav-container a {
  padding: var(--space-md) 0;
  text-decoration: none;
  color: var(--color-text-primary);
  font-weight: 500;
}

.nav-container a:hover {
  color: var(--color-primary);
}

.main {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--space-lg) var(--margin-desktop);
}

.banner {
  background: linear-gradient(90deg, var(--color-primary), var(--color-primary-container));
  color: var(--color-on-primary);
  padding: var(--space-xl) * 2;
  border-radius: var(--radius-xl);
  text-align: center;
  margin-bottom: var(--space-xl);
}

.banner h1 {
  margin: 0 0 var(--space-md) 0;
  font-size: 2.5rem;
}

.banner p {
  margin: 0;
  font-size: 1.2rem;
}

.products-section h2 {
  margin: 0 0 var(--space-lg) 0;
  font-size: 1.8rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.product-card {
  background-color: var(--color-surface-container-lowest);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: var(--space-md);
}

.product-info h3 {
  margin: 0 0 var(--space-sm) 0;
  font-size: 0.95rem;
  height: 40px;
  overflow: hidden;
}

.price-row {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
  margin-bottom: var(--space-md);
}

.price {
  color: var(--color-primary);
  font-size: 1.2rem;
  font-weight: 600;
}

.old-price {
  color: var(--color-text-muted);
  text-decoration: line-through;
  font-size: 0.875rem;
}

.add-cart {
  width: 100%;
  padding: var(--space-sm);
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);
  border: none;
  border-radius: var(--radius-default);
  cursor: pointer;
  font-family: var(--font-family);
}
</style>
