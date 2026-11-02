<template>
  <div class="bg-background font-body-md text-body-md text-on-surface flex flex-col min-h-screen">
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
          <img
            alt="Souq Yemen Logo"
            class="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XQYn51TQWwaNuK--iOATEA97bPvlLsHUPfLmI6Vz_4lpwX9Pki9q4OVcE_a2CGZPSAQ0eGbCY_Yp3wvqPlci3C7GL04nU02xG-9WHeSoLXBYCnZcgqH5HlP4MdlWgeoYaHD567H0IHwgvGD0g5kPNCTgNgOqj55piU-CdNi_f191vXb4lfY_x_cyOToZ1Q6lSXixCSqFT6Wyls4uegAAm4riq-EVKJ5Q88447essjAJA"
          />
          <h1 class="font-headline-sm text-headline-sm text-text-primary truncate max-w-[180px]">تفاصيل المنتج</h1>
        </div>
        <div class="flex items-center gap-space-xs">
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
          <div class="w-11 h-11 flex items-center justify-center pl-1">
            <img
              alt="Profile"
              class="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKDznxjYmt_EwdtjrqhKKmk06HVlGVXv4esu1Iu8Ab2MToN_SPWdKtmRdGd6DhTxQQa7ZonD1WOYmbIRMz2QuVCMspu6ssj_MPZYLflObkc0HiQ8S2N4do0rBl3-sldsSY6ad_e2nbyBsnCzy-hNg8jSk__5FGqts7o13P4_y-aLVXi8TLuaW74EvByaT4OYlFNdiher8loaxqu4G9dJ4ezUfMKQgRoPX84V54eb-s"
            />
          </div>
        </div>
      </div>
    </header>

    <main class="flex flex-col relative w-full pt-16 pb-safe bg-background">
      <div class="flex flex-col w-full pb-24">
        <!-- Hero Gallery -->
        <div class="relative w-full bg-surface-container-lowest overflow-hidden shadow-sm">
          <div class="relative w-full aspect-square flex items-center justify-center p-space-md">
            <img
              class="w-full h-full object-contain transition-all duration-300"
              alt="منتج"
              :src="product.image"
              id="mainProductImg"
            />
            <div class="absolute top-space-md right-space-md flex flex-col gap-space-xs z-10">
              <span
                class="inline-flex items-center gap-1 px-2.5 py-1 bg-status-warning text-on-primary font-label-sm text-label-sm rounded-full shadow-sm"
              >
                <span class="material-symbols-outlined text-[14px]">local_fire_department</span>
                خصم 17%
              </span>
              <span
                class="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-bright/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm rounded-full shadow-sm"
              >
                <span class="material-symbols-outlined text-[14px]">verified</span>
                أصلي 100%
              </span>
            </div>
            <div class="absolute top-space-md left-space-md flex flex-col gap-space-xs z-10">
              <button
                aria-label="مشاركة المنتج"
                class="w-10 h-10 rounded-full bg-surface-bright/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-text-primary hover:text-primary transition-colors active:scale-95"
                id="shareBtn"
              >
                <span class="material-symbols-outlined text-[20px]">share</span>
              </button>
              <button
                aria-label="معاينة ثلاثية الأبعاد"
                class="w-10 h-10 rounded-full bg-surface-bright/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-text-primary hover:text-primary transition-colors active:scale-95"
                id="arViewBtn"
              >
                <span class="material-symbols-outlined text-[20px]">view_in_ar</span>
              </button>
            </div>
            <div class="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-10">
              <span class="dot-indicator w-6 h-2 rounded-full bg-primary transition-all"></span>
              <span class="dot-indicator w-2 h-2 rounded-full bg-surface-dim hover:bg-outline transition-all cursor-pointer"></span>
              <span class="dot-indicator w-2 h-2 rounded-full bg-surface-dim hover:bg-outline transition-all cursor-pointer"></span>
              <span class="dot-indicator w-2 h-2 rounded-full bg-surface-dim hover:bg-outline transition-all cursor-pointer"></span>
            </div>
          </div>
        </div>

        <!-- Product Header Card -->
        <div class="flex flex-col px-margin pt-space-md pb-space-sm bg-background">
          <div class="flex items-center justify-between text-text-secondary font-body-sm text-body-sm mb-1">
            <div class="flex items-center gap-1">
              <span>الإلكترونيات</span>
              <span class="material-symbols-outlined text-[14px]">chevron_left</span>
              <span>الهواتف الذكية</span>
              <span class="material-symbols-outlined text-[14px]">chevron_left</span>
              <span class="text-primary font-label-sm text-label-sm">سامسونج</span>
            </div>
            <span class="bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-label-sm text-label-sm">
              موديل 2024
            </span>
          </div>
          <h1 class="font-headline-lg-mobile text-headline-lg-mobile text-text-primary mt-1 mb-2">
            Samsung Galaxy S24 Ultra - هاتف ذكي سامسونج
          </h1>
          <div class="flex items-center flex-wrap gap-space-sm mb-3">
            <div class="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-lg">
              <div class="flex text-status-warning">
                <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
              </div>
              <span class="font-label-md text-label-md text-text-primary font-bold">4.9</span>
            </div>
            <span class="font-body-sm text-body-sm text-text-secondary">(23 تقييم موثق)</span>
            <span class="text-surface-dim">•</span>
            <span class="font-body-sm text-body-sm text-secondary font-medium flex items-center gap-0.5">
              <span class="material-symbols-outlined text-[14px]">verified_user</span>
              مشتريات حقيقية
            </span>
          </div>
          <div class="flex items-baseline justify-between p-space-sm bg-surface-container-low rounded-xl mb-4">
            <div>
              <div class="flex items-baseline gap-2">
                <span class="font-headline-xl-mobile text-headline-xl-mobile text-text-primary font-bold tracking-tight">
                  150,000
                </span>
                <span class="font-label-md text-label-md text-text-secondary">ر.ي يمني</span>
              </div>
              <div class="flex items-center gap-2 mt-0.5">
                <span class="font-body-sm text-body-sm text-text-muted line-through">180,000 ر.ي</span>
                <span class="bg-error-container text-on-error-container font-label-sm text-label-sm px-1.5 py-0.5 rounded">
                  وفر 30,000 ر.ي
                </span>
              </div>
            </div>
            <div class="text-left flex flex-col items-end">
              <span class="font-label-sm text-label-sm text-text-secondary">يشمل رسوم الجمرك المحلي</span>
              <span class="font-label-sm text-label-sm text-primary font-medium flex items-center gap-0.5 mt-0.5">
                <span class="material-symbols-outlined text-[14px]">bolt</span>
                شحن فوري لصنعاء
              </span>
            </div>
          </div>
        </div>

        <!-- Stock Urgency Pill -->
        <div class="px-margin mb-space-sm">
          <div class="flex items-center gap-space-sm p-3 bg-secondary-container/40 rounded-xl text-on-secondary-container">
            <span class="material-symbols-outlined text-secondary text-[22px]">inventory_2</span>
            <div class="flex flex-col min-w-0">
              <span class="font-label-md text-label-md font-semibold">متوفر في المخزن المركزي</span>
              <span class="font-body-sm text-body-sm text-text-secondary truncate">
                15 قطعة متبقية فقط في مخازن صنعاء - شارع حدة
              </span>
            </div>
          </div>
        </div>

        <!-- Merchant Info Card -->
        <div class="px-margin mb-space-md">
          <div class="flex items-center justify-between p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
            <div class="flex items-center gap-space-sm">
              <div class="relative w-12 h-12 rounded-full overflow-hidden bg-surface-container flex items-center justify-center flex-shrink-0">
                <img
                  alt="متجر محمد للإلكترونيات"
                  class="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=100"
                />
                <span class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-status-success rounded-full ring-2 ring-background"></span>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center gap-1.5">
                  <span class="font-label-lg text-label-lg text-text-primary">متجر محمد للإلكترونيات</span>
                  <span class="material-symbols-outlined text-secondary text-[16px]" title="تاجر موثق">verified</span>
                </div>
                <div class="flex items-center gap-2 mt-0.5">
                  <span class="inline-flex items-center gap-0.5 text-secondary font-label-sm text-label-sm">
                    <span class="material-symbols-outlined text-[12px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                    تاجر موثق
                  </span>
                  <span class="text-surface-dim">•</span>
                  <span class="font-body-sm text-body-sm text-text-secondary flex items-center gap-0.5">
                    <span class="material-symbols-outlined text-[12px] text-status-warning" style="font-variation-settings: 'FILL' 1;">star</span>
                    4.8 (1,420 عملية بيع)
                  </span>
                </div>
              </div>
            </div>
            <button class="px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors">
              زيارة المتجر
            </button>
          </div>
        </div>

        <!-- Product Configuration -->
        <div class="px-margin flex flex-col gap-space-md mb-space-lg">
          <!-- Color Selector -->
          <div class="flex flex-col gap-space-xs">
            <div class="flex items-center justify-between">
              <span class="font-label-lg text-label-lg text-text-primary">اللون المختار:</span>
              <span class="font-label-md text-label-md text-primary">أسود تيتانيوم</span>
            </div>
            <div class="flex items-center gap-3 pt-1">
              <button class="color-btn active relative w-10 h-10 rounded-full bg-[#1e2022] shadow-sm flex items-center justify-center ring-2 ring-primary ring-offset-2 ring-offset-background transition-all">
                <span class="material-symbols-outlined text-on-primary text-[18px]">check</span>
              </button>
              <button class="color-btn relative w-10 h-10 rounded-full bg-[#e3e4e6] shadow-sm flex items-center justify-center transition-all">
                <span class="material-symbols-outlined text-[#1e2022] text-[18px] opacity-0">check</span>
              </button>
              <button class="color-btn relative w-10 h-10 rounded-full bg-[#394a60] shadow-sm flex items-center justify-center transition-all">
                <span class="material-symbols-outlined text-on-primary text-[18px] opacity-0">check</span>
              </button>
            </div>
          </div>

          <!-- Storage Capacity -->
          <div class="flex flex-col gap-space-xs">
            <div class="flex items-center justify-between">
              <span class="font-label-lg text-label-lg text-text-primary">سعة التخزين:</span>
              <span class="font-label-sm text-label-sm text-text-secondary">ذاكرة 12GB RAM</span>
            </div>
            <div class="grid grid-cols-3 gap-space-sm pt-1">
              <button class="storage-btn py-2.5 px-3 rounded-xl bg-surface-container-low text-text-primary font-label-md text-label-md flex flex-col items-center justify-center hover:bg-surface-container transition-all">
                <span class="font-bold">128GB</span>
                <span class="text-[10px] text-text-secondary mt-0.5">140,000 ر.ي</span>
              </button>
              <button class="storage-btn active py-2.5 px-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md flex flex-col items-center justify-center shadow-sm transition-all">
                <span class="font-bold">256GB</span>
                <span class="text-[10px] text-on-primary/90 mt-0.5">150,000 ر.ي</span>
              </button>
              <button class="storage-btn py-2.5 px-3 rounded-xl bg-surface-container-low text-text-primary font-label-md text-label-md flex flex-col items-center justify-center hover:bg-surface-container transition-all">
                <span class="font-bold">512GB</span>
                <span class="text-[10px] text-text-secondary mt-0.5">172,000 ر.ي</span>
              </button>
            </div>
          </div>

          <!-- Quantity Stepper -->
          <div class="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-xl shadow-sm">
            <div class="flex flex-col">
              <span class="font-label-md text-label-md text-text-primary">الكمية المطلوبة</span>
              <span class="font-body-sm text-body-sm text-text-muted">الحد الأقصى: 3 لكل طلب</span>
            </div>
            <div class="flex items-center gap-3 bg-surface-container px-2 py-1 rounded-lg">
              <button class="w-8 h-8 rounded bg-surface-container-lowest text-text-primary flex items-center justify-center shadow-xs active:scale-95 transition-transform" @click="changeQty(-1)">
                <span class="material-symbols-outlined text-[18px]">remove</span>
              </button>
              <span class="font-label-lg text-label-lg font-bold text-text-primary w-6 text-center">{{ currentQty }}</span>
              <button class="w-8 h-8 rounded bg-surface-container-lowest text-text-primary flex items-center justify-center shadow-xs active:scale-95 transition-transform" @click="changeQty(1)">
                <span class="material-symbols-outlined text-[18px]">add</span>
              </button>
            </div>
          </div>

          <!-- Assurance Highlights -->
          <div class="grid grid-cols-2 gap-space-sm">
            <div class="flex items-center gap-2 p-2.5 bg-surface-container-low rounded-xl">
              <span class="material-symbols-outlined text-primary text-[20px]">security</span>
              <div class="flex flex-col">
                <span class="font-label-sm text-label-sm text-text-primary font-semibold">ضمان محلي معتمد</span>
                <span class="font-body-sm text-body-sm text-text-muted text-[10px]">12 شهر صيانة واستبدال</span>
              </div>
            </div>
            <div class="flex items-center gap-2 p-2.5 bg-surface-container-low rounded-xl">
              <span class="material-symbols-outlined text-secondary text-[20px]">local_shipping</span>
              <div class="flex flex-col">
                <span class="font-label-sm text-label-sm text-text-primary font-semibold">توصيل سريع</span>
                <span class="font-body-sm text-body-sm text-text-muted text-[10px]">خلال 24 ساعة بصنعاء</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Detail Tabs -->
        <div class="flex flex-col bg-surface-container-lowest shadow-sm mb-space-lg">
          <div class="flex items-center gap-2 px-margin pt-space-sm overflow-x-auto no-scrollbar">
            <button
              class="tab-btn active px-4 py-2.5 font-label-md text-label-md text-primary bg-primary/10 rounded-full font-semibold whitespace-nowrap transition-colors"
              @click="activeTab = 'specs'"
            >
              الوصف والمواصفات
            </button>
            <button
              class="tab-btn px-4 py-2.5 font-label-md text-label-md text-text-secondary bg-surface-container-low rounded-full whitespace-nowrap transition-colors"
              @click="activeTab = 'reviews'"
            >
              آراء المشترين (23)
            </button>
            <button
              class="tab-btn px-4 py-2.5 font-label-md text-label-md text-text-secondary bg-surface-container-low rounded-full whitespace-nowrap transition-colors"
              @click="activeTab = 'shipping'"
            >
              خيارات الشحن
            </button>
            <button
              class="tab-btn px-4 py-2.5 font-label-md text-label-md text-text-secondary bg-surface-container-low rounded-full whitespace-nowrap transition-colors"
              @click="activeTab = 'vendor'"
            >
              سياسة الضمان
            </button>
          </div>
          <div v-if="activeTab === 'specs'" class="tab-content flex flex-col p-margin">
            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
              استمتع بأقوى تجربة ذكاء اصطناعي مع سامسونج Galaxy S24 Ultra المزود بمعالج Snapdragon 8 Gen 3 فائق السرعة، وهيكل التيتانيوم المقاوم للصدمات مع قلم S-Pen مدمج وشاشة مسطحة بدقة QHD+.
            </p>
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm">
                <span class="text-text-secondary">المعالج:</span>
                <span class="font-label-md text-label-md text-text-primary">Snapdragon 8 Gen 3 (4 nm)</span>
              </div>
              <div class="flex items-center justify-between p-2.5 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm">
                <span class="text-text-secondary">الشاشة:</span>
                <span class="font-label-md text-label-md text-text-primary">6.8 بوصة Dynamic LTPO AMOLED 2X 120Hz</span>
              </div>
              <div class="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm">
                <span class="text-text-secondary">الكاميرا الرئيسية:</span>
                <span class="font-label-md text-label-md text-text-primary">200 MP + 50 MP + 12 MP + 10 MP</span>
              </div>
              <div class="flex items-center justify-between p-2.5 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm">
                <span class="text-text-secondary">البطارية والقدرة:</span>
                <span class="font-label-md text-label-md text-text-primary">5000 مللي أمبير / شحن 45 واط سلكي</span>
              </div>
              <div class="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm">
                <span class="text-text-secondary">مقاومة الماء والغبار:</span>
                <span class="font-label-md text-label-md text-text-primary">معيار IP68 حتى عمق 1.5 متر</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Bottom Action Bar -->
    <div class="fixed bottom-0 inset-x-0 z-30 bg-surface-bright/95 backdrop-blur-md shadow-[0_-4px_16px_rgba(0,0,0,0.06)] pb-safe">
      <div class="h-20 px-margin flex items-center justify-between gap-space-sm max-w-lg mx-auto">
        <button
          aria-label="أضف إلى المفضلة"
          class="w-12 h-12 flex-shrink-0 rounded-xl bg-surface-container flex items-center justify-center text-text-secondary hover:text-error transition-colors active:scale-95"
          @click="toggleFavorite"
        >
          <span class="material-symbols-outlined text-[24px]" :class="{ 'text-error': isFav }" :style="favStyle">favorite</span>
        </button>
        <button
          aria-label="محادثة التاجر"
          class="w-12 h-12 flex-shrink-0 rounded-xl bg-surface-container flex items-center justify-center text-text-secondary hover:text-primary transition-colors active:scale-95"
          @click="triggerChat"
        >
          <span class="material-symbols-outlined text-[24px]">chat</span>
        </button>
        <button
          class="flex-1 h-12 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md hover:bg-primary-container active:scale-98 transition-all"
          @click="addToCartMain"
        >
          <span class="material-symbols-outlined text-[20px]">shopping_bag</span>
          <span>أضف إلى السلة</span>
          <span class="text-on-primary/80 font-normal mr-1">| 150,000 ر.ي</span>
        </button>
      </div>
    </div>

    <!-- Toast Notification -->
    <div
      v-if="showToastMsg"
      class="fixed bottom-20 inset-x-4 z-40 bg-inverse-surface text-inverse-on-surface p-3.5 rounded-xl shadow-xl flex items-center justify-between transform transition-all duration-300"
      id="actionToast"
    >
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-secondary-fixed text-[22px]">check_circle</span>
        <span class="font-label-md text-label-md">{{ toastMessage }}</span>
      </div>
          <span class="material-symbols-outlined text-outline text-[18px]" @click="closeToast">close</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.back()
