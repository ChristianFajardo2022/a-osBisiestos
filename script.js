function esBisiesto (year) {
    return year % 100 === 0 ?
                year % 400 === 0 :
                    year % 4 === 0;
};


// nota: se puede ejecutar el console.log en la terminal con el comando "node script.js"

console.log(`¿El año 2000 es bisiesto?: ${esBisiesto(2000)}`);
console.log(`¿El año 2002 es bisiesto?: ${esBisiesto(2002)}`);
console.log(`¿El año 2004 es bisiesto?: ${esBisiesto(2004)}`);
console.log(`¿El año 2006 es bisiesto?: ${esBisiesto(2006)}`);
console.log(`¿El año 2008 es bisiesto?: ${esBisiesto(2008)}`);
console.log(`¿El año 2010 es bisiesto?: ${esBisiesto(2010)}`);
console.log(`¿El año 2012 es bisiesto?: ${esBisiesto(2012)}`);
console.log(`¿El año 2014 es bisiesto?: ${esBisiesto(2014)}`);


