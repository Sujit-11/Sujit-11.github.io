export class DogModel {
  id: number;
  name: string;
  image: string;
  availability: boolean;
  address: string;
  age: number;
  gender: string;
  userId: number;
  constructor(
    name: string,    //object banaune
    image: string,
    availability: boolean,
    address: string,
    age: number,
    gender: string,
    userId: number
  ) {
    this.name = name;
    this.image = image;
    this.availability = availability;
    this.address = address;
    this.age = age;
    this.gender = gender;
    this.userId = userId;
  }
}
