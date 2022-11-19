import Vue from 'vue'
import LazyLoad from 'vanilla-lazyload'

/*
 ** Here we are creating a custom
 ** Vue directive with lazyload `v-lazy`
 */
Vue.directive('lazy', {
  // When the bound element is inserted into the DOM...
  bind(el) {
    // Array/nodelist
    el.item = []
    el.item.push(el)
    el.instance = new LazyLoad(
      {
        // Distance off the scrolling area from which to start loading the elements
        thresholds: `${window.innerHeight}px 0%`,
        // Hybrid lazyload which delegates loading to browsers that support it
        use_native: true
      },
      el.item
    )
  },
  unbind(el) {
    el.instance.destroy()
  }
})
