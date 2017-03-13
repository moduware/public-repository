var fs = require('fs');
var http = require('http');

const conversionTable = {
  '1': 'nexpaq.devmod',
  '10': 'nexpaq.gateway', // dev board or standard gateway
  // default modules
  '11': 'nexpaq.led',
  '12': 'nexpaq.sd',
  '13': 'nexpaq.battery',
  '14': 'nexpaq.hat',
  '15': 'nexpaq.hotkeys',
  '16': 'nexpaq.memory',
  '17': 'nexpaq.laser',
  '18': 'nexpaq.speaker',
  '19': 'nexpaq.usbflash',
  '20': 'nexpaq.alcohol',
  '21': 'nexpaq.airq',
  '22': 'nexpaq.dummy',
  // different gateways id
  '23': 'nexpaq.minidev',
  '24': 'nexpaq.samsungs6',
  '25': 'nexpaq.samsungs6e',
  '26': 'nexpaq.iphone6',
  '27': 'nexpaq.batpaq',
  '28': 'nexpaq.range'
};

const modules_file_path = '../module/modules.txt';

var products = '',
    modules = '';

function updateModulesFromProducts() {
  console.log('Action: Requesting Product.txt');

  http.get({
    hostname: 'vpn2.coody.top',
    port: 80,
    path: '/nexpaq-app-beta-resources/Resource/Product.txt',
    agent: false  // create a new agent just for this one request
  }, (res) => {
    console.log('Event: Product.txt received!');

    res.on('data', (chunk) => {
      products += chunk;
    });
    res.on('end', () => {
      products = JSON.parse(products);

      // Converting to new format
      for (var key in products) {
        if (!products.hasOwnProperty(key)) return;
        if(typeof conversionTable[products[key]] == 'undefined') {
          console.log('Error: Unknown productID: ' + products[key] + '!');
          continue;
        }
        var type = conversionTable[products[key]];
        modules += key.toLowerCase() + ':' + type + "\n";
      }

      // Saving data to file
      fs.writeFile(modules_file_path, modules, function(err) {
        if(err) {
          return console.log(err);
        }

        console.log("modules.txt created!");
      });
    });
  });
}

function main() {
  console.log('Action: Checking last time of Product.txt modification');
  var req = http.request({
    method: 'HEAD',
    hostname: 'vpn2.coody.top',
    port: 80,
    path: '/nexpaq-app-beta-resources/Resource/Product.txt',
    agent: false  // create a new agent just for this one request
  }, (res) => {
    var remote_modified_time = new Date(res.headers['last-modified']);
    var modules_file_present = true;
    try {
      fs.accessSync(modules_file_path);
    } catch(e) {
      console.log('ERROR: can\'t access modules.txt, creating from scratch.');
      modules_file_present = false;
    }

    if(modules_file_present) {
      fs.stat(modules_file_path, function(err, stats){
        var local_modified_time = new Date(stats.mtime);
        console.log('Remote: ' + remote_modified_time + "\nLocal: " + local_modified_time);
        if(remote_modified_time > local_modified_time) {
          updateModulesFromProducts();
        }
      });
    } else {
      updateModulesFromProducts();
    }

  });
  req.end();
}



main();
