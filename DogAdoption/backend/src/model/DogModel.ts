export class DogModel {
  id: number;
  name: string;
  image: string;
  avaiability: boolean;
  address: string;
  age: number;
  gender: string;
  user_id: number;
  constructor(
    name: string,
    image: string,
    avaiability: boolean,
    address: string,
    age: number,
    gender: string,
    user_id: number
  ) {
    this.name = name;
    this.image = image;
    this.avaiability = avaiability;
    this.address = address;
    this.age = age;
    this.gender = gender;
    this.user_id = user_id;
  }
}
