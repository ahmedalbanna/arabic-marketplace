<template>
  <div class="checkout">
    <header class="header">
      <button @click="goBack">←</button>
      <h1>إتمام الطلب</h1>
      <div></div>
    </header>

    <section class="section">
      <h3>عنوان التوصيل</h3>
      <div class="address">
        <p><strong>أحمد محمد</strong></p>
        <p>صنعاء، حي الزبيري، شارع 16</p>
        <p>+967 777 123 456</p>
      </div>
    </section>

    <section class="section">
      <h3>طريقة الدفع</h3>
      <div class="payment-method">
        <label>
          <input type="radio" name="payment" value="cash" checked />
          <span>الدفع عند الاستلام</span>
        </label>
        <label>
          <input type="radio" name="payment" value="wallet" />
          <span>محفظة إلكترونية</span>
        </label>
      </div>
    </section>

    <section class="section">
      <h3>ملخص الطلب</h3>
      <div class="order-summary">
        <div class="summary-row">
          <span>المجموع الفرعي</span>
          <span>520000 ر.ي</span>
        </div>
        <div class="summary-row">
          <span>التوصيل</span>
          <span>5000 ر.ي</span>
        </div>
        <div class="summary-row total">
          <span>الإجمالي</span>
          <span>525000 ر.ي</span>
        </div>
      </div>
    </section>

    <button class="confirm-btn" @click="confirmOrder">تأكيد الطلب</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.back()
const confirmOrder = () => {
  alert('تم تأكيد الطلب بنجاح!')
  router.push('/')
}
</script>

<style scoped>
.checkout {
  padding-bottom: 80px;
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

.section {
  margin: var(--space-md);
  padding: var(--space-md);
  background-color: var(--color-surface-container-lowest);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.section h3 {
  margin: 0 0 var(--space-md) 0;
}

.address p {
  margin: var(--space-xs) 0;
  color: var(--color-text-secondary);
}

.payment-method {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.payment-method label {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  cursor: pointer;
}

.order-summary {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.summary-row {
  display: flex;
  justify-content: space-between;
}

.summary-row.total {
  font-weight: 600;
  font-size: 1.1rem;
  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-border);
}

.confirm-btn {
  margin: 0 var(--space-md);
  width: calc(100% - 2rem);
  padding: var(--space-md);
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);
  border: none;
  border-radius: var(--radius-default);
  font-family: var(--font-family);
  font-size: 1rem;
  cursor: pointer;
}
</style>
