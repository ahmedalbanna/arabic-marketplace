<template>
  <div class="home">
    <!-- Header -->
    <header class="header">
      <div class="header-top">
        <button class="menu-btn">☰</button>
        <div class="logo">سوق اليمن</div>
      </div>
      <div class="search-section">
        <div class="search-bar">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="ابحث عن المنتجات أو المتاجر..." />
        </div>
        <button class="filter-btn">⚙️</button>
      </div>
    </header>

    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="hero-content">
        <h2>منصة تجارية يمنية رائدة</h2>
        <p>تسوق بأمان وسهولة من أفضل التجار المحليين</p>
        <div class="hero-actions">
          <button class="btn-primary">تصفح العروض</button>
          <button class="btn-outline">كن بائعاً معنا</button>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="categories-section">
      <h3 class="section-title">الأقسام</h3>
      <div class="categories-scroll">
        <div class="category-item" v-for="cat in categories" :key="cat.id" @click="goToExplore">
          <div class="category-icon">{{ cat.icon }}</div>
          <span class="category-name">{{ cat.name }}</span>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="products-section">
      <h3 class="section-title">منتجات مميزة</h3>
      <div class="product-grid">
        <div class="product-card" v-for="product in products" :key="product.id" @click="goToProduct(product.id)">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <div class="product-info">
            <p class="product-name">{{ product.name }}</p>
            <div class="product-rating">
              <span>⭐⭐⭐⭐⭐</span>
              <span class="rating-count">({{ product.rating }})</span>
            </div>
            <div class="product-price">
              <span class="price">{{ product.price.toLocaleString() }} ر.ي</span>
            </div>
            <button class="add-to-cart" @click.stop="addToCart">أضف للسلة</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Flash Sale -->
    <section class="flash-sale">
      <div class="flash-header">
        <h3>عروض حصرية وخصومات</h3>
        <span class="flash-badge">-50% خصم لفترة محدودة</span>
      </div>
      <div class="flash-card">
        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" alt="سماعات لاسلكية" />
        <div class="flash-info">
          <p class="flash-name">سماعات لاسلكية برو</p>
          <div class="flash-prices">
            <span class="flash-price">12,000 ر.ي</span>
            <span class="flash-old-price">24,000 ر.ي</span>
          </div>
          <div class="flash-progress">
            <div class="progress-bar"></div>
          </div>
          <p class="flash-stock">الكمية المتبقية محدودة</p>
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
        <span>الأقسام</span>
      </button>
      <button class="nav-item" @click="goToCart">
        <span>🛒</span>
        <span>السلة</span>
      </button>
      <button class="nav-item" @click="goToVendor">
        <span>👤</span>
        <span>حسابي</span>
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
  { id: 2, name: 'أزياء وملابس', icon: '👕' },
  { id: 3, name: 'منتجات بلدية وعسل يمني', icon: '🍯' },
  { id: 4, name: 'بن يمني أصيل', icon: '☕' },
  { id: 5, name: 'عطور وبخور', icon: '💄' },
  { id: 6, name: 'مستلزمات المنزل', icon: '🏠' },
])

