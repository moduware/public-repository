const fs = require('fs');
const archiver = require('archiver');

module.exports = function(folder, destination, path_in_archive) {
  path_in_archive = path_in_archive || './';

  var output = fs.createWriteStream(destination);
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

  archive.directory(folder, path_in_archive);
  archive.finalize();
}
