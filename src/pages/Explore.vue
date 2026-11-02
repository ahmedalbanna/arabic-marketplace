<template>
  <div class="explore">
    <!-- Header -->
    <header class="header">
      <button class="back-btn" @click="goBack">←</button>
      <h1 class="page-title">استكشاف</h1>
      <div class="header-spacer"></div>
    </header>

    <!-- Categories Grid -->
    <div class="categories-grid">
      <div class="category-card" v-for="cat in categories" :key="cat.id" @click="goToCategory(cat.name)">
        <div class="category-icon">{{ cat.icon }}</div>
        <p class="category-name">{{ cat.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.back()
const goToCategory = (name: string) => {
  alert(`عرض منتجات قسم: ${name}`)
}

const categories = ref([
  { id: 1, name: 'إلكترونيات', icon: '📱' },
  { id: 2, name: 'أزياء وملابس', icon: '👕' },
  { id: 3, name: 'منتجات بلدية وعسل يمني', icon: '🍯' },
  { id: 4, name: 'بن يمني أصيل', icon: '☕' },
  { id: 5, name: 'عطور وبخور', icon: '💄' },
  { id: 6, name: 'مستلزمات المنزل', icon: '🏠' },
  { id: 7, name: 'أدوات ومعدات', icon: '🔧' },
  { id: 8, name: 'كتب وثقافة', icon: '📚' },
])
</script>

<style scoped>
.explore {
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

.categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  padding: var(--space-md);
}

.category-card {
  background-color: var(--color-surface-container-lowest);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  text-align: center;
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}

.category-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-color: var(--color-primary);
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-md);
  display: block;
}

.category-name {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-primary);
}
</style>
EOF
echo "done"