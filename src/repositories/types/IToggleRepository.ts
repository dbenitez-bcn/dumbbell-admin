import Toggle from "~/domain/models/Toggle";

export default interface IToggleRepository {
        create(name: string, value: boolean): Promise<Toggle>;
        getAll(): Promise<Toggle[]>;
        delete(name: string): Promise<void>;
        update(name: string, value: boolean): Promise<void>;
}