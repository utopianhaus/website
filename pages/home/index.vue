<template>
  <main>
    <SmoothScroll>
      <SectionMainContent />
      <SectionFooter />
    </SmoothScroll>
  </main>
</template>

<script>
import SectionFooter from "./SectionFooter";
import SectionMainContent from "./SectionMainContent";
import SmoothScroll from "~/components/SmoothScroll";

export default {
  components: {
    SectionFooter,
    SectionMainContent,
    SmoothScroll,
  },

  head() {
    return {
      title:
        "Home" +
        this.$config.app.titleSeparator +
        this.$config.app.title +
        this.$config.app.titleSeparator +
        this.$config.app.titleTemplate,

      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$config.app.description,
        },
      ],
    };
  },

  mounted() {
    this.locomotiveScrollInit();
    this.setScrollDirection();

    const Splitting = require("splitting");
    Splitting();

    this.$i18n.finalizePendingLocaleChange();
  },

  beforeDestroy() {
    this.scroll.destroy();
  },

  methods: {
    locomotiveScrollInit() {
      this.scroll = new this.$LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: 0.07,
        offset: ["3%", 100],
        getDirection: true,
        reloadOnContextChange: true,
        multiplier: 1.5,
        mobile: {
          breakpoint: 0,
          smooth: true,
          getDirection: true,
        },
        tablet: {
          breakpoint: 0,
          smooth: true,
          getDirection: true,
        },
      });

      this.scroll.start();
    },

    setScrollDirection() {
      this.scroll.on("scroll", (instance) => {
        document.documentElement.setAttribute(
          "data-direction",
          instance.direction
        );
      });
    },
  },
};
</script>
