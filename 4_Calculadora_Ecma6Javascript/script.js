// Code goes here
var i='casa';
for(let i=0; i<5;i++){
  console.log(i);
  document.write(i);
}
console.log(i);
document.write(i);

function sumar1(a, b){
  console.log(a+b);
  var c = a+b;
  document.write("Suma funcion: "+c);
  return a+b;
}

var sumar2 = (a,b) => (console.log(a+b));

var define = (car) => {
  var aux = document.getElementById("expresion").value;
  let nombre = 'plantilla';
  let jamg = 'jaime';
  console.log(`template string ${nombre} hecha por ${aux}`)
  if(typeof(aux) !== 'undefined'){
    document.getElementById("expresion").value = aux + car;
  }
  else{
    document.getElementById("expresion").value = car;
  }
}

var operacion2 = () => {
  var str = document.getElementById("expresion").value
  var pos = -1
  var res = 0
  if(str.indexOf("+") !== -1){
    pos = str.indexOf("+")
  }
  else if(str.indexOf("-") !== -1){
    pos = str.indexOf("-")
  }
  else if(str.indexOf("x") !== -1){
    pos = str.indexOf("x")
  }
  else if(str.indexOf("/") !== -1){
    pos = str.indexOf("/")
  }
  console.log("posicion: ",pos)
  var oper = str.substring(pos,pos+1)
  console.log("operador: ",oper)
  var a = str.substring(0,pos)
  var b = str.substring(pos+1,str.length)
  switch(oper){
    case "+" : res = parseInt(a) + parseInt(b); break;
    case "-" : res = parseInt(a) - parseInt(b);break;
    case "*" : res = parseInt(a) * parseInt(b);break;
    case "x" : res = parseInt(a) * parseInt(b);break;
    case "/" : res = parseInt(a) / parseInt(b);break;
  }
  console.log(res);
  var aux = document.getElementById("expresion").value;
  document.getElementById("expresion").value = aux + " = " + res;
}

var limpiar = () => {
  document.getElementById("expresion").value = "";
  
  var objeto={nombre:"jaime",apellido:"mendoza"};
  var {nombre, apellido} = objeto;
  console.log(nombre);
}

var operacion = (oper) => {
  var c = 0;
  //var oper = document.getElementById("oper").value;
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  
  switch(oper){
    case "+" : c = parseInt(a) + parseInt(b); break;
    case "-" : c = parseInt(a) - parseInt(b);break;
    case "*" : c = parseInt(a) * parseInt(b);break;
    case "x" : c = parseInt(a) * parseInt(b);break;
    case "/" : c = parseInt(a) / parseInt(b);break;
  }
  /*
  if(oper == "+"){
    c= parseInt(a) + parseInt(b);
  }  
  else if(oper == "-"){
    c = parseInt(a) - parseInt(b);
  }
  else if(oper == "x" || oper == '*'){
    c = parseInt(a) * parseInt(b);
  }
  else if(oper == "/"){
    c = parseInt(a) / parseInt(b);
  }*/
  console.log(c);
  //document.write(c);
  var oper = document.getElementById("res").innerHTML = c;
}