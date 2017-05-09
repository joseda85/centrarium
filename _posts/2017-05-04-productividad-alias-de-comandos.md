---
layout: post
title:  "Productividad en Linux: alias de comandos"
date:   2017-05-04 11:37
cover:  "/img/portadas-blog/alias.svg"
cover_alt: Alias de comandos
cover_title: Alias de comandos
permalink: "/blog/linux-alias-de-comandos/"
excerpt: "Los alias de comandos son nombres cortos que asignas a otros comandos, normalmente más largos. Aprende a registrar tus propios alias y a usar esta funcionalidad en este artículo."
featured: true
---

## El problema: comandos indescifrables

No es ningún secreto decir que las palabras "Linux" y "terminal" van unidas de la mano, ¿verdad? Es imposible adentrarte en alguna distribución sin lanzar un sólo comando.

Todos nos asustamos al usar las primeras veces la terminal, pero cuanto más la usas más te sorprende la potencia que tiene. Puedes instalar una o varias aplicaciones y/o paquetes con una única orden, cuando en Windows tenías que buscar la aplicación usando un buscador, descargarte el install.exe, ejecutarlo con doble click y finalmente: `Siguiente > Siguiente > Siguiente > Instalar > Finalizar`. Vamos, que en el momento que empiezas a sacarle partido es *¡una maravilla!*

¿Entonces cuál es el problema? Muy simple. Hay comandos fáciles de recordar, como
```
sudo apt-get install ...
```
pero otros, en cambio, parecen jeroglíficos indescifrables, como por ejemplo, si quieres obtener información sobre tu tarjeta gráfica, existe la siguiente orden:

```
lspci -v -s `lspci | awk '/VGA/{print $1}'`
```
¿Entiendes algo? Porque yo apenas nada.

## La solución: registrar tus alias

Pues sí, en Linux (casi)siempre existe una solución, y en este caso son los **alias de comandos**. Un alias no es más que otro nombre que le asignas a una orden, por muy larga que sea ésta.

A la orden anterior (la de obtener información de tu tarjeta gráfica), podrías asignarle el alias `gpuinfo`, y a partir de entonces, lanzando el comando:

```
gpuinfo
```

se obtendrá el mismo resultado que con

```
lspci -v -s `lspci | awk '/VGA/{print $1}'`
```

¿A que es fantástico? Y ahora la siguiente pregunta es: *¿Cómo se registran los alias?* Pues con un simple comando:

```
alias nombre="comando a ejecutar"
```

Para el ejemplo de obtener información de la tarjeta gráfica sería

```
alias gpuinfo="lspci -v -s `lspci | awk '/VGA/{print $1}'`"
```

Y hasta que apagues el equipo podrás ejecutar el comando `gpuinfo`. Pero no desesperes, si quieres que el cambio perdure para siempre, incluye la línea de creación del alias en el fichero `~/.bashrc`.

Una última cosa. Cuando registras uno o varios alias en el fichero  `~/.bashrc` el alias no estará disponible inmediatamente, porque este fichero ejecuta todas las órdenes escritas en él sólo al iniciar el sistema. Así que tendrás que *reiniciar el PC* o *ejecutar la orden de registro de alias* en tu terminal para que el cambio sea efectivo.

## Ejemplos de alias

Y finalmente te mostraré una serie de ejemplos de alias que te pueden resultar interesantes. Te animo a que los pruebes ;)

---

Listar los ficheros y directorios de un directorio junto con una serie de datos extras

```
alias ll="ls -l --color=auto"
```
---

Buscar en el histórico de comandos un comando usado anteriormente

```
alias hist="hystory | grep"
```

Para usar este alias tienes que escribir

```
hist "patrón a aplicar"
```

---

Moverte varios directorios atrás

```
alias ..="cd .."
alias ...="cd ../.."
alias ....="cd../../.."
```

## Extras

-Si quieres ver más ejemplos de alias, te sugiero que eches un vistazo a mi fichero [.bashrc](https://gist.github.com/josedabm/dca79f8a86b3291014eaf258c805bab2), que lo tengo guardado en github gist. Lo voy actualizando de vez en cuando.

-Los alias son bastante útiles, pero hay que ser prudente con su uso. Abstraerse demasiado de muchos comandos puede ser contraproducente.

## Conclusión

Lo bueno de las distribuciones Linux es que son muy customizables. Y gracias a ello podemos llevar a cabo una serie de buenas prácticas para hacer nuestro entorno más productivo. Una de ellas es el uso de alias.

Espero que hayas disfrutado de esta lección. Para cualquier cosa relacionada con el tema puedes escribirme usando el [formulario de contacto]({{ site.baseurl }}/contacto).

¡Nos vemos en el próximo artículo!
