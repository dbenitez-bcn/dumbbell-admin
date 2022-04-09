import 'reflect-metadata';
import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';
import IUserRepository from '~/repositories/types/IUserRepository';
import { SYMBOLS } from './SYMBOLS';
import UserRepository from '~/repositories/UserRepository';
import IExerciseRepository from '~/repositories/types/IExerciseRepository';
import ExerciseRepository from '~/repositories/ExerciseRepository';
import IToggleRepository from '~/repositories/types/IToggleRepository';
import ToggleRepository from '~/repositories/ToggleRepository';

export const container = new Container();
container
  .bind<IUserRepository>(SYMBOLS.UserRepository)
  .to(UserRepository)
  .inSingletonScope();
  container
    .bind<IExerciseRepository>(SYMBOLS.ExerciseRepository)
    .to(ExerciseRepository)
    .inSingletonScope();
    container
      .bind<IToggleRepository>(SYMBOLS.ToggleRepository)
      .to(ToggleRepository)
      .inSingletonScope();
export const { lazyInject } = getDecorators(container);