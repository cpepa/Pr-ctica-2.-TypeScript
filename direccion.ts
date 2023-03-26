export class direccion {
    private _calle: String
    private _numero: Number
    private _piso: Number
    private _letra: String
    private _codigoPostal: Number
    private _poblacion: String
    private _provincia: String

    constructor(calle: String, numero:Number, piso: Number, letra: String, codigoPostal:Number, poblacion: String, provincia:String) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

 get calle () {
     return this._calle
    }

 set calle (value: String) {
     this._calle = value
    }

 get numero () {
     return this._numero
    }

 set numero (value: Number) {
     this._numero = value
    }

 get piso () {
     return this._piso
    }

 set piso (value: Number) {
     this._piso = value
    }

 get letra () {
     return this._letra
    }

 set letra (value: String) {
     this._letra = value
    }

 get codigoPostal () {
     return this._codigoPostal
    }

 set codigoPostal (value: Number) {
     this._codigoPostal = value
    }

 get poblacion () {
     return this._poblacion
    }

 set poblacion (value: String) {
     this._poblacion = value
    }

 get provincia () {
     return this._provincia
    }

 set provincia (value: String) {
     this._provincia = value
    }
}