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
            <h1 class="font-headline-sm text-headline-sm text-text-primary leading-tight line-clamp-1">تسجيل الدخول</h1>
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
      <div class="flex flex-col w-full px-gutter pb-space-xl">
        <!-- Brand Trust & Greeting Header Card -->
        <div class="relative w-full rounded-xl bg-surface-container-low p-space-lg shadow-sm mt-space-md overflow-hidden">
          <div class="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-primary-fixed/40 blur-2xl pointer-events-none"></div>
          <div class="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-secondary-fixed/30 blur-xl pointer-events-none"></div>
          <div class="relative flex items-start gap-space-md">
            <div class="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-md shrink-0">
              <span class="material-symbols-outlined text-[30px]" style="font-variation-settings: 'FILL' 1;">lock_open</span>
            </div>
            <div class="flex flex-col min-w-0">
              <div class="inline-flex items-center gap-space-xs mb-space-xs">
                <span class="inline-flex items-center justify-center px-space-xs py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm">
                  موثوق
                </span>
                <span class="font-label-sm text-label-sm text-text-secondary">بوابة التسوّق الآمنة</span>
              </div>
              <h2 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">تسجيل الدخول</h2>
              <p class="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                مرحباً بك مجدداً في سوق اليمن، يرجى إدخال بياناتك للمتابعة والوصول لطلباتك
              </p>
            </div>
          </div>
        </div>
        <!-- Micro Local Trust Banner -->
        <div class="mt-space-md pt-space-sm flex items-center justify-between bg-surface-container rounded-lg p-space-sm">
          <div class="flex items-center gap-space-xs text-text-primary">
            <span class="material-symbols-outlined text-secondary text-[20px]" style="font-variation-settings: 'FILL' 1;">verified_user</span>
            <span class="font-label-sm text-label-sm">ضمان محلي معتمد في كافة المحافظات</span>
          </div>
          <span class="font-label-sm text-label-sm text-primary font-bold">صنعاء • عدن • تعز</span>
        </div>
      </div>

      <!-- Form Container -->
      <form class="mt-space-lg flex flex-col gap-space-md" id="loginForm" @submit.prevent="handleLoginSubmit">
        <!-- Phone Input Group -->
        <div class="flex flex-col gap-space-xs">
          <div class="flex items-center justify-between">
            <label class="font-label-lg text-label-lg text-text-primary flex items-center gap-1" for="phoneNumber">
              <span>رقم الهاتف المحمول</span>
              <span class="text-error font-bold">*</span>
            </label>
            <span class="font-label-sm text-label-sm text-text-secondary">(يمن موبايل، يو، سبأفون، واي)</span>
          </div>
          <div class="relative flex items-center rounded-xl bg-surface-container-lowest shadow-sm h-14 overflow-hidden focus-within:shadow-md transition-all">
            <div class="flex items-center gap-1.5 px-3 h-full bg-surface-container text-on-surface select-none shrink-0" dir="ltr">
              <svg aria-label="علم اليمن" class="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0" viewBox="0 0 640 480">
                <path d="M0 0h640v160H0z" fill="#e11d48" />
                <path d="M0 160h640v160H0z" fill="#ffffff" />
                <path d="M0 320h640v160H0z" fill="#18181b" />
              </svg>
              <span class="font-label-md text-label-md font-bold tracking-tight text-text-primary">+967</span>
              <span class="material-symbols-outlined text-[16px] text-text-secondary">arrow_drop_down</span>
            </div>
            <div class="flex-1 flex items-center px-3 min-w-0" dir="ltr">
              <input
                class="w-full h-full bg-transparent font-headline-sm text-headline-sm text-text-primary placeholder:text-text-muted focus:outline-none text-left tracking-wider"
                id="phoneNumber"
                inputmode="numeric"
                maxlength="9"
                name="phone"
                pattern="[0-9]*"
                placeholder="77XXXXXXX"
                required
                type="tel"
              />
            </div>
            <div class="px-3.5 text-text-secondary shrink-0">
              <span class="material-symbols-outlined text-[22px]">call</span>
            </div>
          </div>
          <p class="font-body-sm text-body-sm text-text-secondary px-1">
            أدخل رقم الهاتف المكون من 9 أرقام بدون الصفر الدولي
          </p>
        </div>

        <!-- Password Input Group -->
        <div class="flex flex-col gap-space-xs mt-1">
          <div class="flex items-center justify-between">
            <label class="font-label-lg text-label-lg text-text-primary flex items-center gap-1" for="passwordField">
              <span>كلمة المرور</span>
              <span class="text-error font-bold">*</span>
            </label>
            <span class="font-body-sm text-body-sm text-text-muted">مشفرة بالكامل</span>
          </div>
          <div class="relative flex items-center rounded-xl bg-surface-container-lowest shadow-sm h-14 overflow-hidden focus-within:shadow-md transition-all">
            <div class="px-3.5 text-text-secondary shrink-0">
              <span class="material-symbols-outlined text-[22px]">lock</span>
            </div>
            <input
              class="flex-1 h-full bg-transparent font-body-lg text-body-lg text-text-primary placeholder:text-text-muted focus:outline-none px-1 tracking-widest"
              id="passwordField"
              name="password"
              placeholder="••••••••"
              required
              type="password"
            />
            <button
              aria-label="إظهار أو إخفاء كلمة المرور"
              class="w-12 h-full flex items-center justify-center text-text-secondary hover:text-primary active:scale-90 transition-all shrink-0"
              type="button"
              @click="togglePasswordVisibility"
            >
              <span class="material-symbols-outlined text-[22px]" id="passwordToggleIcon">visibility_off</span>
            </button>
          </div>
        </div>

        <!-- Remember Me & Forgot Password Row -->
        <div class="flex items-center justify-between py-1">
          <label class="flex items-center gap-2 cursor-pointer select-none">
            <div class="relative flex items-center">
              <input checked class="peer sr-only" id="rememberMe" name="rememberMe" type="checkbox" />
              <div class="w-5 h-5 rounded bg-surface-container-high peer-checked:bg-primary transition-all flex items-center justify-center">
                <span class="material-symbols-outlined text-on-primary text-[16px] scale-0 peer-checked:scale-100 transition-transform font-bold">check</span>
              </div>
            </div>
            <span class="font-label-md text-label-md text-on-surface">تذكرني على هذا الجهاز</span>
          </label>
          <button
            class="font-label-md text-label-md text-primary font-bold hover:underline active:opacity-75 transition-opacity"
            type="button"
            @click="forgotPassword"
          >
            نسيت كلمة المرور؟
          </button>
        </div>

        <!-- Primary Login Button -->
        <button
          class="w-full mt-2 h-14 rounded-xl bg-primary text-on-primary flex items-center justify-center gap-space-sm shadow-md hover:bg-surface-tint active:scale-[0.98] transition-all group font-headline-sm text-headline-sm font-bold"
          type="submit"
        >
          <span>تسجيل الدخول</span>
          <span class="material-symbols-outlined text-[24px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
        </button>
      </form>

      <!-- Interactive Separator -->
      <div class="relative my-space-lg flex items-center justify-center">
        <div class="w-full h-0.5 bg-surface-container"></div>
        <span class="absolute px-3 bg-surface text-text-secondary font-label-sm text-label-sm">أو تسجيل الدخول السريع عبر</span>
      </div>

      <!-- Instant / Social Logins -->
      <div class="flex flex-col gap-space-sm">
        <!-- WhatsApp Quick Login CTA -->
        <button
          class="w-full h-13 py-3 px-space-md rounded-xl bg-secondary text-on-secondary flex items-center justify-between shadow-sm active:scale-[0.98] transition-all"
          type="button"
          @click="simulateWhatsAppLogin"
        >
          <div class="flex items-center gap-space-sm">
            <div class="w-8 h-8 rounded-full bg-secondary-fixed/20 flex items-center justify-center">
              <span class="material-symbols-outlined text-on-secondary text-[20px]" style="font-variation-settings: 'FILL' 1;">chat</span>
            </div>
            <div class="flex flex-col text-right">
              <span class="font-label-md text-label-md font-bold">الدخول بضغطة زر عبر WhatsApp</span>
              <span class="font-body-sm text-body-sm text-on-secondary/80">استلام رمز التحقق الفوري OTP</span>
            </div>
          </div>
          <span class="material-symbols-outlined text-[20px]">chevron_left</span>
        </button>
        <!-- SMS Code One-time login -->
        <button
          class="w-full h-12 rounded-xl bg-surface-container-lowest text-text-primary flex items-center justify-center gap-space-xs shadow-sm hover:bg-surface-container-low active:scale-[0.98] transition-all font-label-lg text-label-lg"
          type="button"
          @click="smsLogin"
        >
          <span class="material-symbols-outlined text-[20px] text-text-secondary">sms</span>
          <span>الدخول برمز تحقق لمرة واحدة (SMS)</span>
        </button>
      </div>

      <!-- Registration Switch Card -->
      <div class="mt-space-xl p-space-md rounded-xl bg-surface-container flex flex-col items-center text-center gap-space-sm">
        <div class="flex items-center gap-1.5 text-text-primary">
          <span class="material-symbols-outlined text-primary text-[20px]">person_add</span>
          <span class="font-headline-sm text-headline-sm">جديد في سوق اليمن؟</span>
        </div>
        <p class="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
          انضم إلى أكبر شبكة تجارية يمنية للبيع والشراء والتوصيل بين جميع المحافظات بكل سهولة وأمان.
        </p>
        <button
          class="w-full mt-1 h-12 rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg font-bold shadow-sm hover:bg-primary hover:text-on-primary active:scale-[0.98] transition-all flex items-center justify-center gap-space-xs"
          type="button"
          @click="goToRegister"
        >
          <span>إنشاء حساب جديد</span>
          <span class="material-symbols-outlined text-[18px]">badge</span>
        </button>
      </div>

      <!-- Local Guarantees & Escrow Footnote -->
      <div class="mt-space-lg mb-space-sm flex flex-col items-center text-center gap-1.5 px-space-sm">
        <div class="flex items-center justify-center gap-space-xs text-secondary font-bold">
          <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">verified</span>
          <span class="font-label-sm text-label-sm">منصة تجارية يمنية آمنة ومحمية بضمان سوق اليمن</span>
        </div>
        <p class="font-body-sm text-body-sm text-text-muted">
          جميع المعاملات والمدفوعات محمية بنظام الحجز المالي حتى استلام وفحص البضاعة بنجاح
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goToRegister = () => alert('سيتم التوجيه إلى صفحة التسجيل')
const forgotPassword = () => alert('سيتم إرسال رمز استعادة كلمة المرور عبر رسالة SMS إلى رقم هاتفك المسجل.')
const smsLogin = () => alert('سيتم إرسال كود دخول لمرة واحدة SMS')
const simulateWhatsAppLogin = () => {
  const phoneInput = (document.getElementById('phoneNumber') as HTMLInputElement).value.trim()
  if (phoneInput) {
    alert('سيتم إرسال كود الدخول السريع عبر واتساب إلى الرقم: ' + phoneInput)
  } else {
    alert('يرجى كتابة رقم هاتفك أولاً في الحقل المخصص لاستلام كود الدخول عبر WhatsApp.')
    ;(document.getElementById('phoneNumber') as HTMLInputElement).focus()
  }
}

