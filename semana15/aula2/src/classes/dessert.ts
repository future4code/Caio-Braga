import { Dish } from "./dish";

export class Dessert extends Dish {
  public slicesNumber: number;
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    slicesNumber: number
  ) {
    super(price, cost, ingredients, timeToCook);
    this.slicesNumber = slicesNumber;
  }

  public getSlicePrice(): number {
    return this.price / this.slicesNumber;
  }

  public cook(): void {
    console.log("Baking Dessert");
  }
}

const brigadeiro = new Dessert(100, 20, ["leite condensado"], 100, 10);
const cheesecake = new Dessert(150, 30, ["cream cheese, açúcar, goiabada, biscoito"], 150, 20);
console.log(cheesecake.getSlicePrice());
console.log(cheesecake.getProfit());
