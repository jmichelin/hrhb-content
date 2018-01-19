#!/bin/bash
if [ "$1" != "" ]; then
    echo "Creating lesson" $1
    mkdir $1
    cd $1
    echo "/* Setup Here */" >> 01-setup-revision.js
    echo "module.exports = $1$2$3$4$5;" >> 02-impl-revision.js
    echo "// Code Here" >> $1-$2-$3.js
    echo "// Tests Here" >> $1-$2-$3.test.js

else
    echo "You must supply a lesson name in the format of lesson-name"
fi