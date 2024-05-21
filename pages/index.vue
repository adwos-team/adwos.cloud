<template>
  <div class="flex flex-col items-center px-16 pt-20 pb-8 bg-gray-50 dark:bg-neutral-900 max-md:px-5">
    <div class="mt-7 w-full max-w-[1216px] max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col max-md:gap-0">
        <nav class="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
          <aside class="flex flex-col max-md:mt-10">
            <section class="flex flex-col justify-center px-7 py-5 text-sm leading-6 bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <p1>контент</p1>
            </section>


            <section class="flex flex-col justify-center px-7 py-5 mt-4 w-full rounded-xl bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700 max-md:px-5">
              <a class="flex items-center gap-x-2 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700" href="../../pro/index.html">
              <span class="flex justify-center items-center size-6 bg-blue-600 text-white rounded-md dark:bg-blue-500">
                <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
              </span>
                PRO
              </a>
              <div class="flex gap-4 pr-2 text-sm leading-6 text-slate-400">
                <img loading="lazy" src="http://b.io/ext6-" alt="Cloud Servers" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Облачные серверы</div>
              </div>
              <div class="flex gap-4 pr-2.5 mt-3 text-sm leading-6 text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/4862d9770d1dd935b5743f764509bcd8a7e46e7a642e788558e7d6e40b307267?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Dedicated Servers" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Выделенные серверы</div>
              </div>
              <div class="flex gap-4 pr-2 mt-3 text-sm leading-6 text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/752ae4d79e97f5b14c12b709c0059f2532c266a5d39b383ae9c1712679ce40bb?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Databases" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Базы данных</div>
              </div>
              <div class="flex gap-5 justify-between mt-3 w-full whitespace-nowrap">
                <div class="flex gap-4 text-sm leading-6 text-slate-400">
                  <img loading="lazy"
                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc18d710b2821abc5b12f0f437502bb123085a3de89fd8bae15237b4dd071ba6?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                       alt="Apps" class="shrink-0 w-6 aspect-square"/>
                  <div class="justify-center my-auto">Apps</div>
                </div>
                <div
                    class="justify-center p-1.5 my-auto text-xs leading-4 text-center text-white bg-indigo-500 rounded">
                  NEW
                </div>
              </div>
              <div class="flex gap-4 pr-2.5 mt-3 text-sm leading-6 text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/d00ee9d2b801e4a7f7e6433011023fdce5b46cb5fc27dc2caf2088d61baec275?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="S3 Storage" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Хранилище S3</div>
              </div>
              <div class="flex gap-4 pr-3.5 mt-3 text-sm leading-6 whitespace-nowrap text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6dabf0f0a425564809102f42b2529733049d1db014d6d98357459f34e6f6c99?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Kubernetes" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Kubernetes</div>
              </div>
              <div class="flex gap-4 pr-20 mt-3 text-sm leading-6 whitespace-nowrap text-slate-400 max-md:pr-5">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b2a830ba13bb6577e00f242ee3614e378b971a8b2d55113ebd623b2c2b059b4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Networks" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Сети</div>
              </div>
              <div class="flex gap-4 pr-3.5 mt-3 text-sm leading-6 whitespace-nowrap text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ce4be3032340da6b11d7c1cd8bf695b34e06c8de9526d3537ac5f5320871b6b?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="SSH Keys" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">SSH-ключи</div>
              </div>
              <div class="flex gap-4 pr-3 mt-3 text-sm leading-6 whitespace-nowrap text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/79bfe5f7611fc9004c737be01b0dde2afdc67ad0c6a9e09b0d185c829a85fefe?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Images" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Образы</div>
              </div>
              <div class="shrink-0 mt-3 bg-gray-700 h-[5px]"></div>
              <div class="flex gap-4 pr-2.5 mt-3 text-sm leading-6 whitespace-nowrap text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee6977d05ab4d5054f32e55ce17c466fc47df2108f62a29c52c48c7d8c6c333?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Domains" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Домены</div>
              </div>
              <div class="flex gap-4 pr-20 mt-4 text-sm leading-6 whitespace-nowrap text-slate-400 max-md:pr-5">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/b91d5f107d4c5317807f85721110bb3ad8c5724ceabc229ca161e442e7c6ab2b?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Mail" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Почта</div>
              </div>
              <div class="flex gap-4 pr-2.5 mt-3 text-sm leading-6 whitespace-nowrap text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98a697e08c37dfae903f49dac68bcbdabd723dfec7ce3d672699f5834a2c03b?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Licenses" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Лицензии</div>
              </div>
              <div class="flex gap-4 pr-3.5 mt-3 text-sm leading-6 whitespace-nowrap text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5c4ec403ba93aa5c9d335337a8afad4c3c9729643dfa60c7e39b4b502638320?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="SSL Certificates" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">SSL-сертификаты</div>
              </div>
              <div class="flex gap-4 pr-1.5 mt-3 text-sm leading-6 text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/80980643bf2d49f623a256aff703725bc41557ef988c63d4b54ba604138fcbb2?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Personal Network" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Личная сеть</div>
              </div>
              <div class="shrink-0 mt-3 bg-gray-700 h-[5px]"></div>
              <div class="flex gap-4 pr-2 mt-3 text-sm leading-6 text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fc112eb3e27b6e0c4a19d8fbfa5fb069343f7dd8c9c731daf611ab1809263ce?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Balance and Payments" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Баланс и платежи</div>
              </div>
              <div class="flex gap-4 pr-3 mt-4 text-sm leading-6 whitespace-nowrap text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/a74a88802b8cc5f18b892af52d997730905887b265bbd328bc5f56f847798db4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Documents" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Документы</div>
              </div>
              <div class="flex gap-4 pr-1.5 mt-3 text-sm leading-6 text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/37a41cd1771b6a1059ea05b9d8dac1166463fe8a5274662bfc4bdbcc46be5451?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="API and Terraform" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">API и Terraform</div>
              </div>
              <div class="flex gap-4 pr-2.5 mt-3 text-sm leading-6 whitespace-nowrap text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/443b11d85c12c44e491b2cb3d710544d8f97c2abf84aaa075ac2f9ddd4d0db1d?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Notifications" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Уведомления</div>
              </div>
              <div class="flex gap-4 pr-3 mt-3 text-sm leading-6 whitespace-nowrap text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/75e8eff74ff708c181cada2492f2f9a489671c7d244388a200c09ed39d95c801?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Users" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Пользователи</div>
              </div>
              <div class="flex gap-5 justify-between mt-3 w-full whitespace-nowrap">
                <div class="flex gap-4 text-sm leading-6 text-slate-400">
                  <img loading="lazy"
                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/1320a30baf7442a9c6017e7f926e0be4c134d3796f7e5150180c94351a5336a5?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                       alt="History" class="shrink-0 w-6 aspect-square"/>
                  <div class="justify-center my-auto">История</div>
                </div>
                <div
                    class="justify-center p-1.5 my-auto text-xs leading-4 text-center text-white bg-indigo-500 rounded">
                  NEW
                </div>
              </div>
              <div class="shrink-0 mt-3 bg-gray-700 h-[5px]"></div>
              <div class="flex gap-4 pr-2 mt-3 text-sm leading-6 text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eda11ddfb0cfa43bd7783ec056297ce9ad5d25b476d10b65d9194476adca057?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Bug Bounty" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Заработать на баге</div>
              </div>
              <div class="flex gap-4 pr-3 mt-4 text-sm leading-6 whitespace-nowrap text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/dff2f60dcdad22681a64e6492ded3c2d59ca0565569fb9973f947cb009712661?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Documentation" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Документация</div>
              </div>
              <div class="shrink-0 mt-3 bg-gray-700 h-[5px]"></div>
              <div class="flex gap-4 pr-2 mt-3 text-sm leading-6 text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/5899694768717b0640524502436a441168a8465484e57921fd6d65a43b64281b?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="iOS App" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">iOS приложение</div>
              </div>
              <div class="flex gap-4 pr-2 mt-4 text-sm leading-6 text-slate-400">
                <img loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2e27c04e34def51342b909e659a91f1a8b66cdd0b52356e2093c3de210bf65d?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                     alt="Android App" class="shrink-0 w-6 aspect-square"/>
                <div class="justify-center my-auto">Android приложение</div>
              </div>
            </section>
          </aside>
        </nav>
        <main class="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
          <header class="flex flex-col grow pt-1.5 max-md:mt-10 max-md:max-w-full">
            <section class="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
              <div class="flex gap-3 items-start max-md:flex-wrap">
                <img loading="lazy"
                     src="/public/images/logotype.png"
                     alt="Idea" class="shrink-0 w-14 aspect-square"/>
                <section class="flex flex-col grow shrink-0 justify-center py-0.5 mt-1.5 w-fit">
                  <h2 class="text-2xl font-bold text-gray-800 dark:text-neutral-200">У вас есть идея?</h2>
                  <p class="justify-center mt-4 text-sm leading-6 text-slate-400">Предлагайте свои идеи по улучшению Adwos CMS</p>
                </section>
              </div>
              <button
                  class="justify-center self-start px-6 py-4 mt-1 text-sm leading-6 text-center text-white bg-indigo-500 rounded-xl max-md:px-5">
                Предложить идею
              </button>
            </section>
            <section class="mt-6 max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <section class="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                    <div class="relative">
                      <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                        <svg class="flex-shrink-0 size-4 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                      </div>
                      <input type="text" class="py-2 ps-10 pe-16 block w-full bg-white border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-200 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600" placeholder="Search Preline" data-hs-overlay="#hs-pro-dnsm">
                      <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3 text-gray-400">
                        <svg class="flex-shrink-0 size-3 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
                        <span class="mx-1">
                          <svg class="flex-shrink-0 size-3 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        </span>
                        <span class="text-xs">/</span>
                      </div>
                    </div>
                    <article class="flex gap-5 mt-6 text-sm text-slate-400 max-md:flex-wrap">
                      <img loading="lazy"
                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7b64c21901f071a536c8f0ad25d4e20a78524d105d970bbd37ff2f1b283db3f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                           alt="Idea Image 1" class="shrink-0 self-start w-12 rounded-xl aspect-[0.6]"/>
                      <section class="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <h3 class="text-base leading-5 text-white max-md:max-w-full">Поддержка кастомных тарифов и
                          конфигураций в биллинге и Terraform через механизм тегов</h3>
                        <p class="mt-5 leading-6 max-md:max-w-full">Для управления инфраструктурой в TimeWeb Cloud очень
                          круто и легко использовать Terraform - прям песня пушка огонь.</p>
                        <div class="mt-8 leading-[157%] max-md:max-w-full">Однако использование Terraform не...</div>
                        <div class="flex gap-2.5 items-center mt-4 leading-[171%] max-md:flex-wrap max-md:pr-5">
                          <img loading="lazy"
                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/e23eea0d982492180bc254599060afcc32f92f100c2e9b89ce46105502821e5f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                               alt="Vote" class="shrink-0 self-stretch my-auto w-4 aspect-square"/>
                          <div class="self-stretch my-auto">0</div>
                          <div class="flex gap-1 self-stretch text-center">
                            <span class="justify-center px-2 py-2 whitespace-nowrap rounded bg-slate-800">API</span>
                            <span class="justify-center px-3 py-1.5 rounded bg-slate-800">Новые сервисы</span>
                            <span class="justify-center px-2.5 py-1.5 rounded bg-slate-800">Оплата услуг</span>
                          </div>
                          <div class="flex gap-1.5 self-stretch my-auto whitespace-nowrap">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f82ac1f95e08ad6d8fadea31399936fa81ab1cc84ce6bd0eb83b9e77259c7cf?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Author" class="shrink-0 w-4 aspect-square"/>
                            <span class="justify-center self-start">Денис</span>
                          </div>
                        </div>
                      </section>
                    </article>
                    <article
                        class="flex gap-5 justify-center items-start py-6 pr-12 mt-6 text-sm border-t border-gray-700 border-solid text-slate-400 max-md:flex-wrap max-md:pr-5">
                      <img loading="lazy"
                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d10cfd621dde64166d848182f918394f6e83b6e4d463e5409ddae07dae7ecb8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                           alt="Idea Image 2" class="shrink-0 w-12 rounded-xl aspect-[0.6]"/>
                      <section class="flex flex-col grow shrink-0 mt-1 basis-0 w-fit max-md:max-w-full">
                        <h3 class="text-base leading-5 text-white max-md:max-w-full">Уведомление в ТГ бота о технических
                          работах</h3>
                        <p class="mt-4 leading-6 max-md:max-w-full">Надо что бы бот который присылает коды подтверждения
                          слал информацию о технических работах или сбоях</p>
                        <div class="flex gap-2.5 items-center self-start px-px mt-4 whitespace-nowrap leading-[171%]">
                          <img loading="lazy"
                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/e23eea0d982492180bc254599060afcc32f92f100c2e9b89ce46105502821e5f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                               alt="Vote" class="shrink-0 self-stretch my-auto w-4 aspect-square"/>
                          <div class="self-stretch my-auto">1</div>
                          <div class="flex gap-1 self-stretch text-center">
                            <span class="justify-center px-2.5 py-1.5 rounded bg-slate-800">Уведомления</span>
                            <span class="justify-center px-2.5 py-1.5 rounded bg-slate-800">Аккаунт</span>
                          </div>
                          <div class="flex gap-1.5 self-stretch my-auto">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/69ac191d83fa86e436a5db045ee592fa0e6a05706a5f4af4088a8b0f1569adb4?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Author" class="shrink-0 w-4 aspect-square"/>
                            <span class="justify-center my-auto">Антон</span>
                          </div>
                        </div>
                      </section>
                    </article>
                    <article
                        class="flex gap-5 justify-center items-start py-6 text-sm border-t border-gray-700 border-solid text-slate-400 max-md:flex-wrap">
                      <img loading="lazy"
                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/23d1b03952f4f84d21da2e8504d890647ec4300da83fabd04b0bd0aaa5b6323f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                           alt="Idea Image 3" class="shrink-0 w-12 rounded-xl aspect-[0.6]"/>
                      <section class="flex flex-col grow shrink-0 mt-1 basis-0 w-fit max-md:max-w-full">
                        <h3 class="text-base leading-5 text-white max-md:max-w-full">Сервис хранения секретов (Secret
                          Management)</h3>
                        <p class="mt-4 leading-6 max-md:max-w-full">Примеры: Hashicorp Vault Secrets или Infisical такие
                          системы позволяют управлять хранением паролей и дают возможность легко передать их в Docker,
                          VM...</p>
                        <div class="flex gap-2.5 items-center mt-4 leading-[171%] max-md:flex-wrap max-md:pr-5">
                          <img loading="lazy"
                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/e23eea0d982492180bc254599060afcc32f92f100c2e9b89ce46105502821e5f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                               alt="Vote" class="shrink-0 self-stretch my-auto w-4 aspect-square"/>
                          <div class="self-stretch my-auto">1</div>
                          <div class="flex gap-1 self-stretch text-center">
                            <span class="justify-center px-3 py-1.5 rounded bg-slate-800">Новые сервисы</span>
                            <span
                                class="justify-center px-3 py-1.5 whitespace-nowrap rounded bg-slate-800">Проекты</span>
                            <span
                                class="justify-center px-3 py-2 whitespace-nowrap rounded bg-slate-800">Безопасность</span>
                          </div>
                          <div class="flex gap-1.5 self-stretch my-auto whitespace-nowrap">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fc7bea163b1d83dfe63ddc04003c55ee3616334fd4364f9f367b616546fdc67?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Author" class="shrink-0 w-4 aspect-square"/>
                            <span class="justify-center self-start">Александр</span>
                          </div>
                        </div>
                      </section>
                    </article>
                    <article
                        class="flex gap-5 justify-center items-start py-6 pr-7 text-sm border-t border-gray-700 border-solid max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                      <section
                          class="flex flex-col justify-center items-start px-4 py-5 text-white whitespace-nowrap rounded-xl bg-slate-800 leading-[174%]">
                        <img loading="lazy"
                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bc20f8d450a490e8d7273659a289dacdb51a064aa3e7ec573b718cdbd1ec16b?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                             alt="Vote 16" class="w-2.5 aspect-[2]"/>
                        <div class="self-stretch mt-3">16</div>
                        <img loading="lazy"
                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0d950ad3cd23ba946dd999499cbff2bc25016f5dcd16f8713eaa6126830e3d3?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                             alt="Vote" class="mt-3 w-2.5 aspect-[2]"/>
                      </section>
                      <section class="flex flex-col grow shrink-0 mt-1 basis-0 text-slate-400 w-fit max-md:max-w-full">
                        <h3 class="text-base leading-5 text-white max-md:max-w-full">Предупреждать об авариях в ЦОД</h3>
                        <p class="mt-4 leading-6 max-md:max-w-full">На фоне DDOS-атаки, которая случилась 20 мая 2024 в
                          новосибирском ЦОД предлагаю добавить в интерфейс управления информацию о больших
                          массовых...</p>
                        <div
                            class="flex gap-2.5 items-center mt-4 whitespace-nowrap leading-[171%] max-md:flex-wrap max-md:pr-5">
                          <img loading="lazy"
                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/e23eea0d982492180bc254599060afcc32f92f100c2e9b89ce46105502821e5f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                               alt="Vote" class="shrink-0 self-stretch my-auto w-4 aspect-square"/>
                          <div class="self-stretch my-auto">1</div>
                          <div class="flex gap-1 self-stretch text-center">
                            <span class="justify-center px-3 py-1.5 rounded bg-slate-800">Поддержка</span>
                            <span class="justify-center px-3 py-1.5 rounded bg-slate-800">Уведомления</span>
                            <span class="justify-center px-3 py-1.5 rounded bg-slate-800">Мониторинг</span>
                          </div>
                          <div class="flex gap-1.5 self-stretch my-auto">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5ff3b06e93a5bce6172c68ec352180445f80a7ba755341ca832659a70667667?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Author" class="shrink-0 w-4 aspect-square"/>
                            <span class="justify-center self-start">Мухачев</span>
                          </div>
                        </div>
                      </section>
                    </article>
                    <article
                        class="flex gap-5 justify-center items-start py-6 text-sm border-t border-gray-700 border-solid text-slate-400 max-md:flex-wrap">
                      <img loading="lazy"
                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7a678b20da3211de62e6d23971c8ea1a89f57da0ed1e23e03e5690f4a28c8f1?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                           alt="Idea Image 4" class="shrink-0 w-12 rounded-xl aspect-[0.6]"/>
                      <section class="flex flex-col grow shrink-0 mt-1 basis-0 w-fit max-md:max-w-full">
                        <h3 class="text-base leading-5 text-white max-md:max-w-full">Улучшения раздела "Заработать на
                          баге"</h3>
                        <p class="mt-4 leading-6 max-md:max-w-full">Улучшения касаются формы заявки (не через
                          BI.ZONE):<br/>1. Добавить возможность вставлять скриншот через Ctrl+V<br/>2. Дать посмотреть
                          уже зарепорченные мной баги...</p>
                        <div class="flex gap-2.5 mt-4 leading-[171%] max-md:flex-wrap">
                          <div class="flex flex-auto gap-2 items-center max-md:flex-wrap">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/e23eea0d982492180bc254599060afcc32f92f100c2e9b89ce46105502821e5f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Vote" class="shrink-0 self-stretch my-auto w-4 aspect-square"/>
                            <div class="self-stretch my-auto">0</div>
                            <span class="justify-center self-stretch px-3 py-1.5 text-center rounded bg-slate-800">Панель управления</span>
                          </div>
                          <div class="flex gap-1.5 my-auto">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/80a009e2e80d833d7a264d4e0a61455f1edf3bf35131f1d55adb7b5e19ead66f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Author" class="shrink-0 w-4 aspect-square"/>
                            <span class="justify-center self-start">Денис</span>
                          </div>
                        </div>
                      </section>
                    </article>
                    <article
                        class="flex gap-5 justify-center items-start py-6 pr-12 text-sm border-t border-gray-700 border-solid text-slate-400 max-md:flex-wrap max-md:pr-5">
                      <img loading="lazy"
                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/e929b9334ea1b8f62c72d6857dd4214e12cd3e538dfd4795c7dd25b365bbe2b8?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                           alt="Idea Image 5" class="shrink-0 w-12 rounded-xl aspect-[0.6]"/>
                      <section class="flex flex-col grow shrink-0 mt-1 basis-0 w-fit max-md:max-w-full">
                        <h3 class="text-base leading-5 text-white max-md:max-w-full">Раздел проблемные сервера</h3>
                        <p class="mt-4 leading-6 max-md:max-w-full">Предлагаю добавить раздел с проблемными серверами,
                          когда обнаруживается проблема, то сервера, где есть проблемы, будут попадать туда. Это поможет
                          системам...</p>
                        <div class="flex gap-2.5 items-center mt-4 leading-[171%] max-md:flex-wrap max-md:pr-5">
                          <img loading="lazy"
                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/e23eea0d982492180bc254599060afcc32f92f100c2e9b89ce46105502821e5f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                               alt="Vote" class="shrink-0 self-stretch my-auto w-4 aspect-square"/>
                          <div class="self-stretch my-auto">0</div>
                          <div class="flex gap-1 self-stretch text-center">
                            <span class="justify-center px-2.5 py-1.5 whitespace-nowrap rounded bg-slate-800">Уведомления</span>
                            <span class="justify-center px-3 py-1.5 rounded bg-slate-800">Панель управления</span>
                            <span
                                class="justify-center px-3 py-1.5 whitespace-nowrap rounded bg-slate-800">Мониторинг</span>
                          </div>
                          <div class="flex gap-1.5 self-stretch my-auto whitespace-nowrap">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0d8556f938581c3805d46c53541fbf6aaf203e0cd705e760806d6a50917de0f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Author" class="shrink-0 w-4 aspect-square"/>
                            <span class="justify-center self-start">Маг</span>
                          </div>
                        </div>
                      </section>
                    </article>
                    <article
                        class="flex gap-5 justify-center items-start py-6 pr-6 border-t border-gray-700 border-solid max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                      <section
                          class="flex flex-col justify-center items-start px-4 py-5 text-sm leading-6 text-white whitespace-nowrap rounded-xl bg-slate-800">
                        <img loading="lazy"
                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bc20f8d450a490e8d7273659a289dacdb51a064aa3e7ec573b718cdbd1ec16b?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                             alt="Vote 17" class="w-2.5 aspect-[2]"/>
                        <div class="mt-3.5">17</div>
                        <img loading="lazy"
                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0d950ad3cd23ba946dd999499cbff2bc25016f5dcd16f8713eaa6126830e3d3?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                             alt="Vote" class="mt-3 w-2.5 aspect-[2]"/>
                      </section>
                      <section
                          class="flex flex-col grow shrink-0 mt-1 text-sm basis-0 text-slate-400 w-fit max-md:max-w-full">
                        <h3 class="text-base leading-5 text-white max-md:max-w-full">Автоматический выкуп
                          освободившегося домена</h3>
                        <p class="mt-4 leading-6 max-md:max-w-full">Иногда бывает так, что кто-то занимает домен,
                          который ты очень хотел, но ничего с ним не делает. Каждый раз проверять...</p>
                        <div class="flex gap-2.5 self-start mt-4 whitespace-nowrap leading-[171%]">
                          <div class="flex gap-2 items-center">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/e23eea0d982492180bc254599060afcc32f92f100c2e9b89ce46105502821e5f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Vote" class="shrink-0 self-stretch my-auto w-4 aspect-square"/>
                            <div class="self-stretch my-auto">2</div>
                            <span class="justify-center self-stretch px-2.5 py-1.5 text-center rounded bg-slate-800">Домены</span>
                          </div>
                          <div class="flex gap-1.5 my-auto">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/02a7fe4e205c2b3575b5d898e0024367d0e4398c0d9a76622373fff2c1fa18d2?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Author" class="shrink-0 w-4 aspect-square"/>
                            <span class="justify-center self-start">George</span>
                          </div>
                        </div>
                      </section>
                    </article>
                    <article
                        class="flex gap-5 justify-center items-start py-6 pr-10 border-t border-gray-700 border-solid max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                      <section
                          class="flex flex-col justify-center items-start px-4 py-5 text-sm leading-6 text-white whitespace-nowrap rounded-xl bg-slate-800">
                        <img loading="lazy"
                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bc20f8d450a490e8d7273659a289dacdb51a064aa3e7ec573b718cdbd1ec16b?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                             alt="Vote 12" class="w-2.5 aspect-[2]"/>
                        <div class="mt-3.5">12</div>
                        <img loading="lazy"
                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0d950ad3cd23ba946dd999499cbff2bc25016f5dcd16f8713eaa6126830e3d3?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                             alt="Vote" class="mt-3 w-2.5 aspect-[2]"/>
                      </section>
                      <section
                          class="flex flex-col grow shrink-0 mt-1 text-sm basis-0 text-slate-400 w-fit max-md:max-w-full">
                        <h3 class="text-base leading-5 text-white max-md:max-w-full">Калькулятор стоимости ресурсов с
                          поддержкой разных ресурсов</h3>
                        <p class="mt-4 leading-6 max-md:max-w-full">Вот допустим, мне хочется оценить проект. В Yandex,
                          AWS, GCP я могу добавить нужные мне сервера, базы данных, kubernetes,в все такие системы
                          позволяют управлять хранениями, ресурсами и давать легко передать их в Docker, VM...</p>
                        <div class="flex gap-2.5 items-center mt-4 leading-[171%] max-md:flex-wrap max-md:pr-5">
                          <img loading="lazy"
                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/e23eea0d982492180bc254599060afcc32f92f100c2e9b89ce46105502821e5f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                               alt="Vote" class="shrink-0 self-stretch my-auto w-4 aspect-square"/>
                          <div class="self-stretch my-auto">0</div>
                          <div class="flex gap-1 self-stretch text-center">
                            <span class="justify-center px-2.5 py-1.5 rounded bg-slate-800">Оплата услуг</span>
                            <span class="justify-center px-3 py-1.5 rounded bg-slate-800">Новые сервисы</span>
                          </div>
                          <div class="flex gap-1.5 self-stretch my-auto whitespace-nowrap">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/261a3dc73242787fc474cbf5c5d232f4bb7aa94636018db221f4bf595cc3fdcb?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Author" class="shrink-0 w-4 aspect-square"/>
                            <span class="justify-center self-start">Денис</span>
                          </div>
                        </div>
                      </section>
                    </article>
                    <article
                        class="flex gap-5 justify-center items-start py-6 pr-10 border-t border-gray-700 border-solid max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                      <section
                          class="flex flex-col justify-center items-start px-4 py-5 text-sm leading-6 text-white whitespace-nowrap rounded-xl bg-slate-800">
                        <img loading="lazy"
                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bc20f8d450a490e8d7273659a289dacdb51a064aa3e7ec573b718cdbd1ec16b?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                             alt="Vote 13" class="w-2.5 aspect-[2]"/>
                        <div class="mt-3.5">13</div>
                        <img loading="lazy"
                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0d950ad3cd23ba946dd999499cbff2bc25016f5dcd16f8713eaa6126830e3d3?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                             alt="Vote" class="mt-3 w-2.5 aspect-[2]"/>
                      </section>
                      <section
                          class="flex flex-col grow shrink-0 mt-1 text-sm basis-0 text-slate-400 w-fit max-md:max-w-full">
                        <h3 class="text-base leading-5 text-white max-md:max-w-full">Предлагать оптимизацию затрат на
                          облачные ресурсы в зависимости от их профиля потребления</h3>
                        <p class="mt-4 leading-6 max-md:max-w-full">Банальный пример - есть сервер 4 cpu / 8 gb ram,
                          постоянно потребляет допустим 30% по процессору, система может предложить...</p>
                        <div class="flex gap-2.5 self-start mt-4 whitespace-nowrap leading-[171%]">
                          <div class="flex gap-2 items-center">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/e23eea0d982492180bc254599060afcc32f92f100c2e9b89ce46105502821e5f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Vote" class="shrink-0 self-stretch my-auto w-4 aspect-square"/>
                            <div class="self-stretch my-auto">0</div>
                            <span class="justify-center self-stretch px-3 py-1.5 text-center rounded bg-slate-800">Облачные серверы</span>
                          </div>
                          <div class="flex gap-1.5 my-auto">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5c1333bdb96bdfdb900bd4d16d349a9463c7b173addf15543e576829b28de9c?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Author" class="shrink-0 w-4 aspect-square"/>
                            <span class="justify-center self-start">Денис</span>
                          </div>
                        </div>
                      </section>
                    </article>
                    <article
                        class="flex gap-5 justify-center items-start py-6 text-sm border-t border-gray-700 border-solid text-slate-400 max-md:flex-wrap">
                      <img loading="lazy"
                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/7181ff58a0c7277c03b42a9a42c10d29b275f7086324547bb44682b7dfcad069?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                           alt="Idea Image 6" class="shrink-0 w-12 rounded-xl aspect-[0.6]"/>
                      <section class="flex flex-col grow shrink-0 mt-1 basis-0 w-fit max-md:max-w-full">
                        <h3 class="text-base leading-5 text-white max-md:max-w-full">Понятные правила тарификации для
                          Managed ресурсов</h3>
                        <p class="mt-4 leading-6 max-md:max-w-full">Было бы здорово, аналогично новому конфигуратору,
                          иметь понятные, легко рассчитываемые правила тарификации не только для серверов, но и для
                          Managed...</p>
                        <div class="flex gap-2.5 self-start mt-4 leading-[171%]">
                          <div class="flex gap-2 items-center">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/e23eea0d982492180bc254599060afcc32f92f100c2e9b89ce46105502821e5f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Vote" class="shrink-0 self-stretch my-auto w-4 aspect-square"/>
                            <div class="self-stretch my-auto">0</div>
                            <span class="justify-center self-stretch px-2.5 py-1.5 text-center rounded bg-slate-800">Оплата услуг</span>
                          </div>
                          <div class="flex gap-1.5 my-auto">
                            <img loading="lazy"
                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/13d6a058e5b52c9ba05c6d9440c791e02b219e539ba6d1a71a162adeedb2592f?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                                 alt="Author" class="shrink-0 w-4 aspect-square"/>
                            <span class="justify-center self-start">Денис</span>
                          </div>
                        </div>
                      </section>
                    </article>
                    <nav
                        class="flex gap-5 items-center mt-4 text-sm leading-4 text-center text-white whitespace-nowrap max-md:flex-wrap max-md:pr-5">
                      <div class="flex gap-1.5 justify-center self-stretch my-auto rounded-lg text-slate-400">
                        <img loading="lazy"
                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/cef5c7e06e46e4dd5228fd28789f390ea16f1d714915acdbca04846d05d4add2?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                             alt="Back" class="shrink-0 w-6 aspect-square"/>
                        <div class="my-auto">Назад</div>
                      </div>
                      <div class="flex gap-2 self-stretch">
                        <button class="justify-center items-center px-4 rounded-lg bg-slate-700 h-[33px] w-[33px]">1
                        </button>
                        <button class="justify-center px-4 py-3 rounded-lg bg-slate-800">2</button>
                        <button class="justify-center px-4 py-3 rounded-lg bg-slate-800">3</button>
                        <button class="justify-center px-4 py-3 rounded-lg bg-slate-800">4</button>
                        <button class="justify-center px-4 py-3 rounded-lg bg-slate-800">5</button>
                        <button class="justify-center px-4 pt-5 pb-3 rounded-lg bg-slate-800">...</button>
                        <button class="justify-center px-4 py-3 rounded-lg bg-slate-800 leading-[126%]">127</button>
                      </div>
                      <div class="flex gap-1.5 justify-center self-stretch my-auto rounded-lg">
                        <div class="grow my-auto">Вперед</div>
                        <img loading="lazy"
                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef9ac3ae90b0399423d2847544e1d9f3da32f5556f15577889194da4aa7dfc6b?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                             alt="Forward" class="shrink-0 w-6 aspect-square"/>
                      </div>
                    </nav>
                  </div>
                </section>
                <aside class="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col text-sm max-md:mt-10">
                    <div
                        class="flex gap-5 justify-end px-3.5 py-2.5 text-white rounded-lg border border-gray-700 border-solid leading-[171%]">
                      <div class="justify-center my-auto">Сначала новые</div>
                      <img loading="lazy"
                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/70fd76befdcb741f977b4b1e86c5a4fd8bec08a482f1b71903f492ad92ae70bd?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                           alt="Sort" class="shrink-0 w-6 aspect-square"/>
                    </div>
                    <section
                        class="flex flex-col justify-center py-5 mt-3 w-full rounded-lg bg-slate-800 leading-[171%]">
                      <div class="flex gap-4 justify-between items-center">
                        <div class="shrink-0 self-stretch w-0.5 bg-indigo-500 h-[34px]"></div>
                        <img loading="lazy"
                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c359b1d41ed671dcb41c5fc218f2c3192a3347da1a237da74ca726f225dad10?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                             alt="New Ideas" class="shrink-0 self-stretch my-auto w-6 aspect-square"/>
                        <div class="self-stretch my-auto text-white">Новые идеи</div>
                        <div class="self-stretch my-auto text-slate-400">1267</div>
                      </div>
                      <div class="flex flex-col mt-3.5">
                        <div class="flex gap-4 justify-between items-center whitespace-nowrap">
                          <img loading="lazy"
                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/d48571732fbbfff470b824cbf4b9dc1112cdb04a26d05e96528a0675a5523365?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                               alt="Planned" class="shrink-0 self-stretch w-6 aspect-square"/>
                          <div class="self-stretch my-auto text-white">Запланировано</div>
                          <div class="self-stretch my-auto text-slate-400">22</div>
                        </div>
                        <div class="flex gap-4 items-center mt-5 whitespace-nowrap">
                          <img loading="lazy"
                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4a444026419c23965e10e0ee159eebd28435592263574eca3646e776d1fc57?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                               alt="Rejected" class="shrink-0 self-stretch w-6 aspect-square"/>
                          <div class="self-stretch my-auto text-white">Отклонено</div>
                          <div class="flex-auto self-stretch my-auto text-slate-400">211</div>
                        </div>
                        <div class="flex gap-4 items-center mt-5 whitespace-nowrap">
                          <img loading="lazy"
                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/8599e86b11eecdc2a45f12ee1442a2bfd37076c443221a6eb8dd702f1ec3219c?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                               alt="Implemented" class="shrink-0 self-stretch w-6 aspect-square"/>
                          <div class="self-stretch my-auto text-white">Реализовано</div>
                          <div class="flex-auto self-stretch my-auto text-slate-400">581</div>
                        </div>
                        <div class="flex gap-4 items-center mt-5 whitespace-nowrap">
                          <img loading="lazy"
                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/662b2d8c79cfbfc21bb1aa2beab67368a2ca3cc894fc8ddf041b101dade1747d?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                               alt="All" class="shrink-0 self-stretch w-6 aspect-square"/>
                          <div class="self-stretch my-auto text-white">Все</div>
                          <div class="flex-auto self-stretch my-auto text-slate-400">2081</div>
                        </div>
                        <div class="flex gap-4 items-center mt-5">
                          <img loading="lazy"
                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8327d9522297b8ce1e318dc59fdbbb220670d87ba6c48c9aec5610689ff8863?apiKey=6bdd9ad3ba12443585f5dbd1516a5d23&"
                               alt="My Ideas" class="shrink-0 self-stretch w-6 aspect-square"/>
                          <div class="self-stretch my-auto text-white">Мои идеи</div>
                          <div class="flex-auto self-stretch my-auto text-slate-400">1</div>
                        </div>
                      </div>
                    </section>
                    <section class="flex flex-col px-5 py-6 mt-4 w-full rounded-lg bg-slate-800">
                      <div class="flex gap-5 justify-between px-px">
                        <div class="flex flex-col text-indigo-500 leading-[129%]">
                          <div class="text-base leading-5 text-white">Теги</div>
                          <div class="mt-7">Облачные серверы</div>
                          <div class="mt-6">Образы</div>
                          <div class="mt-6">Оплата услуг</div>
                          <div class="mt-6">Панель управления</div>
                          <div class="mt-6">Домены</div>
                          <div class="mt-6">Безопасность</div>
                          <div class="mt-7">Базы данных</div>
                          <div class="mt-7">Сеть</div>
                          <div class="mt-7">Другое</div>
                          <div class="mt-6">Хранилище S3</div>
                        </div>
                        <div
                            class="flex flex-col self-end mt-10 whitespace-nowrap leading-[171%] text-slate-400 max-md:hidden">
                          <div>138</div>
                          <div class="mt-7 leading-[176%]">127</div>
                          <div class="mt-7">102</div>
                          <div class="mt-7 leading-[176%]">91</div>
                          <div class="mt-7">85</div>
                          <div class="self-start mt-7 ml-2.5 text-sm leading-6">71</div>
                          <div class="mt-7">69</div>
                          <div class="mt-7">68</div>
                          <div class="mt-7">62</div>
                          <div class="mt-7">56</div>
                        </div>
                      </div>
                      <button
                          class="justify-center px-8 py-4 mt-7 text-center text-white rounded-lg border border-gray-700 border-solid leading-[171%] max-md:px-5">
                        Показать еще 10 тегов
                      </button>
                    </section>
                  </div>
                </aside>
              </div>
            </section>
          </header>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'MyComponent',
});
</script>