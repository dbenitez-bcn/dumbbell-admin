export default class Constants {
    static BASE_URL = process.env.NODE_ENV !== 'production' ? 'https://dumbbell-backend-stage.herokuapp.com' : 'https://dumbbell-backend.herokuapp.com';
}