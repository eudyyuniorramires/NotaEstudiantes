class Estudiante {
    constructor(nombre,apellido,matricula,nota) {
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
        this.nota = nota;
    }
}


const ListaEstudiante = [];


function validarCampos(nombre,apellido,matricula,nota) {
    
    if(!nombre || !apellido||!matricula ||!nota){

        alert('Todos los campos son requeridos');
        return false;
    }
    return true;
}


function Limpiar() {
    
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('matricula').value = "";
    document.getElementById('nota').value = "";
}

function LimpiarMatricula(){

    document.getElementById('matricula').value = "";
} 


function ActualizarTabla(Estudiante = ListaEstudiante) {
    
    const tbody = document.querySelector('#tabla tbody');
    tbody.innerHTML ="";
    Estudiante.forEach (elemt => {

        const fila = document.createElement('tr');
        fila.innerHTML = 
        `
        <td>${elemt.nombre}</td>
        <td>${elemt.apellido}</td>
        <td>${elemt.matricula}</td>
        <td>${elemt.nota}</td>
        `;
        tbody.appendChild(fila);
    }); 
}


function AgregarEstudiante() {
    
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const nota = document.getElementById('nota').value.trim();

    if(!validarCampos(nombre,apellido,matricula,nota))return; 

    const existeEstudiante = ListaEstudiante.find(est => est.matricula === matricula);
    if(existeEstudiante){
        alert('Este estudiante ya fue calificado');
        return;
    }

    const nuevoEstudiante = new Estudiante(nombre,apellido,matricula,nota);
    ListaEstudiante.push(nuevoEstudiante);
    ActualizarTabla();
    Limpiar();
    alert('Estudiante agregado');
}

function EliminarEstudiante() {

    const matricula = document.getElementById('matriculaAcciones').value.trim();
    if(!matricula){
        alert('Debe ingresar una matricula para eliminar un estudiante')
        return;

    }

    const index  = ListaEstudiante.findIndex(est => est.matricula ===matricula);
    if(index ===-1){

        alert('No existe un Estudiante con esta Matricula');
        return;
    }

    ListaEstudiante.splice(index,1);
    ActualizarTabla();
    Limpiar();
    alert('Estudiante eliminado')
    
}


function BuscarEstudiante() {

    const matricula = document.getElementById('matriculaAcciones').value.trim();

    if(!matricula){
        alert('Ingrese una matricula');
        return;
    }


    const Encontrados = ListaEstudiante.filter(est => est.matricula === matricula);
    if(Encontrados.length ===0){
         
        alert('Estudiante no encontrado');
        return;
    }

    ActualizarTabla(Encontrados);

    
}

function EditarEstudiante() {
    
    const matricula = document.getElementById('matriculaAcciones').value.trim();

    if(!matricula){
        alert('Ingrese una matricula');
        return;
    }


    const Estudiante = ListaEstudiante.find(est => est.matricula === matricula);
    if(!Estudiante){
           
        alert('Estudiante no encontrado');
        return;
    }

    const nombreNuevo = document.getElementById('nombre').value.trim();
    const apellidoNuevo = document.getElementById('apellido').value.trim();
    const matriculaNueva = document.getElementById('matricula').value.trim();
    const notaNueva = document.getElementById('nota').value.trim();


    if(nombreNuevo) Estudiante.nombre = nombreNuevo;
    if(apellidoNuevo) Estudiante.apellido = apellidoNuevo;
    if(matriculaNueva) Estudiante.matricula = matriculaNueva;
    if(notaNueva) Estudiante.nota = notaNueva;
    
    ActualizarTabla();
    Limpiar();
    LimpiarMatricula();
    alert('Estudiante editado');
}

