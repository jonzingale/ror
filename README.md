# Rails and React on Heroku

## ruby version:
`rvm use ruby-3.3.0`

## redis:
`brew install redis`

## gems:
`gem install nokogiri -v 1.13.10`
`rails-7.1.3.2`
`pg-1.5.6`

## create rails with postgres
`rails new myapp --database=postgresql`

## fire it up:
`rails server`
`http://127.0.0.1:3000/index`

## Rails as API
`rails new toyapp --api --database=postgresql`

ping `securities`:
`curl http://127.0.0.1:3000/securities`

## sidekiq:
`rails c`
`MyFirstJob.perform_async "Affan", 31`
`exit`
`bundle exec sidekiq`


### Deploy.sh
```
RAILS_ENV=production bundle exec rake assets:precompile
git add .
git ci -m "assets precompile"
git push heroku master
```
