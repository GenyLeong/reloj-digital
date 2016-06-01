 var semanas = ['Domingo', 'Lunes', 'Martes', 'Miércoles',
             'Jueves', 'Viernes', 'Sábado'];
 var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
             'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var regiones=[{region:"México DC",
                diferencia:0},
               {region:"Sao Paulo",
                diferencia:2},
               {region:"Washington DC",
                diferencia:-1},
               {region:"Madrid",
                diferencia:7},
               {region:"Seúl",
                diferencia:14},
               {region:"Toronto",
                diferencia:1},
               {region:"Bogotá",
                diferencia:0},
               {region:"Caracas",
                diferencia:1}]



$(function(){
	mostrarHora();
	setInterval(mostrarHora, 1000);
	$(".region").click(horaRegion)

 })

function mostrarHora(){
 // var semanas = ['Domingo', 'Lunes', 'Martes', 'Miércoles',
 // 			 'Jueves', 'Viernes', 'Sábado'];
 // var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
 // 			 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var fechas = new Date();
 var segundos=fechas.getSeconds()
 	if(segundos<10)
 		segundos="0"+segundos
 var minutos=fechas.getMinutes()
 	if(minutos<10)
 		minutos="0"+minutos
 var horas=fechas.getHours()
 	if(horas<10)
 		horas="0"+horas

 $("#hora").html(horas+":"+minutos+":"+segundos)
 $("#dia").html(semanas[fechas.getDay()]+", ")
 $("#fecha").html(fechas.getDate()+" de "+meses[fechas.getMonth()])
 
}

	// regiones=[{region:"México DC",
 //                diferencia:0},
 //               {region:"Sao Paulo",
 //                diferencia:2},
 //               {region:"Washington DC",
 //                diferencia:-1},
 //               {region:"Madrid",
 //                diferencia:7},
 //               {region:"Seúl",
 //                diferencia:14},
 //               {region:"Toronto",
 //                diferencia:1},
 //               {region:"Bogotá",
 //                diferencia:0},
 //               {region:"Caracas",
 //                diferencia:1}]

function horaRegion(){
    var checked=this.checked
	var name=parseInt(this.value)
	id = $(this).val();	
	if(checked){
		$("#otros").append("<div class='row"+name+"'></div>")
       hora_internacional(name);

    }else $('.row' +name).remove();
}

function hora_internacional(name){
    var dif = regiones[name].diferencia
    var fecha = new Date();
    var hora=fecha.getHours()+ dif;
        if(hora>=24)
            hora=hora-24
        if(hora<10)
            hora="0"+hora
        minuto=fecha.getMinutes()
        if(minuto<10)
        minuto="0"+minuto
        segundo=fecha.getSeconds()
        if(segundo<10)
        segundo="0"+segundo
	setTimeout('hora_internacional('+name+')', 1000);
    $('.row' +name).html("<div class='col-xs-6'><span class='ciudad'>"+regiones[name].region+"</span><div class='col-xs-6'><span class='hora-ciudad'id='" + id + "'>"+hora+":"+minuto+":"+segundo+"</span></div></dv>")
}i