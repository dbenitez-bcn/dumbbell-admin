export default class Constants {
    static get BASE_URL() {
        if (process.env.NODE_ENV === 'production') {
            return 'https://dumbbell-backend.herokuapp.com';
        } else if (process.env.APP_ENV === 'test') {
            return 'http://localhost:8080';
        } else {
            return 'https://dumbbell-backend-stage.herokuapp.com';
        }
    }
}