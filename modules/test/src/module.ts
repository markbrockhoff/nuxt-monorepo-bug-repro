import {
  defineNuxtModule,
  createResolver,
  addServerPlugin,
} from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);

    addServerPlugin(resolver.resolve('./runtime/server/plugins/serverPlugin'));
  },
});
