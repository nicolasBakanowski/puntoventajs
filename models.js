// Definimos Usuario
// Definimos la funcion constructora del Objeto Usuario
// EL nombre de usuario debe ser Unico.
// id,nombre,apellido,correo,usuario,clave


function  Usuario (id,nombre,apellido,correo,usuario,clave){
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
    this.correo=correo;
    this.usuario=usuario;
    this.clave=clave;
}

// let usuario = new Usuario(0,'juan','perez','dos@dos','juan','1234'); //Definimos un vendedor


// id, nombre , idCatPadre , detalle, porcgancia
// el id y nombre debe ser unicos.

function Categoria(id, nombre , idCatPadre , detalle, porcgancia) {
    this.id=id, 
    this.nombre=nombre , 
    this.idCatPadre=idCatPadre , //id de la categoria padre
    this.detalle=detalle, 
    this.porcgancia=porcgancia
}

//let catpanaderia = new Categoria(0,'Panaderia',null,'Varios..',50);
//console.log(catpanaderia);


//id,codigo,foto,nombre,idCategoria,precioc,preciov,conteo:[KILO=false | UNIDAD=true]
//el nombre debe ser unico
function Producto(id,codigo,foto,nombre,idCategoria,precioc,preciov,conteo,stock){
    this.id=id;
    this.codigo=codigo;
    this.foto=foto;
    this.nombre=nombre;
    this.idCategoria=idCategoria;
    this.precioc=precioc;
    this.preciov=preciov;
    this.conteo=conteo;
    this.stock = stock;
}

//let azucar = new Producto(0,1010,'fotoazucar.jpg','Azucar',0,45,60,true,600);
//let costilla = new Producto(0,2000,'fotocostilla.jpg','Costilla',2,220,300,false,150.6);


// id, fecha,total, idUsuario, cliente

function Factura (id, fecha,total, idUsuario, cliente){
    this.id=id;
    this.fecha=fecha;
    this.total=total;
    this.idUsuario=idUsuario;
    this.cliente=cliente; // Informacion sobre el cliente.
}

//let nuevafactura = new Factura(0,'15-01-2018',400,1,'Bunader Pablo');


// producto, cantidad, Precio Unitario, Precio Total
function DetFactura(idProducto, cantidad, preciou,preciototal,idFactura){
    this.idProducto=idProducto;
    this.cantidad=cantidad;
    this.preciou=preciou; //precio por unidad
    this.preciototal=preciototal;  
    this.idFactura=idFactura;
}

//let detfactura = new DetFactura(1,5,40,200,0);

