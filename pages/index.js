import BasicLayout from "../layouts/BasicLayout/BasicLayout"
import axios from 'axios';
import { Button } from 'semantic-ui-react';


export default function Home() {



  function envio() {
    // axios.get('http://localhost:1337/posts').then(response => {
    //   console.log(response);
    // });
    axios
      .post('http://localhost:1337/posts', {
        descripcion: "prueba 3",
        titulo: "hsdfsdfsdfola"
      })
      .then(response => {
        console.log(response);
      });

    // axios
    //   .put('http://localhost:1337/posts/3', {
    //     descripcion: "prueba 3",
    //     titulo: "hsdfsdfsdfola"
    //   })
    //   .then(response => {
    //     console.log(response);
    //   });

    // fetch('http://localhost:1337/api/posts/', {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    //     // "Authorization": "Bearer " + "cdbb141b72aefbf01c86914753f3361e9ab0624d9ddf672ac2b054dcb23d468189e106da48fdd6de2b3deb260bf9d6396968f9eac61eabe0c1ec3cf32459a344fa7a7e4762668702f96c15fa10ee03e6cbb9dee01bdaea31b08ae9c9b9131cc45770e8dbfffc328cc6c4d4b4393ff38e5441f1c023505666eb394c2c8f2655e7"
    //   },
    //   body: JSON.stringify({
    //     descripcion: "sdfsdf",
    //     titulo: "hortertertla"
    //     // categories: [2],
    //     // categories: [3],
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data));


  }




  return (
    <>
      <BasicLayout>
        <h1>
          ESTAMOS EN EL HOME
        </h1>
        <Button onClick={envio} color="black">
          Enviar
        </Button>
      </BasicLayout>
    </>
  )
}
