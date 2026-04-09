// let prenom = "MOUNA";
// let nom = "COULIBALY"
// console.log("Bonjour "+ prenom  +" "+ nom + "!")
// if(confirm("tu souhaite confirmer ?"))
//     alert("ok")
// else(
//     alert("anuler")
// )
// confirm("hello world !")
// let age = prompt("saisissez votre age :")
// alert("vous avez " +age + "ans")


//


// let nous = 50
// let nombre = prompt("entrer un nombre (le nombre est compris entre 1 et 50)")
// if (nombre==nous){
//     alert("vous avez gagnez !")
// }
// else{
//     alert("vous avez perdu !")
// }

// let nombre = prompt("entrer un nombre");
// if (nombre>0){
//     alert("le nombre est positif");

// }else{
//     if (nombre==0){
//         alert("le nombre est nul");
//     }else{
//         alert("le nombre est negatif");
//     }
// }


//


// let biblio = 500
// biblio-=50
// biblio+=5
// biblio+=0
// let a = "le nombre de livre de la bibliotheque est"
// console.log(a +" " + biblio)


//


// let a = prompt("entrer un nombre :")
// if(a>0){
//     alert (a/"2")
// }else{
//     alert ("erreur")
// }
// console.log(a/"2")


//


//let eau = prompt("entrer la temperature de votre eau")
// if (eau == 0){
//     alert(eau +"°"+" "+"l'eau est glacé")
// }
// if (eau > 100){
//     alert(eau +"°"+" "+"l'eau est vapeur")
// }
// if (eau < 100 ){
//     alert(eau +"°"+" "+"l'eau est liquide")
// }



//


// function direBonjour(){
//     alert("bonjour l'utilisateur")
// }
// direBonjour()


//


// function addition(a,b){
//     console.log(a+b)
// }
// addition(9,7)


// function direBonjour(a){
//     alert("bonjour "+ a)
// }
// direBonjour("MOUNA")


//


// let a=4
// let b=7
// function calcul(c,d=10){
//     let s = c+d
//     return s
// }
// console.log(calcul(a,b))



//



// let prepartion =10 
// let cuisson = 15;

// function cuisiner(nbdegateau, minutepreparation =10, minutecuisson=15){
//     let resutat =nbdegateau * (minutecuisson + minutepreparation)
//     return resutat
// }
// console.log(cuisiner(5)+ " minute")


//




// function demanderAge(){
//     let a = prompt("entrer votre age :")
//     alert("vous avez "+ a +" ans")
// }
// demanderAge()


//




// let a= 5
// let b= "6"

// console.log(a-b)




//





// function abrakadabra(){
//     let nom = prompt("entrer votre nom")
//     let prenom = prompt("entrer votre prenom ")
//     let age =prompt("entrer votre age")
//     alert("Sapristi ! On ne m'avait pas prvenu que c'tait vous,"+ prenom +"! Euh... Je veux dire... Monsieur le grand magicien "+ nom +"! Cela fait dj "+age+" ans que vous faites rayonner notre contre !.")
// }
// abrakadabra()



//



// function calculIMC(valeurUn,valeurDeux){
//     let valeurD = Math.pow(valeurDeux, 2)
//     let r = valeurUn /valeurD
//     return r
// }

// let valeurUn = prompt("entrer votre poids")
// let valeurDeux = prompt("entrer votre taille")
// alert("votre IMC est "+(calculIMC(valeurUn, valeurDeux)))




//




// let age = prompt("entrer votre age :")
// if (age < 18 ){
//     alert("vous n'etes pas majeur")
// }
// if (18<=age<20){
//     alert("vous etes majeur en france")
// }
// if(age > 20){
//     alert("vous etes majeur partout , a vous les casino")
// }



//





// let a = "MOUNA"
// switch(a){
//     case "mouna":
//         console.log("vrai")
//         break

//     default:
//         console.log  ("faux")
// }



//



// let a = 12
// switch(a){
//     case 20:
//     console.log("non correct")
//     case 12:
//     console.log("correct")
// }




//




//condition ternaire
//let a = prompt("entrer un nombre"); 
//a>3 ? console.log("est superieur a trois"):  console.log("est inferieur")




//



// function decoit(une){
//     if (une > 0){
//         console.log(une)
//         decoit(une - 1)
//     }
// }
// decoit(50)



//




// function somme (nombre){
//     if(nombre==1){
//         return 1
//     }
//     else{
//         return  nombre + somme(nombre-1)
//     }
// }
// console.log(somme(5))
    



//




