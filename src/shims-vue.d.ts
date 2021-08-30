/* eslint-disable */
import Vue from 'vue'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module '@tucy/vue-color' {
//   declare class ElementUIComponent extends Vue {
//     /** Install component into Vue */
//     static install(vue: typeof Vue): void
//   }

//   const Sketch: ElementUIComponent
//   export default { Sketch }
// }