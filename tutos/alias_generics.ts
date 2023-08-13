/** ALIAS DE TYPE  */

import { Type } from "typescript";

// création d'un alias de  type
// permet de créer des types réutilisables facilement 
type User = { "firstname": string, "lastname":string }
type Id = string | number

const userTest: User = { firstname : "fred", lastname : "gruwe"}

const id: Id = 3;

/** les types sont complétements écartés du fichier de sortie !  */



/** LES GENERICS  */

// 1 - Exemple 
function identity(arg: any): any{
    return arg
}

const a = identity(3) // ici on perd le type ! 


// 2 - solution 

function identity2<ArgType>(arg: ArgType) :ArgType{
    return arg
}

const b = identity2<number>(3) // on retrouve le type ! 
const c = identity2(3) // Si l'on ne précise rien, on retrouve la valeur de l'arg ! 


/**   ***************************************************** ***************** ***************** */

/** GENERIC AVEC UN TABLEAU */

const first = <Type>(arg: Type[]) : Type | undefined => {
    if(arg.length > 0){
        return arg[0];
    }
    return undefined
}

const firstValue = first(["aed", "aerr", "oiuy"])

// Ce type de générique est utilisé dans les fonctions natives ( querySelector par exemple) : 

const compteur = document.querySelector('#compteur') as HTMLButtonElement; // ici on peut remplacer l'assertion de type par un généric MAIS jamais null 
const compteurGeneric = document.querySelector<HTMLButtonElement>('#compteur'); // le résultat sera HTMLButtonElement ou null 


/** Exemple aevc un tableau qui contient à la fois des strings et des numbers */

const d: Array< string | number >= ["de", "de", 3] // array est un type généric 


/** utilsation des generics dans les alias de type */

// exemple avec une fonction 

type identity<ArgType> = (arg: ArgType) => ArgType


/** utilisation de contraintes pour forcer le type  */

function sizeConsole<Type extends {length: number} >(arg: Type ) : Type {
  
    console.log(arg.length)
    return arg;
   
  
    
}

sizeConsole(36) // ici on aura une erreur, car il attend un objet qui contient une clé length de type number ( un array lol)
sizeConsole(["ed", 3])
sizeConsole(null) // ne peut pas être null ( à cause de Type extends )


function sizeConsole2<Type extends {length: number} | null>(arg: Type | null) : Type | null{
    if (arg !== null){
     console.log(arg.length)
     return arg;
    }
    return null;
     
 }

 sizeConsole2(null) // Peut prendre null en arg 

/** Possibilité de rendre des alias de type interdépendants  */

// exemple pour un alias de type qui sera une clé de l'objet user : 
type abc = keyof User;