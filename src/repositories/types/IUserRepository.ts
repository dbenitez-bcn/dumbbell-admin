export default interface IUserRepository {
    register(email: string, password: string): Promise<void>
}