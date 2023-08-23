let usuario = {
   nombre: "miguel", 
   email: [' ', null, undefined],
   password: 4321
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return objetoUsuario.email !== undefined && objetoUsuario.email !== null && objetoUsuario.email !== '';
}

console.log (tieneEmail(usuario));