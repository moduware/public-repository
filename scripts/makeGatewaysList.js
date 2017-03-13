const makeRepositoryItemsList = require('./includes/make-repository-items-list');

const exclusionList = [
  'icons'
];
const itemsPath = '../gateway';
const itemsListPath = itemsPath + '/gateways.json';

makeRepositoryItemsList(itemsPath, exclusionList, itemsListPath);
