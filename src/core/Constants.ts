export default class Constants {
    static storage = {
        TOKEN_KEY: 'token_key'
    }
    static BASE_URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:9000' : 'https://dumbbell-backend.herokuapp.com';
}