function displayCards(){
    let card="";
    for(let i=0; i<students.length; i++){
//        console.log(students[i]);
        let student = students[i];

        card+=`
        <div class='student'>
            <h4> Nombre: ${student.nombre}  <h4/>
            <label> Edad: ${student.edad} <br> </label>
            <label> Genero: ${student.genero} <br> </label>
            <label> Facultad: ${student.facultad} <br> </label>
            <label> email: ${student.email} <br> </label>
            <label> Calif. Materia 1: ${student.materia1} <br> </label>
            <label> Calif. Materia 2: ${student.materia2} <br> </label>
            <label> Calif. Materia 3: ${student.materia3} </label>
            <button>Eliminar<buton>
        </div>
        `;
    }
     document.getElementById("studentList").innerHTML=card;
}

function displayTable(){
    let card="";
    for(let i=0; i<students.length; i++){
//        console.log(students[i]);
        let student = students[i];

        card+=`
        <div class='student2'>
            <table>
            <tr>
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
    }
     document.getElementById("studentList").innerHTML=card;
}