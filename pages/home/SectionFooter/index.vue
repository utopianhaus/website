<template>
  <section
    id="colophon"
    class="site-footer ph2 pb2 relative z-2"
    data-scroll-section
  >
    <div
      class="footerContainer bg-dark-gray br3 pv4 pa4 mt2 flex flex-wrap items-center justify-between"
      data-scroll
      data-scroll-target="#colophon"
      data-scroll-direction="vertical"
      data-scroll-speed="0"
      data-scroll-position="bottom"
    >
      <div
        class="w-100 w-100-m w-50-ns flex items-center flex-wrap justify-center justify-start-ns pv2 lazyload"
      >
        <a
          v-shortkey.push="['meta', 't']"
          href="https://twitter.com/utopianhaus"
          class="mv1 siteTitle link br3 ph3 pv2 dib dark-gray hover-near-black bg-near-black hover-bg-gray mr3"
          target="_blank"
          @shortkey="gotoTwitter()"
          >Twitter</a
        >
        <a
          v-shortkey.push="['meta', 'g']"
          href="https://github.com/utopianhaus"
          class="mv1 link br3 ph3 pv2 dib dark-gray hover-near-black bg-near-black hover-bg-gray mr3-ns"
          target="_blank"
          @shortkey="gotoGithub()"
          >Github</a
        >
        <a
          v-shortkey.push="['meta', 'p']"
          href="mailto:utopianhaus@proton.me"
          class="mv1 link br3 ph3 pv2 dib dark-gray hover-near-black bg-near-black hover-bg-gray"
          @shortkey="sendEmail()"
          >{{ $t("get_in_touch") }}</a
        >
      </div>
      <div
        class="w-100 w-100-m w-50-ns flex items-center justify-center justify-end-ns pv2 lazyload"
        data-scroll
        data-scroll-class="appear"
        data-scroll-call="itemAnimation"
        data-scroll-repeat="true"
      >
        <a
          v-shortkey.push="['meta', 'b']"
          href="https://github.com/utopianhaus"
          class="mv1 link br3 ph3 pv2 dib dark-gray bg-near-black hover-bg-gray hover-near-black"
          target="_blank"
          @shortkey="gotoLicense()"
          >Source (MIT)</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    gotoTwitter() {
      window.open("https://twitter.com/utopianhaus");
      // this.$toast.show("To Twitter").goAway(1500);
    },
    gotoGithub() {
      window.open("https://github.com/utopianhaus");
      // this.$toast.show("To Github").goAway(1500);
    },
    sendEmail() {
      window.open("mailto:utopianhaus@proton.me");
      // this.$toast.show('META + C').goAway(1500)
    },
    gotoLicense() {
      window.open("https://github.com/utopianhaus");
      // this.$toast.show('META + B').goAway(1500)
    },
  },
};
</script>

<style scoped></style>
