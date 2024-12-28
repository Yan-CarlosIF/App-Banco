import { Account } from "./account";

export class PeopleAccount extends Account {
  constructor(_name: string, _accountNumber: number) {
    super(_name, _accountNumber);
  }

  deposit(depositValue: number): void {
    if (this.validateStatus()) {
      if (depositValue > -10) {
        this._balance += depositValue + 10;
        console.log(`Deposito de ${(depositValue + 10).toFixed(2)}R$ efetuado com sucesso.`);
      } else {
        throw new Error("Não é possivel depositar um valor negativo ou nulo.");
      }
    }
  }
}
