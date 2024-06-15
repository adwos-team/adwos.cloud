<template>
  <div class="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Реквизиты ООО "Адвос"</h2>
    <div class="flex justify-center mb-4">
      <button @click="downloadPDF('ru')" class="p-2 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
        Скачать реквизиты в PDF
      </button>
    </div>
    <div class="overflow-x-auto">
      <div class="min-w-full inline-block align-middle">
        <table class="min-w-full divide-y divide-gray-200">
          <tbody class="divide-y divide-gray-200">
          <tr v-for="(value, key) in requisites" :key="key" class="relative group hover:bg-gray-100 transition">
            <td class="py-3 px-4 whitespace-normal text-gray-800 text-sm font-medium">{{ key }}:</td>
            <td class="py-3 px-4 whitespace-normal text-gray-600 text-sm">{{ value }}</td>
            <td class="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button @click="copyToClipboard(value, $event)" class="text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border js-clipboard-example">
                <!-- Комментарий: SVG иконка копирования -->
                <span id="default-message" class="inline-flex items-center">
                    <span class="text-xs font-semibold">Копировать</span>
                  </span>
                <span id="success-message" class="hidden inline-flex items-center">
                    <!-- Комментарий: SVG иконка успешного копирования -->
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Успешно</span>
                  </span>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClipboardJS from 'clipboard';

export default defineComponent({
  name: 'Requisites',
  data() {
    return {
      requisites: {
        'Полное наименование': 'Общество с ограниченной ответственностью «Адвос»',
        'Сокращенное наименование': 'ООО «Адвос»',
        'ИНН': '2311352224',
        'КПП': '231101001',
        'ОГРН': '1232300041874',
        'Расчетный счет': '40702810420000024542',
        'Название банка': 'ООО "Банк Точка"',
        'БИК': '044525104',
        'Корр. счет': '30101810745374525104',
        'Юридический адрес': '350067, РОССИЯ, край КРАСНОДАРСКИЙ, г КРАСНОДАР, ул ДУШИСТАЯ, ДОМ 29, оф КВ. 30',
        'Фактический адрес': '350067, РОССИЯ, край КРАСНОДАРСКИЙ, г КРАСНОДАР, ул ДУШИСТАЯ, ДОМ 29, оф КВ. 30',
        'Руководитель': 'Генеральный Директор Савчук Макар Дмитриевич, действующий на основании Устава',
        'Телефон': '8 (800) 000-00-00',
        'Электронная почта': 'info@adwos.org',
        'Сайт': 'adwos.org'
      }
    };
  },
  mounted() {
    this.initClipboard();
  },
  methods: {
    initClipboard() {
      const clipboard = new ClipboardJS('.js-clipboard-example', {
        text: (trigger) => {
          return trigger.getAttribute('data-clipboard-text');
        }
      });

      clipboard.on('success', (e) => {
        const button = e.trigger;
        const defaultMessage = button.querySelector('#default-message');
        const successMessage = button.querySelector('#success-message');

        if (defaultMessage && successMessage) {
          defaultMessage.classList.add('hidden');
          successMessage.classList.remove('hidden');

          setTimeout(() => {
            defaultMessage.classList.remove('hidden');
            successMessage.classList.add('hidden');
          }, 2000);
        }
      });

      clipboard.on('error', (e) => {
        console.error('Failed to copy:', e);
      });
    },
    downloadPDF(lang: string) {
      if (lang === 'ru') {
        window.location.href = '/pdf/requisites_ru.pdf';
      }
    },
    copyToClipboard(value: string, event: Event) {
      const button = event.currentTarget as HTMLElement;
      button.setAttribute('data-clipboard-text', value);
      const clipboard = new ClipboardJS(button, {
        text: () => value
      });

      clipboard.onClick(event);
    }
  }
});
</script>

<style scoped>
@media (max-width: 640px) {
  .flex {
    flex-direction: column;
  }
  .justify-center {
    justify-content: center;
  }
  .items-center {
    align-items: center;
  }
  .gap-x-2 {
    gap: 0.5rem;
  }
  .p-2 {
    padding: 0.5rem;
  }
}

table {
  width: 100%;
}

td {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.group:hover .absolute {
  opacity: 1 !important;
}
</style>
