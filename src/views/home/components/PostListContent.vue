<script setup lang="ts">

</script>

<template>
  <div class="mt-1 col-lg-6 col-md-12 bg-light scrollable-column p-2">
    <div class="mb-3" v-for="_ in 50">
      <div class="card px-3 pt-3">
        <img src="/mountain.png" alt="Mountain" class="post-image">
        <h5 class="text-secondary mt-3">Earth</h5>
        <p class="text-secondary" style="font-size: smaller;">March 13, 2025</p>
        <p class="text-secondary">Mountain image.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}
</style>