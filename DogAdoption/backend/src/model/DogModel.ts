export class DogModel {
  id: number;
  name: string;
  image: string;
  avaiability: boolean;
  address: string;
  age: number;
  gender: string;
  userid: number;
  constructor(
    name: string,
    image: string,
    avaiability: boolean,
    address: string,
    age: number,
    gender: string,
    userid: number
  ) {
    this.name = name;
    this.image = image;
    this.avaiability = avaiability;
    this.address = address;
    this.age = age;
    this.gender = gender;
    this.userid = userid;
  }
}
