export function formatPhoneNumber(phone) {
   if (phone != "") {
       // Elimina el prefijo de país, en este caso '+34'
   const cleanedNumber = phone.replace(/^\+34/, '').trim();

   // Asegúrate de que el número tenga exactamente 9 dígitos
   if (cleanedNumber.length !== 9 || !/^\d+$/.test(cleanedNumber)) {
       throw new Error('El número debe tener exactamente 9 dígitos numéricos después del prefijo.');
   }

   // Utiliza slice para formatear el número
   return `${cleanedNumber.slice(0, 3)} ${cleanedNumber.slice(3, 5)} ${cleanedNumber.slice(5, 7)} ${cleanedNumber.slice(7)}`;
   }
}

export function removeHttpPrefix(url) {
   // Usar una expresión regular para reemplazar 'http://' o 'https://' con una cadena vacía
   return url.replace(/^https?:\/\//, '');
}
