export class telefono {
    private _tipo: String
    private _numero: Number

 constructor(tipo: String, numero:Number) {
     this._tipo = tipo;
     this._numero = numero;
    }

 get tipo () {
     return this._tipo
    }

 set tipo (value: String) {
     this._tipo = value
    }

 get numero () {
     return this._numero
    }
    
 set numero (value: Number) {
     this._numero = value
    }   
}
