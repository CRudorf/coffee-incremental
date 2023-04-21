<script setup lang="ts">
import { useUpgradeStore } from '../stores/UpgradeStore'
import Upgrades from './Upgrades.vue';

defineProps<{ msg: string }>()

const upgradeStore = useUpgradeStore();

</script>

<template>
  <h1>You have brewed {{ upgradeStore.coffee }} cups of coffee.</h1>

  <div class="card">
    <button type="button" @click="upgradeStore.coffee++">Brew Coffee</button>
  </div>
  <Upgrades/>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
