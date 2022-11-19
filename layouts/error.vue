<template>
  <article
    id="siteTitleSection"
    class="vh-100 dt w-100 bg-black b--black relative z-0 br4"
    data-scroll-section
  >
    <div
      class="dtc v-mid tc white ph3 typeFitContainer"
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="-8"
      data-scroll-position="top"
    >
      <h1
        class="fittami center ttu"
        data-scroll
        data-scroll-class="appear"
        data-scroll-call="itemAnimation"
        data-block-item
      >
        <span v-if="error.statusCode === 404"
          >PAGE NOT FOUND — <NuxtLink to="/">GO HOME</NuxtLink></span
        >
      </h1>
    </div>
  </article>
</template>

<script>
export default {
  layout: 'errorLayout',

  props: {
    error: {
      type: Object,
      required: true
    }
  },

  head() {
    return {
      title: 'Error' + this.$config.app.titleSeparator + '404 Not Found'
    }
  }
}
</script>
