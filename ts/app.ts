import { companyAccount } from "./classes/companyAccount";
import { PeopleAccount } from "./classes/peopleAccount";

// Conta Companhia
const company = new companyAccount("Yan", 1);

company.deposit(10);
company.withdraw(5);
company.getLoan(100);
console.log(company.balance)

// conta People
const people = new PeopleAccount("Yan", 2);

people.deposit(-9);
people.withdraw(1);
console.log(people.balance);