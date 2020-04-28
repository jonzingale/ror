#!/bin/bash
RAILS_ENV=production bundle exec rake assets:precompile
git add .
git ci -m "assets precompile"
git push heroku master