const products = ref([
  { id: 1, name: 'هاتف سامسونج جالاكسي S24', price: 150000, rating: 23, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400' },
  { id: 2, name: 'بن خولاني يمني فاخر (درجة أولى 1 كجم)', price: 18000, rating: 48, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400' },
])

const goToProduct = (id: number) => router.push(`/product/${id}`)
const goToCart = () => router.push('/cart')
const goToExplore = () => router.push('/explore')
const goToVendor = () => router.push('/vendor')
const addToCart = () => {
  alert('تم إضافة المنتج للسلة')
}
</script>

<style scoped>
.home {
  padding-bottom: 80px;
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
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.menu-btn, .filter-btn {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  padding: var(--space-xs);
}

.logo {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-primary);
}

.search-section {
  display: flex;
  gap: var(--space-sm);
}

.search-bar {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  background-color: var(--color-surface-container);
  border-radius: var(--radius-default);
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
}

.search-icon {
  font-size: 1.1rem;
}

.search-bar input {
  flex: 1;
  border: none;
  background: none;
  font-family: var(--font-family);
  font-size: 0.9rem;
  outline: none;
}

.hero-banner {
  margin: var(--space-md);
  background: linear-gradient(135deg, var(--color-primary) 0%, #1976D2 100%);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  color: var(--color-on-primary);
}

.hero-content h2 {
  margin: 0 0 var(--space-xs) 0;
  font-size: 1.3rem;
}

.hero-content p {
  margin: 0 0 var(--space-md) 0;
  font-size: 0.9rem;
  opacity: 0.95;
}

.hero-actions {
  display: flex;
  gap: var(--space-sm);
}

.btn-primary, .btn-outline {
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: var(--radius-default);
  font-family: var(--font-family);
  font-size: 0.875rem;
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

.categories-section {
  padding: var(--space-md);
}

.section-title {
  margin: 0 0 var(--space-md) 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.categories-scroll {
  display: flex;
  gap: var(--space-md);
  overflow-x: auto;
  padding-bottom: var(--space-xs);
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  min-width: 70px;
  cursor: pointer;
}

.category-icon {
  width: 60px;
  height: 60px;
  background-color: var(--color-surface-container-lowest);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
}

.category-name {
  font-size: 0.75rem;
  text-align: center;
  color: var(--color-text-primary);
}

.products-section {
  padding: 0 var(--space-md) var(--space-md);
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
  height: 130px;
  object-fit: cover;
}

.product-info {
  padding: var(--space-sm);
}

.product-name {
  margin: 0 0 var(--space-xs) 0;
  font-size: 0.8rem;
  line-height: 1.4;
  height: 35px;
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
  font-size: 0.7rem;
}

.rating-count {
  color: var(--color-text-secondary);
}

.product-price {
  margin-bottom: var(--space-xs);
}

.price {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.95rem;
}

.add-to-cart {
  width: 100%;
  padding: var(--space-xs);
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);
  border: none;
  border-radius: var(--radius-default);
  font-family: var(--font-family);
  font-size: 0.8rem;
  cursor: pointer;
}

.flash-sale {
  margin: 0 var(--space-md) var(--space-md);
}

.flash-header {
  margin-bottom: var(--space-sm);
}

.flash-header h3 {
  margin: 0 0 var(--space-xs) 0;
  font-size: 1.1rem;
}

.flash-badge {
  background-color: var(--color-status-error);
  color: var(--color-on-primary);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
}

.flash-card {
  display: flex;
  gap: var(--space-sm);
  background-color: var(--color-surface-container-lowest);
  padding: var(--space-sm);
  border-radius: var(--radius-lg);
  border: 2px solid var(--color-status-error);
}

.flash-card img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: var(--radius-default);
}

.flash-info {
  flex: 1;
}

.flash-name {
  margin: 0 0 var(--space-xs) 0;
  font-size: 0.9rem;
}

.flash-prices {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
  margin-bottom: var(--space-xs);
}

.flash-price {
  color: var(--color-status-error);
  font-weight: 600;
}

.flash-old-price {
  color: var(--color-text-muted);
  text-decoration: line-through;
  font-size: 0.8rem;
}

.flash-progress {
  width: 100%;
  height: 6px;
  background-color: var(--color-surface-container);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: var(--space-xs);
}

.progress-bar {
  width: 30%;
  height: 100%;
  background-color: var(--color-status-error);
}

.flash-stock {
  margin: 0;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
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
  padding: var(--space-xs) 0 calc(var(--space-xs) + env(safe-area-inset-bottom, 0));
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
  flex: 1;
}

.nav-item.active {
  color: var(--color-primary);
}
</style>
EOF
echo "done"