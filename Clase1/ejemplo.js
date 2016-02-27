/**
 * Created by diplomado on 26/02/16.
 */

//asignar una funcion a una variable.
function algo()
{
    return 'hablame';
}

var miFuncion = algo;

console.log(miFuncion());

//Pasar una function como parametro a otra funcion.
function una(f)
{
    console.log(f);
}

function dos()
{
    return 'segundo';
}

console.log(una(dos()));

//Crear un constructor.
function Persona(nombre)
{
    this.nombre = nombre;
}

var mary = new Persona('Maria');

console.log(mary.nombre);

//Agregar un metodo al prototipo de una variable.
Persona.prototype.salude = function()
{
    return this.nombre + ' que mas!';
}

console.log(mary.salude());

//Uso de call.
var obj =
{
    a: 3,
    f: function(n)
    {
        return this.a * n;
    }
};

console.log(obj.f(3));

var obj2 =
{
    a: 3
};

console.log(obj.f.call(obj2, 3));

//Uso de apply
function fun(a, b, c, d)
{
    return (a+b+c+d);
}

var arr = [1, 2, 3, 4];
console.log(fun.apply(null, arr));

//Autoinvocado de la funcion.
(function(n)
{
    console.log('autollamado ' + n);
}('en definicion'));