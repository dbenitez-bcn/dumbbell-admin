import ToggleVM from "../viewModels/ToggleVM";

export default class Toggle {
    constructor(
        readonly name: string,
        private _value: boolean
    ) {}

    toVM(): ToggleVM {
        return new ToggleVM(this.name, this._value);
    }
}