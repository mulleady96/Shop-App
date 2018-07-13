export class Ingredient {

  // public name: string;
  // public amount: number;
  //
  // constructor(name: string, amount: number){
  //   this.name = name;
  //   this.amount = amount;
  // }

  // ** Short-Hand way of doing the above as follows
  // ** In the background TS is giving same effect with less code, an Ingredient will have these attributes.
  constructor(public name: string, public amount: number){

}
}
