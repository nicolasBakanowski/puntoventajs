
let myStorage = window.localStorage;
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
let PVenta = { 
    /*  creamos un espacio de nombre PVenta
        vamos a crear un CRUD (Create, Read, Update, Delete)
        Vamos almacenar nuestras objetos en Arrays y respaldarlos con localStorage
        recordar que el id de cada Objeto debe ser unico en su Lista
    */

    _usuarios:[], 
//  Usuario(id,usuario,clave)
                  //  Ejemplo  {id:0,usuario:'admin',clave:'root'}
    _categorias:[], // Categoria (id, nombre , idPadre , detalle, porcgancia) 
                    // Ejemplo Categoria {id:0,nombre:'General',idPadre:0,detalle:'Todas las Categorias',porcganancia:35.5}
    _productos:[], // Producto(id,codigo,foto,nombre,idCategoria,precioc,preciov,conteo:[KILO | UNIDAD])
    _facturas:[],
    _detFacturas:[],

    
    // Metodos de nuestro Punto de Venta
    // Recordar solo agregar los metodos de la Api./
    //------------------------------------------------------------// METODOS USUARIO//-------------------------------------------------//
    getUsuario:function(idUsuario){
       let usuario=null;
       PVenta._usuarios.map((u)=> {if (u.id == idUsuario) return usuario=u});
       return usuario;
    },
    getUsuarios(){
        return PVenta._usuarios;
    },
    
    getpositionUser(usuario){
        let pos = null
        foreach (PVenta._usuarios in objeto);{
            pos += 1
            if (objeto.id == usuario){
                return pos
            };
        };
    },

    deleteUsuario(idUsuario){
        let indice=-1; // no hemos encontrado nada aun
        
        for (let i=0; i<PVenta._usuarios.length;i++){
            if (PVenta._usuarios[i].id == idUsuario){ 
                indice =i;
            }
        }    
    
        if (indice>=0){ //hemos localizado el objeto persona
                PVenta._usuarios.splice(indice,1);
                this.saveData();
        }
     },
    updateUsuario(usuario){
        let indice=-1; // no hemos encontrado nada aun

        for (let i=0; i<PVenta._usuarios.length;i++){
            if (PVenta._usuarios[i].id == usuario.id) 
                indice =i;
        }
        if (indice>=0){ //hemos localizado el objeto persona
            PVenta._usuarios[indice]=usuario;
            this.saveData();
        }
    },

    addUsuario(usuario){
       PVenta._usuarios.push(usuario);
       this.saveData();

    },
    //------------------------------------------------------------// METODOS CATEGORIAS//-------------------------------------------------//
    getcategoria:function(idcategoria){
        let categoria=null;
        PVenta._categorias.map((u)=> {if (u.id == idcategoria) return categoria=u});
        return categoria;
     },
     getcategorias(){
         return PVenta._categorias
     },
 
     addcategoria(categoria){
        PVenta._categorias.push(categoria);
        this.saveData();
 
     },
 
     deletecategoria(categoria){
         let indice =0;
         for (let i=0; i<PVenta._categorias.length;i++){
             if (PVenta._categorias[i].id == categoria){ 
                 indice =i;
             }
         }    
         if (indice>=0){ 
                 PVenta._categorias.splice(indice,1);
                 this.saveData();
         }
     },
 
     updatecategoria(categoria){
         let indice=-1; 
 
         for (let i=0; i<PVenta._categorias.length;i++){
             if (PVenta._categorias[i].id == categoria.id) 
                 indice =i;
         }
         if (indice>=0){ 
             PVenta._categorias[indice]=categoria;
             this.saveData();
         }
     },
//------------------------------------------------------------// METODOS PRODUCTO//-------------------------------------------------//
    getproductos:function(idproducto){
        let producto=null;
        PVenta._productos.map((u)=> {if (u.id == idproducto) return producto=u});
        return producto;
    },
    getproductos(){
        return PVenta._productos
    },

    addproducto(producto){
        PVenta._productos.push(producto);
        this.saveData();

    },

    deleteproducto(producto){
        let indice =0;
        for (let i=0; i<PVenta.productos.length;i++){
            if (PVenta._productos[i].id == producto){ 
                indice =i;
            }
        }    
        if (indice>=0){ 
                PVenta._productos.splice(indice,1);
                this.saveData();
         }
    },

    updateproducto(producto){
        let indice=-1; 

        for (let i=0; i<PVenta.productos.length;i++){
            if (PVenta.productos[i].id == producto.id) 
                indice =i;
        }
        if (indice>=0){ 
            PVenta.productos[indice]=producto;
            this.saveData();
        }
    },

    saveData(){
        let data={
            usuarios:this._usuarios,
            categorias: this._categorias,
            productos: this._productos,
            facturas: this._facturas,
            detFacturas: this._detFacturas
        }
        myStorage.setItem('datajson',JSON.stringify(data));
        console.log('OK');
    },

    init:function(){
        //cargamos todos nuestros array del localStorage
    let data = myStorage.getItem('datajson');
    if (data){
        data = JSON.parse(data);
        this._usuarios = data.usuarios;
        this._categorias = data.categorias;
        this._productos = data.productos;
        this._facturas = data.facturas;
        this._detFacturas = data.detFacturas;       
    }
    
        
    }

}

PVenta.init();// metodo obligatorio primero que todos para cargar datos desde el localStorage
PVenta.getUsuarios();
