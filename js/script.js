document.getElementById("mastexto2").style.display ='none';
document.getElementById("micheck3").style.display ='none';

var ocultar = false;

function leerMas(){
    if (!ocultar){
        document.getElementById("mastexto2").style.display ='block';
        document.getElementById("micheck3").style.display ='block';
        document.getElementById("micheck2").style.display ='none';
        ocultar = true;
    }else{
        document.getElementById("mastexto2").style.display ='none';
        document.getElementById("micheck3").style.display ='none';
        document.getElementById("micheck2").style.display ='block';
        ocultar = false;
    }
}

/*(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()*/

  
function select() {
  var selection = document.getElementById("deporte");
  //alert(selection.options[selection.selectedIndex].value);

  if(selection.options[selection.selectedIndex].value == "padel"){padel();}
  if(selection.options[selection.selectedIndex].value == "baloncesto"){baloncesto();}
  if(selection.options[selection.selectedIndex].value == "futbol"){futbol();}
  if(selection.options[selection.selectedIndex].value == "todos"){todo();}
}

function padel() {
  p = document.getElementsByClassName("padel");
b = document.getElementsByClassName("baloncesto");
f = document.getElementsByClassName("futbol");

   for (let i = 0; i < p.length; i++) {
       p[i].style.display= "block"
   }
   for (let i = 0; i < b.length; i++) {
       b[i].style.display= "none"
   }   

   for (let i = 0; i < f.length; i++) {
    f[i].style.display= "none"
 }
}

function futbol() {
  p = document.getElementsByClassName("padel");
b = document.getElementsByClassName("baloncesto");
f = document.getElementsByClassName("futbol");

for (let i = 0; i < f.length; i++) {
  f[i].style.display= "block"
}
for (let i = 0; i < b.length; i++) {
  b[i].style.display= "none"
}   

for (let i = 0; i < p.length; i++) {
p[i].style.display= "none"
}
   
}

function baloncesto() {
  p = document.getElementsByClassName("padel");
b = document.getElementsByClassName("baloncesto");
f = document.getElementsByClassName("futbol");

  for (let i = 0; i < b.length; i++) {
      b[i].style.display= "block"
  }
  for (let i = 0; i < p.length; i++) {
      p[i].style.display= "none"
  }   
  for (let i = 0; i < f.length; i++) {
   f[i].style.display= "none"
} 
  
}

function todo() {
  p = document.getElementsByClassName("padel");
b = document.getElementsByClassName("baloncesto");
f = document.getElementsByClassName("futbol");

   for (let i = 0; i < b.length; i++) {
       b[i].style.display= "block"
   }
   for (let i = 0; i < p.length; i++) {
       p[i].style.display= "block"
   }  
   for (let i = 0; i < f.length; i++) {
    f[i].style.display= "block"
}   
}