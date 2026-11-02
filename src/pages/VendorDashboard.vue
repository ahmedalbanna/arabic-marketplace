<template>
  <div class="bg-surface font-body-md text-body-md text-text-primary flex flex-col min-h-screen">
    <header class="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div class="h-16 px-gutter flex items-center justify-between gap-space-sm">
        <div class="flex items-center gap-space-sm flex-1 min-w-0">
          <div class="flex flex-col truncate">
            <div class="flex items-center gap-space-xs">
              <span class="font-label-lg text-label-lg text-text-primary truncate">متجر محمد للإلكترونيات</span>
              <span class="material-symbols-outlined text-text-secondary text-[16px]">expand_more</span>
            </div>
            <span class="font-label-sm text-label-sm text-text-secondary truncate">Vendor Dashboard</span>
          </div>
        </div>
        <div class="flex items-center gap-space-xs flex-shrink-0">
          <div class="flex items-center gap-1 bg-secondary-fixed/50 px-2 py-1 rounded-full">
            <span class="w-2 h-2 rounded-full bg-secondary"></span>
            <span class="font-label-sm text-label-sm text-on-secondary-fixed-variant">مفتوح</span>
          </div>
          <a class="w-11 h-11 flex items-center justify-center relative text-on-surface-variant hover:text-text-primary rounded-xl" data-path="vendor-alerts" href="#" @click.prevent>
            <span class="material-symbols-outlined text-[22px]">notifications</span>
            <span class="absolute top-2 left-2 w-2.5 h-2.5 bg-status-error rounded-full ring-2 ring-background"></span>
          </a>
          <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>

    <main class="flex flex-col relative w-full pt-16 pb-20 bg-surface min-h-screen">
      <div class="flex flex-col w-full pb-8">
        <div class="px-gutter pt-space-md flex flex-col gap-space-md">
          <!-- Store Profile & Fast Payout Hero Tile -->
          <div class="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
            <div class="absolute -top-10 -left-10 w-32 h-32 bg-primary-fixed/30 rounded-full blur-2xl pointer-events-none"></div>
            <div class="flex items-start justify-between relative z-10">
              <div class="flex items-center gap-space-sm">
                <div class="relative">
                  <div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary font-headline-sm text-headline-sm shadow-sm overflow-hidden">
                    <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">storefront</span>
                  </div>
                  <span class="absolute -bottom-1 -right-1 w-4 h-4 bg-status-success rounded-full flex items-center justify-center text-surface-container-lowest shadow-sm">
                    <span class="material-symbols-outlined text-[10px]">verified</span>
                  </span>
                </div>
                <div class="flex flex-col min-w-0">
                  <div class="flex items-center gap-space-xs">
                    <span class="font-headline-sm text-headline-sm text-text-primary truncate">متجر محمد للإلكترونيات</span>
                  </div>
                  <div class="flex items-center gap-space-xs">
                    <span class="inline-flex items-center px-1.5 py-0.5 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-sm text-label-sm">
                      تاجر معتمد وموثق
                    </span>
                    <span class="font-label-sm text-label-sm text-text-muted">YM-9821#</span>
                  </div>
                </div>
              </div>
              <button
                aria-label="مشاركة المتجر"
                class="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-text-secondary active:scale-95 transition-transform"
                type="button"
              >
                <span class="material-symbols-outlined text-[18px]">share</span>
              </button>
            </div>
          </div>
          <!-- Financial Micro Card -->
          <div class="mt-space-md p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
            <div class="flex flex-col">
              <span class="font-label-sm text-label-sm text-text-secondary flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px] text-primary">account_balance_wallet</span>
                رصيد السحب الفوري (الكريمي / ون كاش)
              </span>
              <div class="flex items-baseline gap-1 mt-0.5">
                <span class="font-headline-md text-headline-md text-text-primary tracking-tight">4,850,000</span>
                <span class="font-label-md text-label-md text-text-secondary">ر.ي</span>
              </div>
            </div>
            <button class="px-space-md py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center gap-1 shadow-sm active:opacity-90 transition-opacity" type="button">
              <span>سحب فوري</span>
              <span class="material-symbols-outlined text-[16px]">arrow_back</span>
            </button>
          </div>
          <!-- Quick Action Horizontal Bar -->
          <div class="grid grid-cols-3 gap-space-xs">
            <button class="flex flex-col items-center justify-center gap-1.5 p-space-sm bg-surface-container-lowest rounded-xl shadow-sm text-text-primary active:scale-[0.98] transition-transform" type="button">
              <div class="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-[20px]">add_box</span>
              </div>
              <span class="font-label-md text-label-md">إضافة منتج</span>
            </button>
            <button class="flex flex-col items-center justify-center gap-1.5 p-space-sm bg-surface-container-lowest rounded-xl shadow-sm text-text-primary active:scale-[0.98] transition-transform" type="button">
              <div class="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant">
                <span class="material-symbols-outlined text-[20px]">payments</span>
              </div>
              <span class="font-label-md text-label-md">سحب أرباح</span>
            </button>
            <button class="flex flex-col items-center justify-center gap-1.5 p-space-sm bg-surface-container-lowest rounded-xl shadow-sm text-text-primary active:scale-[0.98] transition-transform" type="button">
              <div class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-text-primary">
                <span class="material-symbols-outlined text-[20px]">receipt_long</span>
              </div>
              <span class="font-label-md text-label-md">كل الطلبات</span>
            </button>
          </div>
          <!-- Urgent Dispatch Alert Banner -->
          <div class="relative overflow-hidden bg-tertiary-fixed rounded-xl p-space-md shadow-sm">
            <div class="flex items-start gap-space-sm">
              <div class="w-9 h-9 rounded-lg bg-tertiary-container text-on-tertiary flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-[20px] animate-pulse">local_shipping</span>
              </div>
              <div class="flex flex-col flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <span class="font-label-lg text-label-lg text-on-tertiary-container font-semibold">موعد تسليم شحنات اليوم</span>
                  <span class="px-2 py-0.5 rounded-full bg-on-tertiary-container/10 text-on-tertiary-container font-label-sm text-label-sm">04:00 م</span>
                </div>
                <p class="font-body-sm text-body-sm text-on-tertiary-fixed-variant mt-0.5">
                  يرجى تجهيز الطرود وتأكيد جاهزية المندوب قبل انتهاء الموعد.
                </p>
                <div class="mt-space-sm flex items-center justify-between gap-space-sm">
                  <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest text-tertiary font-label-md text-label-md shadow-sm">
                    <span class="material-symbols-outlined text-[16px]">timer</span>
                    <span class="font-bold" id="dispatch-timer">02:14:50</span>
                  </div>
                  <button
                    class="px-space-md py-1.5 rounded-md bg-tertiary-container text-on-tertiary font-label-md text-label-md font-semibold active:opacity-90 shadow-sm transition-all flex items-center gap-1"
                    id="confirm-readiness-btn"
                    type="button"
                    @click="confirmReadiness"
                  >
                    <span class="material-symbols-outlined text-[16px]">task_alt</span>
                    <span>تأكيد الجاهزية</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Metric Cards Grid (2x2) -->
        <div class="grid grid-cols-2 gap-space-sm">
          <!-- Sales Total -->
          <div class="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-[18px]">query_stats</span>
              </span>
              <span class="inline-flex items-center gap-0.5 text-secondary font-label-sm text-label-sm font-semibold">
                <span>+14%</span>
                <span class="material-symbols-outlined text-[14px]">trending_up</span>
              </span>
            </div>
            <div class="mt-space-sm">
              <span class="font-label-sm text-label-sm text-text-secondary block">إجمالي المبيعات</span>
              <div class="flex items-baseline gap-1 mt-0.5">
                <span class="font-headline-sm text-headline-sm text-text-primary tracking-tight">15,420,000</span>
                <span class="font-label-sm text-label-sm text-text-secondary">ر.ي</span>
              </div>
            </div>
          </div>
          <!-- Pending Orders -->
          <div class="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="w-8 h-8 rounded-lg bg-status-warning/15 flex items-center justify-center text-status-warning">
                <span class="material-symbols-outlined text-[18px]">hourglass_top</span>
              </span>
              <span class="w-2.5 h-2.5 rounded-full bg-status-warning animate-ping"></span>
            </div>
            <div class="mt-space-sm">
              <span class="font-label-sm text-label-sm text-text-secondary block">طلبات بالانتظار</span>
              <div class="flex items-baseline gap-1 mt-0.5">
                <span class="font-headline-sm text-headline-sm text-text-primary">5</span>
                <span class="font-label-sm text-label-sm text-text-secondary">طلبات جديدة</span>
              </div>
            </div>
          </div>
          <!-- Confirmed for prep -->
          <div class="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-text-primary">
                <span class="material-symbols-outlined text-[18px]">inventory</span>
              </span>
              <span class="font-label-sm text-label-sm text-primary font-medium">جاهزة الآن</span>
            </div>
            <div class="mt-space-sm">
              <span class="font-label-sm text-label-sm text-text-secondary block">مؤكدة للتجهيز</span>
              <div class="flex items-baseline gap-1 mt-0.5">
                <span class="font-headline-sm text-headline-sm text-text-primary">8</span>
                <span class="font-label-sm text-label-sm text-text-secondary">شحنات</span>
              </div>
            </div>
          </div>
          <!-- In Transit -->
          <div class="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="w-8 h-8 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-secondary">
                <span class="material-symbols-outlined text-[18px]">moped</span>
              </span>
              <span class="inline-flex items-center px-1.5 py-0.5 rounded bg-secondary-fixed/30 text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
                98% تسليم
              </span>
            </div>
            <div class="mt-space-sm">
              <span class="font-label-sm text-label-sm text-text-secondary block">قيد التوصيل</span>
              <div class="flex items-baseline gap-1 mt-0.5">
                <span class="font-headline-sm text-headline-sm text-text-primary">12</span>
                <span class="font-label-sm text-label-sm text-text-secondary">شحنة نشطة</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Sales Performance Mini-Chart Tile -->
        <div class="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col">
          <div class="flex items-center justify-between mb-space-sm">
            <div class="flex items-center gap-space-xs">
              <span class="material-symbols-outlined text-primary text-[20px]">bar_chart</span>
              <span class="font-headline-sm text-headline-sm text-text-primary">مؤشر الإيرادات الأسبوعية</span>
            </div>
            <span class="font-label-sm text-label-sm text-text-muted">آخر 7 أيام</span>
          </div>
          <div class="w-full h-24 flex items-end pt-2">
            <svg class="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 80">
              <defs>
                <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="#0061a4" stop-opacity="0.25" />
                  <stop offset="100%" stop-color="#0061a4" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path d="M 0,65 Q 40,55 80,40 T 160,25 T 240,48 T 320,15 L 320,80 L 0,80 Z" fill="url(#chartGrad)" />
              <path d="M 0,65 Q 40,55 80,40 T 160,25 T 240,48 T 320,15" stroke="#0061a4" stroke-linecap="round" stroke-width="2.5" />
              <circle cx="80" cy="40" fill="#FFFFFF" r="3.5" stroke="#0061a4" stroke-width="2" />
              <circle cx="160" cy="25" fill="#FFFFFF" r="3.5" stroke="#0061a4" stroke-width="2" />
              <circle cx="320" cy="15" fill="#0061a4" r="4" />
            </svg>
          </div>
          <div class="flex items-center justify-between text-text-muted font-label-sm text-label-sm pt-2">
            <span>السبت</span><span>الأحد</span><span>الإثنين</span><span>الثلاثاء</span><span>الأربعاء</span><span>الخميس</span><span class="text-primary font-bold">اليوم</span>
          </div>
        </div>
        <!-- Recent Urgent Orders Section -->
        <div class="flex flex-col gap-space-sm mt-space-xs">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-space-xs">
              <span class="font-headline-sm text-headline-sm text-text-primary">الطلبات الحديثة العاجلة</span>
              <span class="px-2 py-0.5 rounded-full bg-status-error/10 text-status-error font-label-sm text-label-sm font-semibold">2 بحاجة لإجراء</span>
            </div>
            <button class="font-label-md text-label-md text-primary font-semibold" type="button">عرض الكل</button>
          </div>
          <!-- Urgent Order Card 1 -->
          <div class="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-space-sm">
                <img class="w-14 h-14 rounded-lg object-cover bg-surface-container-low flex-shrink-0" alt="product" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200" />
                <div class="flex flex-col min-w-0">
                  <span class="font-label-sm text-label-sm text-text-muted">رقم الطلب ORD-001</span>
                  <span class="font-headline-sm text-headline-sm text-text-primary truncate">هاتف Samsung Galaxy S24 Ultra</span>
                  <span class="font-body-sm text-body-sm text-text-secondary">الزبائن: أحمد الكبسي • صنعاء (حدة)</span>
                </div>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold flex-shrink-0">جديد</span>
            </div>
            <div class="flex items-center justify-between p-space-xs bg-surface-container-low rounded-lg">
              <span class="font-body-sm text-body-sm text-text-secondary">المبلغ الإجمالي</span>
              <div class="flex items-baseline gap-1">
                <span class="font-headline-sm text-headline-sm text-text-primary">302,500</span>
                <span class="font-label-sm text-label-sm text-text-secondary">ر.ي</span>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-space-sm pt-1">
              <button class="py-2.5 px-space-sm rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold active:opacity-80 transition-all flex items-center justify-center gap-1" type="button">
                <span class="material-symbols-outlined text-[18px]">close</span>
                <span>رفض الطلب</span>
              </button>
              <button class="py-2.5 px-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold active:opacity-90 shadow-sm transition-all flex items-center justify-center gap-1" type="button">
                <span class="material-symbols-outlined text-[18px]">check</span>
                <span>قبول وتجهيز</span>
              </button>
            </div>
          </div>
          <!-- Urgent Order Card 2 -->
          <div class="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-space-sm">
                <img class="w-14 h-14 rounded-lg object-cover bg-surface-container-low flex-shrink-0" alt="product" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200" />
                <div class="flex flex-col min-w-0">
                  <span class="font-label-sm text-label-sm text-text-muted">رقم الطلب ORD-089</span>
                  <span class="font-headline-sm text-headline-sm text-text-primary truncate">سماعات Sony WH-1000XM5</span>
                  <span class="font-body-sm text-body-sm text-text-secondary">الزبون: هشام الشرعبي • عدن (المعلا)</span>
                </div>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-status-warning/15 text-status-warning font-label-sm text-label-sm font-semibold flex-shrink-0">جاهز للشحن</span>
            </div>
            <div class="flex items-center justify-between p-space-xs bg-surface-container-low rounded-lg">
              <span class="font-body-sm text-body-sm text-text-secondary">المبلغ الإجمالي</span>
              <div class="flex items-baseline gap-1">
                <span class="font-headline-sm text-headline-sm text-text-primary">125,000</span>
                <span class="font-label-sm text-label-sm text-text-secondary">ر.ي</span>
              </div>
            </div>
            <button class="w-full py-2.5 px-space-sm rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold active:opacity-90 shadow-sm transition-all flex items-center justify-center gap-1" type="button">
              <span class="material-symbols-outlined text-[18px]">local_shipping</span>
              <span>تسليم لمندوب التوصيل</span>
            </button>
          </div>
        </div>
        <!-- Top Selling Products List -->
        <div class="flex flex-col gap-space-sm mt-space-xs">
          <div class="flex items-center justify-between">
            <span class="font-headline-sm text-headline-sm text-text-primary">أفضل المنتجات مبيعاً</span>
            <button class="font-label-md text-label-md text-primary font-semibold" type="button">إدارة المخزون</button>
          </div>
          <div class="flex flex-col gap-space-xs">
            <div class="p-space-sm bg-surface-container-lowest rounded-xl shadow-sm flex items-center justify-between">
              <div class="flex items-center gap-space-sm min-w-0">
                <img class="w-12 h-12 rounded-lg object-cover bg-surface-container-low flex-shrink-0" alt="product" src="https://images.unsplash.com/photo-1546547701-489539180315?w=100" />
                <div class="flex flex-col min-w-0">
                  <span class="font-label-md text-label-md text-text-primary truncate">iPad Air M2 11-inch</span>
                  <span class="font-body-sm text-body-sm text-text-muted">مبيعات: 48 قطعة هذا الشهر</span>
                </div>
              </div>
              <div class="flex flex-col items-end flex-shrink-0">
                <span class="font-label-md text-label-md font-semibold text-text-primary">240,000 ر.ي</span>
                <span class="font-label-sm text-label-sm text-secondary font-medium">متبقي 6 قطع</span>
              </div>
            </div>
            <div class="p-space-sm bg-surface-container-lowest rounded-xl shadow-sm flex items-center justify-between">
              <div class="flex items-center gap-space-sm min-w-0">
                <img class="w-12 h-12 rounded-lg object-cover bg-surface-container-low flex-shrink-0" alt="product" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100" />
                <div class="flex flex-col min-w-0">
                  <span class="font-label-md text-label-md text-text-primary truncate">ساعة Apple Watch Series 9</span>
                  <span class="font-body-sm text-body-sm text-text-muted">مبيعات: 35 قطعة هذا الشهر</span>
                </div>
              </div>
              <div class="flex flex-col items-end flex-shrink-0">
                <span class="font-label-md text-label-md font-semibold text-text-primary">165,000 ر.ي</span>
                <span class="font-label-sm text-label-sm text-secondary font-medium">متبقي 14 قطعة</span>
              </div>
            </div>
            <div class="p-space-sm bg-surface-container-lowest rounded-xl shadow-sm flex items-center justify-between">
              <div class="flex items-center gap-space-sm min-w-0">
                <img class="w-12 h-12 rounded-lg object-cover bg-surface-container-low flex-shrink-0" alt="product" src="https://images.unsplash.com/photo-1583394838336-acd977236f11?w=100" />
                <div class="flex flex-col min-w-0">
                  <span class="font-label-md text-label-md text-text-primary truncate">بطارية Anker المغناطيسية 10k</span>
                  <span class="font-body-sm text-body-sm text-text-muted">مبيعات: 92 قطعة هذا الشهر</span>
                </div>
              </div>
              <div class="flex flex-col items-end flex-shrink-0">
                <span class="font-label-md text-label-md font-semibold text-text-primary">18,500 ر.ي</span>
                <span class="font-label-sm text-label-sm text-status-warning font-medium">متبقي قطعتين فقط</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <nav class="fixed bottom-0 inset-x-0 z-50 pb-safe bg-background/95 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.04)]" data-active-classes="text-primary font-label-md">
      <div class="flex justify-around items-center h-16 px-space-xs">
        <a
          aria-current="page"
          class="flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 transition-colors text-primary font-label-md"
          data-path="vendor-dashboard"
          href="#"
        >
          <span class="material-symbols-outlined text-[22px]">dashboard</span>
          <span class="font-label-sm text-label-sm">الرئيسية</span>
        </a>
        <a class="flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 text-text-secondary transition-colors" data-path="vendor-products" href="#" @click.prevent>
          <span class="material-symbols-outlined text-[22px]">inventory_2</span>
          <span class="font-label-sm text-label-sm">المنتجات</span>
        </a>
        <a class="flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 text-text-secondary transition-colors" data-path="vendor-orders" href="#" @click.prevent>
          <span class="material-symbols-outlined text-[22px]">local_shipping</span>
          <span class="font-label-sm text-label-sm">الطلبات</span>
        </a>
        <a class="flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 text-text-secondary transition-colors" data-path="vendor-alerts" href="#" @click.prevent>
          <span class="material-symbols-outlined text-[22px]">notifications_active</span>
          <span class="font-label-sm text-label-sm">التنبيهات</span>
        </a>
        <a class="flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 text-text-secondary transition-colors" data-path="store-profile-settings" href="#" @click.prevent>
          <span class="material-symbols-outlined text-[22px]">store</span>
          <span class="font-label-sm text-label-sm">المتجر</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
let totalSeconds = 2 * 3600 + 14 * 60 + 50

const confirmReadiness = () => {
  const btn = document.getElementById('confirm-readiness-btn')
  if (btn) {
    btn.innerHTML = '<span class="material-symbols-outlined text-[16px]">verified</span><span>تم تأكيد الجاهزية!</span>'
    btn.classList.remove('bg-tertiary-container', 'text-on-tertiary')
    btn.classList.add('bg-secondary', 'text-on-secondary')
    ;(btn as HTMLButtonElement).disabled = true
  }
}

const updateTimer = () => {
  if (totalSeconds > 0) {
    totalSeconds--
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
    const seconds = String(totalSeconds % 60).padStart(2, '0')
    const timerEl = document.getElementById('dispatch-timer')
    if (timerEl) timerEl.textContent = `${hours}:${minutes}:${seconds}`
  }
}

setInterval(updateTimer, 1000)
</script>
