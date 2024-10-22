// console.log('test');


// In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
// La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
    // marca
    // anno
    // colore
    // porte
    // carburante

// Successivamente:
// Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
// Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
// Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()

// BONUS
// In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile". La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e ne aggiunge alcuni specifici per le automobili.
// Successivamente:
// Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
// Stampiamo il numero di porte e il tipo di carburante.


// set up

// creo una class
class Veicolo {
    // inserisco le proprietà indicate
    marca;
    anno;
    colore;
    porte;
    carburante;

    constructor(marca, anno, colore, porte, carburante){
        this.marca =  marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;
    }

    informazioni(){
        const info = `
        Marca: ${this.marca} 
        Anno: ${this.anno}
        Colore: ${this.colore}
        Porte: ${this.porte}
        Carburante: ${this.carburante}
        `
        return info
    }

    calcolaEta(){
        const annoCorrente = new Date().getFullYear()
        const eta = this.anno
        return annoCorrente - eta
    }

}

//  creo un'instanza e gli inizializzo dei valori 
const fiatBlu = new Veicolo('Fiat', 2019, 'blu', 4 , 'diesel')
console.log(fiatBlu);
// stampo in console le informazioni
console.log(fiatBlu.informazioni());
// stampo anno corrente
console.log(fiatBlu.calcolaEta());

// estendo la class veicolo con Automobile
class Automobile extends Veicolo{
    constructor(marca, anno, colore, porte, carburante){
        super (marca, anno, colore, porte, carburante);
    }

    features(){
        return "Favolosa Automonile! con " + this.porte + " porte e a " + this.carburante
    }
}
// istanzio nuova automobile
const opelAuto = new Automobile("Opel", 2020, "nera", "4", "benzina")
console.log(opelAuto);
// Stampiamo il numero di porte e il tipo di carburante
console.log(opelAuto.features());
 

