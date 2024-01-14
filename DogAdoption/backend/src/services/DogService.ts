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

  // static async deleteDog(id: number, userid: number) {
  //   const dog = await dogRepo.getDogById(userid);
  //   if (!dog) throw new Error('The dog with the given id was not found.');
  //   return dogRepo.deleteDog(id);
  // }
}
