<template>
  <section>
    <div id="canvas"></div>
    <article
      id="siteTitleSection"
      class="vh-100 w-100 flex items-center justify-start w-100 relative z-1"
      data-scroll-section
    >
      <div
        v-gsap.from="{
          opacity: 0,
          duration: 1,
        }"
        class="dark-gray ph3 animatedHeading"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="-11"
        data-scroll-position="top"
      >
        <h1
          class="tl animatedHeadingLine"
          data-scroll
          data-scroll-class="selfRotate"
          data-splitting="chars"
          data-scroll-repeat="true"
        >
          {{ $t("hero") }}
        </h1>
      </div>
    </article>
    <article
      id="secondSection"
      class="w-100 flex flex-wrap items-center justify-between relative z-2 br3 ph2"
      data-scroll-section
    >
      <div class="w-100 tl near-black mb2">
        <div
          class="br3 pa3 pa4-ns dib near-black bg-dark-gray flex items-center"
        >
          <h3>
            {{ $t("column_one") }}
          </h3>
        </div>
      </div>
      <div class="w-100 tl near-black">
        <div
          class="br3 pa3 pa4-ns dib near-black bg-dark-gray hover-bg-gray vh-25 flex items-center pointer"
          data-tally-open="wkbyv1"
          data-tally-layout="modal"
          data-tally-width="900"
          data-tally-align-left="1"
          data-tally-hide-title="1"
          data-tally-auto-close="4000"
        >
          <h1 class="w-100 tc">
            {{ $t("column_two") }}
          </h1>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Two from "two.js";
export default {
  mounted() {
    this.radialFollowInit();
  },

  methods: {
    radialFollowInit() {
      // eslint-disable-next-line no-var
      var elem = document.getElementById("canvas");

      // eslint-disable-next-line no-var
      var two = new Two({
        type: Two.Types.svg,
        fitted: true,
        autostart: true,
        domElement: Two.SVGRenderer.domElement,
      }).appendTo(elem);

      // Define a list of colors for
      // the linear gradient to cycle
      // through.
      const colors = ["rgb(1, 1, 1)", "rgb(1, 1, 1)", "rgb(1, 1, 1)"];
      // Define the index of the
      // current color the gradient
      // is starting from.
      let colorIndex = 0;

      // Cache the center of the canvas
      // for positioning objects.
      const cx = two.width / 2;
      const cy = two.height / 2;

      // 4 component values used to
      // create a vertical line.
      let x1 = 0;
      let y1 = -cy;
      const x2 = 0;
      const y2 = cy;

      // Create a linear gradient with ramp
      // points starting at (x1, y1) and ending
      // at (x2, y2) with three stops evenly
      // spread across the gradient.
      let gradient = two.makeLinearGradient(
        x1,
        y1,
        x2,
        y2,
        new Two.Stop(0, colors[0]),
        new Two.Stop(1, colors[1]),
        new Two.Stop(1, colors[2])
      );
      gradient.units = "userSpaceOnUse";

      // Gradients are effects and can be applied
      // to either the `fill` or the `stroke` of
      // an Two.Path or other object. Make a rectangle
      // to be filled by the gradient.
      const rectangle = two.makeRectangle(cx, cy, two.width, two.height);
      rectangle.noStroke();
      rectangle.fill = gradient;

      // 3 component values used
      // to create a circle.
      x1 = 0;
      y1 = 0;
      // Get the higher value of
      // the two to make a gradient
      // that fills the window.
      let radius = Math.max(two.width, two.height);

      // Create a radial gradient
      // with center `x1`, `y1`
      // and radius `radius` with
      // two stops along the ramp.
      gradient = two.makeRadialGradient(
        x1,
        y1,
        radius,
        new Two.Stop(0, "rgba(9, 9, 9, 1)", 1),
        new Two.Stop(0.5, "rgba(9, 9, 9, 0)", 0)
      );
      gradient.units = "userSpaceOnUse";

      // `vignette` is the bounding
      // rectangle to be filled with
      // the radial gradient.
      const vignette = two.makeRectangle(cx, cy, two.width, two.height);
      vignette.noStroke();
      vignette.fill = gradient;

      // Two temporary vector
      // variables are needed
      // during the animation loop.
      // First is to keep track
      // of the mouse position.
      const mouse = new Two.Vector(cx, cy);
      // Second is an empty value
      // that is set every frame
      // to calculate the distance
      // between the center of the
      // screen and the mouse.
      const delta = new Two.Vector();

      // Native HTML event handler
      // to listen when the mouse
      // or finger moves and store
      // its position.
      two.renderer.domElement.addEventListener(
        "pointermove",
        pointermove,
        false
      );

      // Two.js event handlers
      // to listen when the page
      // resizes and the animation
      // updates.
      two.bind("resize", resize).bind("update", update);

      // Set the `mouse` variable
      // to the cursor's position.
      function pointermove(e) {
        mouse.set(e.clientX, e.clientY);
      }

      // Force both the rectangle
      // and vignette to be the size
      // of the canvas when the window
      // changes sizes.
      function resize() {
        const cx = two.width / 2;
        const cy = two.height / 2;

        // eslint-disable-next-line prefer-const
        let gradient = rectangle.fill;
        gradient.left.y = -cy;
        gradient.right.y = cy;

        // Set the size of the rectangle
        // to the size of the canvas.
        rectangle.width = two.width;
        rectangle.height = two.height;
        vignette.width = two.width;
        vignette.height = two.height;

        // Center both rectangles.
        rectangle.translation.set(cx, cy);
        vignette.translation.copy(rectangle.translation);

        // Update the radius variable
        // to accurately reflect the size
        // during the `update` handler.
        radius = Math.max(two.width, two.height);
      }

      // Animate the scene
      function update(frameCount) {
        let gradient = vignette.fill;
        const cx = two.width / 2;
        const cy = two.height / 2;

        const oscillation = 0.5 * (Math.sin(frameCount / 30) + 1);
        const r25 = radius * 0.25;
        const r75 = radius * 0.55;

        // Make the radial gradient oscillate
        gradient.radius = r25 * oscillation + r75;

        const destX = mouse.x - cx;
        const destY = mouse.y - cy;

        delta.set(destX, destY).sub(gradient.center).multiplyScalar(0.125); // Used to "ease" into dest

        // Move the gradient's center
        // toward the mouse as a kind
        // of "look at" behavior.
        gradient.center.add(delta);

        gradient = rectangle.fill;
        const o = gradient.stops[1].offset;

        if (o < 0.001) {
          // Make the second stop clamp
          // to the bottom edge.
          gradient.stops[1].offset = 1;

          // Select a new color from the palette
          colorIndex = (colorIndex + 1) % colors.length;

          for (let i = 0; i < gradient.stops.length; i++) {
            const stop = gradient.stops[i];
            const index = colorIndex + i;
            // Set the new colors
            stop.color = colors[index % colors.length];
          }
        } else {
          // Animate the second stop
          // towards the top of the screen
          // gradient.stops[1].offset -= o * 0.125;
        }
      }
    },
  },
};
</script>

<style scoped>
#secondSection {
  min-height: 50vh;
}

#canvas {
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
