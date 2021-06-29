export default class ExerciseDTO {
    constructor(
        name: string,
        description: string,
        difficulty: number
    );

    constructor(
        name: string,
        description: string,
        difficulty: number,
        id: number,
    );

    constructor(
        readonly name: string,
        readonly description: string,
        readonly difficulty: number,
        readonly id: number = 0,
    ) {}


}