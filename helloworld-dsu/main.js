//Load openDSU enviroment
require("../opendsu-sdk/builds/output/openDSU");

//Load openDSU SDK
const opendsu = require("opendsu");

//Load resolver library
const resolver = opendsu.loadApi("resolver");

//Load keyssi library
const keyssispace = opendsu.loadApi("keyssi");

//Create a template keySSI (for default domain). See /conf/BDNS.hosts.json
const templateSSI = keyssispace.createTemplateSeedSSI('default');

let data  = {"message": "Hello world!"};

$$.LEGACY_BEHAVIOUR_ENABLED = true;

//Create a DSU
resolver.createDSU(templateSSI, (err, dsuInstance) =>{
    //Reached when DSU created
    if (err){
        throw err;
    }

    //Methods found in: /modules/bar/lib/Archive.js
    dsuInstance.writeFile('/data', JSON.stringify(data), (err) => {
        //Reached when data written to BrickStorage

        if(err){
            throw err;
        }
        console.log("Data written succesfully! :)");


        dsuInstance.getKeySSIAsString((err, keyidentifier) => {
            console.log("KeySSI identifier: ", keyidentifier);

            resolver.loadDSU(keyidentifier, (err, anotherDSUInstance) => {
                if(err) {
                    throw err;
                }

                anotherDSUInstance.readFile('/data', (err, data)=>{
                    //Reached when data loaded
                    if(err){
                        throw err;
                    }

                    const dataObject = JSON.parse(data.toString()); //Convert data (buffer) to string and then to JSON
                    console.log("Data load succesfully! :)", dataObject.message); //Print message to console
                });
            });
        });
    });
});