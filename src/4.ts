class Key {
  private signature: number;

  constructor() {
    this.signature = Number(Math.random().toFixed(6))*1000000
  }
  
  getSignature = () => {
    return this.signature
  }
}


class Person {
  key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}


abstract class House {
  protected door: boolean;
  protected tenants: Person[];

  constructor(protected key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Add tenant");
    } else {
      console.log("Nobody home");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door is opened");
    } else {
      console.log("Door is closed");
    }
  }
}

export {};