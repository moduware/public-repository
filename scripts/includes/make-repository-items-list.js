const fs = require('fs-extra');
const path = require('path');
const getDirectories = require('./getdirectories');
const archiveFolderContent = require('./archive-folder-content');

module.exports = function(itemsPath, exclusionList, itemsListPath) {
  var dirs = getDirectories(itemsPath),
      items = [];

  for(var i=0; i<dirs.length; i++) {
    if(exclusionList.indexOf(dirs[i]) != -1) continue;
    var path = itemsPath + '/' + dirs[i] + '/manifest.json';

    try {
      fs.accessSync(path);
    } catch(e) {
      console.log(e);
      console.log('ERROR: ' + dirs[i] + ': can\'t access manifest.json, skipping.');
      continue;
    }

    var data = fs.readFileSync(path),
        manifest = JSON.parse(data);

    items.push(manifest);
  }

  // Saving the result
  var itemsList = JSON.stringify(items, null, 4);
  fs.removeSync(itemsListPath);
  fs.writeFileSync(itemsListPath, itemsList);
}
