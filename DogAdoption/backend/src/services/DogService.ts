import * as dogRepo from '../Repositories/DogRepo';
import { DogModel } from '../model/DogModel';

export class DogService {

  static getDog() {
    return dogRepo.getAllDogs();
  }
  static getDogByUserId(userid:number) {
    return dogRepo.getDogByUserId(userid);
  }

  static createDog(dog: DogModel) {
    return dogRepo.addDog(dog);
  }

  static async deleteDog(id: number) {
    return dogRepo.deleteDog(id);
  }

  static async updateDog(id: number, dogData: Partial<DogModel>) {
    return dogRepo.updateDog(id, dogData);
  }
}
