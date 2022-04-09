import ToggleVM from "../viewModels/ToggleVM";

export default class Toggle {
    constructor(
        private _name: string,
        private _value: boolean
    ) {}

    toVM(): ToggleVM {
        return new ToggleVM(this._name, this._value);
    }
}