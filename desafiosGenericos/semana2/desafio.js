const fs = require('fs');

fs.readFile('package.json', 'utf-8', (error, data) => {
     if (error) {
          throw new Error('Error')
     }
     console.log('Salio todo ok')

     const info = {
          contenidoStr: data,
          contenidoObj: JSON.parse(data),
          size: data.length
     }

     console.log(info)

     fs.writeFile('info.txt', JSON.stringify(info, null, 2), error => {
          if (error) {
               throw new Error('Error')
          }
          console.log('Se guardo el archivo')
     })
})

