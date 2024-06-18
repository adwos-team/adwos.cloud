import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
    }),
    actions: {
        setUser(user) {
            this.user = user;
        },
        logout() {
            this.user = null;
            // Clear token or perform other cleanup
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.user,
    },
});
