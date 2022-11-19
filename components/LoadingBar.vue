<template>
  <div
    v-if="loading"
    class="loading-page vh-100 w-100 flex items-center justify-center"
  >
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.loading-page {
  background: #111;
  color: #777;
}
</style>
