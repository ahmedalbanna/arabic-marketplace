<template>
  <div class="desktop-home">
    <!-- Header -->
    <header class="header">
      <div class="header-container">
        <div class="logo">سوق اليمن</div>
        <div class="search-bar">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="ابحث عن المنتجات، الماركات وأكثر..." />
          <button class="search-btn">بحث</button>
        </div>
        <div class="header-actions">
          <button class="nav-btn" @click="goToVendor">
            <span class="nav-icon">👤</span>
            <span>لوحة البائع</span>
          </button>
          <button class="nav-btn cart-btn" @click="goToCart">
            <span class="nav-icon">🛒</span>
            <span>السلة</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Categories Navigation -->
    <nav class="categories-nav">
      <div class="nav-container">
        <div class="category-link active" v-for="cat in categories" :key="cat.id" @click="goToExplore">
          {{ cat.name }}
        </div>
      </div>
    </nav>

    <main class="main">
      <!-- Hero Banner -->
      <section class="hero-banner">
        <div class="hero-content">
          <h1>منصة تجارية يمنية رائدة</h1>
          <p>اشتري كل ما تحتاجه بأفضل الأسعار من التجار المحليين</p>
          <div class="hero-actions">
            <button class="btn-primary">تصفح العروض</button>
            <button class="btn-outline">كن بائعاً معنا</button>
          </div>
        </div>
      </section>

      <!-- Featured Products -->
      <section class="products-section">
        <div class="section-header">
          <h2>منتجات مميزة</h2>
          <button class="view-all">عرض الكل</button>
        </div>
        <div class="product-grid">
          <div class="product-card" v-for="product in products" :key="product.id" @click="goToProduct(product.id)">
            <div class="product-image-wrapper">
              <img :src="product.image" :alt="product.name" class="product-image" />
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <div class="product-rating">
                <span>⭐⭐⭐⭐⭐</span>
                <span class="rating-count">({{ product.rating }})</span>
              </div>
              <div class="product-price">
                <span class="price">{{ product.price.toLocaleString() }} ر.ي</span>
                <span class="old-price" v-if="product.oldPrice">{{ product.oldPrice.toLocaleString() }} ر.ي</span>
              </div>
            </div>
            <button class="add-to-cart" @click.stop="addToCart(product.id)">أضف للسلة</button>
          </div>
        </div>
      </section>

      <!-- Flash Sale -->
      <section class="flash-sale">
        <div class="flash-content">
          <div class="flash-info">
            <h3>عروض حصرية وخصومات</h3>
            <p>خصومات تصل إلى 50% لفترة محدودة</p>
            <button class="btn-primary">تسوق العروض</button>
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
  { id: 2, name: 'أزياء وملابس' },
  { id: 3, name: 'عسل ومنتجات بلدية' },
  { id: 4, name: 'بن يمني أصيل' },
  { id: 5, name: 'عطور وبخور' },
  { id: 6, name: 'مستلزمات المنزل' },
])

