<template>
  <div class="explore">
    <header class="header">
      <button @click="goBack">←</button>
      <h1>استكشاف</h1>
      <div></div>
    </header>
    <div class="categories-grid">
      <div class="category-card" v-for="cat in categories" :key="cat.id">
        <div class="cat-icon">{{ cat.icon }}</div>
        <p>{{ cat.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.back()

const categories = ref([
  { id: 1, name: 'إلكترونيات', icon: '📱' },
  { id: 2, name: 'ملابس وأزياء', icon: '👕' },
  { id: 3, name: 'منزل ومطبخ', icon: '🏠' },
  { id: 4, name: 'الجمال والعناية', icon: '💄' },
  { id: 5, name: 'رياضة ولياقة', icon: '⚽' },
  { id: 6, name: 'كتب وثقافة', icon: '📚' },
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
}

.cat-icon {
  font-size: 2rem;
  margin-bottom: var(--space-sm);
}
</style>
