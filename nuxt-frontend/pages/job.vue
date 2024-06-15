<template>
  <div class="flex justify-center items-center px-16 py-20 text-sm text-black bg-white max-md:px-5">
    <div class="flex flex-col items-center mt-16 max-w-full w-[1200px] max-md:mt-10">
      <header class="text-5xl tracking-tighter leading-10 text-center max-md:text-3xl">Вакансии</header>
      <section class="mt-11 text-base leading-6 text-center max-md:mt-10 max-md:max-w-full">
        Периодически мы ищем сотрудников на должности в Адвос. Здесь опубликованы<br />вакансии, откликнуться на которые вы можете на нашей странице на ХедХантере.
      </section>
      <a href="https://hh.ru" class="flex gap-1.5 px-2.5 py-2 mt-9 whitespace-nowrap shadow-sm bg-white bg-opacity-0 rounded-[100px]">
        <img loading="lazy" src="/images/svg/hh_logo.svg" class="shrink-0 w-4 aspect-square" alt="Link to HeadHunter" />
        <span>ХедХантер</span>
        <img loading="lazy" src="/images/svg/strela.svg" class="shrink-0 my-auto w-3 aspect-square" alt="" />
      </a>
      <div class="flex gap-3 self-stretch mt-8 text-black text-opacity-50 max-md:flex-wrap max-md:max-w-full">
        <article class="flex flex-1 grow shrink-0 justify-center items-center px-16 py-5 rounded-xl basis-0 bg-light-brown bg-opacity-100 w-fit max-md:px-5 max-md:max-w-full" tabindex="0">
          <div class="flex flex-col">
            <header class="text-base text-center text-black">Дизайнер сайтов</header>
            <p class="mt-2.5">Вакансия закрыта</p>
            <a href="#" class="self-center mt-2.5 text-center">Подробнее →</a>
          </div>
        </article>
        <article class="flex flex-1 grow shrink-0 justify-center items-center px-16 py-5 rounded-xl basis-0 bg-light-brown bg-opacity-100 w-fit max-md:px-5 max-md:max-w-full" tabindex="0">
          <div class="flex flex-col items-center">
            <header class="self-stretch text-base text-center text-black">Backend Development</header>
            <p class="mt-2.5">Вакансия закрыта</p>
            <a href="#" class="mt-2.5 text-center">Подробнее →</a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Vacancies',
});
</script>

<style scoped>
.bg-light-brown {
  background-color: #fafafa;
}

@media (max-width: 768px) {
  header.text-5xl {
    font-size: 1.875rem; /* 3xl */
    line-height: 2.25rem; /* 9 */
  }
}
</style>