//calaculatrice

// do{ 
//     var choix = Number (
//         prompt = ("que souhaitez-vous faire ?\n\n 1-Addition\n\ 2-Soustration\n\ 3-Muliplication\n\ 4-Division"),
//     );
// }while(choix!=1 && choix!=2 && choix!=3 && choix!=4);


// do{
//     var utilisateur1 = prompt("entrer le premier nombre :")
//     var utilisateur2 = prompt("entrerle deuxieme nombre :")
// }while(isNaN(utilisateur1),isNaN(utilisateur2)){
    
// }
// utilisateur1 = parseInt(utilisateur1)
// utilisateur2 = parseInt(utilisateur2)
// function addition(nombre1 , nombre2){
//     let resultatAddition = nombre1 + nombre2
//     return resultatAddition 
// }
// addition(utilisateur1,utilisateur2)
// console.log(addition(utilisateur1,utilisateur2))

// utilisateur1 = parseInt(utilisateur1)
// utilisateur2 = parseInt(utilisateur2)
// function Soustration(nombre1 , nombre2){
//     let resultatSoustration = nombre1 - nombre2
//     return resultatSoustration 
// }
// Soustration(utilisateur1,utilisateur2)
// console.log(Soustration(utilisateur1,utilisateur2))

// utilisateur1 = parseInt(utilisateur1)
// utilisateur2 = parseInt(utilisateur2)
// function Muliplication(nombre1 , nombre2){
//     let resultatMultiplication = nombre1 * nombre2
//     return resultatMultiplication
// }
// Muliplication(utilisateur1,utilisateur2)
// console.log(Muliplication(utilisateur1,utilisateur2))

// utilisateur1 = parseInt(utilisateur1)
// utilisateur2 = parseInt(utilisateur2)
// function Division(nombre1 , nombre2){
//     let resultatDivision = nombre1 / nombre2
//     return resultatDivision 
// }
// Division(utilisateur1,utilisateur2)
// console.log(Division(utilisateur1,utilisateur2))




//



// let monTableau = ['un ','deux','trois']
// console.log(monTableau)


//



// let monTableau2D = [
//     ['un', 'deux','trois','quatre'],
//     ['moi','toi','lui','nous']
// ]
// monTableau2D[0].push('test')
// monTableau2D.splice(2,0,['30','45','70'])
// console.log(monTableau2D)



//



// let monTableauAssociatif = {
//     'prenon':'mouna',
//     'nom':'coulibaly',
//     'poste':'PDG'
// }
// monTableauAssociatif['nation']=['ivoi']
// console.log(monTableauAssociatif['nom'])



//



// let tableau = [
//     ['campelle','salomon'],
//     ['camp','salom'],
//     ['moi','toi'],
//     ['lui','elle'],
//     ['yes','no'],
//     ['oui','non'] 
// ]
// console.log(tableau[3][1])



//



// let listeMots = ["Cachalot","Pétunia","Serviette"]
// let score = 0
// let utilisateur = prompt("entrer le mot " + listeMots[0])
// if (utilisateur===listeMots[0]){
//     score++
// }

// utilisateur = prompt("entrer le mot " + listeMots[1])
// if (utilisateur===listeMots[1]){
//     score++
// }

// utilisateur = prompt("entrer le mot " + listeMots[2])
// if (utilisateur===listeMots[2]){
//     score++
// }
// console.log(score)




//




// let utilisateur = prompt("entrer le mot " + listeMots[0])
// if (utilisateur===listeMots[0]){
//     score++
// }

// utilisateur = prompt("entrer le mot " + listeMots[1])
// if (utilisateur===listeMots[1]){
//     score++
// }

// utilisateur = prompt("entrer le mot " + listeMots[2])
// if (utilisateur===listeMots[2]){
//     score++
// }
// console.log(score)



//




// let listeMots = ["Cachalot","Pétunia","Serviette"]
// let listePhrase = ["Pas de panique !","La vie, l'univers et le reste","Merci pour le poisson"]
// let score = 0
// let choix 
// while(choix!="Mots" && choix!="Phrases"){
//     choix = prompt("Faite un choix entre Mots et Phrases")
// }
// if (choix==="Mots"){
//         let utilisateur = prompt("entrer le mot " + listeMots[0])
//         if (utilisateur===listeMots[0]){
//         score++
//         }
//     }else{
//         let utilisateur = prompt("entrer la phrase " + listePhrase[0])
//         if (utilisateur===listePhrase[0]){
//         score++
//         }
//     }

// console.log('votre score est: ' +score)