const goToCart = () => router.push('/cart')

const product = {
  id: 1,
  name: 'هاتف سامسونج جالاكسي S24 Ultra',
  price: 150000,
  oldPrice: 250000,
  rating: 4.8,
  image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600',
}

const activeTab = ref('specs')
const currentQty = ref(1)
const isFav = ref(false)
const showToastMsg = ref(false)
const toastMessage = ref('')

const changeQty = (amount: number) => {
  currentQty.value = Math.max(1, Math.min(3, currentQty.value + amount))
}

const closeToast = () => {
  showToastMsg.value = false
}

const toggleFavorite = () => {
  isFav.value = !isFav.value
  showToastMsg.value = true
  toastMessage.value = isFav.value ? 'تمت إضافة المنتج إلى قائمة الرغبات' : 'تم حذف المنتج من قائمة الرغبات'
  setTimeout(() => { showToastMsg.value = false }, 2800)
}

const triggerChat = () => {
  showToastMsg.value = true
  toastMessage.value = 'جارٍ فتح محادثة فورية مع متجر محمد للإلكترونيات...'
  setTimeout(() => { showToastMsg.value = false }, 2800)
}

const favStyle = computed(() => ({
  fontVariationSettings: isFav.value ? "'FILL' 1" : "'FILL' 0"
}))

const addToCartMain = () => {
  showToastMsg.value = true
  toastMessage.value = `تمت إضافة ${currentQty.value}x هاتف Samsung Galaxy S24 Ultra إلى السلة`
  setTimeout(() => { showToastMsg.value = false }, 2800)
}
</script>

<style scoped>
.color-btn.active {
  box-shadow: 0 0 0 2px #0061a4, 0 0 0 4px #ffffff;
}
.storage-btn.active {
  box-shadow: 0 0 0 2px #0061a4;
}
</style>