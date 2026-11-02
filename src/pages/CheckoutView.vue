<template>
  <div class="bg-surface font-body-md text-body-md text-text-primary flex flex-col min-h-screen">
    <header class="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div class="h-16 px-gutter flex items-center justify-between">
        <div class="flex items-center gap-space-sm">
          <button
            aria-label="رجوع"
            class="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container active:scale-95 transition-all"
            onclick="history.back()"
          >
            <span class="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <img
            alt="Souq Yemen Logo"
            class="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XQYn51TQWwaNuK--iOATEA97bPvlLsHUPfLmI6Vz_4lpwX9Pki9q4OVcE_a2CGZPSAQ0eGbCY_Yp3wvqPlci3C7GL04nU02xG-9WHeSoLXBYCnZcgqH5HlP4MdlWgeoYaHD567H0IHwgvGD0g5kPNCTgNgOqj55piU-CdNi_f191vXb4lfY_x_cyOToZ1Q6lSXixCSqFT6Wyls4uegAAm4riq-EVKJ5Q88447essjAJA"
          />
          <h1 class="font-headline-sm text-headline-sm text-text-primary truncate max-w-[180px]">إتمام الطلب</h1>
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

    <main class="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface">
      <div class="flex flex-col w-full pb-32">
        <!-- Progress Stepper -->
        <div class="w-full bg-surface-container-low px-margin py-space-md shadow-sm">
          <div class="flex items-center justify-between relative max-w-md mx-auto">
            <div class="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-1 bg-surface-container-highest z-0"></div>
            <div class="absolute top-1/2 right-4 w-2/3 -translate-y-1/2 h-1 bg-primary-container z-0 transition-all duration-300"></div>
            <!-- Step 1: Address (Done) -->
            <div class="flex flex-col items-center gap-1 relative z-10">
              <div class="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                <span class="material-symbols-outlined text-[16px]">check</span>
              </div>
              <span class="font-label-sm text-label-sm text-on-surface font-bold">العنوان</span>
            </div>
            <!-- Step 2: Shipping (Done) -->
            <div class="flex flex-col items-center gap-1 relative z-10">
              <div class="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                <span class="material-symbols-outlined text-[16px]">check</span>
              </div>
              <span class="font-label-sm text-label-sm text-on-surface font-bold">الشحن</span>
            </div>
            <!-- Step 3: Payment (Active) -->
            <div class="flex flex-col items-center gap-1 relative z-10">
              <div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md scale-110">
                <span class="font-label-md text-label-md font-bold">3</span>
              </div>
              <span class="font-label-sm text-label-sm text-primary font-bold">الدفع</span>
            </div>
            <!-- Step 4: Confirm (Pending) -->
            <div class="flex flex-col items-center gap-1 relative z-10">
              <div class="w-7 h-7 rounded-full bg-surface-container-highest text-text-muted flex items-center justify-center">
                <span class="font-label-sm text-label-sm font-bold">4</span>
              </div>
              <span class="font-label-sm text-label-sm text-text-muted">التأكيد</span>
            </div>
          </div>
        </div>

        <div class="px-margin flex flex-col gap-space-lg mt-space-md">
          <!-- Section 1: Shipping Address -->
          <section class="flex flex-col gap-space-sm">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-primary text-[20px]">location_on</span>
                <h2 class="font-headline-sm text-headline-sm text-on-surface">عنوان التوصيل</h2>
              </div>
              <button class="flex items-center gap-1 text-primary hover:opacity-80 transition-opacity" type="button">
                <span class="material-symbols-outlined text-[18px]">add_circle</span>
                <span class="font-label-md text-label-md">إضافة عنوان جديد</span>
              </button>
            </div>
            <div class="flex flex-col gap-space-sm" id="address-group">
              <!-- Address Option 1 (Selected) -->
              <label
                class="cursor-pointer flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                type="button"
              >
                <div class="mt-1 flex items-center justify-center">
                  <input checked class="w-5 h-5 accent-primary cursor-pointer" name="delivery_address" type="radio" value="home" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-space-xs">
                    <span class="font-label-lg text-label-lg text-on-surface font-bold">المنزل</span>
                    <span class="bg-primary/10 text-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full">افتراضي</span>
                  </div>
                  <p class="font-body-md text-body-md text-text-secondary mt-1">صنعاء، شارع حدة، خلف مجمع الأمل، عمارة 4 - شقة 2</p>
                  <p class="font-body-sm text-body-sm text-text-muted mt-0.5">رقم التواصل: +967 777 123 456</p>
                </div>
                <div class="self-center">
                  <span class="material-symbols-outlined text-text-muted hover:text-primary transition-colors text-[20px]">edit</span>
                </div>
              </label>
              <!-- Address Option 2 -->
              <label class="cursor-pointer flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container-low shadow-sm hover:shadow-md transition-all relative overflow-hidden" type="button">
                <div class="mt-1 flex items-center justify-center">
                  <input class="w-5 h-5 accent-primary cursor-pointer" name="delivery_address" type="radio" value="work" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-space-xs">
                    <span class="font-label-lg text-label-lg text-on-surface font-bold">مقر العمل</span>
                  </div>
                  <p class="font-body-md text-body-md text-text-secondary mt-1">صنعاء، شارع الزبيري، برج النور، الطابق 3 - مكتب 12</p>
                  <p class="font-body-sm text-body-sm text-text-muted mt-0.5">رقم التواصل: +967 733 987 654</p>
                </div>
                <div class="self-center">
                  <span class="material-symbols-outlined text-text-muted hover:text-primary transition-colors text-[20px]">edit</span>
                </div>
              </label>
            </div>
          </section>

          <!-- Section 2: Shipping Method -->
          <section class="flex flex-col gap-space-sm">
            <div class="flex items-center gap-space-xs">
              <span class="material-symbols-outlined text-primary text-[20px]">local_shipping</span>
              <h2 class="font-headline-sm text-headline-sm text-on-surface">طريقة التوصيل</h2>
            </div>
            <div class="flex flex-col gap-space-sm" id="shipping-group">
              <!-- Shipping Option 1 (Standard - Selected) -->
              <label class="cursor-pointer flex items-center justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all" type="button">
                <div class="flex items-center gap-space-sm">
                  <input checked class="w-5 h-5 accent-primary cursor-pointer" name="shipping_method" type="radio" value="standard" />
                  <div>
                    <div class="font-label-lg text-label-lg text-on-surface font-bold">التوصيل العادي</div>
                    <div class="font-body-sm text-body-sm text-text-secondary">خلال 3 - 5 أيام عمل لجميع المحافظات</div>
                  </div>
                </div>
                <div class="font-label-lg text-label-lg text-primary font-bold">
                  2,500 <span class="font-body-sm text-body-sm text-text-secondary">ر.ي</span>
                </div>
              </label>
              <!-- Shipping Option 2 (Express) -->
              <label class="cursor-pointer flex items-center justify-between p-space-md rounded-xl bg-surface-container-low shadow-sm hover:shadow-md transition-all" type="button">
                <div class="flex items-center gap-space-sm">
                  <input class="w-5 h-5 accent-primary cursor-pointer" name="shipping_method" type="radio" value="express" />
                  <div class="flex items-center gap-1.5">
                    <span class="font-label-lg text-label-lg text-on-surface font-bold">التوصيل السريع (إكسبريس)</span>
                    <span class="material-symbols-outlined text-status-warning text-[18px]">bolt</span>
                  </div>
                  <div class="font-body-sm text-body-sm text-text-secondary">تسليم مباشر خلال 24 - 48 ساعة</div>
                </div>
                <div class="font-label-lg text-label-lg text-primary font-bold">
                  5,000 <span class="font-body-sm text-body-sm text-text-secondary">ر.ي</span>
                </div>
              </label>
            </div>
          </section>

          <!-- Section 3: Payment Method -->
          <section class="flex flex-col gap-space-sm">
            <div class="flex items-center gap-space-xs">
              <span class="material-symbols-outlined text-primary text-[20px]">account_balance_wallet</span>
              <h2 class="font-headline-sm text-headline-sm text-on-surface">طريقة الدفع</h2>
            </div>
            <div class="flex flex-col gap-space-sm">
              <!-- COD (Selected) -->
              <label class="cursor-pointer flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all" type="button">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-space-sm">
                    <input checked class="w-5 h-5 accent-primary cursor-pointer" name="payment_method" type="radio" value="cod" />
                    <div class="flex items-center gap-2">
                      <span class="material-symbols-outlined text-secondary text-[22px]">payments</span>
                    </div>
                    <span class="font-label-lg text-label-lg text-on-surface font-bold">الدفع عند الاستلام (COD)</span>
                    <p class="font-body-sm text-body-sm text-text-secondary">تسليم المبلغ نقداً لمندوب التوصيل بعد المعاينة</p>
                  </div>
                </div>
                <span class="bg-secondary/10 text-secondary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">الموصى به</span>
              </label>
              <!-- Digital Wallets -->
              <label class="cursor-pointer flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm hover:shadow-md transition-all" type="button">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-space-sm">
                    <input class="w-5 h-5 accent-primary cursor-pointer" name="payment_method" type="radio" value="wallet" />
                    <div class="flex items-center gap-2">
                      <span class="material-symbols-outlined text-primary text-[22px]">phone_android</span>
                    </div>
                    <span class="font-label-lg text-label-lg text-on-surface font-bold">المحافظ الإلكترونية اليمنية</span>
                    <p class="font-body-sm text-body-sm text-text-secondary">جوالي، كاك بنك، ون كاش، فلوسك</p>
                  </div>
                </div>
                <span class="material-symbols-outlined text-text-muted text-[18px]">verified_user</span>
              </label>
              <!-- Exchange Networks -->
              <label class="cursor-pointer flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm hover:shadow-md transition-all" type="button">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-space-sm">
                    <input class="w-5 h-5 accent-primary cursor-pointer" name="payment_method" type="radio" value="remittance" />
                    <div class="flex items-center gap-2">
                      <span class="material-symbols-outlined text-status-warning text-[22px]">receipt_long</span>
                    </div>
                    <span class="font-label-lg text-label-lg text-on-surface font-bold">حوالة عبر شبكات الصرافة</span>
                    <p class="font-body-sm text-body-sm text-text-secondary">الكريمي إكسبرس، النجم للحوالات، المميز</p>
                  </div>
                </div>
                <span class="material-symbols-outlined text-text-muted text-[18px]">account_balance</span>
              </label>
            </div>
          </section>

          <!-- Section 4: Order Notes -->
          <section class="flex flex-col gap-space-sm">
            <div class="flex items-center gap-space-xs">
              <span class="material-symbols-outlined text-primary text-[20px]">description</span>
              <h2 class="font-headline-sm text-headline-sm text-on-surface">ملاحظات إضافية للطلب</h2>
            </div>
            <div class="relative">
              <textarea
                class="w-full p-space-md rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-muted outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all resize-none"
                placeholder="أدخل أي تفاصيل دقيقة لتسهيل وصول المندوب (مثال: علامة مميزة بجوار المنزل أو وقت الاستلام المفضل)..."
                rows="3"
              ></textarea>
            </div>
          </section>

          <!-- Mini Product Cart Preview -->
          <section class="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
            <div class="flex items-center justify-between">
              <span class="font-label-md text-label-md text-text-secondary">المنتجات في الطلب (3 عناصر)</span>
              <a class="font-label-sm text-label-sm text-primary flex items-center" href="#" @click.prevent="goToCart">
                عرض الكل
                <span class="material-symbols-outlined text-[16px]">chevron_left</span>
              </a>
            </div>
            <div class="flex items-center gap-space-sm overflow-x-auto py-1">
              <div class="w-16 h-16 rounded-lg bg-surface-container-highest flex-shrink-0 overflow-hidden shadow-sm">
                <img class="w-full h-full object-cover" alt="product" src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200" />
              </div>
              <div class="w-16 h-16 rounded-lg bg-surface-container-highest flex-shrink-0 overflow-hidden shadow-sm">
                <img class="w-full h-full object-cover" alt="product" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200" />
              </div>
              <div class="w-16 h-16 rounded-lg bg-surface-container-highest flex-shrink-0 overflow-hidden shadow-sm">
                <img class="w-full h-full object-cover" alt="product" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200" />
              </div>
            </div>
          </section>

          <!-- Order Summary Breakdown -->
          <section class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
            <div class="flex items-center gap-space-xs mb-1">
              <span class="material-symbols-outlined text-primary text-[20px]">calculate</span>
              <h3 class="font-headline-sm text-headline-sm text-on-surface">ملخص الدفع السريع</h3>
            </div>
            <div class="flex items-center justify-between font-body-md text-body-md text-text-secondary">
              <span>مجموع المنتجات (3):</span>
              <span class="font-bold text-on-surface">300,000 <span class="font-label-sm text-label-sm text-text-muted">ر.ي</span></span>
            </div>
            <div class="flex items-center justify-between font-body-md text-body-md text-text-secondary">
              <span>تكلفة الشحن والتوصيل:</span>
              <span class="font-bold text-on-surface" id="summary-shipping">2,500 <span class="font-label-sm text-label-sm text-text-muted">ر.ي</span></span>
            </div>
            <div class="flex items-center justify-between font-body-md text-body-md text-secondary font-medium">
              <span>خصم ترويجي خاص:</span>
              <span>- 0 <span class="font-label-sm text-label-sm">ر.ي</span></span>
            </div>
            <div class="h-px bg-surface-container-highest my-1"></div>
            <div class="flex items-center justify-between">
              <span class="font-headline-sm text-headline-sm text-on-surface font-bold">الإجمالي الكلي:</span>
              <div class="text-left">
                <span class="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold" id="summary-total">302,500</span>
                <span class="font-label-md text-label-md text-on-surface mr-1">ريال يمني</span>
              </div>
            </div>
          </section>

          <!-- Security Assurance Banner -->
          <div class="flex items-center justify-center gap-2 py-2 px-space-md bg-surface-container-low rounded-xl text-center">
            <span class="material-symbols-outlined text-status-success text-[18px]" style="font-variation-settings: 'FILL' 1;">verified</span>
            <span class="font-label-sm text-label-sm text-text-secondary">جميع عمليات الشراء مؤمنة بضمان سوق اليمن المالي بنسبة 100%</span>
          </div>
        </div>

        <!-- Sticky Bottom Checkout Action -->
        <div class="fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md px-margin py-space-md shadow-[0_-4px_16px_rgba(0,0,0,0.06)] pb-safe">
          <div class="max-w-md mx-auto flex flex-col gap-2">
            <div class="flex items-center justify-between px-1">
              <div class="flex flex-col">
                <span class="font-label-sm text-label-sm text-text-muted">المبلغ المستحق النهائي:</span>
                <span class="font-headline-sm text-headline-sm text-on-surface font-bold" id="sticky-total">302,500 ر.ي</span>
              </div>
              <div class="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                <span class="material-symbols-outlined text-[16px]">lock</span>
                <span>دفع آمن ومشفر</span>
              </div>
            </div>
            <button
              class="w-full h-12 bg-primary-container hover:bg-primary text-on-primary rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-space-sm shadow-md active:scale-[0.99] transition-all"
              type="button"
              @click="confirmOrder"
            >
              <span class="material-symbols-outlined text-[20px]">shopping_cart_checkout</span>
              <span>تأكيد وإرسال الطلب الآن</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goToCart = () => router.push('/cart')
const confirmOrder = () => {
  alert('تم تأكيد الطلب بنجاح!')
  router.push('/')
}
</script>
