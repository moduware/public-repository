const makeRepositoryItemsList = require('./includes/make-repository-items-list');

const exclusionList = [
  'icons'
];
const itemsPath = '../module';
const itemsListPath = itemsPath + '/modules.json';

makeRepositoryItemsList(itemsPath, exclusionList, itemsListPath);
