class Person {
    constructor({ firstName, lastName }) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get FirstName() {
        return this.firstName;
    }

    set FirstName(value) {
        this.firstName = value;
    }

    get LastName() {
        return this.lastName;
    }

    set LastName(value) {
        this.lastName = value;
    }
}

export { Person };