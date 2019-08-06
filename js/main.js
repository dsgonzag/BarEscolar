$(document).ready(function() {
    console.log("jhdjh")
 var datos=[];
    var arregloTagsImg=[]
    var alimentoAñadidos=[]
    var puntaje=0;
    var numeroAlimentos=0
    var numConstructores=0, numEnergeticos=0, numReguladores=0;
    document.getElementById("puntaje").innerHTML= puntaje.toString()
    // arrayDiv.push(document.getElementById("3"))
    // arrayDiv.push( document.getElementById("4"))
    // arrayDiv.push( document.getElementById("5"))
    // arrayDiv.push(document.getElementById("6"))
    // arrayDiv.push(document.getElementById("7"))
    // arrayDiv.push(document.getElementById("8"))
    cont=0;
$.getJSON( "js/frutas.json", function( data ) {
    var conten=document.getElementById("contenFrutas");
    var botellas=document.createElement("div");
    var celda = document.createElement("div");  
    celda.className="misfrutas col-md-6";
    botellas.className="misfrutas col-md-6";
    celda.setAttribute("id","miprimerdiv")
    botellas.setAttribute("id","misegundodiv")
    
   data.forEach((element)=>{
     element.puntaje=parseInt(element.puntaje, 10);
      var imagenFrutar = document.createElement("img");
      imagenFrutar.className=element.id;
      imagenFrutar.setAttribute("id",element.id)
      console.log(element.rutaImg)
      imagenFrutar.src=element.rutaImg;
  
      imagenFrutar.setAttribute("class","draggable")
     if(cont>=5){
 
     botellas.appendChild(imagenFrutar)
 
 
     }else{
  
      arregloTagsImg.push(imagenFrutar)
      
      celda.appendChild(imagenFrutar)
   
     cont++
   
  }
  datos.push(element)  
  }) 
  conten.appendChild(celda); 
  conten.appendChild(botellas);
  var contaudio=0
   $(function() {
    $( ".draggable" ).draggable({ 
      helper: 'clone' ,
     drag: function(event, ui){
        datos.forEach(element=>{
      if($(this).attr("src")==element.rutaImg)
      console.log("audio"+element.sonido)

      if(contaudio==0){
            
        }
        contaudio++
              $(this).append(element.id);
        }) 
     
     }
    })
      
});

$(function() {
  $(".contenedor").droppable({
    accept: '.draggable',
    tolerance:"touch",
    hoverClass: 'hovering',
  
    drop: function (event, ui) {
      ui.draggable.detach();  
   
     let existe=alimentoAñadidos.indexOf(ui.draggable.attr("src"))

     if(numeroAlimentos>=4 && puntaje>=20){
      alert("Puntos ganados: "+puntaje)
         audio.play()
          if (confirm("Desea volver a jugar presione Aceptar!")) {
            location.reload();
          } else {
            window.location.href = "index.html";
          }
 
//         window.open("Puntaje.html")
    }else{
      datos.forEach(element=>{
       

      if($(ui.draggable).attr("src")==element.rutaImg ){
        var audio=document.createElement('audio');
            audio.setAttribute('src',element.sonido); 
            audio.play()
        if(element.categoria=="chatarra"){
          alert("Cuidado, comida chatarra")
           audio.play()//puse            

        }else{
            audio.play()
            alert("BIEN!")//puse            
        /* var audioplay = document.createElement('audio');
           audioplay.setAttribute('src', 'audio/acierto.mp3'); 
           audioplay.play()*/
        }
        if(numConstructores<2){
        ui.draggable.addClass("contenedor")
        ui.draggable.addClass("extraible")
        $(".contenedor").append(ui.draggable);
        numConstructores++;
         alimentoAñadidos.push(element.rutaImg)
         numeroAlimentos++
      puntaje+=element.puntaje
      
             if(numeroAlimentos>=4 && puntaje>=20){
      alert("Juego terminado: "+puntaje)
                   if (confirm("Desea volver a jugar presione Aceptar!")) {
            location.reload();
          } else {
            window.location.href = "index.html";
          }
    }
    }else{
      
      if(numeroAlimentos>=4){//era 3
        alert("puntos ganados"+puntaje)
      }
      $("#miprimerdiv").append(ui.draggable); 
      
    }
    document.getElementById("puntaje").innerHTML= puntaje.toString()
  
     console.log(numeroAlimentos)
     console.log(puntaje)
     return;
    }
    })
  }
}
});
$(".contenedor2").droppable({
  accept: '.draggable',
  tolerance:"touch",
  hoverClass: 'hovering',

  drop: function (event, ui) {
    ui.draggable.detach();  
 
   let existe=alimentoAñadidos.indexOf(ui.draggable.attr("src"))

    if(numeroAlimentos>=4 && puntaje>=20){
      alert("puntos ganados: "+puntaje)
        audio.play()
          if (confirm("Desea volver a jugar presione Aceptar!")) {
            location.reload();
          } else {
            window.location.href = "index.html";
          }
  }else{
    datos.forEach(element=>{
     

    if($(ui.draggable).attr("src")==element.rutaImg ){
      var audio=document.createElement('audio');
      audio.setAttribute('src',element.sonido); 
      audio.play()
      if(numReguladores<1){
        if(element.categoria=="chatarra"){
          alert("Cuidado, comida chatarra")
            audio.play()
        }else{
          audio.play()   
            alert("BIEN!")
          /*var audioplay = document.createElement('audio');
           audioplay.setAttribute('src', 'audio/'+element.mombre+'.mp3'); 
           audioplay.play()*/
        }
        ui.draggable.addClass("contenedor2")
      $(".contenedor2").append(ui.draggable);
      numReguladores++;
      numeroAlimentos++
     
     ui.draggable.addClass("extraible")
       alimentoAñadidos.push(element.rutaImg)
    puntaje+=element.puntaje
      
          
       if(numeroAlimentos>=4 && puntaje>=20){
      alert("Juego terminado: "+puntaje)
             if (confirm("Desea volver a jugar presione Aceptar!")) {
            location.reload();
          } else {
            window.location.href = "index.html";
          }
    }
  }else{
  
    
    $("#miprimerdiv").append(ui.draggable); 
     
  }
 
  document.getElementById("puntaje").innerHTML= puntaje.toString()

   console.log(numeroAlimentos)
   console.log(puntaje)
   return;
  }
  })
}
}
});
$(".contenedor3").droppable({
  accept: '.draggable',
  tolerance:"touch",
  hoverClass: 'hovering',

  drop: function (event, ui) {
    ui.draggable.detach();  
 
   let existe=alimentoAñadidos.indexOf(ui.draggable.attr("src"))

     if(numeroAlimentos>=4 && puntaje>=20){
      alert("puntos ganados: "+ puntaje)
       audio.play()
           if (confirm("Desea volver a jugar presione Aceptar!")) {
            location.reload();
          } else {
            window.location.href = "index.html";
          }
  }else{
    datos.forEach(element=>{
     

    if($(ui.draggable).attr("src")==element.rutaImg ){
      var audio=document.createElement('audio');
      audio.setAttribute('src',element.sonido); 
      
      if(numEnergeticos<1){
        if(element.categoria=="chatarra"){
          alert("Cuidado, comida chatarra")
          audio.play()  
        }else{
            audio.play()
           alert("BIEN!")
         /* var audioplay = document.createElement('audio');
           audioplay.setAttribute('src', 'audio/'+element.mombre+'.mp3'); 
           audioplay.play()*/
        }
        ui.draggable.addClass("contenedor3")
      $(".contenedor3").append(ui.draggable);
      numEnergeticos++;
      numeroAlimentos++
     ui.draggable.addClass("extraible")
       alimentoAñadidos.push(element.rutaImg)
    puntaje+=element.puntaje
    /////////////////////////////////////////
       if(numeroAlimentos>=4 && puntaje>=20){
      alert("Juego terminado: "+puntaje)
             if (confirm("Desea volver a jugar presione Aceptar!")) {
            location.reload();
          } else {
            window.location.href = "index.html";
          }
    }
   
          /////////////////////////////////
  }else{
    if(numeroAlimentos>=4){
      alert("Juego terminad"+puntaje)//+puntaje
    }
   
    $("#miprimerdiv").append(ui.draggable); 
    
  }
  document.getElementById("puntaje").innerHTML= puntaje.toString()

   console.log(numeroAlimentos)
   console.log(puntaje)
   return;
  }
  })
}
}
});

$("#contenFrutas").droppable({
  accept: '.extraible',
  tolerance:"touch",
  hoverClass: 'hovering',

  drop: function (event, ui) {
    ui.draggable.detach();  
    datos.forEach(element=>{
      // alert("puntos Quitados"+element.puntaje)

      if($(ui.draggable).attr("src")==element.rutaImg){
        if(ui.draggable.hasClass("contenedor") ){
          numConstructores--
          ui.draggable.removeClass("contenedor")
        }else if(ui.draggable.hasClass("contenedor2")){
               numReguladores--
               ui.draggable.removeClass("contenedor2")
        }else if(ui.draggable.hasClass("contenedor3")){
              numEnergeticos--
              ui.draggable.removeClass("contenedor3")
            }
            puntaje=puntaje-element.puntaje;
            numeroAlimentos--
            ui.draggable.removeClass("extraible")
            document.getElementById("puntaje").innerHTML= puntaje.toString()
         $("#miprimerdiv").append(ui.draggable);
      }    
  });

  }
})

});

});

 

    

});
