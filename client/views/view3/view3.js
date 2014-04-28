cont=0;
i2=0;

cronometro=0;
var i=0;
reloj=0;


Template.view3.helpers({

  greetings: function() {
    return "view3!JS";
  },
    contact: function() {
    return Contacts.find();     
  }
});



Template.view3.events({
  'click #vuelve3js': function () {
       
       Session.set("currentPage", "view1");
       cont=0;
       


  }

});


/*Template.view3.events({
  'click player1': function () {
      window.onload = function(){
        var cont1 = 0;
        document.getElementById("player1").onclick = function(){
            cont1++;
            alert(cont1);
        }
      }
  }

});
*/

/*Template.view3.events({
  'click start': function chrono () {
      var x = 60000;
      function timedText() {
        var t1=setTimeout(function(){x.value="1 seconds"},1000);
      }
  }

});*/


// *************** CRONOMETRE ********************
window.addEventListener('load', inicio, false);

  var reloj;

  //var reloj;

  function inicio() {
    reloj=setInterval(procesar,1000);
    document.getElementById('boton1').addEventListener('click',startCrono,false);
  }
  function procesar() {
    var nro=parseInt(document.getElementById('cronometro').innerHTML);
    nro++;
    i2=nro;
    document.getElementById('cronometro').innerHTML=nro;
  }
  function startCrono(){

        if (reloj=5000) {
          clearInterval(reloj);
          reloj=0;
        }
        else{
          reloj=setInterval(procesar,1000);
        }

  }
// *************** FI CRONOMETRE ********************


// *************** COMPT CLICKS *********************
Template.view3.events({
    'click #jugador1': function () {
        cont++;
        
        if (cont<=20){

           document.getElementById('cont').innerHTML=cont;
           Alerts.removeSeen();
        }
        else{
           //i2=reloj;
           cont=0;
           Session.set("currentPage", "view5");


        }


  }
 }); 

/*var z=0;
Template.view3.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
    
    Session.set("currentPage", "view1");
  }
var id = meteor.setInterval(function())
i++;
if(i==5)
    meteor.clearInterval(id);
}, 1000;*/







// *************** FI CRONOMETRE ********************


// *************** COMPT CLICKS *********************
/*Template.view3.events({
    'click #m-info': function () {
        cont++;
        Alerts.add(cont, 'Warning');
           Alerts.removeSeen()

    },

    
});*/



/*Template.view3.events({
    'click #start': function () {
       
       var cronometro = Meteor.setInterval(contar,1000);
       function contar() {
   
        i++;
        document.getElementById('cronometro').innerHTML=i;
        
      
      }
    }
});*/