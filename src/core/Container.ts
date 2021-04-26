import 'reflect-metadata';
import { Container } from 'inversify';
import { IUserRepository } from '../repositories/types/IUserRepository';
import { SYMBOLS } from './SYMBOLS';
import UserRepository from '../repositories/UserRepository';

export const container = new Container();
container
  .bind<IUserRepository>(SYMBOLS.UserRepository)
  .to(UserRepository)
  .inSingletonScope();