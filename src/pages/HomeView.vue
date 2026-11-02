<template>
  <div class="bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen">
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
            <span class="font-label-sm text-label-sm text-text-secondary leading-none">Home</span>
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

    <main class="flex flex-col relative w-full pt-16 pb-20 bg-background">
      <div class="flex flex-col w-full pb-8 space-y-5">
        <!-- Search & Filter Bar -->
        <div class="px-margin pt-2">
          <div class="flex items-center gap-space-sm bg-surface-container-low p-1.5 rounded-xl shadow-sm">
            <div class="flex-1 flex items-center gap-space-sm bg-surface-container-lowest px-3 py-2 rounded-lg">
              <span class="material-symbols-outlined text-text-muted text-[22px]">search</span>
              <input
                class="w-full bg-transparent text-text-primary font-body-md text-body-md placeholder:text-text-muted focus:outline-none"
                placeholder="ابحث عن المنتجات أو المتاجر..."
                type="text"
              />
            </div>
            <button
              aria-label="خيارات التصفية"
              class="flex items-center justify-center w-11 h-11 bg-primary-fixed text-on-primary-fixed rounded-lg transition-transform active:scale-95"
              type="button"
            >
              <span class="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>
        </div>

        <!-- Hero Promotional Banner -->
        <div class="px-margin">
          <div class="relative overflow-hidden rounded-xl bg-gradient-to-l from-primary-container to-primary text-on-primary p-5 shadow-md">
            <div class="absolute -left-10 -bottom-10 w-36 h-36 bg-surface-container-lowest/10 rounded-full blur-2xl pointer-events-none"></div>
            <div class="relative z-10 flex flex-col space-y-3">
              <div class="inline-flex items-center gap-1.5 self-start px-2.5 py-1 bg-surface-container-lowest/20 backdrop-blur-md rounded-full text-on-primary font-label-sm text-label-sm">
                <span class="material-symbols-outlined text-[14px]">verified</span>
                <span>ضمان وأمان الدفع المحلي</span>
              </div>
              <div class="space-y-1">
                <h2 class="font-headline-lg-mobile text-headline-lg-mobile leading-tight text-on-primary font-bold">
                  منصة تجارية يمنية رائدة
                </h2>
                <p class="font-body-sm text-body-sm text-on-primary/90 leading-relaxed max-w-[280px]">
                  تسوق بأمان وسهولة من أفضل التجار المحليين مع توصيل موثوق لكافة المدن.
                </p>
              </div>
              <div class="flex items-center gap-space-sm pt-1">
                <button
                  class="flex items-center justify-center px-4 py-2.5 bg-surface-container-lowest text-primary rounded-lg font-label-md text-label-md shadow-sm active:scale-95 transition-transform"
                  type="button"
                >
                  تصفح العروض
                </button>
                <button
                  class="flex items-center justify-center px-4 py-2.5 bg-on-primary/10 text-on-primary rounded-lg font-label-md text-label-md backdrop-blur-sm active:scale-95 transition-transform"
                  type="button"
                >
                  كن بائعاً معنا
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Categories Horizontal Scroll -->
        <div class="flex flex-col space-y-2.5">
          <div class="flex items-center justify-between px-margin">
            <h3 class="font-headline-sm text-headline-sm text-text-primary">التصنيفات الشائعة</h3>
            <a
              class="font-label-sm text-label-sm text-primary flex items-center gap-0.5"
              href="#"
              @click.prevent="goToExplore"
            >
              <span>عرض الكل</span>
              <span class="material-symbols-outlined text-[14px]">chevron_left</span>
            </a>
          </div>
          <div class="flex gap-space-sm overflow-x-auto px-margin no-scrollbar py-1">
            <a
              v-for="cat in categories"
              :key="cat.id"
              class="flex flex-col items-center flex-shrink-0 w-20 group"
              href="#"
              @click.prevent="goToExplore"
            >
              <div
                class="w-14 h-14 rounded-full bg-primary-fixed/50 flex items-center justify-center text-primary group-active:scale-95 transition-transform shadow-sm"
              >
                <span class="material-symbols-outlined text-[26px]">{{ cat.icon }}</span>
              </div>
              <span class="font-label-sm text-label-sm text-text-primary text-center mt-1.5 truncate w-full">
                {{ cat.name }}
              </span>
            </a>
          </div>
        </div>

        <!-- Flash Sale Card -->
        <div class="px-margin">
          <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm relative overflow-hidden">
            <div class="flex items-center justify-between pb-3">
              <div class="flex items-center gap-1.5">
                <div class="flex h-2.5 w-2.5 relative">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-error opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-status-error"></span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-text-primary">عروض حصرية وخصومات</h3>
              </div>
              <span class="bg-status-error/10 text-status-error font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">
                -50% لفترة محدودة
              </span>
            </div>
            <div class="flex gap-space-md items-center">
              <div class="relative w-28 h-28 flex-shrink-0 bg-surface-container-low rounded-lg overflow-hidden">
                <img
                  class="w-full h-full object-cover"
                  alt="سماعات لاسلكية برو"
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
                />
              </div>
              <div class="flex-1 flex flex-col justify-between h-28">
                <div>
                  <span class="font-label-sm text-label-sm text-text-muted">ملحقات رقمية</span>
                  <h4 class="font-label-lg text-label-lg text-text-primary line-clamp-1">
                    سماعات لاسلكية برو عازلة للصوت
                  </h4>
                  <div class="flex items-baseline gap-2 mt-1">
                    <span class="font-headline-sm text-headline-sm text-status-error font-bold">
                      12,000 <span class="text-xs font-normal">ر.ي</span>
                    </span>
                    <span class="font-body-sm text-body-sm text-text-muted line-through">24,000 ر.ي</span>
                  </div>
                </div>
                <div class="space-y-1">
                  <div class="flex justify-between items-center font-label-sm text-label-sm">
                    <span class="text-text-secondary">تم بيع 78%</span>
                    <span class="text-status-warning font-semibold">متبقي 6 قطع</span>
                  </div>
                  <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                    <div class="bg-status-warning h-full rounded-full" style="width: 78%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Featured Products Section -->
        <div class="px-margin flex flex-col space-y-3">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-headline-sm text-headline-sm text-text-primary">منتجات مميزة</h3>
              <p class="font-body-sm text-body-sm text-text-secondary">
                مختارة بعناية من أفضل المتاجر اليمنية
              </p>
            </div>
            <a
              class="font-label-sm text-label-sm text-primary flex items-center gap-0.5"
              href="#"
              @click.prevent="goToExplore"
            >
              <span>عرض الكل</span>
              <span class="material-symbols-outlined text-[14px]">chevron_left</span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-space-sm">
            <div
              v-for="product in products"
              :key="product.id"
              class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between"
              @click="goToProduct(product.id)"
            >
              <div class="relative w-full aspect-square bg-surface-container-low overflow-hidden">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-full object-cover"
                />
                <button
                  aria-label="إضافة للمفضلة"
                  class="absolute top-2 left-2 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-text-secondary hover:text-error transition-colors"
                  type="button"
                  @click.stop="toggleFavorite(product.id)"
                >
                  <span class="material-symbols-outlined text-[18px]">favorite</span>
                </button>
                <span
                  v-if="product.shipping"
                  class="absolute bottom-2 right-2 bg-primary-container text-on-primary-container font-label-sm text-[10px] px-2 py-0.5 rounded"
                >
                  شحن مجاني
                </span>
              </div>
              <div class="p-3 flex flex-col flex-1 justify-between space-y-2">
                <div>
                  <span class="font-label-sm text-label-sm text-text-muted">{{ product.category }}</span>
                  <h4 class="font-label-md text-label-md text-text-primary line-clamp-2 leading-snug">
                    {{ product.name }}
                  </h4>
                  <div class="flex items-center gap-1 mt-1 text-status-warning">
                    <span
                      class="material-symbols-outlined text-[16px]"
                      style="font-variation-settings: 'FILL' 1;"
                    >
                      star
                    </span>
                    <span class="font-label-sm text-label-sm font-bold text-text-primary">
                      {{ product.rating }}
                    </span>
                    <span class="font-body-sm text-body-sm text-text-muted">({{ product.reviews }})</span>
                  </div>
                </div>
                <div class="pt-1">
                  <div class="font-headline-sm text-headline-sm text-text-primary font-bold">
                    {{ product.price.toLocaleString() }}
                    <span class="text-xs font-normal text-text-secondary">ر.ي</span>
                  </div>
                  <button
                    class="w-full mt-2 py-2 px-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 active:scale-95 transition-transform"
                    type="button"
                    @click.stop="addToCart(product.id)"
                  >
                    <span class="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                    <span>أضف للسلة</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust Badges & Local Assurance Section -->
        <div class="px-margin pt-2">
          <div class="bg-surface-container-low rounded-xl p-3 flex justify-around items-center text-center">
            <div class="flex flex-col items-center">
              <span class="material-symbols-outlined text-primary text-[24px]">verified_user</span>
              <span class="font-label-sm text-label-sm text-text-primary mt-1">دفع آمن ومحمي</span>
            </div>
            <div class="w-px h-8 bg-border"></div>
            <div class="flex flex-col items-center">
              <span class="material-symbols-outlined text-status-success text-[24px]">local_shipping</span>
              <span class="font-label-sm text-label-sm text-text-primary mt-1">توصيل سريع</span>
            </div>
            <div class="w-px h-8 bg-border"></div>
            <div class="flex flex-col items-center">
              <span class="material-symbols-outlined text-tertiary text-[24px]">support_agent</span>
              <span class="font-label-sm text-label-sm text-text-primary mt-1">دعم متواصل 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <nav
      class="fixed bottom-0 w-full z-50 pb-safe bg-background/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)]"
      data-active-classes="text-primary font-bold"
    >
      <div class="flex justify-around items-center h-16 px-space-xs">
        <a
          class="flex flex-col items-center justify-center min-w-[56px] h-12 transition-all text-primary font-bold"
          data-path="home"
          href="#"
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
          class="relative flex flex-col items-center justify-center min-w-[56px] h-12 text-text-secondary transition-all"
          data-path="cart"
          href="#"
          @click.prevent="goToCart"
        >
          <span class="material-symbols-outlined text-[24px]">shopping_cart</span>
          <span
            class="absolute top-1 right-3 min-w-[16px] h-[16px] px-0.5 bg-primary text-on-primary font-label-sm text-[9px] rounded-full flex items-center justify-center font-bold"
          >
            3
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const categories = ref([
  { id: 1, name: 'إلكترونيات', icon: 'devices' },
  { id: 2, name: 'أزياء وملابس', icon: 'apparel' },
  { id: 3, name: 'عسل ومنتجات بلدية', icon: 'hive' },
  { id: 4, name: 'بن يمني أصيل', icon: 'coffee' },
  { id: 5, name: 'عطور وبخور', icon: 'local_florist' },
  { id: 6, name: 'مستلزمات منزل', icon: 'chair' },
])

const products = ref([
  {
    id: 1,
    name: 'هاتف سامسونج جالاكسي S24 فائق السرعة',
    price: 150000,
    rating: 4.9,
    reviews: 23,
    category: 'هواتف ذكية',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    shipping: true,
  },
  {
    id: 2,
    name: 'بن خولاني يمني فاخر (درجة أولى 1 كجم)',
    price: 18000,
    rating: 5.0,
    reviews: 48,
    category: 'محاصيل يمنية',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    shipping: false,
  },
])

const goToProduct = (id: number) => router.push(`/product/${id}`)
const goToCart = () => router.push('/cart')
const goToExplore = () => router.push('/explore')
const goToVendor = () => router.push('/vendor')
const addToCart = (id: number) => {
  alert('تم إضافة المنتج للسلة')
  router.push('/cart')
}
const toggleFavorite = (id: number) => {
  alert('تم إضافة المنتج للمفضلة')
}
</script>