const products = ref([
  { id: 1, name: 'هاتف سامسونج جالاكسي S24', price: 150000, oldPrice: 250000, rating: 4.9, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600' },
  { id: 2, name: 'بن خولاني يمني فاخر (درجة أولى 1 كجم)', price: 18000, rating: 5.0, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600' },
  { id: 3, name: 'سماعات لاسلكية برو', price: 12000, oldPrice: 24000, rating: 4.8, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600' },
  { id: 4, name: 'ساعة ذكية أبل', price: 320000, rating: 4.7, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600' },
])

const goToProduct = (id: number) => router.push(`/product/${id}`)
const goToCart = () => router.push('/cart')
const goToVendor = () => router.push('/vendor')
const goToExplore = () => router.push('/explore')
const addToCart = (id: number) => alert('تمت إضافة المنتج للسلة')
</script>

<style scoped>
.desktop-home {
  background-color: var(--color-background);
  min-height: 100vh;
}

.header {
  background-color: var(--color-surface-container-lowest);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-md) 0;
  position: sticky;
  top: 0;
  z-index: 100;
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
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-primary);
  flex-shrink: 0;
}

.search-bar {
  flex: 1;
  max-width: 700px;
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  background-color: var(--color-surface-container);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-default);
  padding: var(--space-xs) var(--space-sm);
}

.search-icon {
  font-size: 1rem;
  color: var(--color-text-secondary);
}

.search-bar input {
  flex: 1;
  border: none;
  background: none;
  font-family: var(--font-family);
  font-size: 0.9rem;
  outline: none;
  color: var(--color-text-primary);
}

.search-btn {
  padding: var(--space-xs) var(--space-md);
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  border: none;
  border-radius: var(--radius-sm);
  font-family: var(--font-family);
  font-size: 0.85rem;
  cursor: pointer;
}

.header-actions {
  display: flex;
  gap: var(--space-md);
  flex-shrink: 0;
}

.nav-btn, .cart-btn {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-md);
  background: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-default);
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: var(--color-text-primary);
  cursor: pointer;
}

.cart-btn {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-on-primary);
}

.nav-icon {
  font-size: 1rem;
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
  align-items: center;
}

.category-link {
  padding: var(--space-md) 0;
  text-decoration: none;
  color: var(--color-text-primary);
  font-weight: 500;
  cursor: pointer;
}

.category-link.active {
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
}

.category-link:hover {
  color: var(--color-primary);
}

.main {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--space-lg) var(--margin-desktop);
}

.hero-banner {
  background: linear-gradient(135deg, var(--color-primary) 0%, #1976D2 100%);
  color: var(--color-on-primary);
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  margin-bottom: var(--space-xl);
  text-align: center;
}

.hero-content h1 {
  margin: 0 0 var(--space-md) 0;
  font-size: 2rem;
  font-weight: 700;
}

.hero-content p {
  margin: 0 0 var(--space-lg) 0;
  font-size: 1rem;
  opacity: 0.95;
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
}

.btn-primary, .btn-outline {
  padding: var(--space-sm) var(--space-xl);
  border: none;
  border-radius: var(--radius-default);
  font-family: var(--font-family);
  font-size: 0.9rem;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-on-primary);
  border: 1.5px solid var(--color-on-primary);
}

.products-section {
  margin-bottom: var(--space-xl);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-lg);
}

.section-header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.view-all {
  background: none;
  border: none;
  color: var(--color-primary);
  font-family: var(--font-family);
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.9rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-lg);
}

.product-card {
  background-color: var(--color-surface-container-lowest);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.product-image-wrapper {
  width: 100%;
  height: 220px;
  overflow: hidden;
  background-color: var(--color-surface-container);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  padding: var(--space-md);
}

.product-name {
  margin: 0 0 var(--space-xs) 0;
  font-size: 1rem;
  font-weight: 600;
  height: 40px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-xs);
  font-size: 0.8rem;
}

.rating-count {
  color: var(--color-text-secondary);
  font-size: 0.75rem;
}

.product-price {
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
}

.price {
  color: var(--color-primary);
  font-size: 1.2rem;
  font-weight: 600;
}

.old-price {
  color: var(--color-text-muted);
  text-decoration: line-through;
  font-size: 0.9rem;
}

.add-to-cart {
  width: 100%;
  padding: var(--space-sm);
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);
  border: none;
  border-radius: var(--radius-default);
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
}

.flash-sale {
  background-color: var(--color-tertiary-container);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  overflow: hidden;
}

.flash-content {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.flash-info h3 {
  margin: 0 0 var(--space-sm) 0;
  font-size: 1.5rem;
  color: var(--color-on-tertiary-container);
}

.flash-info p {
  margin: 0 0 var(--space-md) 0;
  color: var(--color-on-tertiary-container);
  opacity: 0.9;
}

.flash-info .btn-primary {
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);
}
</style>
