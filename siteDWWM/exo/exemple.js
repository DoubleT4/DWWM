
function ExempleBoucle(){
    console.log("exemple d'une boucle For")

    for(let i = 0; i < 10; i++){
        if (i % 2 === 0)
            console.log(i)
    }
    
    console.log("exemple d'une boucle While ps:utiliser le mot stop")
    
    let mot;

    while(mot !== 'stop'){
        mot = prompt("entrez le mot")
        if(mot !== "stop"){
            console.log(mot)
        }
    }
    console.log("fin de boucle") 

    console.log("exemple d'une boucle Do While")

    let nombre;

    do{
        nombre = parseInt(prompt("entre un nombre entre 1 et 10"))
    }while(isNaN(nombre) || nombre < 1 || nombre > 10)

    console.log(nombre)

    console.log("exemple de l'utilisation de boucle for")

    for(let i = 1; i < 11; i++){
        console.log(i)
    }

    let result = 0

    for(let i = 1; i < 101; i++){
        result = result + i 
    }
    console.log(result) 

    const multiplication = 4

    for(let i = 0; i < 11; i++){
        console.log(i*multiplication)
    }
    for(let i = 0; i < 50; i++){
        if(i %3 === 0 && i%5 === 0){
            console.log(i)
        }    
    }
    /*
    
    */
}
 
function ExempleFunction(){
    console.log("exemple utilisisation d'une function")
    function multiplication(a,b){
        return a * b
    }

    let resultat = multiplication(5,5)

    console.log(resultat)

    /*

    */ 
}


                
                