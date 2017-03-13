var http = require('http');
http.post = require('http-post');
var fs = require('fs');

const cloudBase = 'api.nexpaq.com';
const modules_file_path = '../module/modules.txt';
const gateways_types = [
  'nexpaq.gateway',
  'nexpaq.minidev',
  'nexpaq.samsungs6',
  'nexpaq.samsungs6e',
  'nexpaq.iphone6',
  'nexpaq.batpaq'
];

var CloudAPIProducts = '';
var NewProducts = [];

console.log('ACTION: Downloading list from Cloud API');

downloadCloudApiProducts();


function downloadCloudApiProducts() {
  http.get({
    hostname: cloudBase,
    port: 80,
    path: '/product/list',
    agent: false  // create a new agent just for this one request
  }, (res) => {
    console.log('EVENT: Cloud API products list received');

    res.on('data', (chunk) => {
      CloudAPIProducts += chunk;
    });
    res.on('end', () => {
      res.setEncoding('utf8');
      CloudAPIProducts = CloudAPIProducts.split("\r\n");
      console.log(`INFO: Cloud API contains ${CloudAPIProducts.length} products`);
      compareCloudApiProductsWithLocal();
    });
  });
}
function compareCloudApiProductsWithLocal() {
  try {
    fs.accessSync(modules_file_path);
  } catch(e) {
    console.log('ERROR: ' + modules_file_path + ': can\'t access modules.txt, exiting.');
    return;
  }

  var data = fs.readFileSync(modules_file_path, 'UTF-8');
  var LocalProducts = data.split("\n");


  for(var i=0; i<LocalProducts.length; i++) {
    if(CloudAPIProducts.indexOf(LocalProducts[i].trim()) == -1) {
      console.log('EVENT: New product found!');
      console.log(LocalProducts[i]);
      NewProducts.push(LocalProducts[i]);
    }
  }
  console.log(`INFO: There are ${NewProducts.length} new products`);
  if(NewProducts.length > 0) {
      console.log('ACTION: Add new products to Cloud API database.');
      for(var i = 0; i < 4; i++) {
        addProductToDB();
      }
  }
  function addProductToDB() {
    if(NewProducts.length <= 0) return;
    var item_raw = NewProducts.pop().split(':');
    var item = {
      uuid: item_raw[0],
      type_id: item_raw[1],
      product_type: (gateways_types.indexOf(item_raw[1]) !== -1) ? 'gateway' : 'module'
    };
    http.post(`http://${cloudBase}/product/${item.uuid}`, { type_id: item.type_id, product_type: item.product_type  }, function(res){
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        console.log(chunk);

        addProductToDB();
      });
    });
  }

}
