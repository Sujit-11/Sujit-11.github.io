import * as dogRepo from '../Repositories/DogRepo';
import { DogModel } from '../model/DogModel';

export class DogService {
  static createDog(dog: DogModel) {
    return dogRepo.addDog(dog);
  }
}
