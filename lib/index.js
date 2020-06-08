const path = require('path');

const pulley = require('pulley-core');

const { Bundler } = pulley;
const vinylFs = pulley.reexports.vinylFs;

/**
 * Default bundler for Pulley.
 *
 * Bundles each package in its own directory within the destination directory.
 * Directories are named after the package's name.
 */
class DefaultBundler extends Bundler {

  /**
   * Outputs each package to a child directory of `dest`.
   *
   * @param {Object[]} packages - Packages to bundle.
   * @param {string} dest - Bundler destination base path.
   */
  bundle(packages, dest) {
    packages.forEach((currentPackage) => {
      const destPath = path.resolve(dest, currentPackage.name);

      currentPackage.stream
        .pipe(vinylFs.dest(destPath));
    });
  }

}

module.exports = DefaultBundler;
