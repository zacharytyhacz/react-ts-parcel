# React + TypeScript + Sass + Parcel Bundler Starter Kit

A quick get started template I have been working with that helps me jump right into a React environment with Scss, TypeScript, and a folder structure without **ANY** configuration required.

## Main Dependences
- [React](https://github.com/facebook/react)
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Parcel Bundler](https://github.com/parcel-bundler/parcel)
- [Pure Store](https://github.com/gunn/pure-store)
- [Axios](https://github.com/axios/axios)
- [Sass](https://github.com/sass/sass)

## Run 
```bash
$ git clone https://github.com/zacharytyhacz/react-ts-parcel myproject

$ cd myproject

$ yarn install 

$ npm run start 
# or 
$ parcel index.html
```

## Goals to improve this template starter kit 
- [ ] Add linting already set up
- [ ] Add unit/component testing already set up
- [ ] Improve folder structure a little bit 
- [ ] A dockerfile for quick deployment and usage


## Folder Structure 

### `app/` is for the application pages and components

### `config/` is for a gitignored settings.json file to host your project env vars.

### `requests/` is for isolating request functionality with an API server

### `store/` is for state management and uses Arthur Gunn's amazingly simple [pure-store](https://github.com/gunn/pure-store)

### `validation/` is for input validation and form handling functionality 

### `assets/` is for scss, images, svgs, and other usable assets

## Scss Styles Structure
See [this very cool structure idea](https://matthiasott.com/notes/how-i-structure-my-css)

```
assets/scss/
├── 1-settings
│   └── _global.scss
├── 2-design-tokens
│   ├── _colors.scss
│   ├── _fonts.scss
│   ├── _media-queries.scss
│   ├── _spacing.scss
│   └── _typography.scss
├── 3-tools
│   ├── _aspect-ratio.scss
│   ├── _blend-modes.scss
│   ├── _center.scss
│   ├── _clearfix.scss
│   └── _gradients.scss
├── 4-generic
│   ├── _box-sizing.scss
│   ├── _font-face.scss
│   ├── _normalize.scss
│   └── _print.scss
├── 5-elements
│   ├── _forms.scss
│   ├── _headings.scss
│   ├── _images.scss
│   ├── _links.scss
│   ├── _lists.scss
│   └── ...
├── 6-skeleton
│   ├── _grid.scss
│   ├── _layouts.scss
│   └── _objects.scss
├── 7-components
│   ├── _accordion.scss
│   ├── _card.scss
│   ├── _hero.scss
│   ├── _pan-galactic-gargle-blaster.scss
│   └── ...
├── 8-utilities
│   ├── _modifiers.scss
│   └── _states.scss
├── _shame.scss
└── main.scss
```

