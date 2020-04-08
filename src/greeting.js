class Greeting {
    constructor({ greetingHelper }) {
        this.greetingHelper = greetingHelper;
    }

    sayHello({ firstName, lastName }) {
        const fullName = this.greetingHelper.getFullName({ firstName, lastName });

        return `Hello ${fullName}`;
    }

    sayGoodbye({ firstName, lastName }) {
        const fullName = this.greetingHelper.getFullName({ firstName, lastName });

        return `Goodbye, ${fullName}`;
    }
}

//default export
export default Greeting;