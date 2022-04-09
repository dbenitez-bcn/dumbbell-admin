import Toggle from "~/domain/models/Toggle";

export default interface IToggleRepository {
        create(name: string, value: boolean): Promise<Toggle>;
}