# Living Style Guide for AMA
This is the living style guide for the American Medical Association. It is a platform-agnostic tool to empower employees and vendors to maintain consistent design and hierarchy throughout the AMA digital ecosystem.

This style guide is a compilation of [atomic components](http://bradfrost.com/blog/post/atomic-web-design/) that have been specifically tailored to the needs of AMA. By documenting and assembling this collection of patterns, we are able to build consistently, reuse code, and [see all of our patterns in one place](https://americanmedicalassociation.github.io/AMA-style-guide/).

## Style Guide Consumers - To use the Style Guide on a project:
- Grab the [latest release](https://github.com/AmericanMedicalAssociation/AMA-style-guide/releases)
- Open the `.zip` into your project
- Link to the production files at `assets/`

## Style Guide Developers - To begin working:

**Environment setup (mac)**

 - Have [`homebrew`](https://brew.sh/) installed
 - `brew install nvm`
 - `nvm install v7.10.0` (or some relatively recent node version. Note 8.0.0 has a fatal bug with require-dir module)
 - `nvm use 7.10.0`

**Just the first time:**

- `cd styleguide`
- `composer install`
- `npm install`
- `sudo npm install -g gulp`
  - This will install gulp globally on your machine. If you don't have privileges, don't want to install globally, or need to manage multiple projects using `gulp`, you can invoke `gulp` via `./node_modules/.bin/gulp serve` instead of directly.

**For ongoing development**

- `gulp serve` to watch files and display the resulting page in your local browser.
- Occasionally things might stop refreshing well. If that happens, just kill (`Control-C`) gulp and re-run.
- `gulp scss-lint` will check your SCSS for code quality. Please ensure your code lints successfully. A few notes:
  - We're using autoprefixer to get all the latest and greatest vendor prefixes. You should not need to use vendor prefixes in your code.
  - If you do need a vendor prefix (for device-specific changes, like `-webkit-appearance`) you can [disable linting for those lines](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#turning-rules-off-from-within-your-css).
- CSS sourcemaps are generated by gulp so you can see what files are generating the applicable css for each element. If you are seeing something like "style.css?123456789" when you inspect elements in your browser, check that you have "enabled CSS mapping" in your dev tools. [Chrome's developer documentation shows how to check your settings.](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps#enable_source_maps_in_settings)
- Javascript files in the style guide require special consideration. Please read [the documentation](styleguide/docs/code_conventions.md#javascript) before writing new JS.

## To Create a Release:
**To deploy changes to github pages**

- `gulp deploy` to build the production ready code and push to the `gh-pages` branch for display on https://americanmedicalassociation.github.io/AMA-style-guide/.

**To deploy changes for consumption by our D8 site**

- `gulp drupal-deploy` to deploy changes to the `dev-assets` branch for consumption by Drupal or another CMS.

**To mark a new release of the Style Guide for public consumers**

_WARNING: This should only be run on the `develop` branch`*`!_

- Make sure you are running the most up-to-date code
  - Updates will be rejected if they are non-fast-forward
- Update `package.json` with the new version number.
- `gulp release` to build the files correctly, update version information, cut a tag, and deploy the files to _both_ `gh-pages` and `master`.
- Navigate to the [latest release](https://github.com/AmericanMedicalAssociation/AMA-style-guide/releases) to see the new release and add notes.

Initial config via [TutsPlus](https://webdesign.tutsplus.com/tutorials/combining-pattern-lab-with-gulp-for-improved-workflow--cms-22187).

`*` Note: To base a release on a specific commit, for example when the `develop` branch has had other PRs committed that should not be included in the release, do the following:
1. Check out the commit from which you'd like to deploy.
2. Run `gulp release` to deploy the release from that commit.

## Troubleshooting:
### Make sure your npm dependencies are up to date
If you run unto an unexpected error, you might just be missing a dependency

- Run `npm install` from the `styleguide` directory to grab any missing dependencies.

### Make sure node and npm are up to date(-ish)
You might have to do any or all of these

- Update node

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

- Update npm

```
sudo npm install -g npm
```

- Rebuild npm to recompile any outdated packages.

```
npm rebuild
```

## What's going on here?
### Icons
Icons are being generated using [Grunticon](https://github.com/filamentgroup/grunticon) with the [Gulpicon](https://github.com/filamentgroup/gulpicon) wrapper. This generates a three-tier system of fallbacks, which are controlled by a JS-based loader [full desc](https://github.com/filamentgroup/grunticon#a-mystical-css-icon-solution).

New icons can be places in `source/assets/icons/svg`. When `gulp icons` is run, the process will [minify the SVGs](https://www.npmjs.com/package/gulp-svgmin) then run `gulpicon` using the config and template in the icons directory, finally outputting everything in `public/assets/icons/`. The loader and initialization code are in [`_00-head.twig`](./styleguide/source/_meta/_00-head.twig).

### Responsive implementation
We are using [Breakpoint](http://breakpoint-sass.com/) to handle media queries for responsive implementation.

The first time you run `npm install` the dependency will be installed, but if you run into an error, running `npm install` again should fix the issue.