const togglePasswordVisibility = () => {
  const passwordInput = document.getElementById('passwordField') as HTMLInputElement
  const toggleIcon = document.getElementById('passwordToggleIcon')
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'
    toggleIcon!.textContent = 'visibility'
    toggleIcon!.classList.add('text-primary')
  } else {
    passwordInput.type = 'password'
    toggleIcon!.textContent = 'visibility_off'
    toggleIcon!.classList.remove('text-primary')
  }
}

const handleLoginSubmit = () => {
  const phone = (document.getElementById('phoneNumber') as HTMLInputElement).value.trim()
  const password = (document.getElementById('passwordField') as HTMLInputElement).value
  const btn = document.getElementById('submitButton')!

  if (!phone || phone.length < 8) {
    alert('يرجى إدخال رقم هاتف يمني صحيح (مثلاً: 771234567)')
    return
  }
  if (!password) {
    alert('يرجى إدخال كلمة المرور')
    return
  }

  const originalText = btn.innerHTML
  btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[22px]">progress_activity</span><span>جارِ تسجيل الدخول...</span>'
  ;(btn as HTMLButtonElement).disabled = true

  setTimeout(() => {
    btn.innerHTML = '<span class="material-symbols-outlined text-[22px]">check_circle</span><span>تم الدخول بنجاح!</span>'
    btn.classList.remove('bg-primary')
    btn.classList.add('bg-secondary')
    setTimeout(() => {
      alert('مرحباً بك! تم تسجيل الدخول بنجاح لحساب: ' + phone)
      btn.innerHTML = originalText
      ;(btn as HTMLButtonElement).disabled = false
      btn.classList.add('bg-primary')
      btn.classList.remove('bg-secondary')
    }, 500)
  }, 1200)
}
</script>
