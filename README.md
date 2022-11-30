# Tutorial workspace

*tutorial-workspace*  bundles all the necessary dependencies for building and running SSApps in a single package.

### Core components

The *tutorial-workspace*  bundle contains the following core components required for building and running a Self Sovereign Application:

- Octopus task runner
- Opendsu local installation
- Web Server
- SSApp application loader

*Octopus*  is the first tool installed by the ssapp-demo-workspace and it is used to further fetch and build the rest of the dependencies. For more information on Octopus read the [PrivateSky dedicated page](https://privatesky.xyz/?Tools/octopus) in the documentation.

*OpenDSU* provides the *VirtualMQ* service and the javascript runtime bundles required for a SSApp to interact with EDFS and OpenDSU nodes

The web server is configured to serve static files from the web-server directory inside the *template-workspace* installation. Besides serving static files, the server exposes the Brick Storage API required to store data to EDFS.

The wallet template installed by *template-workspace* is a plain customisable SSApp which once loaded will display a menu with all the SSApp applications contained in this ssapp-demo-workspace installation. Through this app you will be able to access your newly created SSApp.

### Installation

The only commands you need to run in the *tutorial-workspace* workspace are:
```sh
$ npm run dev-install
$ npm run server
$ npm run build-all
```
The SSApp application loader is the first thing you will see after running the *tutorial-workspace* web server and accessing ```http://localhost:8080```. 
It is a basic web application which allows creation and loading of wallets based on the menu wallet template. The SSApp loader registers a service worker responsible with loading the built SSApps from the Brick Storage.

### Adding more ssapps

PrivateSky.xyz has a dedicated document on [how to create a ssapp](https://privatesky.xyz/?Howto/a-ssapp) and that will give you a head start on how to create and add multiple ssapps into your workspace.
