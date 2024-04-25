# Rails and React on Heroku

## ruby version:
`rvm use ruby-3.3.0`

## gems:
`gem install nokogiri -v 1.13.10`
`rails-7.1.3.2`
`pg-1.5.6`

## create rails with postgres
`rails new myapp --database=postgresql`

## fire it up:
`rails server`
`http://127.0.0.1:3000/index`


/////////////////////////////////
- locally:
  
  `rails s --binding=127.0.0.1`

- production:

  `http://stark-falls-27998.herokuapp.com/`

## Yarn not Node
`yarn add react-router-dom bootstrap jquery popper.js`

```
yarn add react-router-dom
yarn add react-bootstrap
yarn add d3 --save
yarn add react-markdown --save
yarn add react-mathjax --save
```

## Setup
- development.rb

  `config.assets.prefix = "/assets_dev"`

- production.rb
  `config.assets.compile = true` # yes, recognize custom fonts
  `config.serve_static_assets = true`

- config/webpacker.yml

  `extract_css: false`

## Deploying, asset compilation, production and development builds
Really, I need to build a deploy script.
let it compile assests,<br>add changes to git and then
push to heroku. In the meantime:

- redbuild public: assets and packs

  `RAILS_ENV=production bundle exec rake assets:precompile`

- push to heroku

  `git push heroku master`

- locally re-establish yarn

  `yarn install --check-files`

Obnoxious rebuild.
```
rm -rf public/assets/*
rm -rf public/assets_dev/*
rm -rf public/packs/*
RAILS_ENV=production bundle exec rake assets:precompile
yarn install --check-files
rails s --binding=127.0.0.1

```

### Deploy.sh
```
RAILS_ENV=production bundle exec rake assets:precompile
git add .
git ci -m "assets precompile"
git push heroku master
```
