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
              <a class="flex items-center gap-x-4 py-2 px-0.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700" href="../../pro/index.html">
              <span class="flex justify-center items-center size-6 bg-blue-600 text-white rounded-md dark:bg-blue-500">
                <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
              </span>
                Мои лицензии
              </a>
              <a class="flex items-center gap-x-4 py-2 px-0.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700" href="../../pro/index.html">
              <span class="flex justify-center items-center size-6 bg-blue-600 text-white rounded-md dark:bg-blue-500">
                <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
              </span>
                Мои лицензии
              </a>
              <a class="flex items-center gap-x-4 py-2 px-0.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700" href="../../pro/index.html">
              <span class="flex justify-center items-center size-6 bg-blue-600 text-white rounded-md dark:bg-blue-500">
                <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
              </span>
                Написать в поддержку
              </a>

            </section>
          </aside>
        </nav>
        <main class="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
          <header class="flex flex-col grow pt-1.5 max-md:mt-10 max-md:max-w-full">
            <section class="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
              <div class="flex gap-3 items-start max-md:flex-wrap">
                <img loading="lazy"
                     src="/public/images/logotype.png"
                     alt="Idea" class="shrink-0 w-14 aspect-square rounded-full"/>
                <section class="flex flex-col grow shrink-0 justify-center py-0.5 mt-1.5 w-fit">
                  <h2 class="text-2xl font-bold text-gray-800 dark:text-neutral-200">У вас есть идея?</h2>
                  <p class="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">Предлагайте свои идеи по улучшению Adwos CMS</p>
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
                  <div class="flex flex-col grow max-md:mt-10 space-y-3 max-md:max-w-full">
                    <Search />




                    <!-- Card List Group -->
                    <div class="space-y-3">
                      <Card />


                    </div>
                    <!-- End Card List Group -->
                    <!-- Add Team Modal -->
                    <div id="hs-pro-datm" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto [--close-when-click-inside:true] pointer-events-none">
                      <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full mx-3 mb-7 h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] sm:mx-auto">
                        <div class="w-full max-h-full flex flex-col bg-white rounded-xl pointer-events-auto shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-800">
                          <!-- Header -->
                          <div class="py-3 px-4 flex justify-between items-center border-b dark:border-neutral-700">
                            <h3 class="font-semibold text-gray-800 dark:text-neutral-200">
                              Create team
                            </h3>
                            <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" data-hs-overlay="#hs-pro-datm">
                              <span class="sr-only">Close</span>
                              <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                          </div>
                          <!-- End Header -->

                          <!-- Body -->
                          <div class="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                            <div class="p-4 space-y-5">
                              <div class="space-y-2">
                                <label for="hs-pro-dactmt" class="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  Title
                                </label>

                                <input id="hs-pro-dactmt" type="text" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="Team title" value="">
                              </div>

                              <div class="space-y-2">
                                <label for="dactmi" class="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  Industry
                                </label>

                                <input id="dactmi" type="text" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="Enter name">
                              </div>

                              <div class="space-y-2">
                                <label for="dactmd" class="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  Description
                                </label>

                                <textarea id="dactmd" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" rows="3" placeholder="Tell us a little bit about team"></textarea>
                              </div>

                              <div class="space-y-2">
                                <label for="dactmm" class="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  Members
                                </label>

                                <!-- Input Form -->
                                <div class="flex items-center gap-x-3">
                                  <input id="dactmm" type="text" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="Enter name">

                                  <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                    Add
                                  </button>
                                </div>
                                <!-- End Input Form -->
                              </div>

                              <div class="space-y-2">
                                <label class="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  Suggested members
                                </label>

                                <div class="flex items-center space-x-2">
                                  <!-- User -->
                                  <div class="hs-tooltip inline-block">
                                    <label for="hs-pro-dactcach1" class="relative block rounded-full cursor-pointer">
                                      <img class="hs-tooltip-toggle flex-shrink-0 size-[46px] rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Image Description">
                                      <span class="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">
                  <span class="relative flex flex-col justify-center items-center size-5 bg-blue-100 border-2 border-white text-blue-600 rounded-full dark:bg-blue-500/40 dark:border-neutral-800 dark:text-blue-300">
                    <input type="checkbox" id="hs-pro-dactcach1" class="absolute top-0 start-0 size-full bg-transparent border-transparent rounded-full focus:outline-none"  >
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                  </span>
                </span>
                                    </label>
                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                James Collins
              </span>
                                  </div>
                                  <!-- End User -->

                                  <!-- User -->
                                  <div class="hs-tooltip inline-block">
                                    <label for="hs-pro-dactcach2" class="relative block rounded-full cursor-pointer">
                                      <span class="hs-tooltip-toggle flex flex-shrink-0 justify-center items-center size-[46px] bg-white border border-gray-200 text-gray-700 font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">L</span><span class="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">
                  <span class="relative flex flex-col justify-center items-center size-5 bg-blue-100 border-2 border-white text-blue-600 rounded-full dark:bg-blue-500/40 dark:border-neutral-800 dark:text-blue-300">
                    <input type="checkbox" id="hs-pro-dactcach2" class="absolute top-0 start-0 size-full bg-transparent border-transparent rounded-full focus:outline-none"  >
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                  </span>
                </span>
                                    </label>
                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                Lori Hunter
              </span>
                                  </div>
                                  <!-- End User -->

                                  <!-- User -->
                                  <div class="hs-tooltip inline-block">
                                    <label for="hs-pro-dactcach3" class="relative block rounded-full cursor-pointer">
                                      <img class="hs-tooltip-toggle flex-shrink-0 size-[46px] rounded-full" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Image Description">
                                      <span class="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">
                  <span class="relative flex flex-col justify-center items-center size-5 bg-blue-100 border-2 border-white text-blue-600 rounded-full dark:bg-blue-500/40 dark:border-neutral-800 dark:text-blue-300">
                    <input type="checkbox" id="hs-pro-dactcach3" class="absolute top-0 start-0 size-full bg-transparent border-transparent rounded-full focus:outline-none"  >
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                  </span>
                </span>
                                    </label>
                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                Lewis Clarke
              </span>
                                  </div>
                                  <!-- End User -->

                                  <!-- User -->
                                  <div class="hs-tooltip inline-block">
                                    <label for="hs-pro-dactcach4" class="relative block rounded-full cursor-pointer">
                                      <img class="hs-tooltip-toggle flex-shrink-0 size-[46px] rounded-full" src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Image Description">
                                      <span class="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">
                  <span class="relative flex flex-col justify-center items-center size-5 bg-blue-100 border-2 border-white text-blue-600 rounded-full dark:bg-blue-500/40 dark:border-neutral-800 dark:text-blue-300">
                    <input type="checkbox" id="hs-pro-dactcach4" class="absolute top-0 start-0 size-full bg-transparent border-transparent rounded-full focus:outline-none"  >
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                  </span>
                </span>
                                    </label>
                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                Ella Lauda
              </span>
                                  </div>
                                  <!-- End User -->

                                  <!-- User -->
                                  <div class="hs-tooltip inline-block">
                                    <label for="hs-pro-dactcach5" class="relative block rounded-full cursor-pointer">
                                      <span class="hs-tooltip-toggle flex flex-shrink-0 justify-center items-center size-[46px] bg-white border border-gray-200 text-gray-700 font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">O</span><span class="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">
                  <span class="relative flex flex-col justify-center items-center size-5 bg-blue-100 border-2 border-white text-blue-600 rounded-full dark:bg-blue-500/40 dark:border-neutral-800 dark:text-blue-300">
                    <input type="checkbox" id="hs-pro-dactcach5" class="absolute top-0 start-0 size-full bg-transparent border-transparent rounded-full focus:outline-none"  >
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                  </span>
                </span>
                                    </label>
                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                Ols Schols
              </span>
                                  </div>
                                  <!-- End User -->
                                </div>
                              </div>

                              <!-- Drag 'n Drop -->
                              <div class="space-y-2">
                                <label class="block block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  Cover
                                </label>
                                <div class="p-12 flex justify-center bg-white border border-dashed border-gray-300 rounded-xl dark:bg-neutral-800 dark:border-neutral-600">
                                  <div class="text-center">
                                    <svg class="w-16 text-gray-400 mx-auto dark:text-neutral-400" width="70" height="46" viewBox="0 0 70 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6.05172 9.36853L17.2131 7.5083V41.3608L12.3018 42.3947C9.01306 43.0871 5.79705 40.9434 5.17081 37.6414L1.14319 16.4049C0.515988 13.0978 2.73148 9.92191 6.05172 9.36853Z" fill="currentColor" stroke="currentColor" stroke-width="2" class="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500"/>
                                      <path d="M63.9483 9.36853L52.7869 7.5083V41.3608L57.6982 42.3947C60.9869 43.0871 64.203 40.9434 64.8292 37.6414L68.8568 16.4049C69.484 13.0978 67.2685 9.92191 63.9483 9.36853Z" fill="currentColor" stroke="currentColor" stroke-width="2" class="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500"/>
                                      <rect x="17.0656" y="1.62305" width="35.8689" height="42.7541" rx="5" fill="currentColor" stroke="currentColor" stroke-width="2" class="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500"/>
                                      <path d="M47.9344 44.3772H22.0655C19.3041 44.3772 17.0656 42.1386 17.0656 39.3772L17.0656 35.9161L29.4724 22.7682L38.9825 33.7121C39.7832 34.6335 41.2154 34.629 42.0102 33.7025L47.2456 27.5996L52.9344 33.7209V39.3772C52.9344 42.1386 50.6958 44.3772 47.9344 44.3772Z" stroke="currentColor" stroke-width="2" class="stroke-gray-400 dark:stroke-neutral-500"/>
                                      <circle cx="39.5902" cy="14.9672" r="4.16393" stroke="currentColor" stroke-width="2" class="stroke-gray-400 dark:stroke-neutral-500"/>
                                    </svg>

                                    <div class="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
                <span class="pe-1 font-medium text-gray-800 dark:text-neutral-200">
                  Drop your files here or
                </span>
                                      <label for="hs-pro-dactc" class="relative cursor-pointer bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 dark:bg-neutral-800 dark:text-blue-500 dark:hover:text-blue-600">
                                        <span>browse</span>
                                        <input id="hs-pro-dactc" type="file" class="sr-only">
                                      </label>
                                    </div>

                                    <p class="mt-1 text-xs text-gray-400 dark:text-neutral-400">
                                      CSV, XLS, DOCX
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <!-- End Drag 'n Drop -->
                            </div>
                          </div>
                          <!-- End Body -->

                          <!-- Footer -->
                          <div class="p-4 flex justify-between gap-x-2">
                            <div class="w-full flex justify-end items-center gap-x-2">
                              <button type="button" class="py-2 px-3 inline-flex justify-center items-center text-start bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-datm">
                                Cancel
                              </button>

                              <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-blue-600 border border-blue-600 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-500" data-hs-overlay="#hs-pro-datm">
                                Create team
                              </button>
                            </div>
                          </div>
                          <!-- Footer -->
                        </div>
                      </div>
                    </div>
                    <!-- End Add Team Modal -->
                    <!-- Add Team Modal -->
                    <div id="hs-pro-detm" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto [--close-when-click-inside:true] pointer-events-none">
                      <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full mx-3 mb-7 h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] sm:mx-auto">
                        <div class="w-full max-h-full flex flex-col bg-white rounded-xl pointer-events-auto shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-800">
                          <!-- Header -->
                          <div class="py-3 px-4 flex justify-between items-center border-b dark:border-neutral-700">
                            <h3 class="font-semibold text-gray-800 dark:text-neutral-200">
                              Edit team
                            </h3>
                            <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" data-hs-overlay="#hs-pro-detm">
                              <span class="sr-only">Close</span>
                              <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                          </div>
                          <!-- End Header -->

                          <!-- Body -->
                          <div class="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                            <div class="p-4 space-y-5">
                              <div class="space-y-2">
                                <label for="hs-pro-daetmt" class="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  Title
                                </label>

                                <input id="hs-pro-daetmt" type="text" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="Team title" value="conference">
                              </div>

                              <div class="space-y-2">
                                <label for="daetmi" class="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  Industry
                                </label>

                                <input id="daetmi" type="text" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="Enter name">
                              </div>

                              <div class="space-y-2">
                                <label for="daetmd" class="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  Description
                                </label>

                                <textarea id="daetmd" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" rows="3" placeholder="Tell us a little bit about team">Online meeting services group</textarea>
                              </div>

                              <div class="space-y-2">
                                <label for="daetmm" class="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  Members
                                </label>

                                <!-- Input Form -->
                                <div class="flex items-center gap-x-3">
                                  <input id="daetmm" type="text" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="Enter name">

                                  <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                    Add
                                  </button>
                                </div>
                                <!-- End Input Form -->
                              </div>

                              <div class="space-y-2">
                                <label class="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  Suggested members
                                </label>

                                <div class="flex items-center space-x-2">
                                  <!-- User -->
                                  <div class="hs-tooltip inline-block">
                                    <label for="hs-pro-daetcach1" class="relative block rounded-full cursor-pointer">
                                      <img class="hs-tooltip-toggle flex-shrink-0 size-[46px] rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Image Description">
                                      <span class="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">
                  <span class="relative flex flex-col justify-center items-center size-5 bg-blue-100 border-2 border-white text-blue-600 rounded-full dark:bg-blue-500/40 dark:border-neutral-800 dark:text-blue-300">
                    <input type="checkbox" id="hs-pro-daetcach1" class="absolute top-0 start-0 size-full bg-transparent border-transparent rounded-full focus:outline-none" checked >
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                  </span>
                </span>
                                    </label>
                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                James Collins
              </span>
                                  </div>
                                  <!-- End User -->

                                  <!-- User -->
                                  <div class="hs-tooltip inline-block">
                                    <label for="hs-pro-daetcach2" class="relative block rounded-full cursor-pointer">
                                      <span class="hs-tooltip-toggle flex flex-shrink-0 justify-center items-center size-[46px] bg-white border border-gray-200 text-gray-700 font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">L</span><span class="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">
                  <span class="relative flex flex-col justify-center items-center size-5 bg-blue-100 border-2 border-white text-blue-600 rounded-full dark:bg-blue-500/40 dark:border-neutral-800 dark:text-blue-300">
                    <input type="checkbox" id="hs-pro-daetcach2" class="absolute top-0 start-0 size-full bg-transparent border-transparent rounded-full focus:outline-none"  >
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                  </span>
                </span>
                                    </label>
                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                Lori Hunter
              </span>
                                  </div>
                                  <!-- End User -->

                                  <!-- User -->
                                  <div class="hs-tooltip inline-block">
                                    <label for="hs-pro-daetcach3" class="relative block rounded-full cursor-pointer">
                                      <img class="hs-tooltip-toggle flex-shrink-0 size-[46px] rounded-full" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Image Description">
                                      <span class="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">
                  <span class="relative flex flex-col justify-center items-center size-5 bg-blue-100 border-2 border-white text-blue-600 rounded-full dark:bg-blue-500/40 dark:border-neutral-800 dark:text-blue-300">
                    <input type="checkbox" id="hs-pro-daetcach3" class="absolute top-0 start-0 size-full bg-transparent border-transparent rounded-full focus:outline-none"  >
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                  </span>
                </span>
                                    </label>
                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                Lewis Clarke
              </span>
                                  </div>
                                  <!-- End User -->

                                  <!-- User -->
                                  <div class="hs-tooltip inline-block">
                                    <label for="hs-pro-daetcach4" class="relative block rounded-full cursor-pointer">
                                      <img class="hs-tooltip-toggle flex-shrink-0 size-[46px] rounded-full" src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Image Description">
                                      <span class="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">
                  <span class="relative flex flex-col justify-center items-center size-5 bg-blue-100 border-2 border-white text-blue-600 rounded-full dark:bg-blue-500/40 dark:border-neutral-800 dark:text-blue-300">
                    <input type="checkbox" id="hs-pro-daetcach4" class="absolute top-0 start-0 size-full bg-transparent border-transparent rounded-full focus:outline-none"  >
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                  </span>
                </span>
                                    </label>
                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                Ella Lauda
              </span>
                                  </div>
                                  <!-- End User -->

                                  <!-- User -->
                                  <div class="hs-tooltip inline-block">
                                    <label for="hs-pro-daetcach5" class="relative block rounded-full cursor-pointer">
                                      <span class="hs-tooltip-toggle flex flex-shrink-0 justify-center items-center size-[46px] bg-white border border-gray-200 text-gray-700 font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">O</span><span class="block absolute -top-1 -end-1 bg-white rounded-full dark:bg-neutral-800">
                  <span class="relative flex flex-col justify-center items-center size-5 bg-blue-100 border-2 border-white text-blue-600 rounded-full dark:bg-blue-500/40 dark:border-neutral-800 dark:text-blue-300">
                    <input type="checkbox" id="hs-pro-daetcach5" class="absolute top-0 start-0 size-full bg-transparent border-transparent rounded-full focus:outline-none" checked >
                    <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                  </span>
                </span>
                                    </label>
                                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700" role="tooltip">
                Ols Schols
              </span>
                                  </div>
                                  <!-- End User -->
                                </div>
                              </div>

                              <!-- Drag 'n Drop -->
                              <div class="space-y-2">
                                <label class="block block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                  Cover
                                </label>
                                <div class="p-12 flex justify-center bg-white border border-dashed border-gray-300 rounded-xl dark:bg-neutral-800 dark:border-neutral-600">
                                  <div class="text-center">
                                    <svg class="w-16 text-gray-400 mx-auto dark:text-neutral-400" width="70" height="46" viewBox="0 0 70 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6.05172 9.36853L17.2131 7.5083V41.3608L12.3018 42.3947C9.01306 43.0871 5.79705 40.9434 5.17081 37.6414L1.14319 16.4049C0.515988 13.0978 2.73148 9.92191 6.05172 9.36853Z" fill="currentColor" stroke="currentColor" stroke-width="2" class="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500"/>
                                      <path d="M63.9483 9.36853L52.7869 7.5083V41.3608L57.6982 42.3947C60.9869 43.0871 64.203 40.9434 64.8292 37.6414L68.8568 16.4049C69.484 13.0978 67.2685 9.92191 63.9483 9.36853Z" fill="currentColor" stroke="currentColor" stroke-width="2" class="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500"/>
                                      <rect x="17.0656" y="1.62305" width="35.8689" height="42.7541" rx="5" fill="currentColor" stroke="currentColor" stroke-width="2" class="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500"/>
                                      <path d="M47.9344 44.3772H22.0655C19.3041 44.3772 17.0656 42.1386 17.0656 39.3772L17.0656 35.9161L29.4724 22.7682L38.9825 33.7121C39.7832 34.6335 41.2154 34.629 42.0102 33.7025L47.2456 27.5996L52.9344 33.7209V39.3772C52.9344 42.1386 50.6958 44.3772 47.9344 44.3772Z" stroke="currentColor" stroke-width="2" class="stroke-gray-400 dark:stroke-neutral-500"/>
                                      <circle cx="39.5902" cy="14.9672" r="4.16393" stroke="currentColor" stroke-width="2" class="stroke-gray-400 dark:stroke-neutral-500"/>
                                    </svg>

                                    <div class="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
                <span class="pe-1 font-medium text-gray-800 dark:text-neutral-200">
                  Drop your files here or
                </span>
                                      <label for="hs-pro-daetc" class="relative cursor-pointer bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 dark:bg-neutral-800 dark:text-blue-500 dark:hover:text-blue-600">
                                        <span>browse</span>
                                        <input id="hs-pro-daetc" type="file" class="sr-only">
                                      </label>
                                    </div>

                                    <p class="mt-1 text-xs text-gray-400 dark:text-neutral-400">
                                      CSV, XLS, DOCX
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <!-- End Drag 'n Drop -->
                            </div>
                          </div>
                          <!-- End Body -->

                          <!-- Footer -->
                          <div class="p-4 flex justify-between gap-x-2">
                            <div class="w-full flex justify-end items-center gap-x-2">
                              <button type="button" class="py-2 px-3 inline-flex justify-center items-center text-start bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-detm">
                                Cancel
                              </button>

                              <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-blue-600 border border-blue-600 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-500" data-hs-overlay="#hs-pro-detm">
                                Save changes
                              </button>
                            </div>
                          </div>
                          <!-- Footer -->
                        </div>
                      </div>
                    </div>
                    <!-- End Add Team Modal -->

                    <pagination />
                  </div>
                </section>
                <aside class="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col text-sm max-md:mt-10">
                  <dropdowns />
                    <section
                        class="flex flex-col justify-center mt-4 w-full rounded-xl bg-white border border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 max-md:px-5">
                      <div class="flex gap-4 justify-between items-center">
                        <nav class="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open="">
                          <ul class="space-y-1.5">
                            <li>
                              <a class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-50 rounded-lg" href="#">
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                Новые идеи
                              </a>
                            </li>
                            <li>
                              <a class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-50 rounded-lg" href="#">
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                Запланировано
                              </a>
                            </li>
                            <li>
                              <a class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-50 rounded-lg" href="#">
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                Отклонено
                              </a>
                            </li>
                            <li>
                              <a class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-50 rounded-lg" href="#">
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                Реализовано
                              </a>
                            </li>
                            <li>
                              <a class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-50 rounded-lg" href="#">
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                Все
                              </a>
                            </li>
                            <li>
                              <a class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-50 rounded-lg" href="#">
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                Мои идеи
                              </a>
                            </li>
                          </ul>
                        </nav>



                      </div>

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