//





// let listeMots = ["Cachalot","Pétunia","Serviette"]
// let listePhrase = ["Pas de panique !","La vie, l'univers et le reste","Merci pour le poisson"]
// let score = 0
// let choix 
// for(let i=0 ; i< )






// let nombre = prompt("saisis plusieurs nombre separé par les espace")
// console.log(nombre.split(' '))  //separateur





// function mafonction (nombre){
//     if(nombre > 0){
//         console.log(nombre)
//         mafonction(nombre - 1)
//     }
//     else{
//         console.log(nombre)
//     }
// }
// mafonction(5)




// function mafonction (nombre){
//     if(nombre < 5){
//         console.log(nombre)
//         mafonction(nombre + 1)
//     }else{
//         console.log(nombre)
//     }
// }
// mafonction(1)




// let tableau = [ ]
// function somme(nombre){
     
// }




//



// objet

// let chien = {
//     race : "shibe" ,
//     poil : "court" ,
//     aboyer : function(){
//         console.log("ouaf ouaf")
//     }
// }
// chien.aboyer()



//





//setnew
// let guestList = new Set(
//     list1=["alice@gmail.com", "bob@yahoo.fr", "charle@outlook.com"],
//     list2=["bob@yahoo.fr","deni@gmail.com", "ali@gmail.com"]
// )

// guestList.add("eve@icloud.com")
// guestList.delete( "charle@outlook.com")
// if (guestList.has('charle@outlook.com')){
//     console.log('oui')
// }else{
//     console.log("non")
// }

// guestList.delete("deni@gmail.com")
// console.log(guestList)
// console.log(Array.from(guestList))






//






//1
// let demande = prompt('entrer votre nom')
// console.log("Bojour " + demande)



//2
// let demande1 =parseInt(prompt('entrer le premier nombre'))
// let demande2 =parseInt(prompt('entrer le deuxieme nombre '))
// let resultat
// demande1=parseInt(demande1)
// demande2=parseInt(demande2)
// resultat=demande1+demande2
// console.log(resultat)


//3
// let demande = prompt('entrer un nombre')
// if(demande==0){
//     console.log('le nombre est nul')
// }else if (demande%2==0){
//     console.log('le nombre est alors pair')
// }else{
//     console.log('le nombre est impair')
// }



//



//4
// for(let i=0; i<=10; i++){
//     console.log(i)
// }



//5
// let a =10
// while(a>0){
//     a--
//     console.log(a)
// }



//6
// let nombre = prompt('entrer un nombre')
// let r
// for(let i = 0; i<=10; i++){
//     r = nombre * i
//     console.log(r)
// }



//7
// let a = prompt('entrer le premier nombre')
// let b = prompt('entrer le deuxieme nombre')
// let c = prompt('entrer le troixieme nombre')
// if(a>b && a>c){
//     console.log(a)
// }else if(b>a && b>c){
//     console.log(b)
// }else{
//     console.log(c)
// }



//8
// let mots = prompt('entrer un nombre')
// let r
// r = mots.length
// console.log(r)



//9
// let mot = prompt('entrer un mots')
// for(let i =0 ; i<mot.length ; i++) {
//     console.log(mot[i])
// }




//10
// let a= 0
// for(let i=0 ; i<=100 ; i++){
//     a=a+i
// }
// console.log(a)



//11
// let tableau =['manger','nager','dormir',4,5] 
// console.log(tableau[0])
// console.log(tableau[1])
// console.log(tableau[2])
// console.log(tableau[3])
// console.log(tableau[4])





// let monMap = new Map([
//     ['nom','Coulibaly'],
//     ['prenom','Mouna']
// ])
// monMap.set('maimouna',{
//     'poste':'pdg',
//     'toi':'moi',
// })
// monMap.set('nouvelle',{
//     'vous':'ils'
// })
// monMap.delete('nouvelle')
// console.log(monMap)


// l = [1,2,3,4]
// function sum_list(...numbers){
//     let s = 0
//     numbers.forEach(numbers=>{
//         s += numbers
//     })
//     return s
// }
// sum_list(...l)
// console.log(sum_list(...l))




// function sumlist(numbers){
//     let sum = 0;
//     for(let i=0; i < numbers.length; i++){
//         sum += numbers[i]
//     }
//     return sum;
// }
// console.log(sumlist([1,2,3,4]))


// let h1 = document.querySelector('h1')
// console. log(h1)

let helloword = document.createElement('div')
helloword.textContent = 'hello world'
document.body.append(helloword)