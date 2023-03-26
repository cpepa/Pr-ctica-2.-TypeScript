export class email {
    private _tipo: String
    private _direccion: String

 constructor(tipo: String, direccion:String) {
     this._tipo = tipo;
     this._direccion = direccion;
}

 get tipo () {
     return this._tipo
    }

 set tipo (value: String) {
     this._tipo = value
    }

 get direccion () {
     return this._direccion
    }

 set direccion (value: String) {
     this._direccion = value
    }
}