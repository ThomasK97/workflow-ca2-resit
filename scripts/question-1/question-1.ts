// Create User interface. The types are:
//  firstName: string
//  lastName: string
//  age: number
//  isAdmin: boolean

interface User{
  firstName: string;
  lastName: string;
  age: number;
  isAdmin: boolean;
}

// Convert the function to TypeScript, making sure to use the
//  User interface as the return type

class createUser {
  firstName: string;
  lastName: string;
  age: number;
  isAdmin: boolean;

  constructor (firstName: string, lastName: string, age: number, isAdmin: boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdmin = isAdmin;
  }
}

const newUser: User = new createUser('Ola', 'Nordmann', 18, false);
const newAdmin: User = new createUser('Kari', 'Nordmann', 36, true);

console.log(newUser);
console.log(newAdmin);