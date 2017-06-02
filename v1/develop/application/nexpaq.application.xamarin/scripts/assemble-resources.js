'use strict';

const fs = require('fs-extra');
const download = require('download');
const unzip = require('unzip');

const RepositoryUrl = 'http://repository.nexpaq.com/v1';
const ResourcesFolderPath = './resources';
const DriversFolderPath = ResourcesFolderPath + '/drivers';
const ManifestsFolderPath = ResourcesFolderPath + '/manifests';
const TilesFolderPath = ResourcesFolderPath + '/tiles';
const ConfigurationPath = './resources.json';

const DriverLessModules = [
    'nexpaq.module.dummy',
    'nexpaq.module.devmod'
];

let CurrentBranch = 'stable';


function showHelp() {
    console.log(`
        --help for this help
        <branch> to specify branch, stable by default
    `);
}

function main() {
    if(typeof(process.argv[2]) != 'undefined' && process.argv[2] == '--help') {
        showHelp();
        return;
    }

    CurrentBranch = process.argv[2] || CurrentBranch;

    console.log(`Ave Developer, loading resources for ${CurrentBranch} branch\n`);

    // Clean "resources" folder
    CleanResourcesFolder();
    
    // Read "resources.json" in memory
    var config = LoadConfiguration();
    if(config == null) {
        console.error('Cannot load configuration');
        return;
    }

    // Download all drivers
    DownloadDrivers(config.modules)
    .then(() => {
        console.log(`Drivers downloaded\n`);
        // Download all manifests
        var manifests_list = config.modules.concat(config.tiles);
        return DownloadManifests(manifests_list);
    })
    .then(() => {
        console.log(`Manifests downloaded\n`);

        // Download all tiles
        return DownloadTiles(config.tiles);
    })
    .then(() => {
        console.log(`Tiles downloaded\n`);

        return DownloadProductsList(config.products_url);
    })
    .then(() => {
        console.log('All resources downloaded\n');
    });

    // Download products list
}

/**
 * Clean resources folder and recreate structure
 */
function CleanResourcesFolder() {
    fs.removeSync(ResourcesFolderPath);
    fs.mkdirSync(ResourcesFolderPath);
    fs.mkdirSync(DriversFolderPath);
    fs.mkdirSync(ManifestsFolderPath);
    fs.mkdirSync(TilesFolderPath);
}

/**
 * Load script configuration file
 */
function LoadConfiguration() {
    try {
        var config_txt = fs.readFileSync(ConfigurationPath);
        var config = JSON.parse(config_txt);
        return config;
    } catch(e) {
        return null;
    }
}

function DownloadProductsList(url) {
    console.log('Downloading products list');

    return new Promise((resolve, reject) => {
        try {
            download(`${url}`).then(data => {            
                fs.writeFileSync(`${ResourcesFolderPath}/products.txt`, data);
                var lines_count = data.toString().split("\n").length;
                console.log(`Loaded ${lines_count} products`);
                resolve();
            });
        } catch(e) {
            console.error(e);
            reject();
        }
    });
}

/**
 * Downloads all drivers from list
 * @param  {} drivers_list
 */
function DownloadDrivers(drivers_list) {
    console.log(`Downloading ${drivers_list.length} drivers`);

    return new Promise((tresolve, treject) => {
        promiseLoop(
            (i) => !(i < drivers_list.length),
            (i) => i+1,
            (i, resolve, action) => {
                var driver = drivers_list[i];

                if(DriverLessModules.indexOf(driver) != -1) {
                    console.log(`${driver} - Ok`);
                    resolve();
                    return;
                }

                DownloadDriver(driver).then(function() {
                    console.log(`${driver} - Ok`);
                    resolve();
                }).catch(function() {
                    console.log(`${driver} - Fail`);
                    resolve();
                });
            },
            () => tresolve()
        );
    });
}

/**
 * Downloads particular driver, returns promise
 * @param  {} driver
 */
function DownloadDriver(driver) {
    return new Promise((resolve, reject) => {
        try {
            download(`${RepositoryUrl}/${CurrentBranch}/module/${driver}/driver.json`).then(data => {
                fs.writeFileSync(`${DriversFolderPath}/${driver}.json`, data);
                resolve();
            });
        } catch(e) {
            console.error(e);
            reject();
        }
    });
}

/**
 * Downloads all manifests in list
 * @param  {} items_list List of items which manifests to download
 */
function DownloadManifests(items_list) {
    console.log(`Downloading ${items_list.length} manifests`);

    return new Promise((tresolve, treject) => {
        promiseLoop(
            (i) => !(i < items_list.length),
            (i) => i+1,
            (i, resolve, action) => {
                var item = items_list[i];

                DownloadManifest(item).then(function() {
                    console.log(`${item} - Ok`);
                    resolve();
                }).catch(function() {
                    console.log(`${item} - Fail`);
                    resolve();
                });
            },
            () => tresolve()
        );
    });
}

/**
 * Downloads one specific manifest
 * @param  {} item_id id of item which manifest we need to download
 */
function DownloadManifest(item_id) {
    var [creator, type, name] = item_id.split('.');
    return new Promise((resolve, reject) => {
        try {
            download(`${RepositoryUrl}/${CurrentBranch}/${type}/${item_id}/manifest.json`).then(data => {
                fs.writeFileSync(`${ManifestsFolderPath}/${item_id}.json`, data);
                resolve();
            });
        } catch(e) {
            console.error(e);
            reject();
        }
    });
}

/**
 * Download and extract all tiles in list
 * @param  {} items_list
 */
function DownloadTiles(items_list) {
    console.log(`Downloading ${items_list.length} tiles`);

    return new Promise((tresolve, treject) => {
        promiseLoop(
            (i) => !(i < items_list.length),
            (i) => i+1,
            (i, resolve, action) => {
                var item = items_list[i];

                DownloadTile(item).then(function() {
                    console.log(`${item} - Ok`);
                    resolve();
                }).catch(function() {
                    console.log(`${item} - Fail`);
                    resolve();
                });
            },
            () => tresolve()
        );
    });
}

/**
 * Download and extract specific tile
 * @param  {} item_id
 */
function DownloadTile(item_id) {
    return new Promise((resolve, reject) => {
        try {
            download(`${RepositoryUrl}/${CurrentBranch}/tile/${item_id}/tile.zip`).pipe(unzip.Extract({ path: `${TilesFolderPath}/${item_id}` }))
            .on('finish', resolve);
        } catch(e) {
            console.error(e);
            reject();
        }
    });
}

/**
 * @param  {} check checks if loop is finished
 * @param  {} change modifies iterator
 * @param  {} action actions to perform in each loop
 * @param  {} end actions after all loop interations finished
 */
function promiseLoop(check, change, action, end) {
    (function loop(i) {
        const promise = new Promise((resolve, reject) => {
            action(i, resolve, reject);
        }).then( () => check(i+1) ? end() : loop(change(i)) );
    })(0);
}

main();