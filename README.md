# Tutorial workspace

*tutorial-workspace*  bundles all the necessary dependencies for building and running SSApps in a single package.

### Core components

The *tutorial-workspace*  bundle contains the following core components required for building and running a Self Sovereign Application:

- Octopus task runner
- Opendsu sdk
- Web Server
- Minimal demo SSApp example

*Octopus*  is the first tool installed by the ssapp-demo-workspace and it is used to further fetch and build the rest of the dependencies. For more information on Octopus read the [OpenDSU dedicated page](https://opendsu.com/rfc095) in the documentation.

The web server is configured to serve static files from the web-server directory inside the *template-workspace* installation. Besides serving static files, the server exposes the Brick Storage API required to store data to EDFS.

## Prerequisites

You need the following software installed on your machine in order to continue the this guide

1. Install or update [Node](https://nodejs.org/en/) (including NPM) to version **>=v18.12.1** .
2. Install or update [Git](https://git-scm.com/)

### Installation

The only commands you need to run in the *tutorial-workspace* workspace are:
```sh
$ git clone https://github.com/webcardinal/tutorial-workspace
$ cd tutorial-workspace
$ npm install
$ npm run server
$ npm run build-all
```
Additional steps
```
$ npm run install-demo
$ npm run install-demiurge
```

A simple and minimal SSApp application is the first thing you can checkout after running the above commands and accessing ```http://localhost:8080/demo-wallet/loader```. 

### Adding more SSApps

OpenDSU.com has a dedicated document on [how to create a ssapp](https://opendsu.com/wallets/how-to/a-ssapp) and that will give you a head start on how to create and add multiple ssapps into your workspace.

## Hello World! DSU Tutorial

This tutorial sub project helps you understand how you can work directly with DSUs.

The code for this tutorial is in [helloworld-dsu] folder. It consist of only one file _main.js_

To **FIRST** run it simply **run the steps** found in the [Installation] section above then:

```sh
# Step 1: Go inside [helloworld-dsu]
cd helloworld-dsu

# Step 2: Run the app
node main.js
```

You should get something like:

```
....
Data written succesfully! :)
KeySSI identifier:  BBudGH6ySHG6GUHN8ogNrTWbZHtTCUHnMvP5Un8LrUFrdb2yDx3pbh85gMdLgEAoex6rX86B9dY5Fscjx77uMcfmh
Data load succesfully! :) Hello world!
....
```
