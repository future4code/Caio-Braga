import { Employee } from "./employee";
import { Dish } from "./dish";
import { SaltyDish} from "./saltydish";
import { Dessert } from "./dessert";
import { hamburger } from "./saltydish";

export class Cashier extends Employee {
  constructor(
    name: string,
    wage: number,
  ) {
    super(name, wage);
  }

  public sayJob(): void {
    console.log("I'm the cashier")
  }

  // Não estou sabendo como trazer o array de pratos e preços para a função
  // tentei importar o hambúrger que criei em "SaltyDish", mas como lá
  // está protegido, imagino que não seja assim.
  //
  public CustomerBill(): SaltyDish(hamburger.price) {
      return 
  }
}


