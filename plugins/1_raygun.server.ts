import raygun from "raygun";

export default defineNuxtPlugin((nuxtApp) => {
  const raygunClient = new raygun.Client().init({
    apiKey: nuxtApp.$config.public.raygun.APIkey,
    batch: true,
    reportUncaughtExceptions: true
  });

  nuxtApp.hook('vue:error', (error:any) => {
    raygunClient.send(error);
  });

  nuxtApp.hook('app:error', (error) => {
    raygunClient.send(error);
  });
})
