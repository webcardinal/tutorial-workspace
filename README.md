# Tutorial workspace

*tutorial-workspace*  bundles all the necessary dependencies for building and running SSApps in a single package.

### Core components

The *tutorial-workspace*  bundle contains the following core components required for building and running a Self Sovereign Application:

- Octopus task runner
- Opendsu local installation
- Web Server
- SSApp application loader

*Octopus*  is the first tool installed by the ssapp-demo-workspace and it is used to further fetch and build the rest of the dependencies. For more information on Octopus read the [OpenDSU dedicated page](https://opendsu.com/rfc095) in the documentation.

*OpenDSU* provides the *VirtualMQ* service and the javascript runtime bundles required for a SSApp to interact with EDFS and OpenDSU nodes

The web server is configured to serve static files from the web-server directory inside the *template-workspace* installation. Besides serving static files, the server exposes the Brick Storage API required to store data to EDFS.

The wallet template installed by *template-workspace* is a plain customisable SSApp which once loaded will display a menu with all the SSApp applications contained in this ssapp-demo-workspace installation. Through this app you will be able to access your newly created SSApp.

### Installation

The only commands you need to run in the *tutorial-workspace* workspace are:
```sh
$ npm install
$ npm run server
$ npm run install-demo
$ npm run build-all
```
A simple and minimal SSApp application is the first thing you can checkout after running the above commands and accessing ```http://localhost:8080/demo-wallet/loader```. 

### Adding more SSApps

OpenDSU.com has a dedicated document on [how to create a ssapp](https://opendsu.com/wallets/how-to/a-ssapp) and that will give you a head start on how to create and add multiple ssapps into your workspace.
