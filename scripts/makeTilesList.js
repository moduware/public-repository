const makeRepositoryItemsList = require('./includes/make-repository-items-list');

const exclusionList = [
  'icons'
];
const itemsPath = '../tile';
const itemsListPath = itemsPath + '/tiles.json';

makeRepositoryItemsList(itemsPath, exclusionList, itemsListPath);
