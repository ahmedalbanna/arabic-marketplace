<template>
  <div class="bg-surface text-on-surface antialiased flex flex-col min-h-screen">
    <header class="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div class="h-16 px-gutter flex items-center justify-between">
        <div class="flex items-center gap-space-sm">
          <button
            aria-label="رجوع"
            class="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container active:scale-95 transition-all"
            onclick="history.back()"
            type="button"
          >
            <span class="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-primary font-bold tracking-wide">سوق اليمن</span>
            <h1 class="font-headline-sm text-headline-sm text-text-primary leading-tight line-clamp-1">إضافة عنوان توصيل جديد</h1>
          </div>
        </div>
        <div class="flex items-center gap-space-xs">
          <button
            aria-label="المساعدة الدعم"
            class="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
            type="button"
          >
            <span class="material-symbols-outlined text-[22px]">help</span>
          </button>
          <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span class="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface">
      <div class="flex flex-col w-full">
        <form class="flex flex-col gap-space-lg px-gutter py-space-md" id="addressForm" @submit.prevent="handleSubmit">
          <!-- Screen Sub-Header & Delivery Assurance Badge -->
          <div class="flex items-center justify-between bg-surface-container-low p-space-md rounded-xl shadow-sm">
            <div class="flex items-center gap-space-sm min-w-0">
              <div class="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-primary text-[22px]" style="font-variation-settings: 'FILL' 1;">location_on</span>
              </div>
              <div class="flex flex-col min-w-0">
                <h2 class="font-headline-sm text-headline-sm text-text-primary truncate">إضافة عنوان توصيل جديد</h2>
                <span class="font-body-sm text-body-sm text-text-secondary truncate">يرجى تحري الدقة لضمان وصول المندوب سريعاً</span>
              </div>
            </div>
            <span class="shrink-0 inline-flex items-center gap-1 bg-surface-container-highest px-space-sm py-space-xs rounded-full text-text-secondary font-label-sm text-label-sm">
              <span class="material-symbols-outlined text-[14px] text-secondary" style="font-variation-settings: 'FILL' 1;">verified</span>
              <span>مضمون</span>
            </span>
          </div>

          <!-- 1. Address Label / Type Selector -->
          <div class="flex flex-col gap-space-xs">
            <label class="font-label-lg text-label-lg text-text-primary flex items-center gap-space-xs">
              <span>نوع العنوان والتصنيف</span>
              <span class="text-error font-body-sm">*</span>
            </label>
            <div aria-label="نوع العنوان" class="grid grid-cols-3 gap-space-sm" role="radiogroup">
              <!-- Home Option (Selected) -->
              <label class="address-type-btn cursor-pointer relative flex flex-col items-center justify-center py-space-sm px-space-xs rounded-xl bg-primary text-on-primary shadow-sm transition-all duration-200">
                <input checked class="sr-only" name="address_type" type="radio" value="home" />
                <span class="material-symbols-outlined text-[24px] mb-1" style="font-variation-settings: 'FILL' 1;">home</span>
                <span class="font-label-md text-label-md font-semibold">المنزل</span>
              </label>
              <!-- Work Option -->
              <label class="address-type-btn cursor-pointer relative flex flex-col items-center justify-center py-space-sm px-space-xs rounded-xl bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-all duration-200">
                <input class="sr-only" name="address_type" type="radio" value="work" />
                <span class="material-symbols-outlined text-[24px] mb-1">work</span>
                <span class="font-label-md text-label-md font-semibold">العمل</span>
              </label>
              <!-- Other Option -->
              <label class="address-type-btn cursor-pointer relative flex flex-col items-center justify-center py-space-sm px-space-xs rounded-xl bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-all duration-200">
                <input class="sr-only" name="address_type" type="radio" value="other" />
                <span class="material-symbols-outlined text-[24px] mb-1">domain</span>
                <span class="font-label-md text-label-md font-semibold">أخرى</span>
              </label>
            </div>
          </div>

          <!-- 2. Recipient Information Block -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
            <!-- Recipient Name -->
            <div class="flex flex-col gap-space-xs">
              <label class="font-label-lg text-label-lg text-text-primary flex items-center justify-between" for="recipient_name">
                <span>اسم المستلم الثلاثي</span>
                <span class="font-body-sm text-body-sm text-text-muted">مطلوب للاستلام</span>
              </label>
              <div class="relative flex items-center bg-surface-container-low rounded-lg focus-within:bg-surface-container-lowest focus-within:shadow-[0_0_0_2px_#0061a4] transition-all">
                <span class="material-symbols-outlined text-text-secondary text-[22px] px-space-sm pointer-events-none">person</span>
                <input
                  class="w-full h-12 bg-transparent text-text-primary font-body-md text-body-md focus:outline-none pl-space-md pr-0"
                  id="recipient_name"
                  name="recipient_name"
                  placeholder="أدخل اسم الشخص الذي سيستلم الشحنة"
                  required
                  type="text"
                  value="أحمد محمد الكبسي"
                />
              </div>
            </div>

            <!-- Phone Number with Yemen (+967) Prefix -->
            <div class="flex flex-col gap-space-xs">
              <label class="font-label-lg text-label-lg text-text-primary flex items-center justify-between" for="phone_number">
                <span>رقم هاتف المستلم (واتساب والتوصيل)</span>
                <span class="text-error font-body-sm">*</span>
              </label>
              <div class="flex items-center gap-space-xs">
                <!-- National Prefix Badge -->
                <div class="h-12 px-space-md bg-surface-container flex items-center justify-center gap-space-xs rounded-lg text-text-primary font-label-md text-label-md shrink-0 select-none">
                  <span class="inline-flex w-5 h-3.5 bg-error rounded-[2px] relative overflow-hidden shadow-inner">
                    <span class="w-full h-1/3 bg-text-primary block"></span>
                    <span class="w-full h-1/3 bg-background block"></span>
                    <span class="w-full h-1/3 bg-error block"></span>
                  </span>
                  <span class="font-mono font-semibold" dir="ltr">+967</span>
                </div>
                <!-- Phone Input Field -->
                <div class="relative flex-1 flex items-center bg-surface-container-low rounded-lg focus-within:bg-surface-container-lowest focus-within:shadow-[0_0_0_2px_#0061a4] transition-all">
                  <input
                    class="w-full h-12 bg-transparent text-text-primary font-body-md text-body-md text-right px-space-md focus:outline-none"
                    dir="ltr"
                    id="phone_number"
                    maxlength="9"
                    name="phone_number"
                    placeholder="77XXXXXXX"
                    required
                    type="tel"
                    value="771234567"
                  />
                  <span class="material-symbols-outlined text-text-secondary text-[20px] pl-space-sm pointer-events-none">call</span>
                </div>
              </div>
              <p class="font-body-sm text-body-sm text-text-secondary flex items-center gap-1">
                <span class="material-symbols-outlined text-[15px] text-status-success">sms</span>
                <span>ستصلك رسالة تأكيد التوصيل عبر الواتساب فور انطلاق المندوب</span>
              </p>
            </div>
          </div>

          <!-- 3. Governorate & District Dropdowns -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
            <div class="grid grid-cols-2 gap-space-sm">
              <!-- Governorate Selection -->
              <div class="flex flex-col gap-space-xs">
                <label class="font-label-lg text-label-lg text-text-primary" for="governorate_select">
                  المحافظة <span class="text-error">*</span>
                </label>
                <div class="relative bg-surface-container-low rounded-lg focus-within:shadow-[0_0_0_2px_#0061a4] transition-all">
                  <select
                    class="w-full h-12 bg-transparent appearance-none font-body-md text-body-md text-text-primary pr-space-md pl-10 focus:outline-none rounded-lg cursor-pointer"
                    id="governorate_select"
                    name="governorate"
                  >
                    <option selected value="sanaa">صنعاء</option>
                    <option value="aden">عدن</option>
                    <option value="taiz">تعز</option>
                    <option value="hadramout">حضرموت</option>
                    <option value="hodeidah">الحديدة</option>
                    <option value="ibb">إب</option>
                  </select>
                  <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none text-[20px]">expand_more</span>
                </div>
              </div>
              <!-- District Selection -->
              <div class="flex flex-col gap-space-xs">
                <label class="font-label-lg text-label-lg text-text-primary" for="district_select">
                  المديرية <span class="text-error">*</span>
                </label>
                <div class="relative bg-surface-container-low rounded-lg focus-within:shadow-[0_0_0_2px_#0061a4] transition-all">
                  <select
                    class="w-full h-12 bg-transparent appearance-none font-body-md text-body-md text-text-primary pr-space-md pl-10 focus:outline-none rounded-lg cursor-pointer"
                    id="district_select"
                    name="district"
                  >
                    <option selected value="old_sanaa">صنعاء القديمة</option>
                    <option value="sabain">السبعين</option>
                    <option value="maeen">معين</option>
                    <option value="safiah">الصافية</option>
                    <option value="tahrir">التحرير</option>
                  </select>
                  <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none text-[20px]">expand_more</span>
                </div>
              </div>
            </div>
            <!-- Visual Area Map Reference Pin -->
            <div class="flex items-center gap-space-sm bg-primary-fixed/40 p-space-sm rounded-lg text-on-primary-fixed">
              <span class="material-symbols-outlined text-primary text-[20px] shrink-0">near_me</span>
              <span class="font-body-sm text-body-sm leading-tight">
                المنطقة محددة: <strong class="font-bold">أمانة العاصمة / نطاق صنعاء القديمة</strong> - تغطية توصيل سريعة خلال 24 ساعة.
              </span>
            </div>
          </div>

          <!-- 4. Street, Building & Landmark Precise Details -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
            <!-- Street Input -->
            <div class="flex flex-col gap-space-xs">
              <label class="font-label-lg text-label-lg text-text-primary" for="street_name">
                اسم الشارع / الحي <span class="text-error">*</span>
              </label>
              <div class="relative flex items-center bg-surface-container-low rounded-lg focus-within:bg-surface-container-lowest focus-within:shadow-[0_0_0_2px_#0061a4] transition-all">
                <span class="material-symbols-outlined text-text-secondary text-[22px] px-space-sm pointer-events-none">alt_route</span>
                <input
                  class="w-full h-12 bg-transparent text-text-primary font-body-md text-body-md focus:outline-none pl-space-md pr-0"
                  id="street_name"
                  name="street_name"
                  placeholder="مثال: شارع حدة، حارة البليلي"
                  required
                  type="text"
                  value="شارع الزبيري"
                />
              </div>
            </div>
            <!-- Building Details -->
            <div class="flex flex-col gap-space-xs">
              <label class="font-label-lg text-label-lg text-text-primary" for="building_info">
                تفاصيل المبنى والشقة <span class="text-error">*</span>
              </label>
              <div class="relative flex items-center bg-surface-container-low rounded-lg focus-within:bg-surface-container-lowest focus-within:shadow-[0_0_0_2px_#0061a4] transition-all">
                <span class="material-symbols-outlined text-text-secondary text-[22px] px-space-sm pointer-events-none">apartment</span>
                <input
                  class="w-full h-12 bg-transparent text-text-primary font-body-md text-body-md focus:outline-none pl-space-md pr-0"
                  id="building_info"
                  name="building_info"
                  placeholder="رقم العمارة، رقم الطابق، أو اسم المنزل"
                  required
                  type="text"
                  value="مبنى 15 - الطابق الثاني - شقة 4"
                />
              </div>
            </div>
            <!-- Prominent Landmark -->
            <div class="flex flex-col gap-space-xs">
              <label class="font-label-lg text-label-lg text-text-primary flex items-center justify-between" for="landmark_info">
                <span class="flex items-center gap-1">
                  <span>أقرب معلم مميز</span>
                  <span class="material-symbols-outlined text-status-warning text-[16px]">stars</span>
                </span>
                <span class="font-body-sm text-body-sm text-text-muted">يسهّل وصول السائق</span>
              </label>
              <div class="relative flex items-center bg-surface-container-low rounded-lg focus-within:bg-surface-container-lowest focus-within:shadow-[0_0_0_2px_#0061a4] transition-all">
                <span class="material-symbols-outlined text-text-secondary text-[22px] px-space-sm pointer-events-none">storefront</span>
                <input
                  class="w-full h-12 bg-transparent text-text-primary font-body-md text-body-md focus:outline-none pl-space-md pr-0"
                  id="landmark_info"
                  name="landmark_info"
                  placeholder="مثال: بجوار مستشفى الثورة، خلف سوبرماركت الهدى"
                  type="text"
                  value="بالقرب من جامع الصالح / جوار صيدلية التحرير"
                />
              </div>
            </div>
          </div>

          <!-- 5. Default Address Interactive Toggle Card -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
            <label class="flex items-start gap-space-md cursor-pointer select-none">
              <div class="relative flex items-center mt-1">
                <input checked class="peer sr-only" id="default_address_checkbox" name="is_default" type="checkbox" />
                <div class="w-6 h-6 rounded-md bg-surface-container-highest peer-checked:bg-primary transition-colors flex items-center justify-center shadow-inner">
                  <span class="material-symbols-outlined text-on-primary text-[18px] opacity-0 peer-checked:opacity-100 transition-opacity font-bold">check</span>
                </div>
              </div>
              <div class="flex flex-col">
                <span class="font-label-lg text-label-lg text-text-primary font-semibold">تعيين كعنوان افتراضي لطلبات التوصيل والشحن</span>
                <span class="font-body-sm text-body-sm text-text-secondary mt-0.5">
                  سيتم استخدام هذا العنوان تلقائياً عند إتمام كل عمليات الشراء المستقبلية.
                </span>
              </div>
            </label>
          </div>

          <!-- 6. Action Buttons Bar -->
          <div class="flex flex-col gap-space-sm pt-space-xs pb-space-lg">
            <!-- Primary Save Button -->
            <button
              class="w-full h-13 py-3 bg-primary hover:bg-surface-tint active:scale-[0.99] text-on-primary font-label-lg text-label-lg rounded-xl shadow-md flex items-center justify-center gap-space-sm transition-all duration-150"
              type="submit"
            >
              <span class="material-symbols-outlined text-[22px]">save</span>
              <span>حفظ العنوان والاستمرار</span>
            </button>
            <!-- Secondary Cancel Button -->
            <button
              class="w-full h-12 bg-surface-container hover:bg-surface-container-high active:scale-[0.99] text-text-primary font-label-lg text-label-lg rounded-xl flex items-center justify-center gap-space-xs transition-all duration-150"
              type="button"
              @click="goBack"
            >
              <span>إلغاء والعودة</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.back()

const handleSubmit = () => {
  const btn = document.getElementById('saveAddressBtn')!
  const originalContent = btn.innerHTML
  btn.classList.remove('bg-primary')
  btn.classList.add('bg-secondary')
  btn.innerHTML = `
    <span class="material-symbols-outlined text-[22px] animate-bounce">check_circle</span>
    <span>تم حفظ العنوان بنجاح!</span>
  `
  setTimeout(() => {
    btn.innerHTML = originalContent
    btn.classList.add('bg-primary')
    btn.classList.remove('bg-secondary')
  }, 2200)
}
</script>
