import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCookieStore = defineStore('cookie', () => {
    const isCookieBannerVisible = ref(true);

    const hideCookieBanner = () => {
        isCookieBannerVisible.value = false;
        localStorage.setItem('cookieBannerDismissed', 'true');
    };

    const checkCookieBannerStatus = () => {
        if (localStorage.getItem('cookieBannerDismissed') === 'true') {
            isCookieBannerVisible.value = false;
        }
    };

    return { isCookieBannerVisible, hideCookieBanner, checkCookieBannerStatus };
});