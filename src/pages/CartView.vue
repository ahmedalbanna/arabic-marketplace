<template>
  <div class="bg-surface font-body-md text-body-md text-text-primary flex flex-col min-h-screen">
    <header class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div class="h-16 px-margin flex items-center justify-between">
        <div class="flex items-center gap-space-sm">
          <img
            alt="Souq Yemen Logo"
            class="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XQYn51TQWwaNuK--iOATEA97bPvlLsHUPfLmI6Vz_4lpwX9Pki9q4OVcE_a2CGZPSAQ0eGbCY_Yp3wvqPlci3C7GL04nU02xG-9WHeSoLXBYCnZcgqH5HlP4MdlWgeoYaHD567H0IHwgvGD0g5kPNCTgNgOqj55piU-CdNi_f191vXb4lfY_x_cyOToZ1Q6lSXixCSqFT6Wyls4uegAAm4riq-EVKJ5Q88447essjAJA"
          />
          <div class="flex flex-col truncate">
            <span class="font-label-md text-label-md text-text-primary leading-tight">سوق اليمن</span>
            <span class="font-label-sm text-label-sm text-text-secondary leading-none">Cart</span>
          </div>
        </div>
        <div class="flex items-center gap-space-xs">
          <a
            aria-label="بحث"
            class="w-11 h-11 flex items-center justify-center text-text-primary hover:text-primary transition-colors"
            data-path="explore-categories"
            href="#"
            @click.prevent="goToExplore"
          >
            <span class="material-symbols-outlined text-[24px]">search</span>
          </a>
          <a
            aria-label="السلة"
            class="relative w-11 h-11 flex items-center justify-center text-text-primary hover:text-primary transition-colors"
            data-path="cart"
            href="#"
            @click.prevent="goToCart"
          >
            <span class="material-symbols-outlined text-[24px]">shopping_bag</span>
            <span
              class="absolute top-2 left-2 min-w-[18px] h-[18px] px-1 bg-primary text-on-primary font-label-sm text-[10px] rounded-full flex items-center justify-center font-bold"
            >
              3
            </span>
          </a>
          <a
            aria-label="الملف الشخصي المتجر"
            class="w-11 h-11 flex items-center justify-center pl-1"
            data-path="merchant-dashboard"
            href="#"
            @click.prevent="goToVendor"
          >
            <img
              alt="Profile"
              class="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKDznxjYmt_EwdtjrqhKKmk06HVlGVXv4esu1Iu8Ab2MToN_SPWdKtmRdGd6DhTxQQa7ZonD1WOYmbIRMz2QuVCMspu6ssj_MPZYLflObkc0HiQ8S2N4do0rBl3-sldsSY6ad_e2nbyBsnCzy-hNg8jSk__5FGqts7o13P4_y-aLVXi8TLuaW74EvByaT4OYlFNdiher8loaxqu4G9dJ4ezUfMKQgRoPX84V54eb-s"
            />
          </a>
        </div>
      </div>
    </header>

    <main class="flex flex-col relative w-full pt-16 pb-20 bg-surface">
      <div class="flex flex-col w-full pb-8">
        <!-- Free Shipping Progress Notice -->
        <section class="px-margin mb-space-sm">
          <div class="bg-primary-fixed/40 p-space-md rounded-xl flex flex-col gap-space-xs shadow-sm">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-space-xs text-on-primary-fixed">
                <span class="material-symbols-outlined text-[20px] text-primary" style="font-variation-settings: 'FILL' 1;">local_shipping</span>
                <span class="font-label-md text-label-md font-bold">متبقي 45,000 ر.ي للشحن المجاني!</span>
              </div>
              <span class="font-label-sm text-label-sm text-primary font-bold">85%</span>
            </div>
            <div class="w-full bg-background/80 h-2 rounded-full overflow-hidden">
              <div class="bg-primary h-full rounded-full transition-all duration-500 ease-out" style="width: 85%"></div>
            </div>
          </div>
          <p class="font-body-sm text-body-sm text-text-secondary leading-snug">
            أضف منتجات أخرى بقيمة بسيطة واحصل على توصيل مجاني داخل صنعاء وعدن.
          </p>
        </section>

        <!-- Cart Header -->
        <section class="px-margin mb-space-sm flex items-center justify-between">
          <div class="flex items-center gap-space-xs">
            <h1 class="font-headline-sm text-headline-sm text-text-primary">سلة المشتريات</h1>
            <span class="bg-surface-container px-2 py-0.5 rounded-full font-label-sm text-label-sm text-text-secondary">
              {{ cartItems.length }} عناصر
            </span>
          </div>
          <button
            class="text-error flex items-center gap-1 font-label-sm text-label-sm hover:opacity-80 transition-opacity"
            type="button"
            @click="clearCart"
          >
            <span class="material-symbols-outlined text-[16px]">delete_sweep</span>
            <span>تفريغ السلة</span>
          </button>
        </section>

        <!-- Cart Items -->
        <section class="px-margin flex flex-col gap-space-md mb-space-lg">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm transition-all duration-300"
          >
            <div class="flex gap-space-md">
              <div class="relative w-20 h-20 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
                <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
                <span class="absolute top-1 right-1 bg-surface-tint text-on-primary text-[10px] font-bold px-1.5 py-0.2 rounded">
                  أصلي
                </span>
              </div>
              <div class="flex flex-col flex-1 min-w-0 justify-between">
                <div class="flex items-start justify-between gap-space-xs">
                  <h2 class="font-headline-sm text-body-lg font-bold text-text-primary line-clamp-1 leading-snug">
                    {{ item.name }}
                  </h2>
                  <button
                    aria-label="حذف المنتج"
                    class="text-text-muted hover:text-error transition-colors p-1"
                    type="button"
                    @click="removeItem(item.id)"
                  >
                    <span class="material-symbols-outlined text-[20px]">delete_outline</span>
                  </button>
                </div>
                <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-text-secondary font-body-sm text-body-sm">
                  <span>اللون: <span class="text-text-primary font-medium">أسود تيتانيوم</span></span>
                  <span>•</span>
                  <span>السعة: <span class="text-text-primary font-medium">128GB</span></span>
                </div>
                <div class="flex items-baseline justify-between mt-1">
                  <div class="flex items-baseline gap-1">
                    <span class="font-headline-sm text-headline-sm text-text-primary font-bold">
                      {{ (item.price * item.quantity).toLocaleString() }}
                    </span>
                    <span class="font-label-sm text-label-sm text-text-secondary">ر.ي</span>
                    <span class="font-body-sm text-body-sm text-text-muted mr-1.5">
                      ({{ item.price.toLocaleString() }} × {{ item.quantity }})
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between pt-space-xs bg-surface-container-low/60 p-2 rounded-lg">
              <div class="flex items-center gap-1.5 text-status-success">
                <span class="material-symbols-outlined text-[16px]">verified</span>
                <span class="font-label-sm text-label-sm">متوفر بالمخزون - شحن فوري</span>
              </div>
              <div class="flex items-center bg-surface-container rounded-lg p-0.5 shadow-inner">
                <button
                  aria-label="تقليل الكمية"
                  class="w-7 h-7 flex items-center justify-center rounded-md bg-surface-container-lowest text-text-primary active:scale-95 transition-transform"
                  type="button"
                  @click="decreaseQty(item.id)"
                >
                  <span class="material-symbols-outlined text-[16px]">remove</span>
                </button>
                <span class="w-8 text-center font-label-md text-label-md font-bold text-text-primary">
                  {{ item.quantity }}
                </span>
                <button
                  aria-label="زيادة الكمية"
                  class="w-7 h-7 flex items-center justify-center rounded-md bg-surface-container-lowest text-text-primary active:scale-95 transition-transform"
                  type="button"
                  @click="increaseQty(item.id)"
                >
                  <span class="material-symbols-outlined text-[16px]">add</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Coupon Section -->
        <section class="px-margin mb-space-lg">
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
            <div class="flex items-center gap-space-xs mb-space-sm text-text-primary">
              <span class="material-symbols-outlined text-primary text-[20px]">sell</span>
              <span class="font-label-lg text-label-lg">كوبون التخفيض أو الرمز الترويجي</span>
            </div>
            <div class="flex items-center gap-space-xs">
              <div class="relative flex-1">
                <input
                  class="w-full h-12 bg-surface-container-low rounded-lg px-4 text-text-primary font-headline-sm text-body-lg uppercase tracking-wider focus:outline-none focus:bg-background transition-colors placeholder:font-body-md placeholder:text-text-muted"
                  id="coupon-input"
                  placeholder="أدخل رمز القسيمة هنا"
                  type="text"
                  value="SAVE10"
                />
                <span class="material-symbols-outlined absolute left-3 top-3 text-status-success text-[20px]" id="coupon-applied-icon">
                  check_circle
                </span>
              </div>
              <button
                class="h-12 px-space-lg bg-status-success text-on-secondary rounded-lg font-label-lg text-label-lg shadow-sm hover:brightness-105 active:scale-95 transition-all flex items-center gap-1"
                id="apply-coupon-btn"
                type="button"
              >
                <span>تم التطبيق</span>
              </button>
            </div>
            <div class="mt-space-xs flex items-center justify-between text-status-success bg-secondary-container/20 px-3 py-1.5 rounded-lg" id="coupon-alert">
              <div class="flex items-center gap-1.5 font-label-sm text-label-sm">
                <span class="material-symbols-outlined text-[16px]">celebration</span>
                <span>تهانينا! وفرت 10,000 ر.ي من إجمالي الطلب</span>
              </div>
              <button class="text-text-secondary hover:text-error text-[11px] underline" type="button">
                إلغاء
              </button>
            </div>
          </div>
        </section>

        <!-- Order Summary -->
        <section class="px-margin mb-space-lg">
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
            <h3 class="font-headline-sm text-headline-sm text-text-primary pb-1">ملخص الحساب</h3>
            <div class="flex justify-between items-center py-1">
              <span class="font-body-md text-body-md text-text-secondary">المجموع الفرعي</span>
              <div class="flex items-baseline gap-1 font-label-lg text-label-lg text-text-primary">
                <span id="subtotal-val">{{ subtotal.toLocaleString() }}</span>
                <span class="font-label-sm text-label-sm text-text-secondary">ر.ي</span>
              </div>
            </div>
            <div class="flex justify-between items-center py-1">
              <div class="flex items-center gap-1 text-text-secondary">
                <span class="font-body-md text-body-md">رسوم الشحن والتوصيل المحلي</span>
                <span class="material-symbols-outlined text-[16px] text-text-muted" title="توصيل سريع وآمن">local_shipping</span>
              </div>
              <div class="flex items-baseline gap-1 font-label-lg text-label-lg text-text-primary">
                <span>2,500</span>
                <span class="font-label-sm text-label-sm text-text-secondary">ر.ي</span>
              </div>
            </div>
            <div class="flex justify-between items-center py-1 text-status-success" id="discount-row">
              <div class="flex items-center gap-1">
                <span class="font-body-md text-body-md font-semibold">الخصم (كوبون SAVE10)</span>
                <span class="material-symbols-outlined text-[16px]">confirmation_number</span>
              </div>
              <div class="flex items-baseline gap-1 font-headline-sm text-headline-sm font-bold">
                <span>-10,000</span>
                <span class="font-label-sm text-label-sm">ر.ي</span>
              </div>
            </div>
            <div class="h-px bg-surface-container my-1"></div>
            <div class="flex justify-between items-center pt-1">
              <div class="flex flex-col">
                <span class="font-headline-sm text-headline-sm font-bold text-text-primary">المبلغ الإجمالي المطلوب</span>
                <span class="font-body-sm text-body-sm text-text-muted">شامل ضريبة المبيعات والقيمة المضافة</span>
              </div>
              <div class="text-left">
                <span class="font-headline-xl-mobile text-headline-xl-mobile font-bold tracking-tight" id="total-val">
                  {{ total.toLocaleString() }}
                </span>
                <span class="font-label-lg text-label-lg font-bold">ر.ي</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Trust & Local Assurance -->
        <section class="px-margin mb-space-md">
          <div class="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
            <div class="flex items-start gap-space-sm">
              <div class="w-10 h-10 rounded-full bg-status-success/15 flex items-center justify-center flex-shrink-0 text-status-success">
                <span class="material-symbols-outlined text-[24px]">verified_user</span>
              </div>
              <div class="flex flex-col">
                <span class="font-label-lg text-label-lg text-text-primary font-bold">ضمان سوق اليمن التجاري</span>
                <p class="font-body-sm text-body-sm text-text-secondary mt-0.5 leading-relaxed">
                  توصيل موثوق ومؤمن لجميع المحافظات اليمنية (صنعاء، عدن، تعز، حضرموت وباقي المدن) مع توفر خيار الدفع الآمن عند الاستلام أو عبر المحافظ الإلكترونية المعتمدة.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 pt-2 text-center">
              <div class="bg-surface-container-lowest p-2 rounded-lg flex flex-col items-center justify-center gap-1 shadow-sm">
                <span class="material-symbols-outlined text-primary text-[20px]">payments</span>
                <span class="font-label-sm text-[11px] text-text-primary font-semibold">دفع عند الاستلام</span>
              </div>
              <div class="bg-surface-container-lowest p-2 rounded-lg flex flex-col items-center justify-center gap-1 shadow-sm">
                <span class="material-symbols-outlined text-status-warning text-[20px]">swap_horizontal_circle</span>
                <span class="font-label-sm text-[11px] text-text-primary font-semibold">استرجاع سهل</span>
              </div>
              <div class="bg-surface-container-lowest p-2 rounded-lg flex flex-col items-center justify-center gap-1 shadow-sm">
                <span class="material-symbols-outlined text-status-success text-[20px]">package_2</span>
                <span class="font-label-sm text-[11px] text-text-primary font-semibold">تغليف محمي 100%</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Sticky Checkout Button -->
        <section class="sticky bottom-16 w-full z-40 bg-background/95 backdrop-blur-md px-margin py-space-sm shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
          <div class="flex items-center gap-space-md max-w-md mx-auto">
            <div class="flex flex-col flex-shrink-0">
              <span class="font-label-sm text-label-sm text-text-secondary">الإجمالي النهائي:</span>
              <div class="flex items-baseline gap-1 text-primary">
                <span class="font-headline-sm text-headline-sm font-bold" id="sticky-total-val">{{ total.toLocaleString() }}</span>
                <span class="font-label-sm text-label-sm">ر.ي</span>
              </div>
            </div>
            <button
              class="flex-1 h-12 bg-primary-container hover:bg-primary text-on-primary rounded-lg font-label-lg text-label-lg font-bold shadow-md hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              type="button"
              @click="goToCheckout"
            >
              <span class="material-symbols-outlined text-[20px]">lock</span>
              <span>متابعة إتمام الطلب</span>
              <span class="material-symbols-outlined text-[18px]">arrow_back</span>
            </button>
          </div>
        </section>
      </div>
    </main>

    <!-- Bottom Nav -->
    <nav
      class="fixed bottom-0 w-full z-50 pb-safe bg-background/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)]"
      data-active-classes="text-primary font-bold"
    >
      <div class="flex justify-around items-center h-16 px-space-xs">
        <a
          class="flex flex-col items-center justify-center min-w-[56px] h-12 text-text-secondary transition-all"
          data-path="home"
          href="#"
          @click.prevent="goHome"
        >
          <span class="material-symbols-outlined text-[24px]">home</span>
          <span class="font-label-sm text-label-sm mt-0.5">الرئيسية</span>
        </a>
        <a
          class="flex flex-col items-center justify-center min-w-[56px] h-12 text-text-secondary transition-all"
          data-path="explore-categories"
          href="#"
          @click.prevent="goToExplore"
        >
          <span class="material-symbols-outlined text-[24px]">explore</span>
          <span class="font-label-sm text-label-sm mt-0.5">استكشاف</span>
        </a>
        <a
          aria-current="page"
          class="relative flex flex-col items-center justify-center min-w-[56px] h-12 transition-all text-primary font-bold"
          data-path="cart"
          href="#"
        >
          <span class="material-symbols-outlined text-[24px]">shopping_cart</span>
          <span
            class="absolute top-1 right-3 min-w-[16px] h-[16px] px-0.5 bg-primary text-on-primary font-label-sm text-[9px] rounded-full flex items-center justify-center font-bold"
          >
            {{ cartItems.length }}
          </span>
          <span class="font-label-sm text-label-sm mt-0.5">السلة</span>
        </a>
        <a
          class="flex flex-col items-center justify-center min-w-[56px] h-12 text-text-secondary transition-all"
          data-path="merchant-dashboard"
          href="#"
          @click.prevent="goToVendor"
        >
          <span class="material-symbols-outlined text-[24px]">storefront</span>
          <span class="font-label-sm text-label-sm mt-0.5">المتجر</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => router.push('/')
const goToExplore = () => router.push('/explore')
const goToCart = () => router.push('/cart')
const goToVendor = () => router.push('/vendor')
const goToCheckout = () => router.push('/checkout')

const cartItems = ref([
  { id: 1, name: 'هاتف سامسونج جالاكسي S24 Ultra', price: 150000, quantity: 2, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200' },
  { id: 2, name: 'غلاف حماية كفر سيليكون أصلي شفاف', price: 5000, quantity: 1, image: 'https://images.unsplash.com/photo-1556656793-8776d3429aa9?w=200' },
])

const increaseQty = (id: number) => {
  const item = cartItems.value.find(i => i.id === id)
  if (item) item.quantity++
}

const decreaseQty = (id: number) => {
  const item = cartItems.value.find(i => i.id === id)
  if (item && item.quantity > 1) item.quantity--
}

const removeItem = (id: number) => {
  cartItems.value = cartItems.value.filter(i => i.id !== id)
}

const clearCart = () => {
  cartItems.value = []
}

const subtotal = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0))
const total = computed(() => subtotal.value + 2500 - 10000)
</script>
