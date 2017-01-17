
class Storage {
    static storeUser(user) {
        localStorage.setItem(`user:${user.id}`, JSON.stringify(user));
    }

    static deleteUser(user) {
        localStorage.removeItem(`user:${user.id}`);
    }

    static allUsers() {
        const users = [];

        for (const key in localStorage) {
            if (key.match(/user:/)) {
                users.push(JSON.parse(localStorage[key]));
            }
        }

        return users;
    }
}
export default Storage