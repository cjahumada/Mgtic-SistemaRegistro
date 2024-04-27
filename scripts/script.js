//variables
var studentName="Cesar";
let age=99.67;
const isStudent=false;

console.log(studentName);
console.log(age);
console.log(isStudent);

//arreglos
let students = ["Cesar","Yadira","Emiliano","Renata","Leonardo"];
console.log(students);


students.push("Gabriela","Atocha"); //agrega un item al arreglo
students[2]="Gabby";

students.pop();   //quita items
students.splice(1,1);     //quita item especifio
console.log(students);

//objets literales

let student1 ={
    name:"Cesar",
    age:99,
    isStudent:false
}
let student2 ={
    name:"Gonzalo",
    age:98,
    isStudent:false
}
console.log(student1,student2);

//object constructor

function Student(name,age,isStudent){
    this.name=name;
    this.age=age;
    this.isStudent=isStudent;
}

let student3 = new Student("Yadira",97,false);
let student4 = new Student("Juan",96,false);
let student5 = new Student("Pablo",95,false);
console.log(student3,student4,student5);

//function

function saludar(){
    alert("Hola");
}

function sumar(a,b){
    let total = a+b;
    return total;
}
function calcularTaxes(ingresos,egresos){
        let subtotal = ingresos - egresos;
        let total = subtotal*.02;
        document.write(`
            <p class="conteiner"> Tus Taxes son $${total} <p>
        `);
}

calcularTaxes(sumar(100,200),sumar(10,8));
calcularTaxes(sumar(200,300),sumar(50,30));