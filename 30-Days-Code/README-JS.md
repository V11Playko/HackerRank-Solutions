Esta propiedad devuelve el número de caracteres de una cadena. UTF-16, el formato usado por JavaScript, usa 16-bit para representar los caracteres más comunes, pero necesita usar dos caracteres para otros menos usados, así que es posible que el valor devuelto por length no corresponda al número de caracteres de la cadena.

ECMASCript 2016 (ed. 7) estableció una longitud máxima de 2^53 - 1 elementos. Anteriormente, ninguna longitud máxima era especificada. 

Para una cadena vacía, length es 0.