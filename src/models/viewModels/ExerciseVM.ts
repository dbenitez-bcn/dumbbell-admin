export default class ExerciseVM {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly description: string,
        readonly difficulty: number
    ) { }
}