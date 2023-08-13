// création d'un alias de  type
// permet de créer des types réutilisables facilement 
type User = { "firstname": string, "lastname":string }
type Id = string | number


//generics :

function test(arg : any) : any{
    return arg ;
}

const output = test(3)
// dans ce cas on perd le type

// solution 

function testGeneric<ArgType>(arg: ArgType) : ArgType {
    return arg;
}

const output2 = testGeneric("3")

// le type est gardé 

//********************************************************************************* */

const compteur = document.querySelector('#compteur') as HTMLButtonElement;
// const compteur = document.querySelector('#compteur')!; jamais null -> point d'exclamation 

let i: number = 0;

const increment: (e:MouseEvent) => void = (e: MouseEvent) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span');

    if(span){
        span.innerText = i.toString();
    }

}

const user: User = { firstname: "fred", lastname: "gruwe"}

compteur?.addEventListener('click', increment);


const printId: (id: Id) => void = (id) => {
    console.log(id)
    if(typeof(id) == "number"){
        console.log(id)
    }
}





