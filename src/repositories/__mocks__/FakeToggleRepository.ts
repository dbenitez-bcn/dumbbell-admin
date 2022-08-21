import { injectable } from "inversify";
import IToggleRepository from "../types/IToggleRepository";

@injectable()
export default class FakeToggleRepository implements IToggleRepository {
    create = jest.fn();
    getAll = jest.fn();
    delete = jest.fn();
    update = jest.fn();
}