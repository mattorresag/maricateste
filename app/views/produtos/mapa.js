let global = '24900-000';
	  function initMap() {
		geocoder= new google.maps.Geocoder();
		var latitude;
		var longitude;
		geocoder.geocode( { 'address': global}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			var latitude = results[0].geometry.location.lat();
			var longitude = results[0].geometry.location.lng();
			var crd={lat:latitude,lng:longitude};
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom:18,
				center:crd
			});
			var marker = new google.maps.Marker({
				position:crd,
				map:map
			});
			var marker2 = new google.maps.Marker({
				position={lat:-22.5114704, lng:-43.1776394}
			})
			

		} else {
			alert("Não foi possivel obter localização: " + status);
			}
		});
	}
	
	function getCEP() {   
		var cnpj =	document.getElementById("cepText").value;    
		var url = "https://www.receitaws.com.br/v1/cnpj/" + cnpj;
		alert(url);
		var response = UrlFetchApp.fetch(url);
		var conteudo = response.getContentText();
		var myjson = JSON.parse(conteudo);
		var cep = myjson["cep"];
		global=cep;
		initMap()
 }
	

	function mudaCep(){
		var cep2=document.getElementById("cepText").value;
		global= cep2;

		initMap();
	}





