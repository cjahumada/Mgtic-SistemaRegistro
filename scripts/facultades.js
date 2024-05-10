//consructor
function Facultades(name,campus){
    this.name=name;
    this.campus=campus;
}

//vaidacion


//register
function registrar(){
        let inputName = document.getElementById("txtFacultad").value;
        let inputCampus = document.getElementById("txtCampus").value; 

        let nuevaFacultad = new Facultades(inputName,inputCampus);
        //console.log(nuevaFacultad);
        saveItems(nuevaFacultad);   //this fn in on StoreManager
}