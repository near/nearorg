#!/bin/bash

./bin/search_and_replace.sh public\/blog "\/wp\-content" "https\:\/\/pages\.near\.org\/wp\-content"
./bin/search_and_replace.sh public\/blog "\=\"\/wp\-content" "\=\"https\:\/\/pages\.near\.org\/wp-content"
./bin/search_and_replace.sh public\/blog "\/wp\-includes" "https\:\/\/pages\.near\.org\/wp\-includes"
./bin/search_and_replace.sh public\/blog "\?paged\=" "page\/"
