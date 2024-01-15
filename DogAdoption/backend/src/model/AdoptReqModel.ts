export class AdoptReqModel {
  id: string;
  userId: number;
  dogId: number;
  adoptionPhone: string;
  adoptionInterest: Text;
  constructor(
    id: string,
    userId: number,
    dogId: number,
    adoptionPhone: string,
    adoptionInterest: Text
  ) {
    this.id = id;
    this.userId = userId;
    this.dogId = dogId;
    this.adoptionPhone = adoptionPhone;
    this.adoptionInterest = adoptionInterest;
  }
}
