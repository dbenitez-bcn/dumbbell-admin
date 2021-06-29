import ExerciseVM from "~/models/viewModels/ExerciseVM";

export default class Exercise {
    constructor(
        private _id: number,
        private name: string,
        private description: string,
        private difficulty: number
    ) { }


    get id(): number {
        return this._id;
    }
    toVM(): ExerciseVM {
        return new ExerciseVM(this.id, this.name, this.description, this.difficulty);
    }
}