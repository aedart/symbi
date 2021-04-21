# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

* **Breaking** Reworked entire mono-repository structure. Redesigned `@aedart/mixins` and `@aedart/meta` packages.
* `CHANGELOG.md` formatting to [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) instead of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) style.

## [0.4.0] - 2019-06-10

### Added 

* Documentation for `@aedart/mixins` (_incomplete_)
* `vuepress` configuration
* `deploy-docs.sh` utility to publish on GitHub pages

## [0.3.1] - 2019-06-10

### Fixed

* Missing `@aedart/mixins` dependency, in `@aedart/meta` package

## [0.3.0] - 2019-06-09

### Added

* `publish from-git` lerna script in `package.json`

### Fixed

* Webpack not using babel presets

## [0.2.2] - 2019-06-08

### Removed

* Explicit registry url in `package.json`. Was set to `https://registry.npmjs.org/`, but not required.

## [0.2.1] - 2019-06-08

### Fixed

* Name of root package

## [0.2.0] - 2019-06-08

### Changed

* Version bump for package root level package (_the mono-repository_)

## [0.1.0] - 2019-07-08

### Added

* Initial project structure
* Mixins package

[unreleased]: https://github.com/aedart/symbi/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/aedart/symbi/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/aedart/symbi/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/aedart/symbi/compare/v0.2.2...v0.3.0
[0.2.2]: https://github.com/aedart/symbi/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/aedart/symbi/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/aedart/symbi/compare/0.1.0...v0.2.0
[0.1.0]: https://github.com/aedart/symbi/tree/0.1.0
