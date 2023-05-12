// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/car/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/car/[id]').default>>>>
    }
    '/api/cars/:city': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/cars/[city]').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/_supabase/session': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/supabase/dist/runtime/server/api/session').default>>>>
    }
  }
}
export {}