/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function PrintName() {
    consle.log ("Abdullah Fahad") ;
}
printAge() 

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge (birthyear) {
console.log (27)
console.log(2023 - birthyear) ;

} 
printAge(1995) 


/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello (name, language) {
   if ( language == 'ar' ) {

      console.log (`Merhaba ${name}`);
   }
   else if ( language == 'en' ) {

      console.log (`Hello ${name}`);
   }

   else if ( language == 'es' ) {

      console.log (`Hola ${name}`);

   }
   

   else if ( language == 'fr' ) {

      console.log (`Bonjour ${name}`);


   }
}

 
printHello("Abdullah", "ar")
printHello("Abdullah", "en")
printHello("Abdullah", "es")
printHello("Abdullah", "fr")


/**
 * 
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax (a, b) {
 if(a > b){
    return a;
 }else{
    return b;
 }

}

console.log (printMax(85,80));

