interface Warrior {
  attack(): number;
  ATTACK_POWER: number;
}

class Saiyan implements Warrior {
  public ATTACK_POWER = 100;
  attack(): number {
    return this.ATTACK_POWER + Math.random() * 20;
  }
}

class Namekian implements Warrior {
  public ATTACK_POWER = 70;

  attack(): number {
    return this.ATTACK_POWER + Math.random() * 20;
  }
}

class Cyborg {
  public power: number = 200;
  kick(): number {
    return Math.random() * 20 + this.power;
  }
}

/**
 * Adapter class
 */
class CyborgAdapter implements Warrior {
  constructor(private cyborg: Cyborg) {}
  public ATTACK_POWER = 100;
  attack(): number {
    return this.ATTACK_POWER + this.cyborg.kick();
  }
}

/**
 * Client side implementation
 *
 */

function Index() {
  let goku = new Saiyan();
  let vegeta = new Saiyan();
  let piccolo = new Namekian();
  let c17 = new CyborgAdapter(new Cyborg());
  c17.attack();

  console.log(`Goku attack         ${goku.attack()}`);
  console.log(`Vegeta attack       ${vegeta.attack()}`);
  console.log(`Piccolo attack      ${piccolo.attack()}`);
  console.log(`C17 attack          ${c17.attack()}`);
}
Index();
