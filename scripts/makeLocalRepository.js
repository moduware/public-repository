const fs = require('fs-extra');
const path = require('path');
const download = require('download');
const unzip = require('unzip');

const repositoryPath = 'http://repository.nexpaq.com';
//const productsPath = repositoryPath + '/module/modules.txt';
const productsPath = 'http://api.nexpaq.com/product/list';
const builtInGateways = [
  'nexpaq.gateway',
  'nexpaq.minidev',
  'nexpaq.batpaq',
  'nexpaq.samsungs6',
  'nexpaq.samsungs6e',
  'nexpaq.iphone6'
];
const builtInModules = [
  'nexpaq.airq',
  'nexpaq.alcohol',
  'nexpaq.battery',
  'nexpaq.devmod',
  'nexpaq.dummy',
  'nexpaq.hat',
  'nexpaq.hotkeys',
  'nexpaq.laser',
  'nexpaq.led',
  'nexpaq.memory',
  'nexpaq.sd',
  'nexpaq.speaker',
  'nexpaq.usbflash'
];
const builtInTiles = [
  'dashboard',
  'feedback',
  'map',
  'timeline',
  'unknown',
  'nexpaq.airq',
  'nexpaq.alcohol',
  'nexpaq.battery-testing',
  'nexpaq.devmod',
  'maxim.devmod',
  'nexpaq.dummy',
  'nexpaq.hat',
  'nexpaq.hotkeys',
  'nexpaq.laser',
  'nexpaq.led',
  'nexpaq.memory-testing',
  'nexpaq.sd-testing',
  'nexpaq.speaker-testing',
  'nexpaq.usbflash-testing'
];
const iconTypes = [
  'tile',
  'module',
  'gateway'
];

// Removing tmp and localRepository folder
console.log('ACTION: removing old folders');
fs.removeSync('./tmp');
fs.removeSync('./localRepository');

// Creating tmp directory and localRepository directory
fs.mkdirSync('./tmp');
fs.mkdirSync('./localRepository');

// Creating folder structure in localRepository
console.log('ACTION: creating folder structure');
/*
  /repository
    /gateways
    /modules
    /tiles
      /production
      /development
    /icons
      /tiles
      /modules
      /gateways
    modules.txt
    tiles.json
*/
fs.mkdirSync('./localRepository/repository');
fs.mkdirSync('./localRepository/repository/gateways');
fs.mkdirSync('./localRepository/repository/modules');
fs.mkdirSync('./localRepository/repository/tiles');
fs.mkdirSync('./localRepository/repository/tiles/production');
fs.mkdirSync('./localRepository/repository/tiles/development');
fs.mkdirSync('./localRepository/repository/icons');
fs.mkdirSync('./localRepository/repository/icons/tiles');
fs.mkdirSync('./localRepository/repository/icons/modules');
fs.mkdirSync('./localRepository/repository/icons/gateways');

// Downloading latest tiles.json
download(repositoryPath + '/tile/tiles.json', './localRepository/repository')
  .then(() => console.log('EVENT: tiles.json downloaded'));

// Downloading latest modules.txt
download(productsPath).then(data => {
  fs.writeFileSync('./localRepository/repository/modules.txt', data);
  console.log('EVENT: modules.txt downloaded');
});

// Downloading gateways manifest.json + icon to corresponding folders
builtInGateways.forEach(function(gateway) {
  console.log('ACTION: downloading gateway: ' + gateway);

  var local_path = './localRepository/repository/gateways/' + gateway;
  fs.mkdirSync(local_path);
  download(repositoryPath + '/gateway/' + gateway + '/manifest.json', local_path);
});

// Downloading modules manifest.json + icon + driver (parse & control)
builtInModules.forEach(function(module) {
  console.log('ACTION: downloading module: ' + module);

  var local_path = './localRepository/repository/modules/' + module;
  fs.mkdirSync(local_path);
  download(repositoryPath + '/module/' + module + '/manifest.json', local_path);
  download(repositoryPath + '/module/' + module + '/parse.json', local_path);
  download(repositoryPath + '/module/' + module + '/control.json', local_path);
});

// Downloading tiles manifest.json + icon, and downloading tile app.zip and extracting in to production folder
builtInTiles.forEach(function(tile) {
  console.log('ACTION: downloading tile: ' + tile);
  var local_path = './localRepository/repository/tiles/production/' + tile;
  fs.mkdirSync(local_path);
  download(repositoryPath + '/tile/' + tile + '/manifest.json', local_path);
  // download(repositoryPath + '/tile/' + tile + '/icon.svg').then(data => {
  //   fs.writeFileSync('./localRepository/repository/icons/tiles/' + tile + '.svg', data);
  // });
  fs.mkdirSync('./tmp/' + tile);
  download(repositoryPath + '/tile/' + tile + '/app.zip', './tmp/' + tile)
    .then(() => {
      console.log('EVENT: tile package downloaded for: ' + tile);
      console.log('ACTION: extracting tile package for: ' + tile);
      fs.createReadStream('./tmp/' + tile + '/app.zip').pipe(unzip.Extract({ path: local_path }));
    })
    .catch(error => {
      console.log('ERROR: ' + tile + ' : ' + error);
    });
});

iconTypes.forEach(type => {
  console.log('ACTION: downloading icons for: ' + type);
  var local_path = `./localRepository/repository/icons/${type}s/`;

  download(`${repositoryPath}/${type}/icons.zip`).then(data => {
    fs.writeFileSync(`./tmp/${type}_icons.zip`, data);
    fs.createReadStream(`./tmp/${type}_icons.zip`).pipe(unzip.Extract({ path: local_path }));
  })
});
