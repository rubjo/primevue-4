<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <h1>PrimeVue 4 Beta 4 Confirm / Dialog / Toast issue</h1>
  <ol>
    <li>Open Vue DevTools 7 -> Components</li>
    <li>Click back and forth between some components</li>
    <li>Crash 😢</li>
  </ol>
  <ConfirmDialog />
  <DynamicDialog />
  <Toast />
</template>

<script setup>
import ConfirmDialog from 'primevue/confirmdialog'
import DynamicDialog from 'primevue/dynamicdialog'
import Toast from 'primevue/toast'
</script>
