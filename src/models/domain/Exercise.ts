import ExerciseVM from "../viewModels/ExerciseVM";

export default class Exercise {
    constructor(
        private id: number,
        private name: string,
        private description: string,
        private difficulty: number
    ) { }


    toVM(): ExerciseVM {
        return new ExerciseVM(this.id, this.name, this.description, this.difficulty);
    }
}