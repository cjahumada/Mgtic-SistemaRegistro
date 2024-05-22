let students=[];

//constructor
function Student(nombre,edad,genero,facultad,email,password,materia1,materia2,materia3){
    this.nombre=nombre;
    this.edad=edad;
    this.genero=genero;
    this.facultad=facultad;
    this.email=email;
    this.password=password;
    this.materia1=materia1;
    this.materia2=materia2;
    this.materia3=materia3;
}

//validacion
function isValid(unAlumno){
    let validacion = true;
    if(unAlumno.nombre==""){
        validacion = false;
    }
    if(unAlumno.edad==""){
        validacion = false;
    }
    if(unAlumno.email==""){
        validacion = false;
    }
    if(unAlumno.password==""){
        validacion = false;
    }
    if(unAlumno.materia1==""){
        validacion = false;
    }
    if(unAlumno.materia2==""){
        validacion = false;
    }
    if(unAlumno.materia3==""){
        validacion = false;
    }
    return validacion;
}
//registrar
function registrar(){
    let inputNombre = document.getElementById("txtNombre").value;
    let inputEdad = document.getElementById("txtEdad").value;
    let inputGenero = document.getElementById("genero-select").value;
    let inputFacultad = document.getElementById("facultad-select").value;
    let inputEmail = document.getElementById("txtEmail").value;
    let inputPasword = document.getElementById("txtPassword").value;
    let inputMateria1 = document.getElementById("txtMateria1").value;
    let inputMateria2 = document.getElementById("txtMateria2").value;
    let inputMateria3 = document.getElementById("txtMateria3").value;
    let nuevoAlumno = new Student(inputNombre,inputEdad,inputGenero,inputFacultad,inputEmail,inputPasword,inputMateria1,inputMateria2,inputMateria3);
    if(isValid(nuevoAlumno)){
        //students.push(nuevoAlumno);
//        console.log(students);
//        displayCards();
        
        insertToDatabase(nuevoAlumno);
 
        //displayTable();
    }else{
        alert("Por favor completa los campos");
    }
}

function insertToDatabase(newStudent){
    $.ajax({
        url:"./app/register.php",
        method:"POST",
        data:{
            nombre: newStudent.nombre,
            edad:   newStudent.edad,
            genero: newStudent.genero,
            facultad: newStudent.facultad,
            email: newStudent.email,
            password: newStudent.password,
            materia1: newStudent.materia1,
            materia2: newStudent.materia2,
            materia3: newStudent.materia3
        },
        dataType:"json",
        success:function(response){
            if(response.success){
               console.log(response); 
               setTimeout(function(){
               location.reload();
            },1000);
            }else{
                console.log("Error, por favor intente de nuevo");
            }
          },
        error:function(xhr,status,error){
            console.log("Error de conexion");
            console.error(error);
        }
    });
}


//function init(){
//    let student1 = new Student("Samuel",99,"MASULINO","CIENCIAS ADMINISTRATIVAS","samuel@uabc.edu.mx","S4mu3l",10,10,8);
//   students.push(student1);
//   displayCards();
//   displayTable();
//}

//window.onload=init;// espera a rendirizar el HTML