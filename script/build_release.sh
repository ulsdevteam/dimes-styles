#!/usr/bin/env bash

if ! [ -z "$1" ]
  then
    mkdir dist/$1
    cp dist/main.min.css dist/$1/main.min.css
    cp assets/ dist/$1/
fi
