API-blueprint merging tool
==========================

Simply merges *.apib* and *.md* files into one for further testing and publishing.

Installation
------------

Install package from npm globally

````
npm install -g apibmerge
````

or locally

````
npm install apibmerge --save-dev
````

Usage from command-line
-----------------------
````
apibmerge <directory> [<outputfile>]
````
Usage from script
-----------------
Include in your script as usial
````
var apibmerge = require('apibmerge');
var list = apibmerge.scan(dir); // Scans folder for .md and .apib
apibmerge.merge(list,output); // Creates one file from array of file paths
````
