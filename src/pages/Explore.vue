<template>
  <div class="bg-surface font-body-md text-body-md text-text-primary flex flex-col min-h-screen">
    <header class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div class="h-16 px-margin flex items-center justify-between">
        <div class="flex items-center gap-space-sm">
          <button
            aria-label="رجوع"
            class="w-11 h-11 flex items-center justify-center text-text-primary hover:text-primary transition-colors"
            onclick="history.back()"
          >
            <span class="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 class="page-title">استكشاف</h1>
          <div class="w-11 h-11"></div>
        </div>
      </div>
    </header>

    <div class="categories-grid">
      <div
        v-for="cat in categories"
        :key="cat.id"
        class="category-card"
        @click="goToCategory(cat.name)"
      >
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
const goToCategory = (name: string) => alert(`عرض منتجات قسم: ${name}`)

const categories = ref([
  { id: 1, name: 'إلكترونيات', icon: '📱' },
  { id: 2, name: 'أزياء وملابس', icon: '👕' },
  { id: 3, name: 'عسل ومنتجات بلدية', icon: '🍯' },
  { id: 4, name: 'بن يمني أصيل', icon: '☕' },
  { id: 5, name: 'عطور وبخور', icon: '💄' },
  { id: 6, name: 'مستلزمات منزل', icon: '🏠' },
  { id: 7, name: 'أدوات ومعدات', icon: '🔧' },
  { id: 8, name: 'كتب وثقافة', icon: '📚' },
])
</script>

<style scoped>
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
