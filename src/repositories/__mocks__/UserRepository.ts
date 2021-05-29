import { injectable } from "inversify";
import IUserRepository from "../types/IUserRepository";

@injectable()
export class FakeUserRepository implements IUserRepository {
    login = jest.fn();
    register = jest.fn();
}