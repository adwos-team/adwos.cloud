<template>
  <article
      class="flex overflow-hidden relative flex-col justify-center items-start px-16 py-20 w-full text-xl text-white min-h-[641px] max-md:px-5 max-md:max-w-full">
    <img loading="lazy" src="public/images/svg/fon_brand.svg" class="object-cover absolute inset-0 size-full"
         alt="Background Image"/>
    <div class="max-w-[85rem] relative pt-6 lg:pt-0 px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="grid lg:grid-cols-2 gap-8">
        <div class="flex flex-col justify-center items-start xl:pe-10">
          <div class="mb-8">
            <h1 class="text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
              Бренд и логотипы <br> Adwos CMS
            </h1>
            <div class="sm:flex auto-cols-max items-center gap-3 md:gap-6 mt-6">
              <dl class="flex auto-cols-max items-center gap-3 md:gap-6">
                <dt class="sr-only">Compatible with:</dt>
                <dd class="flex items-center gap-x-2 text-xs font-semibold uppercase dark:text-white">
                  <img loading="lazy" src="/images/svg/figma.svg" class="w-6 h-auto" alt="Figma Logo"/>
                  Figma
                </dd>
                <dd class="flex items-center gap-x-2 text-xs font-semibold uppercase dark:text-white">
                  <NuxtImage
                      src="/images/svg/adobe.svg"
                      alt="Adobe Photoshop Logo"
                      class="w-6 h-auto"
                      loading="lazy"
                  />
                  Adobe Photoshop
                </dd>
              </dl>
            </div>
            <p class="mt-6 md:text-lg text-slate-50 dark:text-neutral-400 leading-relaxed">
              Adwos CMS — это прогрессивный бренд.<br>
              Мы стремимся к улучшению пользовательского опыта в цифровых системах, создаем смелые и инновационные
              решения.<br>
              Внимательное наблюдение за тенденциями развития технологий и интерфейсов позволяет нам создавать продукты,
              соответствующие запросам рынка.
            </p>
          </div>
          <!-- Buttons -->
          <div class="grid gap-3 w-full sm:inline-flex">
            <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
               href="./docs/index.html">
              Скачать полный архив
            </a>
            <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
               href="./docs/index.html">
              Гайдлайн
            </a>
            <input type="hidden" id="heroNpmCode" value="npm install preline">
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>