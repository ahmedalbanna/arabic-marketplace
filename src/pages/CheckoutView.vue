<template>
  <div class="checkout">
    <!-- Header -->
    <header class="header">
      <button class="back-btn" @click="goBack">←</button>
      <h1 class="page-title">إتمام الطلب</h1>
      <div class="header-spacer"></div>
    </header>

    <!-- Delivery Address -->
    <section class="section">
      <div class="section-header">
        <h3 class="section-title">عنوان التوصيل</h3>
        <button class="edit-btn">تعديل</button>
      </div>
      <div class="address-card">
        <div class="address-info">
          <p class="address-name">أحمد محمد</p>
          <p class="address-text">صنعاء، حي الزبيري، شارع 16</p>
          <p class="address-phone">+967 777 123 456</p>
        </div>
        <button class="change-address">تغيير العنوان</button>
      </div>
    </section>

    <!-- Payment Method -->
    <section class="section">
      <div class="section-header">
        <h3 class="section-title">طريقة الدفع</h3>
      </div>
      <div class="payment-options">
        <label class="payment-option">
          <input type="radio" name="payment" value="cash" checked />
          <div class="option-content">
            <span class="option-icon">💵</span>
            <span class="option-label">الدفع عند الاستلام</span>
          </div>
        </label>
        <label class="payment-option">
          <input type="radio" name="payment" value="wallet" />
          <div class="option-content">
            <span class="option-icon">📱</span>
            <span class="option-label">محفظة إلكترونية</span>
          </div>
        </label>
      </div>
    </section>

    <!-- Order Summary -->
    <section class="section">
      <div class="section-header">
        <h3 class="section-title">ملخص الطلب</h3>
      </div>
      <div class="order-summary">
        <div class="summary-row">
          <span>المجموع الفرعي</span>
          <span>520,000 ر.ي</span>
        </div>
        <div class="summary-row">
          <span>التوصيل</span>
          <span>5,000 ر.ي</span>
        </div>
        <div class="summary-row total">
          <span>الإجمالي</span>
          <span>525,000 ر.ي</span>
        </div>
      </div>
    </section>

    <!-- Confirm Button -->
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
  padding-bottom: 90px;
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

.section {
  margin: var(--space-md);
  padding: var(--space-md);
  background-color: var(--color-surface-container-lowest);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
}

.section-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.edit-btn, .view-all {
  background: none;
  border: none;
  color: var(--color-primary);
  font-family: var(--font-family);
  font-size: 0.85rem;
  cursor: pointer;
  text-decoration: underline;
}

.address-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md);
  background-color: var(--color-surface-container);
  border-radius: var(--radius-default);
  border: 1px solid var(--color-border);
}

.address-info {
  flex: 1;
}

.address-name {
  margin: 0 0 var(--space-xs) 0;
  font-weight: 600;
  font-size: 0.95rem;
}

.address-text {
  margin: var(--space-xs) 0;
  color: var(--color-text-secondary);
  font-size: 0.85rem;
}

.address-phone {
  margin: var(--space-xs) 0 0 0;
  color: var(--color-text-secondary);
  font-size: 0.85rem;
}

.change-address {
  background: none;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font-family: var(--font-family);
  font-size: 0.75rem;
  cursor: pointer;
}

.payment-options {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.payment-option {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  cursor: pointer;
  padding: var(--space-sm);
  border-radius: var(--radius-default);
  border: 2px solid transparent;
}

.payment-option input {
  width: 20px;
  height: 20px;
  accent-color: var(--color-primary);
}

.option-content {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.option-icon {
  font-size: 1.2rem;
}

.option-label {
  font-size: 0.9rem;
  color: var(--color-text-primary);
}

.order-summary {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
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
  font-weight: 600;
  cursor: pointer;
}
</style>
EOF
echo "done"