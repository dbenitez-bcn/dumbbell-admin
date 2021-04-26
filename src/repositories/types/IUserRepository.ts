export interface IUserRepository {
    login(email: string, password: string): Promise<string>
    register(email: string, password: string): Promise<void>
}