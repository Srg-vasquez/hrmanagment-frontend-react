// //var g_id_cliente = 0;
// var puerto = 3000;

// // obtener datos de los clientes
//  export function obtener_datos(){
//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
//   //realizamos la solicitud al cliente

  
//   fetch("localhost:3000/api/v1/users", requestOptions)
//   //fetch("http://146.190.137.133:"+puerto+"/api/cliente?_size=80", requestOptions)
//   //convertimos la respuesta en json
//     .then((response) => response.json())
//     //recorremos json
//     .then((json) => json.forEach(tabla_elementos)
//     )
//     .then(result => console.log(result))
//     //mostramos error por consola
//     .catch(error => console.log('error', error));
// }

// // mostrar los datos en pantalla
// function tabla_elementos(element, index, arr){
//     //agregamos html a nuestra vista
//   arr[index] = document.querySelector('#tbl_clientes tbody').innerHTML +=
//   `<tr>
//       <td>${element.id_cliente}</td>
//       <td>${element.rut}</td>
//       <td>${element.nombres}</td>
//       <td>${element.apellidos}</td>
//       <td>${element.email}</td>
//       <td>${element.celular}</td>

//       <td><button type="button" class="btn btn-warning" ><a href=actualizar_cliente.html?id=${element.id_cliente}>Actualizar</button>


//       <button type="button" class="btn btn-danger"><a href=eliminar_cliente.html?id=${element.id_cliente}Eliminar</button></td>
      
  
      
//   </tr>`
  
// };

// //-----------------------------------------------------------------------



