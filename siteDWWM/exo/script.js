function CalculatriceFunction() {
  console.log("présentation calculatrice en condition");

  const a = parseFloat(prompt("entrer un chiffre"));
  const b = prompt("entrer un multiplicateur");
  const c = parseFloat(prompt("entrer un deuxieme chiffre"));
  let result;

  if (b === "+") {
    result = a + c;
  } else if (b === "-") {
    result = a - c;
  } else if (b === "*") {
    result = a * c;
  } else if (b === "/") {
    if (c !== 0) {
      result = a / c;
    } else {
      result = " pas divisible idiot";
    }
  } else {
    result = "pas possible calcul";
  }

  console.log(result);
}

function PairImpair() {
  const a = parseFloat(prompt("entre un nombre entier"));

  let result;

  if (a % 2 === 0) {
    result = "pair";
  } else {
    result = "impair";
  }

  console.log("le nombre est : " + result);
}

function ComparaisonNumber() {
  const a = parseFloat(prompt("entre un nombre"));
  const b = parseFloat(prompt("un deuxième"));

  let result;

  if (a > b) {
    result = "le premier nombre est plus grand";
  } else {
    result = "le deuxième nombre est plus grand ";
  }
  if (a === b) {
    result = "les nombres sont les meme";
  }

  console.log(result);
}

function Notation() {
  const a = parseFloat(prompt("entrer une note entre 0 et 100"));

  let result;

  if (a >= 90 && a <= 100) {
    result = "Excellent";
  } else if (a >= 70 && a < 90) {
    result = "Bien";
  } else if (a >= 50 && a < 70) {
    result = "Passable";
  } else {
    result = "Échec";
  }

  console.log(result);
}

function Exo6() {
  const a = parseFloat(prompt("entre un nombre la depeche"));

  let result;

  if (a % 3 === 0 || a % 5 === 0) {
    result = "le nombre est un multiple de 3 ou de 5";
  } else {
    result = "ton nombre il est pas bon";
  }

  console.log(result);
}

function Devinette() {
  const a = parseFloat(prompt("trouve mon nombre"));
  const nombre_secret = 69;

  let result;

  if (a > nombre_secret) {
    result = "Trop grand LOL :)";
  } else if (a < nombre_secret) {
    result = "Trop petit MDR ;)";
  } else if (a === nombre_secret) {
    result = "Bravo ^^";
  } else {
    result = "c'est pas un nombre ça";
  }

  console.log(result);
}

function DetecterVoyelle() {
  let mot = "poutre";

  const voyelle = ["a", "e", "i", "o", "u"];

  let compteur = 0;

  for (let i = 0; i < mot.length; i++) {
    if (voyelle.includes(mot[i])) {
      compteur++;
    }
  }
  console.log(compteur);
}

function PyramideLettre() {
  let etage = 5;

  for (let i = 0; i < etage; i++) {
    let ligne = "6".repeat(i);
    console.log(ligne);
  }
}

function ExoFunction() {
  function DireBonjour(prenom) {
    console.log("bonjour, " + prenom);
  }
  DireBonjour("Tangy");

  function moyenne(a, b, c, d) {
    return (a + b + c + d) / 4;
  }
  console.log(moyenne(41, 2, 54, 74));

  function estPair(a) {
    return a % 2 === 0;
  }
  console.log(estPair(40));

  function tableMulti(a) {
    for (let i = 0; i < 11; i++) {
      console.log(i * a);
    }
  }
  tableMulti(5);
}

function TableauAnimaux() {
  const animaux = ["Chien", "Chat", "Lapin"];

  animaux.push("Oiseaux");
  animaux.splice(1, 1);

  for (let i = 0; i < animaux.length; i++) {
    console.log(animaux[i]);
  }
}

function ExempleBoucle() {
  console.log("exemple d'une boucle For");

  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) console.log(i);
  }

  console.log("exemple d'une boucle While ps:utiliser le mot stop");

  let mot;

  while (mot !== "stop") {
    mot = prompt("entrez le mot");
    if (mot !== "stop") {
      console.log(mot);
    }
  }
  console.log("fin de boucle");

  console.log("exemple d'une boucle Do While");

  let nombre;

  do {
    nombre = parseInt(prompt("entre un nombre entre 1 et 10"));
  } while (isNaN(nombre) || nombre < 1 || nombre > 10);

  console.log(nombre);

  console.log("exemple de l'utilisation de boucle for");

  for (let i = 1; i < 11; i++) {
    console.log(i);
  }

  let result = 0;

  for (let i = 1; i < 101; i++) {
    result = result + i;
  }
  console.log(result);

  const multiplication = 4;

  for (let i = 0; i < 11; i++) {
    console.log(i * multiplication);
  }
  for (let i = 0; i < 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
  /*
    
    */
}

function ExempleFunction() {
  console.log("exemple utilisisation d'une function");
  function multiplication(a, b) {
    return a * b;
  }

  let resultat = multiplication(5, 5);

  console.log(resultat);

  /*

    */
}

/* function analyseNote(note){
    let min = Math.min(...note)
    let max = Math.max(...note)
    let somme = note.reduce((acc,note) => acc + note, 0)
    let moyenne = somme / note.length

    return{
        minimum : min,
        maximum : max,
        moyenne : moyenne
    }
}

console.log(analyseNote([10,11,44,45,5])) */

/*let person = {
    nom : "josephine",
    age : 26,
    profession : "voleuse"
}

person.natio = "iles mcdonald"

delete person.profession

for(let cle in person){
    console.log(cle," . ",person[cle])
}*/

/*let voiture = {
    marque : mazda,
    model : rx7,
    proprio : {
        nom : jeremy,
        age : 24,
    },
};

console.log(voiture.proprio.nom)

let etudiant  = {
    nom : "bob",
    note : [1,2,3,4]
}*/

/* //exo
let bouquin = {
    nom : "Mein Kampft 2 la revanche",
    auteur : "elon musk sous frozen",
    annee : 2025
}

console.log(bouquin)

bouquin.genre = "Amour"
bouquin.annee = 2026
delete bouquin.auteur

console.log(bouquin)*/

/* let film = {
    titre : "Transformers",
    annee : 2007,
    realisateur : {
        nom : "Bay",
        prenom : "Michael"
    }
}

console.log(film.realisateur.prenom) */

/*let panier = {
    pomme : 10,
    banane : 5,
    cerise : 0.5,
    peche : 25,
    patate : 150
}

for(let cle in panier){
    console.log("une", cle,"coûte", panier[cle], "€")
}*/

/*let joueur = {
    nom : "jean",
    score : 25,
    ajouterScore : function(a){
        this.score += a 
        console.log(this.nom, "est maintenant à", this.score, "points.")
    }
}

joueur.ajouterScore(parseFloat(prompt("entrez un le nombre de point gagner"))) */

let fuck = [
  {
    user1: "marc",
    mail1: "marc59@tamere.com",
    appelMessage1: function () {
      console.log(
        "Bonjour je m'appelle",
        this.user1,
        "mon mail est :",
        this.mail1
      );
    },
  },
  {
    user2: "jean",
    mail2: "jean@filetonpere.fr",
    appelMessage2: function () {
        console.log(
          "Bonjour je m'appelle",
          this.user2,
          "mon mail est :",
          this.mail2
        );
      },
  },
  {
    user3: "deez",
    mail3: "deez@nuts.com",
    appelMessage3: function () {
        console.log(
          "Bonjour je m'appelle",
          this.user3,
          "mon mail est :",
          this.mail3
        );
      },
  },
];

console.log(fuck[1].appelMessage2());
