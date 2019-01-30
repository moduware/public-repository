'use strict';

const fs = require('fs-extra');
const download = require('download');

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

let CurrentBranch = 'develop';


function showHelp() {
    console.log(`
        --help for this help
        <branch> to specify branch, develop by default
    `);
}

async function main() {
    if(typeof(process.argv[2]) != 'undefined' && process.argv[2] == '--help') {
        showHelp();
        return;
    }

    CurrentBranch = process.argv[2] || CurrentBranch;

    console.log(`Ave Developer, loading resources for ${CurrentBranch} branch\n`);

    // Clean "resources" folder
    await CleanResourcesFolder();

    // Read "resources.json" in memory
    const config = await LoadConfiguration();
    if(config == null) {
        console.error('Cannot load configuration');
        return;
    }

    // Download all drivers
    await DownloadDrivers(config.modules);
    console.log(`Drivers downloaded\n`);

    // Download all manifests
    const manifestsList = config.modules.concat(config.gateways);
    await DownloadManifests(manifestsList);
    console.log(`Manifests downloaded\n`);

    // Download all tiles
    await DownloadTiles(config.tiles);

    // Download products list
    await DownloadProductsList(config.products_url);
    console.log('All resources downloaded\n');
}

/**
 * Clean resources folder and recreate structure
 */
async function CleanResourcesFolder() {
    await fs.remove(ResourcesFolderPath);
    await fs.mkdir(ResourcesFolderPath);
    await fs.mkdir(DriversFolderPath);
    await fs.mkdir(ManifestsFolderPath);
    await fs.mkdir(TilesFolderPath);
}

/**
 * Load script configuration file
 */
async function LoadConfiguration() {
    try {
        var configTxt = await fs.readFile(ConfigurationPath);
        var config = JSON.parse(configTxt);
        return config;
    } catch(e) {
        return null;
    }
}

async function DownloadProductsList(url) {
    console.log('Downloading products list');

    const data = await download(`${url}`);

    await fs.writeFile(`${ResourcesFolderPath}/products.txt`, data);
    var lines_count = data.toString().split("\n").length;
    console.log(`Loaded ${lines_count} products`);
}

/**
 * Downloads all drivers from list
 * @param  {} driversList
 */
async function DownloadDrivers(driversList) {
    console.log(`Downloading ${driversList.length} drivers`);

    for(let driver of driversList) {
        if(DriverLessModules.indexOf(driver) != -1) {
            console.log(`${driver} - Driverless`);
        } else {
            await DownloadDriver(driver);
            console.log(`${driver} - Ok`);
        }
    }
}

/**
 * Downloads particular driver, returns promise
 * @param  {} driver
 */
async function DownloadDriver(driver) {
    const data = await download(`${RepositoryUrl}/${CurrentBranch}/module/${driver}/driver.json`);
    await fs.writeFile(`${DriversFolderPath}/${driver}.json`, data);
}

/**
 * Downloads all manifests in list
 * @param  {} manifestsList List of items which manifests to download
 */
async function DownloadManifests(manifestsList) {
    console.log(`Downloading ${manifestsList.length} manifests`);

    for(let manifest of manifestsList) {
        await DownloadManifest(manifest);
        console.log(`${manifest} - Ok`);
    }
}

/**
 * Downloads one specific manifest
 * @param  {} manifest id of item which manifest we need to download
 */
async function DownloadManifest(manifest) {
    const [creator, type, name] = manifest.split('.');

    let data = await download(`${RepositoryUrl}/${CurrentBranch}/${type}/${manifest}/manifest.json`);
    await fs.writeFile(`${ManifestsFolderPath}/${manifest}.json`, data);
}

/**
 * Download and extract all tiles in list
 * @param  {} tilesList
 */
async function DownloadTiles(tilesList) {
    console.log(`Downloading ${tilesList.length} tiles`);

    for(let tile of tilesList) {
        await DownloadTile(tile);
        console.log(`${tile} - Ok`);
    }
}

/**
 * Download and extract specific tile
 * @param  {} tileId
 */
async function DownloadTile(tileId) {
    // get stable version number
    const json = await download(`${RepositoryUrl}/${CurrentBranch}/tile/${tileId}/manifest.json`);
    const manifest = JSON.parse(json);
    // download stable version
    await download(`${RepositoryUrl}/${CurrentBranch}/tile/${tileId}/versions/${manifest.versions.stable}/tile.zip`, `${TilesFolderPath}/${tileId}`, { extract: true });
}

main();
