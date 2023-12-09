class Key {
  private signature: string

  constructor() {
    this.signature = `${Math.random().toFixed(3)}sig-nature`;
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  
  getKey() {
    return this.key;
  }
}

abstract class House {
  public key: Key;
  public door: boolean;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person) {
    if (this.door) this.tenants.push(person);
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  
  openDoor(key: Key): void {
    if (key === this.key) this.door = true; 
  };
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};