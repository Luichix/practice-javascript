class Animal {
  constructor(especie, color, edad) {
    this.especie = especie;
    this.color = color;
    this.edad = edad;
    this.info = `Soy ${especie}, tengo ${edad} años y soy de color ${color}`;
  }

  saludar(nombre) {
    document.write(`Hola ${nombre}, <br> ${this.info} <br>`);
  }
}

class Perro extends Animal {
  constructor(especie, color, edad, raza) {
    super(especie, color, edad);
    this.raza = raza;
    this.perroInfo = `${this.info}, de la raza ${raza}`;
  }

  ladrar() {
    alert("WauW");
  }
}

const animal1 = new Animal("perro", "marron", "5");

animal1.saludar("Reychu");

document.write(animal1.info);

const perro1 = new Perro("perro", "marron", "5", "doberman");

perro1.saludar("Luichix");
perro1.ladrar();
document.write(perro1.perroInfo);
