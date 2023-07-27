function contacto(){
    document.getElementById("formContacto").reset();
    const botonEnv= document.getElementById("botonContacto");
    const text= document.getElementById("text");
    botonEnv.addEventListener("click", (e)=>{
        e.preventDefault();
      const nameContacto= document.getElementById("nameContacto").value.toUpperCase();
      const mailContacto= document.getElementById("mailContacto").value.toLowerCase(); 
      const telContacto= document.getElementById("telContacto").value;
      const textContacto= document.getElementById("textContacto").value;

      if(nameContacto.length === 0){
        text.innerHTML=`*Escriba un nombre`
      }else if(textContacto.length < 20){
          text.innerHTML=`*El mensaje debe tener por lo menos 20 caracteres`;
        }else if(mailContacto.length == 0){
            text.innerHTML=`*Escriba un mail`
        }
    
          
        /* else{
          const formData= {
            nombre: nameContacto,
            mail: mailContacto,
            numero: telContacto,
            mensaje: textContacto
          };

          fetch(`https://formsubmit.co/ajax/elianacristaldoo@gmail.com`, {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(swal(`Su mensaje ha sido enviado correctamente`, {icon: "success",})) 
        }
          document.getElementById("formContacto").reset();
         */})
      }contacto() 