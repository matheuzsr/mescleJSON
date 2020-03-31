var fs = require('fs');

const infos = require('./merge.json');
const municipios = require('./municipios.json');

const infoFull = [];

infos.map(info => {

  municipios.map(muni => {

    if (info.municipio_residencia == muni.nome) {
      const {latitude, longitude} = muni;
      const { data, boletim, municipio_residencia, caso_confirmado, caso_descartado, caso_suspeito, mortes } = info;
      infoFull.push ({
        data,
        boletim,
        municipio_residencia,
        caso_confirmado,
        caso_descartado,
        caso_suspeito,
        mortes,
        latitude,
        longitude
      })
    }
  })

})


fs.writeFile("/home/matheus/www/data-es/myjsonfull.json", JSON.stringify(infoFull), function(erro) {

  if(erro) {
      throw erro;
  }

  console.log("Arquivo salvo");
}); 
