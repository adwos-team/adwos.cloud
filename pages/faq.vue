<script setup lang="ts">

</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<template>
  <div class="flex flex-col bg-white">
    <section
        class="flex overflow-hidden relative flex-col justify-center items-center px-16 w-full min-h-[2282px] max-md:px-5 max-md:max-w-full"
    >
      <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccfdb2b8b23853f5683f22967dcfd9db07394f6880be926649785c0ffbfda421?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
          alt=""
          class="object-cover absolute inset-0 size-full"
      />
      <nav class="flex relative flex-col max-w-full w-[1070px]">
        <div
            class="flex gap-5 justify-between py-5 pl-5 max-w-full text-sm text-black w-[493px] max-md:flex-wrap"
        >
          <div class="flex gap-1.5 whitespace-nowrap">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d057cb5bf1700171291b72e2482c594cce4b4a59cc698d7dca132413131da2b6?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                alt="Smink logo"
                class="shrink-0 w-4 aspect-square"
            />
            <div class="my-auto">Smink</div>
          </div>
          <div class="flex gap-1.5 self-start whitespace-nowrap">
            <div class="grow">Платформа</div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32a0830cec2ac34f339fa98c294546507c04c6a05af00f80ea4b00f20b18e2e2?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                alt="Platform icon"
                class="shrink-0 w-3.5 aspect-square"
            />
          </div>
          <div class="flex gap-5 justify-between my-auto">
            <a>Тарифы</a>
            <a>Создать сайт</a>
          </div>
        </div>
      </nav>
      <main class="flex flex-col self-end mt-24 max-w-full text-base text-black text-opacity-70 w-[900px] max-md:mt-10">
        <h1 class="self-center text-5xl tracking-tighter text-center text-black leading-[53.9px] max-md:max-w-full max-md:text-4xl">
          Ответы на вопросы
        </h1>
        <nav class="flex gap-5 self-center mt-9 text-sm text-black">
          <a href="#">Поддержка</a>
          <a href="#">Документация</a>
          <a href="#">Возможности Adwos</a>
        </nav>
        <section class="self-center mt-20 text-2xl leading-7 text-center text-black max-md:mt-10">
          Почему именно Adwos CMS
        </section>
        <article
            class="flex gap-5 justify-center py-5 mt-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto my-auto">
            Чем Smink отличается от аналогичных систем?
          </div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7bde5257d1ac8736da7946d75060835e5ddbfd4b58cffe2f3c2379e8165b479?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Как предоставляется техподдержка?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto max-md:max-w-full">
            Как донести руководству, что компании стоит переехать на Smink?
          </div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc4ade0deca32d7859f5d35ab1daa76e03079c733bed1aa8e581aefd433f9f8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Я могу довериться вам?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">
            Где можно посмотреть все возможности системы?
          </div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc4ade0deca32d7859f5d35ab1daa76e03079c733bed1aa8e581aefd433f9f8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Не нашли ответ на свой вопрос?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <section class="self-center mt-7 text-2xl leading-7 text-center text-black">
          Оплата и тарифы
        </section>
        <article
            class="flex gap-5 justify-center py-5 mt-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Как выбрать тариф?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc4ade0deca32d7859f5d35ab1daa76e03079c733bed1aa8e581aefd433f9f8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto my-auto">Какие есть способы оплаты?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Что будет, если не оплатить тариф?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc4ade0deca32d7859f5d35ab1daa76e03079c733bed1aa8e581aefd433f9f8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Есть ли бесплатный тариф?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto max-md:max-w-full">
            У меня нет домена, можно ли зарегистрировать его у вас?
          </div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc4ade0deca32d7859f5d35ab1daa76e03079c733bed1aa8e581aefd433f9f8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <section class="self-center mt-8 text-2xl leading-7 text-center text-black">
          Возможности платформы
        </section>
        <article
            class="flex gap-5 justify-center py-5 mt-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">У меня будет доступ к файлам?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto max-md:max-w-full">
            Как быть, если в Smink нет функции, но она очень нужна?
          </div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc4ade0deca32d7859f5d35ab1daa76e03079c733bed1aa8e581aefd433f9f8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Как конструктор влияет на SEO?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Что, если у меня несколько сайтов?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc4ade0deca32d7859f5d35ab1daa76e03079c733bed1aa8e581aefd433f9f8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Какие показатели скорости сайта?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">
            У вас нет нужной мне интеграции, как быть?
          </div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc4ade0deca32d7859f5d35ab1daa76e03079c733bed1aa8e581aefd433f9f8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Вы предоставляете SSL сертификат?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">
            У меня уже есть сайт, как переехать на Smink?
          </div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc4ade0deca32d7859f5d35ab1daa76e03079c733bed1aa8e581aefd433f9f8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Что я могу поменять на своем сайте?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">
            Я не готов разбираться в конструкторе, как быть?
          </div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc4ade0deca32d7859f5d35ab1daa76e03079c733bed1aa8e581aefd433f9f8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Как изменить текущий дизайн на другой?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Как продвигать сайт не своими силами?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc4ade0deca32d7859f5d35ab1daa76e03079c733bed1aa8e581aefd433f9f8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Есть ли ограничение по количеству устройств?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <section class="self-center mt-7 text-2xl leading-7 text-center text-black">
          Обновления
        </section>
        <article
            class="flex gap-5 justify-center py-5 mt-6 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto my-auto">Являются ли обновления платными?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc4ade0deca32d7859f5d35ab1daa76e03079c733bed1aa8e581aefd433f9f8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto">Нужно ли устанавливать обновление?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto max-md:max-w-full">
            Как работают обновления и могут ли они что-то сломать?
          </div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fc4ade0deca32d7859f5d35ab1daa76e03079c733bed1aa8e581aefd433f9f8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
        <article
            class="flex gap-5 justify-center py-5 shadow-sm bg-white bg-opacity-0 max-md:flex-wrap max-md:max-w-full"
        >
          <div class="flex-auto my-auto">Как часто выходят обновления?</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eda4545ddea71defa00666b75de859235142ecbb93fcf7a588d92a10b9c1a4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
              alt=""
              class="shrink-0 w-5 aspect-square"
          />
        </article>
      </main>
    </section>
    <footer
        class="flex flex-col justify-center items-start px-16 py-16 mt-52 w-full shadow-sm bg-white bg-opacity-0 max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <div class="flex gap-5 ml-44 max-w-full w-[927px] max-md:flex-wrap">
        <div class="flex flex-col">
          <div class="flex gap-2 text-2xl text-black whitespace-nowrap">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1281a5dc6b325fd4b01df344cb3db02a943f7b6988cae27de614edc767d4867?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                alt="Smink logo"
                class="shrink-0 w-5 aspect-square"
            />
            <div class="flex-auto">Smink</div>
          </div>
          <div class="mt-4 text-xs text-black text-opacity-50">
            Российский IT разработчик
          </div>
        </div>
        <div class="flex flex-col self-start mt-2">
          <div class="text-sm text-black">gos@smink.ru</div>
          <div class="mt-4 text-xs text-black text-opacity-50">
            Для государственных органов
          </div>
        </div>
        <div class="flex flex-col self-start mt-2">
          <div class="text-sm text-black">support@smink.ru</div>
          <div class="mt-4 text-xs text-black text-opacity-50">
            По вопросам платформы
          </div>
        </div>
        <div
            class="flex-auto self-end mt-9 text-xs text-black text-opacity-50"
        >
          Этот сайт сделан через конструктор Smink
        </div>
      </div>
    </footer>
    <footer
        class="flex justify-center items-center px-16 py-16 w-full shadow-sm bg-white bg-opacity-0 max-md:px-5 max-md:max-w-full"
    >
      <div class="flex flex-col max-w-full w-[1047px]">
        <nav class="max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0">
            <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div
                  class="flex flex-col grow text-sm text-black text-opacity-70 max-md:mt-10"
              >
                <div class="text-black">Платформа</div>
                <div class="mt-9">Тарифы</div>
                <div class="mt-5">Возможности</div>
                <div class="mt-6">Готовые сайты</div>
                <div class="mt-6">Обновления</div>
                <div class="mt-6">Отзывы и примеры</div>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
              <div
                  class="flex flex-col text-sm text-black text-opacity-70 max-md:mt-10"
              >
                <div class="text-black">Полезная информация</div>
                <div class="mt-8">База знаний Smink</div>
                <div class="mt-6">Поддержка</div>
                <div class="mt-5">Ответы на вопросы</div>
                <div class="mt-5">Новости</div>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
              <div
                  class="flex flex-col text-sm text-black text-opacity-70 max-md:mt-10"
              >
                <div class="text-black">Сотрудничество</div>
                <div class="mt-8">Партнерская программа</div>
                <div class="mt-5">Положения и условия</div>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
              <div
                  class="flex flex-col text-sm text-black text-opacity-70 max-md:mt-10"
              >
                <div class="text-black">Компания</div>
                <div class="mt-9">Бренд и логотипы</div>
                <div class="mt-5">Реквизиты компании</div>
                <div class="mt-6">Вакансии</div>
                <div class="mt-6">Технологии</div>
              </div>
            </div>
          </div>
        </nav>
        <nav
            class="flex gap-5 justify-between mt-16 max-w-full text-sm text-black whitespace-nowrap w-[501px] max-md:flex-wrap max-md:mt-10"
        >
          <div class="flex gap-1.5 justify-center">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a377d35e5ed0a00f7644baf07c02c6b3d30205f1c68180de3d2c37cae589e31?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                alt="YouTube"
                class="shrink-0 aspect-square w-[18px]"
            />
            <a class="my-auto">YouTube</a>
          </div>
          <div class="flex gap-1.5 justify-center">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/29dde832429c8097bdf49bc6e56e43c3f81cd35e036f296b817a41e418b4ef5c?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                alt="Discord"
                class="shrink-0 aspect-square w-[18px]"
            />
            <a class="my-auto">Discord</a>
          </div>
          <div class="flex gap-1.5 justify-center">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2132b03b227f75817aa470d966cee3656922d10660e309c643c96cfbe8779242?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                alt="Telegram"
                class="shrink-0 aspect-square w-[18px]"
            />
            <a class="my-auto">Telegram</a>
          </div>
          <div class="flex gap-1.5 justify-center">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7510c1b29db15a328b29e2b459b63c99c3330743c33c92ac791d7a8f08d29036?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                alt="vk"
                class="shrink-0 aspect-square w-[18px]"
            />
            <a class="my-auto">ВКонтакте</a>
          </div>
        </nav>
      </div>
    </footer>
    <footer
        class="flex justify-center items-center px-16 py-11 w-full text-xs shadow-sm bg-white bg-opacity-0 text-black text-opacity-50 max-md:px-5 max-md:max-w-full"
    >
      <div
          class="flex gap-5 justify-between max-w-full w-[1103px] max-md:flex-wrap"
      >
        <div class="flex flex-col max-md:max-w-full">
          <div class="max-md:max-w-full">
            Этот сайт использует файлы cookie. Продолжая использовать наш сайт, вы
            принимаете условия
          </div>
          <div class="mt-1.5 max-md:max-w-full">
            соглашения в отношении использования персональных данных
          </div>
        </div>
        <div class="flex flex-col self-start">
          <div>Общество с ограниченной</div>
          <div class="mt-1">ответственностью «Сминк», ИНН 7751221937</div>
        </div>
        <div class="flex flex-col">
          <div>Пользовательское соглашение</div>
          <div class="mt-1.5">Обработка персональных данных</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>