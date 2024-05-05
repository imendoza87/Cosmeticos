//Selecionar el formulario de registro por su ID
const signupForm = document.querySelector('#signupForm');

//Agregar un evento para el envio de formulario
signupForm.addEventListener('submit', (e) => {
    //Evitar que la pagina se recarge al enviar el formulario
    e.preventDefault();

    //Obtener los valores del formulario de regstro
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    //Obtener la lista de usuarios en el localStrorage o inicia un arreglo vacio si nohay usuarios
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    //Verificar si el usuario ya esta registrado
    const isUserRegistered = Users.find(user => user.email === email);

    //Si encuentra el usuario y ya esta registrado,
    if(isUserRegistered) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El correo ingresado ya esta registrado!"
          })
          return;
    }

    //Agrega un nuevo usuario al Local storage
    Users.push({name, email, password});

    //Almacenar la lista de usuarios en el local storage
    localStorage.setItem('users', JSON.stringify(Users));

    //Mostrar una alerta de registro exitoso
    Swal.fire({
        icon: "success",
        title: "Registro exitoso!",
        text: "Tus datos fueron enviados con exito",
       
      }).then(() =>  {
        //Redirigir al usuario para que inicie sesion
        window.location.href = 'login.html';
      })
} )