class Key {
  private signature: boolean = Math.random() < 0.5;

  public getSignature(): boolean {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}

  public getKey(): Key {
    return key;
  }
}

class House {
  private tenants: Person[] = [];

  constructor(private door: boolean, private key: Key) {}

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
}
class MyHouse extends House {
  public openDoor(myKey: boolean, key: Key): void{
    console.log('door opened');
  };
}

const key = new Key();
const house = new MyHouse(true, key);
const person = new Person(key);

house.openDoor(person.getKey().getSignature(), key);

house.comeIn(person);

export {};
