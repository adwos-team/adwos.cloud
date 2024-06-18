import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/store/auth';

export function useAuth() {
    const user = ref(null);
    const router = useRouter();
    const authStore = useAuthStore();

    const login = async (email: string, password: string) => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            user.value = data.user;
            authStore.setUser(data.user);
            router.push('/');
        } else {
            // Handle error
            console.error(data);
        }
    };

    return { user, login };
}
