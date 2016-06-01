
$(function(){
	mostrarHora();
	setInterval(mostrarHora, 1000);
	$(".region").on("click",horaRegion)
	setTimeout(horaRegion, 1000);
 })

function mostrarHora(){


 var semanas = ['Domingo', 'Lunes', 'Martes', 'Miércoles',
 			 'Jueves', 'Viernes', 'Sábado'];
 var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
 			 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
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

function horaRegion(){
	var fecha = new Date();
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
	var checked=this.checked
	var name=parseInt(this.value)
	if(checked){
		var hora=fecha.getHours()+regiones[name].diferencia
 		if(hora>=24)
 			hora=hora-24
 		if(hora<10)
 		hora="0"+hora
		var minuto=fecha.getMinutes()
		if(minuto<10)
 		minuto="0"+minuto
		var segundo=fecha.getSeconds()
		if(segundo<10)
 		segundo="0"+segundo
		$("#otros").append("<div class='row"+name+"'><div class='col-xs-6'><span class='ciudad'>"+regiones[name].regiones+"</span></div><div class='col-xs-6'><span class='hora-ciudad'>"+hora+":"+minuto+":"+segundo+"</span></div></div>")
	}
	else $(".row"+name).remove()

}