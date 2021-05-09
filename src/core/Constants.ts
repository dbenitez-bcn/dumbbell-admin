export default class Constants {
    static storage = {
        TOKEN_KEY: 'token_key'
    }
    static BASE_URL = process.env.NODE_ENV !== 'production' ? 'https://dumbbell-backend-stage.herokuapp.com' : 'https://dumbbell-backend.herokuapp.com';
}