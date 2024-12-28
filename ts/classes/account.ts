export abstract class Account {
  protected _balance: number = 0;
  private status: boolean = true;

  constructor(private _name: string, private readonly _accountNumber: number) {}

  get name(): string {
    return this._name;
  }

  get balance(): number {
    return this._balance;
  }

  get accountNumber(): number {
    return this._accountNumber;
  }

  deposit(depositValue: number): void {
    if (this.validateStatus()) {
      if (depositValue > 0) {
        this._balance += depositValue;
        console.log(`Deposito de ${depositValue.toFixed(2)}R$ efetuado com sucesso.`);
      } else {
        throw new Error("Não é possivel depositar um valor negativo ou nulo.");
      }
    }
  }

  withdraw(withdrawValue: number): void {
    if (this.validateStatus()) {
      if (withdrawValue <= this._balance) {
        this._balance -= withdrawValue;
        console.log(`Saque de ${withdrawValue.toFixed(2)}R$ efetuado com sucesso.`);
      } else {
        throw new Error("Saldo insuficiente.");
      }
    }
  }

  protected validateStatus() {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida.");
  }
}
