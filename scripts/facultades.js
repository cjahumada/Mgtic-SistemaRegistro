//consructor
function Facultades(name,campus){
    this.name=name;
    this.campus=campus;
}

//vaidacion
function validarCampos(inputFacultad, inputCampus) {
    if (inputFacultad == "" || inputCampus == "") {
        alert("Por favor, completar todos los campos.");
        return false;
    }
    return true;
}

//register
function registrar(){
        let inputName = document.getElementById("txtFacultad").value.toUpperCase();
        let inputCampus = document.getElementById("txtCampus").value.toUpperCase(); 

        if (!validarCampos(inputName, inputCampus)) {
            return;
        }

        let nuevaFacultad = new Facultades(inputName,inputCampus);
        //console.log(nuevaFacultad);
        saveItems(nuevaFacultad);   //this fn in on StoreManager

        document.getElementById("txtFacultad").value = "";
        document.getElementById("txtCampus").value = "";
}