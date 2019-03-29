// -- Declare un tableau numerique
 const Prenoms = ["Steve", "Farid", "Asam", "Khalid"]; 
 // -- Aprecu dans la console
  console.log(Prenoms); 
 // -- Si je veux connaitre le nombre d'elements (Prenoms) de mon tableau
  let nombreElementsDansMonTableau = Prenoms.length;
   console.log(nombreElementsDansMonTableau); 
// -- Pour recuperer une valeur dans le tableau numerique j'utilise son indice(index)
console.log(Prenoms[1]);

let i = 2;
console.log(Prenoms[i]);


    //--Pour i=0 (Au depart i vaut 0) ; tant que i < (est strictement inferieur) à nombreElementsDansMonTableau(Prenoms.length)
    // alors i++ (j'incremente i de 1)
for(let i = 0; i < nombreElementsDansMonTableau ; i++){
    //--Tout ce qui est situé a l'interieur des accolades, sera dans la boucle
    console.log('Ici, i= ' + i);
    console.log( Prenoms[i]);
    console.log('---');
} //Fin de la boucle

//-- Voyons maintenant, comment proceder avec des objets
const Contact = {
    // Indice : Valeur
    prenom : "Stevenson",
    nom : "ILANSEGARIN",
    tel : "06 22 13 09 91"
};
console.log(Contact);

// Recuperer les valeurs d'un objet, utilise le "." suivi de l'indice
console.log("Prenom :" + Contact.prenom);
console.log("nom :" + Contact.nom);
console.log("tel :" + Contact.tel);
//-----------------------------
const Contacts = [
    "Zita",
    "Hugo",
    {
        // Indice : Valeur
    prenom : "Farid",
    nom : "MOUCH",
    age : 32
    },
    {
        // Indice : Valeur
    prenom : "Bruno",
    nom : "COUGNY",
    age : 47
    }
];

console.log(Contacts);

// Comment acceder aux valeurs de mon objets, dans le tableau numerique

// 1. D'abord, je recupere mon objet
console.log( Contacts[2]);

// 2. Pour acceder aux valeurs de mon objet
console.log("Prenom :" + Contacts[2].prenom);
console.log("nom :" + Contacts[2].nom);
console.log("age :" + Contacts[2].age);

//------------------
// Parcourir un tableau avec des objets.
//Partons du tableau suivant :
const Etudiants = [
    {prenom : "Steve", nom : "ILAN", competence : "Fullstack"},
    {prenom : "Farid", nom : "MOUCH", competence : "Fullstack"},
    {prenom : "Rachid", nom : "KAMAN", competence : "Backend"},
    {prenom : "Zita", nom : "NGUYEN", competence : "Fullstack"},
];
console.log(Etudiants);



//si je veux connaitre le nombre d'etudiants
const nombreEtudiants = Etudiants.length;
console.log("Nombre d'etudiants = " + nombreEtudiants);

/* ------------------------------------------------------
    |       ~ ~ ~ ~    💀  EXERCICE 😜     ~ ~ ~ ~          |
    |                                                        |  
    |                                                        |  
    |  Affichez dans la page HTML à l'aide de jQuery la      | 
    |  liste (ul>li) des Etudiants et leur classe.           | 
    |                                                        | 
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  */

    $(document).ready(function() {
            const ul = $('<ul>');
            for(let i = 0; i < nombreEtudiants ; i++){
                let Etudiant = Etudiants[i];
                $(`
                    <li>
                        <strong>
                            ${Etudiant.prenom} ${Etudiant.nom} </strong>
                            - ${Etudiant.competence}
                    </li>
                `).appendTo( ul );
            }//fin de la boucle for
            ul.appendTo( $('body'));
    });