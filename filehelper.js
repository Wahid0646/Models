const fs = require('fs');
const path = require('path');

const dataDir = path.join(path.dirname(process.mainModule.filename), 'data');

exports.getFileContents = (filePath, callback) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

exports.saveFileContents = (filePath, data, callback) => {
  fs.writeFile(filePath, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    }
    callback();
  });
};

exports.getDataFilePath = (filename) => {
  return path.join(dataDir, filename);
};
