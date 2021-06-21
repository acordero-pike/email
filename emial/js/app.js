// variables
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const btnEnviar = document.querySelector('#enviar');
const formularioEnviar = document.querySelector('#enviar-mail');
const resetBtn = document.querySelector('#resetBtn');
const campos = document.querySelector("#mensj");
 
// event Listener

eventListeners();

function eventListeners() {
     // Inicio de la aplicación y deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);

     // Campos del formulario
     email.addEventListener('blur', validarFormulario);
     asunto.addEventListener('blur', validarFormulario);
     mensaje.addEventListener('blur', validarFormulario);

     // Boton de enviar en el submit
     formularioEnviar.addEventListener('submit', enviarEmail);

     // Boton de reset
     resetBtn.addEventListener('click', resetFormulario);
}



// funciones
function inicioApp() {
     // deshabilitar el envio
     btnEnviar.disabled = true;
     btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}


// Valida que el campo tengo algo escrito

function validarFormulario(e) {
    
     if(e.target.value.length > 0 ) {
          e.target.classList.remove('border', 'border-red-500');
          e.target.classList.add('border', 'border-green-500');
          campos.innerHTML=``;
          btnEnviar.disabled = false;
         //imagen de  correcto 
            const imagen= ' <img src="https://media.tenor.com/images/f92741349d817846a95a0b52b7ae2055/tenor.gif" style="height:30px; width:30px;"  /> '
        
          const  name = "#error-"+this.id;
         
               if (this.id!="email") //email tiene validacion diferente
               {
                    console.log(name); // revision de que este correcto lo que se manda 
                    document.querySelector(`${name}`).innerHTML=`${imagen}`; //agregar la imagen 
               }
           
        
     } else {
         
          e.target.classList.remove('border', 'border-green-500');
          e.target.classList.add('border', 'border-red-500');
          btnEnviar.disabled = true;
          campos.innerHTML=` Todos los campos son necesarios `;
          btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
          campos.classList.remove("bg-green-600");
          campos.classList.add("bg-red-600");
          //imagen de envio correcto
          const imagen= ' <img src="http://alyssaconsultores.com/images/SIGESEGUROS_NO1.gif" style="height:30px; width:30px;"  /> '
         
          const  name = "#error-"+this.id;
          console.log(name);
               document.querySelector(`${name}`).innerHTML=`${imagen}`;
         
     }
 


     // Validar unicamente el email
     if(this.type === 'email') {
          validarEmail(this);
     }


     if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('opacity-50');
        btnEnviar.classList.remove('cursor-not-allowed');
     }
}

// Resetear el formulario 
function resetFormulario(e) {
     formularioEnviar.reset();
     e.preventDefault();
     location.reload();
}

// Cuando se envia el correo
function enviarEmail(e) {

    e.preventDefault();


     // Spinner al presionar Enviar
     const spinner = document.querySelector('#spinner');
     spinner.style.display = 'flex';

     // Gif que envia email
     
    
     // Ocultar Spinner y mostrar gif de enviado
     setTimeout( () => {
          spinner.style.display = 'none';
          campos.innerHTML=` Mensaje Enviado Exitosamente `;
          campos.classList.remove("bg-red-600");
          campos.classList.add("bg-green-600");
          const imagen= ' <img src="http://www.360inmovalencia.com/images/mail.gif"  /> '
          document.querySelector("#imags").innerHTML=`${imagen}`;

          
          setTimeout(() =>  {
               
               formularioEnviar.reset();
          }, 5000);
     }, 3000);

     
}


//validacion del  email formato
function validarEmail(campo) {
     const mensaje = campo.value;

     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
     if( re.test(mensaje.toLowerCase()) ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
          campos.innerHTML=``;
         //imagen de que esta correcto 
          const imagen= ' <img src="https://media.tenor.com/images/f92741349d817846a95a0b52b7ae2055/tenor.gif" style="height:30px; width:30px;"  /> '
          document.querySelector("#error-email").innerHTML=`${imagen}`;
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          campos.innerHTML=` Error en el correo , recuede que un correo es example@host.com/.es `;
          campos.classList.remove("bg-green-600");
          campos.classList.add("bg-red-600");
          const imagen= ' <img src="http://alyssaconsultores.com/images/SIGESEGUROS_NO1.gif" style="height:30px; width:30px;"  /> '

               document.querySelector("#error-email").innerHTML=`${imagen}`;
     }
}