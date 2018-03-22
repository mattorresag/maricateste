﻿

// É necessário inicializar o mapa como variável global
let mapa;

function init() {
    // Função da API do Google de inicialização do mapa
    mapa = new google.maps.Map(pegarPorID("map"), {
        zoom: 12,
        center: new google.maps.LatLng(-22.9163,-42.822),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}

// Função chamada ao confirmar inserção de CEPs no input
function adicionarCNPJ() {
    // Função de tratamento do input, retornando uma lista
    let cnpj = pegarListaCNPJ();
    let lat, lng;
    let geocoder = new google.maps.Geocoder();

    // Após a separação dos CEPs em uma lista, essa função transforma cada CEP em um par latitude-longitude
    cnpj.forEach(function(cnpj, index){
        let cep = trocaCNPJCEP(cnpj);
        geocoder.geocode( { 'address': cep}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                lat = results[0].geometry.location.lat();
                lng = results[0].geometry.location.lng();
                // Após conversão de CEP em lat-lng, é adicionado o marcador
                adicionarMarcador(lat, lng);
            }

            else {
                // Erro no caso de input inválido
                alert("CNPJ " + (index + 1) + " Inválido!");
                return 0
            }
        });
    });
}
 
// Função de adição de marcador no mapa
function adicionarMarcador(lat, lng) {
    let marcador = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: mapa
    });
}

// Getter de elementos por ID
function pegarPorID(id) {
    let elemento = document.getElementById(id);
    return elemento
}

// Função que isola CEPs que são separados por vírgulas no input em diferentes elementos de uma lista
function pegarListaCNPJ() {
    let input = pegarPorID("cnpj").value;
    cnpj = input.split(", ");
    return cnpj
}

// Funcao para transformar os CNPJs do input em CEPs
function trocaCNPJCEP(cnpj){
    var url = "https://www.receitaws.com.br/v1/cnpj/" + cnpj;
    // Faz a requisicao http na API receitaws
    axios.get(url).then(response => {
        this.results = response.data;
        var cep = results.data.cep;
        return cep
    });
}



