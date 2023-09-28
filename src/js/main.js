//--- Padre --- 
//-- hijo -- 
//-- no tan importate




//--- Buscador de Contenido ---



//ejercutar funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("protect").addEventListener("click", ocultar_buscador);


//-vaiables-
bars_search = document.getElementById("ctn-bars-search");
protect = document.getElementById("protect");
inputSearch = document.getElementById("inputSerch");
box_search = document.getElementById("box-search");

//Mostrar el buscador 
function mostrar_buscador(){
    bars_search.style.top="80px";
    inputSearch.focus();

    if(inputSearch.value === ""){
        box_search.style.display = "none"
    }
    
};

//ocultar buscador
function ocultar_buscador () {
    bars_search.style.top  = "-140px";
    box_search.style.display = "none";
    inputSearch.value = "";
};

//Filtrado de Busqueda 
//-- Obtener el elemento de entrada de búsqueda y agregar un evento "keyup"--
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno() {
    // --- Obtener el valor del input de búsqueda y convertirlo a mayúsculas ---
    var inputSearch = document.getElementById("inputSearch");
    var filter = inputSearch.value.toUpperCase();

    // Obtener la lista de elementos <li>
    var li = document.getElementsByClassName("li");

    // Recorrer los elementos <li> y ocultar/mostrar según la búsqueda
    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByClassName("a")[0];
        var textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";

            if(inputSearch.value === ""){
                box_search.style.display = "none"
            }
            
        } else {
            li[i].style.display = "none";
            box_search.style.display = "block";
        }
    }
}
