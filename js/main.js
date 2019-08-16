$(document).ready(function() {
     var au = $('<audio id="audi" src="audio/intro.mp3" autoplay type="audio/mpeg" loop="true" balance=-1></audio>');
    $("body").append(au);
 var datos=[];
    var arregloTagsImg=[]
    var alimentoAñadidos=[]
    var puntaje=0;
    var numeroAlimentos=0
    var numConstructores=0, numEnergeticos=0, numReguladores=0;
    document.getElementById("puntaje").innerHTML= puntaje.toString()
    
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
          var audioplay = document.createElement('audio');
                   audioplay.setAttribute('src', 'audio/ganador.mp3'); 
                   audioplay.play()
                   
                   Swal.fire({
                              title:  'Bien Hecho, ganaste!',
                              text:  'Tu puntaje es:  ' +puntaje ,
                              imageUrl: 'img/premioo.png',
                              imageWidth: 200,
                              imageHeight:200,
                              imageAlt: 'Custom image',
                       
                              animation: true,
                        customClass: {
                                 popup: 'animated tada'
                             }
                            })
    
         audio.play()
   
         
    }else{
      datos.forEach(element=>{
       

      if($(ui.draggable).attr("src")==element.rutaImg ){
        var audio=document.createElement('audio');
            audio.setAttribute('src',element.sonido); 
            audio.play()
    if(element.categoria=="constructores" || element.categoria=="chatarra")
      {
          
        if(element.categoria=="chatarra"){
            
           audio.play()//puse            
        var audioplay = document.createElement('audio');
           audioplay.setAttribute('src', 'audio/oh_no.mp3'); 
           audioplay.play()
        }else{
            audio.play()        
        var audioplay = document.createElement('audio');
           audioplay.setAttribute('src', 'audio/acierto.mp3'); 
           audioplay.play()
        }
        if(numConstructores<2){
        ui.draggable.addClass("contenedor")
        ui.draggable.addClass("extraible")
        $(".contenedor").append(ui.draggable);
        numConstructores++;
         alimentoAñadidos.push(element.rutaImg)
         numeroAlimentos++
      puntaje+=element.puntaje
      
             if(numeroAlimentos>=4 /*&& puntaje>=20*/){
            //alert("Juego terminado: "+puntaje)
                  var audioplay = document.createElement('audio');
                   audioplay.setAttribute('src', 'audio/ganador.mp3'); 
                   audioplay.play()
                   
                   Swal.fire({
                              title:  'Bien Hecho, ganaste!',
                              text:  'Tu puntaje es:  ' +puntaje ,
                              imageUrl: 'img/premioo.png',
                              imageWidth: 400,
                              imageHeight:400,
                              imageAlt: 'Custom image',
                              animation: true,
                        customClass: {
                                 popup: 'animated tada'
                             }
                            })
    }
    }else{
     //  alert("Solo puede escoger dos alimentos de tipo Constructor.")
        //PONER AUDIO 
      if(numeroAlimentos>=4/*&& puntaje>=20*/){
           var audioplay = document.createElement('audio');
                   audioplay.setAttribute('src', 'audio/ganador.mp3'); 
                   audioplay.play()
                   
                   Swal.fire({
                              title:  'Bien Hecho, ganaste!',
                              text:  'Tu puntaje es:  ' +puntaje ,
                              imageUrl: 'img/premioo.png',
                              imageWidth: 400,
                              imageHeight:400,
                              imageAlt: 'Custom image',
                              animation: true,
                        customClass: {
                                 popup: 'animated tada'
                             }
                            })
      }

        $("#"+element.seccion).append(ui.draggable);   
    }
          
    }
   else
    {
              $("#"+element.seccion).append(ui.draggable); 
              alert("Debe escoger un alimento tipo Constructor.");
            //PONER AUDIO QUE DIGA 'Debe escoger un alimento tipo Constructor'
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

    if(numeroAlimentos>=4 /*&& puntaje>=20*/){
  
         var audioplay = document.createElement('audio');
                   audioplay.setAttribute('src', 'audio/ganador.mp3'); 
                   audioplay.play()
                   
                   Swal.fire({
                              title:  'Bien Hecho, ganaste!',
                              text:  'Tu puntaje es:  ' +puntaje ,
                              imageUrl: 'img/premioo.png',
                              imageWidth: 200,
                              imageHeight:200,
                              imageAlt: 'Custom image',
                              animation: true,
                        customClass: {
                                 popup: 'animated tada'
                             }
                            })
        audio.play()
   
  }else{
    datos.forEach(element=>{
    if($(ui.draggable).attr("src")==element.rutaImg ){
      var audio=document.createElement('audio');
      audio.setAttribute('src',element.sonido); 
      audio.play()
      if(element.categoria=="reguladores" || element.categoria=="chatarra")
      {
      if(numReguladores<1){
        if(element.categoria=="chatarra"){
           var audioplay = document.createElement('audio');
           audioplay.setAttribute('src', 'audio/oh_no.mp3'); 
           audioplay.play()
        audio.play()
        }else{
          audio.play()   
            var audioplay = document.createElement('audio');
                   audioplay.setAttribute('src', 'audio/acierto.mp3'); 
                   audioplay.play()
        }
        ui.draggable.addClass("contenedor2")
      $(".contenedor2").append(ui.draggable);
      numReguladores++;
      numeroAlimentos++
     
     ui.draggable.addClass("extraible")
       alimentoAñadidos.push(element.rutaImg)
    puntaje+=element.puntaje
      
          
       if(numeroAlimentos>=4 /*&& puntaje>=20*/){
             var audioplay = document.createElement('audio');
                   audioplay.setAttribute('src', 'audio/ganador.mp3'); 
                   audioplay.play()
                   
                   Swal.fire({
                              title:  'Bien Hecho, ganaste!',
                              text:  'Tu puntaje es:  ' +puntaje ,
                              imageUrl: 'img/premioo.png',
                              imageWidth: 200,
                              imageHeight:200,
                              imageAlt: 'Custom image',
                              animation: true,
                        customClass: {
                                 popup: 'animated tada'
                             }
                            })
 
    }
  }else{
  
    alert("Solo puede escoger un alimento Regulador.")
      //PONER AUDIO 
    if(numeroAlimentos>=4 /*&& puntaje>=20*/){
    //alert("Juego terminado: "+puntaje)    
         var audioplay = document.createElement('audio');
                   audioplay.setAttribute('src', 'audio/ganador.mp3'); 
                   audioplay.play()
                   
                   Swal.fire({
                              title:  'Bien Hecho, ganaste!',
                              text:  'Tu puntaje es:  ' +puntaje ,
                              imageUrl: 'img/premioo.png',
                              imageWidth: 200,
                              imageHeight:200,
                              imageAlt: 'Custom image',
                              animation: true,
                        customClass: {
                                 popup: 'animated tada'
                             }
                            })
    }
    //$("#miprimerdiv").append(ui.draggable); 
    $("#"+element.seccion).append(ui.draggable); 
  }
      }
   else
    {
              $("#"+element.seccion).append(ui.draggable); 
            //  alert("Debe escoger un alimento tipo Regulador.");
        //PONER AUDIO QUE DIGA 'Debe escoger un alimento tipo Constructor'
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
   
     if(numeroAlimentos>=4/*&& puntaje>=20*/){
      //alert("puntos ganados: "+ puntaje)
          var audioplay = document.createElement('audio');
                   audioplay.setAttribute('src', 'audio/ganador.mp3'); 
                   audioplay.play()
                   
                   Swal.fire({
                              title:  'Bien Hecho, ganaste!',
                              text:  'Tu puntaje es:  ' +puntaje ,
                              imageUrl: 'img/premioo.png',
                              imageWidth: 200,
                              imageHeight:200,
                              imageAlt: 'Custom image',
                              animation: true,
                        customClass: {
                                 popup: 'animated tada'
                             }
                            })
       audio.play()
//      
  }else{
    datos.forEach(element=>{    
    if($(ui.draggable).attr("src")==element.rutaImg ){
      var audio=document.createElement('audio');
      audio.setAttribute('src',element.sonido); 
      
   if(element.categoria=="energeticos" || element.categoria=="chatarra")
   {
              if(numEnergeticos<1){
                if(element.categoria=="chatarra"){
                  var audioplay = document.createElement('audio');
           audioplay.setAttribute('src', 'audio/oh_no.mp3'); 
           audioplay.play()
                  audio.play()  
                }else{
                    audio.play()
                  
                 var audioplay = document.createElement('audio');
                   audioplay.setAttribute('src', 'audio/acierto.mp3'); 
                   audioplay.play()
                }
                ui.draggable.addClass("contenedor3")
              $(".contenedor3").append(ui.draggable);
              numEnergeticos++;
              numeroAlimentos++
             ui.draggable.addClass("extraible")
               alimentoAñadidos.push(element.rutaImg)
            puntaje+=element.puntaje
            /////////////////////////////////////////
               if(numeroAlimentos>=4/*&& puntaje>=20*/){
              
                   var audioplay = document.createElement('audio');
                   audioplay.setAttribute('src', 'audio/ganador.mp3'); 
                   audioplay.play()
                   
                   Swal.fire({
                              title:  'Bien Hecho, ganaste!',
                              text:  'Tu puntaje es:  ' +puntaje ,
                              imageUrl: 'img/premioo.png',
                              imageWidth: 200,
                              imageHeight:200,
                              imageAlt: 'Custom image',
                              animation: true,
                        customClass: {
                                 popup: 'animated tada'
                             }
                            })
                   
                   
                   

            }

                  /////////////////////////////////
          }
            else
          {
             // alert("Solo puede escoger un alimento energético.")
              //PONER AUDIO 
              if(numeroAlimentos>=4 /*&& puntaje>=20*/){
                $(".draggable").hide(); 
                   var audioplay = document.createElement('audio');
                   audioplay.setAttribute('src', 'audio/ganador.mp3'); 
                   audioplay.play()
                  
         // alert("Juego terminado: "+puntaje)    
                Swal.fire({
                              title:  'Bien Hecho, ganaste!',
                              text:  'Tu puntaje es:  ' +puntaje ,
                              imageUrl: 'img/premioo.png',
                              imageWidth: 200,
                              imageHeight:200,
                              imageAlt: 'Custom image',
                              animation: true,
                             customClass: {
                                 popup: 'animated tada'
                             }
                    
                            })
                  
              }

            $("#"+element.seccion).append(ui.draggable); 

          }
    }
    else
    {
              
              $("#"+element.seccion).append(ui.draggable); 
             // alert("Debe escoger un alimento tipo energético.");
        //PONER AUDIO 
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
         //$("#miprimerdiv").append(ui.draggable);
          $("#"+element.seccion).append(ui.draggable); 
      }    
  });

  }
})

});

});

 

    

});



