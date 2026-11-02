<template>
  <router-view />
</template>

<script setup lang="ts">
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

html,
body {
  width: 100vw;
  margin: 0;
  padding: 0;
  font-family: "IBM Plex Sans", sans-serif;
  overscroll-behavior: none;
}

::-webkit-scrollbar {
  display: none;
}

.pb-safe {
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

.pt-safe {
  padding-top: env(safe-area-inset-top, 0px);
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

body {
  min-height: max(884px, 100dvh);
}
</style>
EOF
echo "done"