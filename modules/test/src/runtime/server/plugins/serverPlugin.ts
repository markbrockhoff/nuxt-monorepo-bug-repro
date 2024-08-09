import { defineNitroPlugin } from 'nitropack/runtime/plugin';
import { useRuntimeConfig } from '#imports';

export default defineNitroPlugin(() => {
  const config = useRuntimeConfig();
  console.log(config.app.baseURL);
});
