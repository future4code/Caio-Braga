export abstract class Employee {
    protected name: string;
    protected wage: number;

  
    constructor(
      name: string,
      wage: number,
    ) {
      this.name = name;
      this.wage = wage;
    }
  
    public abstract sayJob(): void;
  }