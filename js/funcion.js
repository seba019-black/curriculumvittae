fetch('https://randomuser.me/api/?nat=es')
        .then(response => response.json())
        .then(json => console.log(json))

const persona = '{"nombre":"Daniel Sanches","edad":"30","celular":"3644897654","direccion":"Diaz Velez n° 323","nacimiento":"12/3/1889","ciudad":"José León Suarez","provincia":"Buenos Aires","nacionalidad":"Argentina"}';
const obj = JSON.parse(persona);
document.getElementById("nombre").innerHTML=obj.nombre;
document.getElementById("edad").innerHTML="Edad: "+obj.edad;
document.getElementById("celular").innerHTML="Celular: "+obj.celular;
document.getElementById("direccion").innerHTML="Dirección: "+obj.direccion;
document.getElementById("nacimiento").innerHTML="Fecha de Nacimiento: "+obj.nacimiento;
document.getElementById("ciudad").innerHTML="Localidad: "+obj.ciudad;
document.getElementById("provincia").innerHTML="Provincia: "+obj.provincia;
document.getElementById("nacionalidad").innerHTML="nacionalidad: "+obj.nacionalidad;
//menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu(){
        if(menu_visible==false){
                menu.style.display = "block";
                menu_visible = true;
        }
        else{
                menu.style.display ="none";
                menu_visible = false;
        }
}

// ocultar el menu lateral cuando se selecciono la opcon
let links = document.querySelectorAll("nav a");
for(var x = 0;x < links.length; x++){
        links[x].onclick = function(){
                menu.style.display = "none";
                menu_visible = false;
        }
}

// creamos las barritas de una barra en particular identificada por su id
function crearBarra(id_barra){
        for(i=0;i<=16;i++){
             let div = document.createElement("div");
             div.className= "e";
             id:id_barra.appendChild(div);
        }     
}
//seleccionamops todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let java = document.getElementById("java");
crearBarra(java);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let python = document.getElementById("python");
crearBarra(python);
let mysql = document.getElementById("mysql");
crearBarra(mysql);
let ia = document.getElementById("ia");
crearBarra(ia);


// Guardo la cantidad de barritas que se van a ir pintando por cada barra
//para eso se utiliza un arreglo cada posicion pertenece a un elemento
//secomienzaen -1 porque no ahi ninguna barrita pintada cuando inicia
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable se va a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de las habilidades
function efectoHabilidades(){
        var habilidades = document.getElementById("habilidades");
        var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
        if(distancia_habilidades>=300 && entro==false){
                entro = true;
                const intervalHtml = setInterval(function(){
                        pintarBarra(html,16.5,0,intervalHtml);
                },100);
                const intervalJava = setInterval(function(){
                        pintarBarra(java,14,1,intervalJava);
                },100);
                const intervalJavasCript = setInterval(function(){
                        pintarBarra(javascript,11,2,intervalJavasCript);
                },100);
                const intervalPython = setInterval(function(){
                        pintarBarra(python,10,3,intervalPython);
                },100);
                const intervalMysql = setInterval(function(){
                        pintarBarra(mysql,8,4,intervalMysql);
                },100);
                const intervalIa = setInterval(function(){
                        pintarBarra(ia,15,5,intervalIa);
                },100);
                

        }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
        contadores[indice]++;
        x=contadores[indice];
        if(x<cantidad){
                let elementos = id_barra.getElementsByClassName("e");
                elementos[x].style.backgroundColor= "rgb(23, 156, 156)";
        }else{
                clearInterval(interval)
        }
}

//detectamos el scrolling del mousse para aplicar la animación de la barra
window.onscroll = function(){
        efectoHabilidades();
}