import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "costum" | "default"
declare module "/home/ruben/Projects/cardetail/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}