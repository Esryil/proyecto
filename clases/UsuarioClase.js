class Usuario{
    constructor(data){
        this.id=data.id;
        this.nombre=data.nombre;
        this.usuario=data.usuario;
        this.password=data.password;
        this.salt=data.salt;
        this.tipoUsuario=data.tipoUsuario;
    }

    set id(id){
        this._id=id;
    }

    set nombre(nombre){
        const nombreRenex=/^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if(nombreRenex.test(nombre)){
            this._nombre=nombre;
        }
        
    }

    set usuario(usuario=""){
        if(usuario.length>0 && usuario.length<=15){
            this._usuario=usuario;
        }
        
    }

    set password(password){
        //const passwordRenex= /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[\W_]).{4,}$/;
        //if(passwordRenex.test(password)){
            this._password=password;
        //}
        
    }
    
    set salt(salt){
        this._salt=salt;
    }

    set tipoUsuario(tipoUsuario){
        this._tipoUsuario=tipoUsuario;
    }

    get id(){
        return this._id;
    }

    get nombre(){
        return this._nombre.toUpperCase();
    }

    get usuario(){
        return this._usuario;
    }

    get password(){
        return this._password;
    }

    get salt(){
        return this._salt;
    }

    get tipoUsuario(){
        return this._tipoUsuario;
    }

    get getusuario(){
        const conid={
            id:this._id,
            nombre:this._nombre,
            usuario:this._usuario,
            password:this._password,
            salt:this._salt,
            tipoUsuario:this._tipoUsuario
        }
        const sinid={
            nombre:this._nombre,
            usuario:this._usuario,
            password:this._password,
            salt:this._salt,
            tipoUsuario:this._tipoUsuario
        }
        if(this.id!=undefined){
            return conid;
        }
        else{
            return sinid;
        }
    }
}

module.exports=Usuario;

/*var data={
    nombre:"Ludwing Van Bethoveen",
    usuario:"Bethoveen",
    password:"A1a@a"
}
var usuario1=new Usuario(data)
console.log(usuario1.getusuario);*/