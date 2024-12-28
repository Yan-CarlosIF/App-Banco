import { Account } from "./account";

export class companyAccount extends Account {
  constructor(_name: string, _accountNumber: number) {
    super(_name, _accountNumber);
  }

  getLoan(loanValue: number): void {
    if (this.validateStatus()) {
      this._balance += loanValue;
      console.log(`Emprestimo de ${loanValue.toFixed(2)}R$ efetuado com sucesso.`);
    }
  }
}
