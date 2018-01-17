#!/bin/bash
if [ "$1" != "" ]; then
    echo "Creating lesson" $1
    mkdir $1
    cd $1
    echo "{ \"lesson_title\": \"$1\" }" >> lesson_settings.json
    echo "## $1" >> lesson.md
    echo "// Code Here" >> main.js
    echo "// Tests Here" >> lesson_tests.js

else
    echo "You must supply a lesson name in the format of lesson-name"
fi