import {direccion} from "./direccion"
import {email} from "./email"
import {telefono} from "./telefono"
export class persona { 
    private _nombre: String
    private _apellidos: String
    private _edad: Number
    private _DNI: Number
    private _cumpleaños: Date
    private _colorFavorito: String
    private _sexo: String
    private _direcciones: direccion[]
    private _mails: email[]
    private _telefonos: telefono[]
    private _notas: String

constructor(nombre: String, apellidos: String, edad:Number, DNI: Number, cumpleaños: Date, colorFavorito:String, sexo: String, direcciones:direccion[], mails: email[], telefonos: telefono[], notas: String) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._DNI = DNI;
        this._cumpleaños = cumpleaños
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
}

get nombre () {
    return this._nombre
   }

set nombre (value: String) {
    this._nombre = value
   }

   get apellidos () {
    return this._apellidos
   }

set apellidos (value: String) {
    this._apellidos = value
   }

   get edad () {
    return this._edad
   }

set edad (value: Number) {
    this._edad = value
   }

   get DNI () {
    return this._DNI
   }

set DNI (value: Number) {
    this._DNI = value
   }

   get cumpleaños () {
    return this._cumpleaños
   }

set cumpleaños (value: Date) {
    this._cumpleaños = value
   }

   get colorFavorito () {
    return this._colorFavorito
   }

set colorFavorito (value: String) {
    this._colorFavorito = value
   }

   get sexo () {
    return this._sexo
   }

set sexo (value: String) {
    this._sexo = value
   }

get direcciones (): direccion [] {
    return this._direcciones
   }

set direcciones (value: direccion[]) {
    this._direcciones = value
   }

   get mails (): email[] {
    return this._mails
   }

set mails (value: email[]) {
    this._mails = value
   }

   get telefonos (): telefono[] {
    return this._telefonos
   }

set telefonos (value: telefono[]) {
    this._telefonos = value
   }

get notas () {
    return this._notas
   }

set notas (value: String) {
    this._notas = value
   }
} 
