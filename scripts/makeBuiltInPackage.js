const fs = require('fs-extra');
const archiver = require('archiver');

var output = fs.createWriteStream('./resources.zip');
var archive = archiver.create('zip', {});

// listen for all archive data to be written
output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

// good practice to catch this error explicitly
archive.on('error', function(err) {
  throw err;
});

// pipe archive data to the file
archive.pipe(output);

// append files from a directory
archive.directory('./localRepository/repository/', './');

archive.finalize();
