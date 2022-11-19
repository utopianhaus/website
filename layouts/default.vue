<template>
  <div id="__default">
    <header
      id="masthead"
      v-gsap.from="{
        opacity: 0,
        y: -200,
        duration: 1,
      }"
      class="site-header top-0 w-100 z-4 pv2 ph3 ph2-ns flex justify-between"
      data-direction
    >
      <div class="flex items-center justify-start w-100">
        <p
          data-scroll
          data-scroll-to="#secondSection"
          class="w-100 mv0 siteTitle br3 ph3 pv2 mb2 dib ba near-black bg-dark-gray link"
          data-svg-title
        >
          Utopian
        </p>
      </div>
    </header>
    <Nuxt />
    <Modal v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import { canonical, facebook, twitter, appLdJson } from "~/utils/getHeadData";
import Modal from "~/components/Modal.vue";

export default {
  components: {
    Modal,
  },

  data() {
    return {
      showModal: false,
    };
  },

  head() {
    const { path } = this.$route;
    this.$nuxtI18nHead({ addSeoAttributes: true });

    return {
      meta: [...facebook(path), ...twitter()],

      link: [...canonical(path)],

      script: [...appLdJson(path)],
    };
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
