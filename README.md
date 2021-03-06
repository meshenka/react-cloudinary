A test project for Webpack / React / Cloudinary

# Installation

## Requirements

* yarn <https://yarnpkg.com/fr/>
* node 9.x and npm <https://www.npmjs.com/> consider using nvm to manage node/npm versions: <https://github.com/creationix/nvm>
* git <https://git-scm.com/>

## Build project

```bash
cd [project]
yarn
```

## Semver

The project use Sementic Versionning, your commit messages must comply to semver formatting
(this is enforced with commitlint)

CHANGELOG and release is managed with standard-version which leverage semver commits format
to produce correct Versionning

When you are read to create a new version, merge your code and Run

```bash
yarn release
```

It will take care of the following

* bump version
* update CHANGELOG
* commit package.json and CHANGELOG.md 
* tag a new release

@see https://github.com/conventional-changelog/standard-version


# Run for developpers

No Docker so far but you can start a dev webserver with

```bash
yarn serve
```

# TODO

* Configure properly webpack-dev-server
* find a better way to manage secrets than this stupid src/env.js (not versionned)