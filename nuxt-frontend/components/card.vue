<script setup lang="ts">

</script>

<template>
  <!-- Team List Card -->
  <div class="p-4 relative flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
    <article
        class="flex gap-5 bg-white border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 justify-center items-start pr-12 text-sm text-slate-400 max-md:flex-wrap max-md:pr-5">
      <div class="shrink-0 w-12 rounded-xl aspect-[0.6]">
        <!-- Input Number -->
        <div class="py-2 px-3 flex flex-col border border-gray-200 rounded-lg dark:border-neutral-700" data-hs-input-number="">
          <div class="flex flex-col items-center gap-x-1.5">
            <button type="button" class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md   text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-input-number-decrement="">
              <svg class="flex-shrink-0 size-3.5" width="24" height="24" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3_4)">
                  <path d="M4 -3.49691e-07L0 4L8 4L4 -3.49691e-07Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_3_4">
                    <rect width="8" height="4" fill="white" transform="translate(8 4) rotate(-180)"/>
                  </clipPath>
                </defs>
              </svg>

            </button>
            <input class="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white" type="text" value="0" data-hs-input-number-input="">
            <button type="button" class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md   text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-input-number-increment="">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 size-3.5"><path d="m4 4 4-4H0l4 4Z" fill="#FFFFFF"></path></svg>
            </button>
          </div>
        </div>
        <!-- End Input Number -->
      </div>
      <section class="flex flex-col grow shrink-0 mt-1 basis-0 w-fit max-md:max-w-full">
        <h3 class="inline-flex items-center gap-x-1 text-gray-800 decoration-2 hover:underline font-semibold hover:text-blue-600 focus:outline-none focus:underline focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:text-blue-500">Добавить авторизацию через Telegram</h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">Предлагаю добавить раздел с проблемными серверами,
          когда обнаруживается проблема, то сервера, где есть проблемы, будут попадать туда. Это поможет
          системам...</p>
        <div class="flex gap-2.5 items-center mt-4 leading-[171%] max-md:flex-wrap max-md:pr-5">
          <img loading="lazy"
               src="https://cdn.builder.io/api/v1/image/assets/TEMP/e23eea0d982492180bc254599060afcc32f92f100c2e9b89ce46105502821e5f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
               alt="Vote" class="shrink-0 self-stretch my-auto w-4 aspect-square"/>
          <div class="self-stretch my-auto">0</div>
          <div class="flex gap-1 self-stretch text-center">
            <span class="m-0.5 sm:m-1 p-1.5 sm:p-2 inline-block bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">Marketing</span>
            <span class="m-0.5 sm:m-1 p-1.5 sm:p-2 inline-block bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">Marketing</span>
            <span class="m-0.5 sm:m-1 p-1.5 sm:p-2 inline-block bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">Marketing</span>
          </div>
          <div class="flex gap-1.5 self-stretch my-auto whitespace-nowrap">
            <a class="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
              <img class="flex-shrink-0 size-5 rounded-full" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=320&amp;h=320&amp;q=80" alt="Image Description">
              <span class="text-sm text-gray-800 dark:text-neutral-200">
            Макар
          </span>

            </a>
          </div>
        </div>
      </section>
    </article>
  </div>
  <!-- End Team List Card -->
</template>

<style scoped>

</style>