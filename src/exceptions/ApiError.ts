export default class ApiError extends Error {
    constructor(
        private status: number,
        message: any
    ) {
        super(message);
    }

    toString(): string {
        return `${this.status} - ${this.message}`;
    }
}