class A {
    memberId: number;

    constructor(arg) {
        this.memberId = arg;
    }
}

export function createInstance(param) {
    return new A(param);
}