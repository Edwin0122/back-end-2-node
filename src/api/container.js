const { asClass, createContainer, asFunction, asValue } = require("awilix");
//asClass = funcion
//createContainer = donde se van a manejar todas las dependencias que van a ser inyectadas
//asFunction y asValue = funciones que van a ayuddar a inyectar los objetos de las clases que le pasemos

// app start
const StartUp = require("./startup");
const Server = require("./server");
const Routes = require('../api/routes');

//users
const {UserController} =require('../api/controllers');
const {UserService} = require("../services");
const UserRoutes = require("../api/routes/user.routes");
const {UserRepository} = require("../dal/repositories");


//tp_Document
const {Tp_DocumentController} =require('../api/controllers');
const {TpDocumentService} = require("../services");
const TpDocumentRoutes = require("../api/routes/user.routes");
const {Tp_DocumentRepository} = require("../dal/repositories");



//config
const config = require('../config/environments');
const container = createContainer();


//database
const db = require("../dal/entities");

//Contenedor para inicio de dependencias
container
  .register({
    //cuando alguien pida la app le va a dar un objeto de clase StartUp y se va a dar como un singleton que es una unica stancia
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton()
  })
  .register({
    UserController: asClass(UserController).singleton(),
    Tp_DocumentController: asClass(Tp_DocumentController).singleton()
  })
  .register({
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
      db: asValue(db)
  })
  .register({
      UserRoutes: asFunction(UserRoutes).singleton(),
      TpDocumentRoutes: asFunction(TpDocumentRoutes).singleton()
      
  })
  .register({
    UserService: asClass(UserService).singleton(),
    TpDocumentService: asClass(TpDocumentService).singleton()
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    Tp_DocumentRepository: asClass(Tp_DocumentRepository).singleton()
  })

module.exports = container;

