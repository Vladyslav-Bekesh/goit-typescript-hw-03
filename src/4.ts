class Key {
  private signature: number = Math.random();

  public getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) { }
  
  public getKey(): Key {
    return this.key;
  }
}

class House {
  private tenants: Person[] = [];
  private door: number;

  constructor(private key: Key) {}

  public getKey(): number {
    return this.key.getSignature();
  }

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.getKey()) {
      console.log("door opened");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
