#!/usr/bin/env node

//45 QUESTION//
//LET START//
//QUESTION # 1//
//Personal Message Store a person’s name//
let personName: string= "eric";

console.log(`hello ${personName} would you like to learn pythone today?`);


//Create a variable called alien_color

let  alien_color : string= 'green';

if(alien_color == 'green'){
    console.log('the player just earned 5 points.');
}

// //#Write one version of this program that passes the if test and another that fails.
// // (The version that fails will have no output.)

//let alien_color = 'red';
// if(alien_color == 'red'){
//     console.log('the player just earned 5 points.');
// }

let alien_colour: string = 'green';

if(alien_color == 'green'){
    console.log('the player just earned 5 points for shooting the alien.');
}
else{
    console.log('the player just earned 5 points.');
}

//lower case
//QUESTION # 2
let personNam:string ="Seerat";
console.log("lowercase:",personName.toLowerCase());

//uper case
console.log("uppercase:",personName.toUpperCase());

//title case 
console.log("Titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));

//QUESTION # 3
//Famous Quote Find a quote from a famous person you admire//

let quotes = "A person who never made a mistake never tried anything new";
let famous_persons = "Albert Einstein";
let messages = `${famous_persons} once said,${quotes}`;
console.log(messages);

//question # 4
//Famous Quote Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let peron:"A person who never made a mistake never tried anything new.";
let author="Albert Einstein once said, ";
console.log(author);

//question # 5
//Famous Quote 2 Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let quote="my mother is very beautifull";
let famous_person="mother";
let message = `${famous_person} very beautifull,${quote}`;
console.log(message);
// // Storing the name with whitespace characters
// name_with_whitespace "\t\n  John Doe  \n\t"

// // Printing the name with the whitespace displayed
// print(Name with whitespace= '{name_with_whitespace}'")

// // Printing the name after stripping the whitespace
// stripped_name = name_with_whitespace.strip()
// print()

let personNames: string="\t\n  jhon doe \n\t";
console.log(personName);
let stripped:string = personName.trim();
console.log(stripped);

//question # 7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.
//
console.log(5 + 3);
console.log(2 * 4);
console.log(10 - 2);
console.log(16 / 2);

//question # 9
//Favorite Number: Store your favorite number in a variable.

let favoriteNumber: number = 4;
console.log(`my favorite Number is ${favoriteNumber}`);

//project question #10
//my name is seeratfatima

console.log("hello world simple program");

//question # 11
//Greetings Start with the array you used in Exercise 11, /
//but instead of just printing each person’s name, print a message to them. 

let  member: string[]=["sana","muntaha","javeria","shazia"];

for (let i=0; i< member.length; i++) {
console.log(member[i]);
}

//project question12
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
let  members: string[]=["sana", "muntaha", "javeria", "shazia"];
let messag: string= 'kl birthday kis ki hai';
for (let i=0; i<members.length; i++) {
console.log(message + members[i]);
}
//Question # 11
//Think of your favorite mode of transportation
let transporation : string [] = ["car", "bike",  "cycle" ,"bus", "auto", "greeline bus", "suzuki"]

for (let i=0; i<transporation.length; i++){
console.log('i would like to own a '+ transporation[i]);
}
//project question14
//project question15
//project question16

//start//

let guest_list:string[] =["sidra" ,"amna", "rabiya"]
export{guest_list}
for(let i=0; i<guest_list.length; i++){
    console.log("respected madam" + guest_list[i] +`,\nwe invited you on dinner tomorrow.\nThank you\n`);
}

let not_peresent : string = 'sidra';
let new_gueste :string ='sheeza';
for(let i=0; i<guest_list.length; i++){
    console.log('respected madam' + guest_list[i] +`,\n we invited you on dinner tomorrow.\nThank you\n`);
}
guest_list.unshift('shaheen','sarfarz','rizwan');
for(let  i=0; i<guest_list.length; i++){
    console.log('repected sir/madam' + guest_list[i] + ',\nwe|.\nthanks you\n');
}

//question #18
//Think of something you could store in a array. 
//For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
let places : string[] = ['cape town','dehli','faislabad','bankok','ahmadabad']
console.log('original' + places);

console.log('copy ' + [...places].sort());

console.log('original :' + places);

console.log('copy ' + [...places].sort().reverse());


console.log('copy ' + [...places].sort().reverse());

console.log('original :' + places.sort());
console.log('original :' + places.sort().reverse());

//question # 19

console.log(`n\ PRINTING NUMBER OF GUEST INVITED`);
console.log(`we had finally invited ${guest_list.length} from Q19`);

//QUESTION #20

let languages: string[] =["english","urdu","arabic","franch","chines","turkey",]
console.log("list of languages:")
for(let top of languages){
    console.log(top)
}

///qUESTION # 21
interface item {
    name:string
    price:number

}
const book: item ={
    name:"jhot bolnny k nary mai",
    price:450
}
const fruits: item ={
    name:"apple",
    price:250

}
console.log(`book name: ${book.name}.PRICE: ${book.price}`);
console.log(`fruits name: ${fruits.name}.PRICE: ${fruits.price}`);
//QUESTION # 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error. 
//Make sure you correct the error before closing the program.

let array: (string | number) [] = ['ramsha','rumaisa','tuba','arooba',3,5,8,'sana',]
console.log(array[1]);
console.log(array[0]);
console.log(array[2]);
console.log(array[4]);
console.log(array[6]);
console.log(array[5]);
//Question # 23

let cars  ="cultus";
console.log("Is car == 'cultus'? I predict true.");
console.log(cars == 'cultus');

console.log("Is car === 'cultus'? I predict true.");
console.log(cars === 'cultus');

console.log("Is car !== 'cultus'? I predict false.");
console.log(cars != 'cultus');

console.log("Is car < 'cultus'? I predict false.");
console.log(cars < 'cultus');

console.log("Is car >='cultus'? I predict false.");
console.log(cars >='cultus');

console.log("Is car !='tyoto'? I predict false.");
console.log(cars !='toyoto');

console.log("Is car !=='cultus'? I predict false.");
console.log(cars !=='cultus');

//24 2Question#
let car : string = 'cultus';
let age : number =25;
let numbers:number[] =[1,2,3,4];

   //numercic test
 //#Tests for equality and inequality with strings
console.log("Is age  != 25? I predict true.");
console.log(age != 25);

console.log("Is age  != 30? I predict false.");
console.log(age != 30);

console.log("Is age  == 25? I predict true.");
console.log(age == 25);

console.log("Is age  != 30? I predict true.");
console.log(age != 30);

//#Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to

console.log("Is age   > 30? I predict true.");
console.log(age > 30);

console.log("Is age   <= 25? I predict true.");
console.log(age <= 25);
// test #ture logic operators
console.log("Is age   > 20 && age < 30? I predict true.");
console.log(age > 20 && age < 30);

//test # false
console.log("Is age   > 30 || age < 18? I predict true.");
console.log(age > 30 || age < 18);

console.log("Is 3  in number? I predict true.");
console.log(3 in numbers);

console.log("Is 5 not in numbers? i predict true.");
console.log(5 in numbers);
//QUESTION # 25
//Create a variable called alien_color

let  alien_colors = 'green';

if(alien_colors == 'green'){
    console.log('the player just earned 5 points.');
}

// //#Write one version of this program that passes the if test and another that fails.
// // (The version that fails will have no output.)
// alien_color = 'red';

if(alien_colors == 'red'){
    console.log('the player just earned 5 points.');
}

//Version that passes the if test
// Version that fails the if test
//QUESTION# 26
let alien_colorss: string = 'green';

if(alien_color == 'green')
{
    console.log('the player just earned 5 points for shooting the alien.');
}

    console.log('the player just earned 10 points.');

alien_color = 'red';
 if(alien_color == 'green'){
    console.log('the player just earned 5 points for shooting the alien.');
}
else{
    console.log('the player just earned 10 points.');
}
//QUESTION # 27
let alien_colours = 'green';

 if(alien_colors == 'green'){
    console.log('the player just earned 5 points.');
}

 else if (alien_colors == 'yellow'){
    console.log('the player just earned 10 points.');
}

else if(alien_colors == 'red'){
    console.log('the player just earned 15 points.');
}
else{
    console.log("please select right colours")
}

alien_colors = 'red'
if(alien_colors == 'green'){
    console.log('the player just earned 5 points.');
}
else if (alien_colors == 'yellow'){
    console.log('the player just earned 10 points.');
}

else if (alien_colors == 'red'){
    console.log('the player just earned 15 points.');
}
else{
    console.log("please select right colours")
}
alien_colors = 'yellow';
if(alien_colors == 'green'){
    console.log('the player just earned 5 points.');
}
 else if (alien_colors == 'yellow'){
    console.log('the player just earned 10 points.');
}
else if (alien_colors == 'red'){
    console.log('the player just earned 15 points.');
}
else{
    console.log("please select right colours")
}    
//project 8 question 28#

let ages : number = 15;
if(age<2){
    console.log('the person is a baby')

    }
else if(age >= 4 && age <4){
    console.log('person is a  toodler.')
}
else if(age >= 4 && age <13){
    console.log('person is a kid.')
}
else if(age >= 13 && age<20){
    console.log('person is a  taenager.')
}
else if(age >= 20 && age <65){
    console.log('person is a  adult.')
}
else{
    console.log('person is an elder.')
}
//QUESTIONS # 29
let favorite_fruits :string[] =['apple','mango','banana','straberry','grapes']

 if(favorite_fruits.includes('apple')){
    console.log('i really like apple.')
}
if(favorite_fruits.includes('mango')){
    console.log('i really like mango.')
}
if(favorite_fruits.includes('banana')){
    console.log('i really like banana.')
}
if(favorite_fruits.includes('straberry')){
    console.log('i really like straberry.')
}
if(favorite_fruits.includes('grapes')){
    console.log('i really like grapes.')
}
//QUESTIONS # 30
let users: string[]= ['sana', 'javeria','munataha','seerat','fatima']

for(let user of users){
if(user === 'fatima'){
    console.log('hello fatima,would you like to see a status report?')
}

else{
    console.log(`hello ${user}.thank you for logging in again.`)
}
}
//QUESTION # 31
let user : string[] =['sana','muntaha','javeria','fatima','seerat',]

if(user.length === 0){
    console.log('we would to this find some users! ')
}
else{
    user =[];
    console.log('all users have been removed' +user.length)
}
//QUESTIONS# 32
let current_users: string[] = ['sualeha','tuba','ramsha','sana','amna',];
let new_users: string[] = ['rabiya','hafsa','soniya','sajjal','sana'];
new_users.forEach((newUser) =>{
if (
    current_users.some(
        (currentUsers) => currentUsers.toLowerCase() === newUser.toLowerCase()

    )
){
    console.log(`${newUser} will need to enter a new username.`);
}else{
console.log(`${newUser} is available.`);
}
})
// QUESTIONS # 33
//Store the numbers 1 through 9 in a array
//Loop through the array.
let myNumbers = [1,2,3,4,5,6,7,8,9];

for(let i = 0; i < myNumbers.length; i++){
  //  Use an if-else chain inside the loop to print the proper ordinal ending for each number.
  // Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
    if(myNumbers[i] == 1){
        console.log(`${myNumbers[i]}st`);

    }else if(myNumbers[i] ==2){
        console.log(`${myNumbers[i]}nd`);

    }else if(myNumbers[i] ==3){
        console.log(`${myNumbers[i]}rd`);

    }else if(myNumbers[i] >=4 && myNumbers[i] <= 9){
        console.log(`${myNumbers[i]}th`);
    }}
//QUESTION # 34
let mypizzaa = ['bbqpizza','cheespizza','garlicpizza','sandvichpizza',];

for(let i = 0; i < mypizzaa.length; i++) {
    console.log(mypizzaa[i]);
}
for(let i = 0; i < mypizzaa.length; i++) {
    console.log ( `i like to eat ${mypizzaa[i]}`);
}
console.log 
(`\nI really like to eat pizzas.pizza comes in a varisty of flavors and tooping, allowing individuals to customiz`);
//QUESTION # 35
let mypizza = ['bbqpizza','cheespizza','garlicpizza','sandvichpizza',];

for(let i = 0; i < mypizza.length; i++) {
    console.log(mypizza[i]);
}
for(let i = 0; i < mypizza.length; i++) {
    console.log ( `i like to eat ${mypizza[i]}`);
}
console.log 
(`\nI really like to eat pizzas.pizza comes in a varisty of flavors and tooping, allowing individuals to customiz`);

function make_shiirt(size: string, massage: string) {
    console.log(`making  a ${size} t-shirt with the messsage "${massage}" printed on it.`);

}
 make_shirt('medium','code is life');
//QUESTIONS # 37
function make_shirt(size: string= 'large', massage: string= ' I love typescript') {
    console.log(`making  a ${size} t-shirt with the messsage "${massage}" printed on it.`);

}

 make_shirt();
 make_shirt('medium',);
 make_shirt('small', 'dive into coding');
 //QUESTIONS # 38
function describe_city(nameofcity: string, country: string = 'pakistan'){
    return (`${nameofcity} is in ${country}.`);
};

let city1 = describe_city('pakistan,karachi');
let city2 = describe_city('india,dehli',);
let city3 = describe_city('dubai,UAE');
let city4 = describe_city('south africa,capetown',);

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
//QUESTIONS # 39
function city_country(city: string,country: string){
    console.log(`'${city},${country}'`)
}

city_country('karachi','pakistan');

let mycities = city_country('karachi','pakisatn');
console.log(mycities);

console.log(city_country('duabi','UAE'));
console.log(city_country('pakistan','lahore'));
console.log(city_country('riaz','saudia arabia'));
//QUESTIONS # 40
function makeAlbum(writername: string,albumtitle: string){
    return{writername,albumtitle}
}

let album1 = makeAlbum('imam ahmad raza khan','meri ulfat madiny sy yunhi nh');
let album2 = makeAlbum('imam ahmad raza khan','sb se ola ho aala hamara nabi');
let album3 = makeAlbum('imam ahmad raza khan','subha taiba mai hoi batTa bara noora ka');

console.log(album1);
console.log(album2);
console.log(album3);

function makeAlbum2(writername: string, albumtitle: string, numberOfTracks?: number) {
    return {writername, albumtitle, numberOfTracks}
}

let album4 = makeAlbum2('imama ahmad raza khan','dil sy mustafa ko tu pukar',30);
let album5 = makeAlbum2('imam ahmad raza khan','hasbi rabbi jallah',55);
let album6 = makeAlbum2('seeratfatima','typescript ki coding',66);

console.log(album4);
console.log(album5);
console.log(album6);
//QUESTIONS# 41
let magicians: string[]= ['bard','rameez','ainak wala',];

function show_magicians(magicians: string[]) {
    magicians.forEach(magicians =>{
        console.log(magicians);
    })
}
show_magicians(magicians);
//4QUESTIONS # 42
let magicianss: string[] = ['don','rameez','chris',];

function make_great(magicianss: string[]) {
for(let i = 0; i < magicianss.length; i++) {
    magicianss[i] = magicianss[i] + 'the great';
}
}
// console.log(make_great);

make_great(magicianss);
console.log(magicianss);
//question 43
let magiciansss: string[] = ['alice', 'david', 'chris'];

function make_greats(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice());

console.log('original magicians:');
console.log(magicians);

console.log('great magicians:');
console.log(greatMagicians);
//QUESTIONS # 44
function make_sandvich(...items: string[]) {
    
    console.log(`making asandvich with: ${items.join(',')}.`);
    }make_sandvich('han','chees');
    make_sandvich('turkey','lettuce','tomato');
    make_sandvich('avacado', 'sprouts', 'mustard','mayo');
    //assigment last Question 45//
function make_car(manufacturer: string, model: string,...options: [string, any][]): object {
    let car: { manufacturer: string; model: string; [key: string]: any } = { manufacturer, model };
    
    options.forEach(([key, value]) => car[key] =value);
    return car;
}
console.log(make_car('toyota','gorolla',['color','red'],['year',2020]));

console.log(make_car('ford','fiesta',['color','blue'],['year',true]));

///completed assaigment 45 questions//

