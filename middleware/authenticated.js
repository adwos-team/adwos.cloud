export default function ({ redirect }) {
    // Проверка наличия токена в localStorage
    if (!localStorage.getItem('auth_token')) {
        return redirect('/login'); // Перенаправление на страницу входа
    }
}