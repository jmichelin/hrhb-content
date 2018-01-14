#!/bin/bash
echo "Positional Parameters"
echo '$0 = ' $0
echo '$1 = ' $1
echo '$2 = ' $2
echo '$3 = ' $3

if [ "$1" != "" ]; then
    echo "Creating lesson" $1
    mkdir $1
    cd $1
    echo "{ \"lesson_title\": \"$1\" }" >> lesson_settings.json

else
    echo "You must supply a lesson name in the format of ##-lesson-name"
fi