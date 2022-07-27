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
})
