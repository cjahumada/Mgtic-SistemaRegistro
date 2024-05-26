function displayCards(student){
    let card="";
        card=`
        <div id="${student.id}" class='student'>
            <h4> Nombre: ${student.nombre}  <h4/>
            <p> Edad: ${student.edad} <br> </p>
            <p> Genero: ${student.genero} <br> </p>
            <p> Facultad: ${student.facultad} <br> </p>
            <p> email: ${student.email} <br> </p>
            <p> Calif. Materia 1: ${student.materia1} <br> </p>
            <p> Calif. Materia 2: ${student.materia2} <br> </p>
            <p> Calif. Materia 3: ${student.materia3} </p>
            <button>Eliminar<buton>
        </div>
        `;
      document.getElementById("studentList").innerHTML+=card;
}

function displayTable(student){
    let card="";
        card=`
        <div class='student2'>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Genero</th>
                   <th>Facultad</th>
                    <th>email</th>
                    <th>Calif. Materia 1</th>
                    <th>Calif. Materia 2</th>
                    <th>Calif. Materia 3</th>
                </tr>
                <tr>
                    <td> ${student.id} </td>
                    <td> ${student.nombre} </td>
                    <td> ${student.edad} </td>
                    <td> ${student.genero} </td>
                    <td> ${student.facultad} </td>
                    <td> ${student.email} </td>
                    <td> ${student.materia1} </td>
                    <td> ${student.materia2} </td>
                    <td> ${student.materia3} </td>
                </tr>
            </table>
        </div>
        `;
    //}
     document.getElementById("studentList").innerHTML+=card;
}

function searchToDataBase(){
    $.ajax({
        url:"./app/get_student.php",
        type:"GET",
        dataType:"json",
        success:function(response){
            console.log(response);
            if (response.success){
                console.log(response.data);
                response.data.forEach(displayCards);
            }else{
                console.log("Error en la respuesta del servidor");
            }
        },
        error:function(xhr, status, error){
            console.log(error);
        }
    })
}


function init(){
    searchToDataBase();
}

window.onload=init;
