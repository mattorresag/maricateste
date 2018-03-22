const axios = require("axios");
var fs = require("fs");

k=[59833673000175,61190658000106];


function getInfo(cnpj){

  for(i=0;i<cnpj.length;i++){
    var stream = fs.createWriteStream("dados.js");
    var url = "https://www.receitaws.com.br/v1/cnpj/" + cnpj[i];
    axios.get(url).then(response => {
                this.results = response.data;
                stream.write("CNPJ="+ [response.data.cnpj] + "  CEP=" + [response.data.cep] + "  Atividade=" + [response.data.atividade_principal[0].text] + "  CNAE=" + [response.data.atividade_principal[0].code] + '\n');
              })
            }
          }
  

var h= getInfo(k);


