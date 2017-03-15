const fs = require('fs-extra');
const path = require('path');
const getDirectories = require('./getdirectories');
const archiveFolderContent = require('./archive-folder-content');

module.exports = function(itemsPath, exclusionList, itemsListPath) {
  var dirs = getDirectories(itemsPath),
      items = [];

  fs.removeSync(itemsPath + '/icons');
  fs.mkdirSync(itemsPath + '/icons');

  for(var i=0; i<dirs.length; i++) {
    if(exclusionList.indexOf(dirs[i]) != -1) continue;
    var path = itemsPath + '/' + dirs[i] + '/manifest.json';
    var icon_path = itemsPath + '/' + dirs[i] + '/icon.svg';

    try {
      fs.accessSync(path);
    } catch(e) {
      console.log(e);
      console.log('ERROR: ' + dirs[i] + ': can\'t access manifest.json, skipping.');
      continue;
    }
    var icon_exists = true;
    try {
      fs.accessSync(icon_path);
    } catch(e) {
      console.log('ERROR: ' + dirs[i] + ': can\'t access icon.svg');
      icon_exists = false;
    }

    var data = fs.readFileSync(path),
        manifest = JSON.parse(data);

    if(icon_exists) {
      fs.copySync(icon_path, itemsPath + '/icons/' + dirs[i] + '.svg');
    }

    items.push(manifest);
  }

  // Saving the result
  var itemsList = JSON.stringify(items);
  fs.removeSync(itemsListPath);
  fs.writeFileSync(itemsListPath, itemsList);

  archiveFolderContent(itemsPath + '/icons/', itemsPath + '/icons.zip')
}
