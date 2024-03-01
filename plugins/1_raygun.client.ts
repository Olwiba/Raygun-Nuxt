import rg4js from "raygun4js";

export default defineNuxtPlugin((nuxtApp) => {
  const raygunAPIKey = nuxtApp.$config.public.raygun.APIkey;
  rg4js('apiKey', raygunAPIKey);
  rg4js('enableCrashReporting', true);
  rg4js('enablePulse', true);
  // rg4js('boot');

  rg4js('options',{
    debugMode: true,
  });

  rg4js('withTags', [`baseUrl:${nuxtApp.$config.public.baseUrl}`, `env:${nuxtApp.$config.public.env}`])

  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    rg4js('send', {
      error: error,
      customData: [{ info: info }]
    });
  };
})