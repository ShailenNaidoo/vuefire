import { fileURLToPath } from 'node:url'
import { resolve } from 'path'
import { addPlugin, defineNuxtModule } from '@nuxt/kit'
import { type NuxtModule } from '@nuxt/schema'
import { type FirebaseOptions } from '@firebase/app-types'

export interface VueFireNuxtModuleOptions {
  /**
   * Should we add the `VueFireFirestoreOptionsAPI` and `VueFireRealtimeDatabaseOptionsAPI` modules?. Pass `true` to add
   * both, or `'firestore'` or `'realtime-database'` to add only one. Pass false to disable.
   * @default false
   */
  optionsApiPlugin?: boolean | 'firestore' | 'database'

  config: FirebaseOptions
  /**
   * Optional name passed to `firebase.initializeApp(config, name)`
   */
  appName?: string

  services: {
    auth?: boolean
    firestore?: boolean
    database?: boolean
    storage?: boolean
  }
}

const VueFireModule: NuxtModule<VueFireNuxtModuleOptions> =
  defineNuxtModule<VueFireNuxtModuleOptions>({
    meta: {
      name: 'vuefire',
      configKey: 'vuefire',
      compatibility: {
        nuxt: '^3.0.0-0',
      },
    },

    defaults: {
      optionsApiPlugin: false,
      config: {},
      services: {},
    },

    setup(options, nuxt) {
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      console.log('TOEHUNTOEUHNTUEHoT')
      nuxt.options.build.transpile.push(runtimeDir)
      // TODO: check for individual options
      addPlugin(resolve(runtimeDir, 'plugin'))
    },
  })

export default VueFireModule
