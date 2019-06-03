const USER_EMAIL = Symbol();

class User {
    set email(value) {
        if(!/@/.test(value)) throw new Error(`invalid email: ${value}`);
        this[USER_EMAIL] = value;
    }
    get email() {
        return this[USER_EMAIL];
    }
}

const u = new User();
u.email = "john@doe.com";
console.log(`User email: ${u.email}`);