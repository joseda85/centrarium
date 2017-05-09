---
layout: post
title:  "Guake, la terminal omnipresente"
date:   2017-05-09 06:37
cover:  "/img/portadas-blog/guake.svg"
cover_alt: Guake
cover_title: Terminal Guake
permalink: "/blog/terminal-guake/"
excerpt: "Guake es una terminal distinta. Lo que le diferencia con respecto a otras terminales es que nunca se cierra, y siempre se encontrará disponible en un segundo plano para poder utilizarla. Lee este artículo para descubrir por qué es tan buena para la productividad"
featured: true
---

# Introducción

¡Hola! Hoy vamos a ver una app de terminal que es distinta a la gran mayoría de las que has visto. ¡Desde que la probé estoy encantado! Así que comencemos.

**Guake** es una terminal, inspirada en las típicas consolas de juegos como "Quake", "Half life", "Counter Strike", etc. Como figurarás, su nombre están inspirado en el primer juego que he mencionado.

Esta terminal tiene las siguientes características:

- Una vez que la abres **siempre está disponible**.
- Se abre en segundo plano **sin ocupar una ventana**, por lo que no te molestará cuando no la necesites.
- Puedes tener varias **pestañas**, cada una con una terminal.
- Se abre y se cierra pulsando una tecla (por defecto `F12`), y puedes hacer que ocupe una porción de la pantalla o la pantalla completa.
- **Combinaciones de teclado** para:
  - Gestión de pestañas.
  - Copiar/pegar texto.
  - Zoom.

![Demostración de Guake]({{ site.baseurl }}/img/gifs/demostracion-guake.gif  "Demostración de guake")

¿Qué te parece? Pues ésto solo acaba de empezar :)

## Intalación y configuración

Para instalar guake solo tienes que ejecutar uno de los siguientes comandos, dependiendo del tipo de distribución de Linux en la que te encuentres.

{% highlight bash %}
  sudo apt-get install guake  # Ubuntu y derivados.
  sudo pacman -S guake        # Arch y derivados.
  sudo yum install guake      # Fedora y derivados.
{% endhighlight %}

Una vez instalada abre guake desde tu menú de aplicaciones o ejecuta el comando `guake` en la terminal por defecto que tengas hasta el momento.

A partir de ahora sólo tendrás que pulsar `F12` para mostrar la terminal, y otra vez `F12` para ocultarla.

Para configurarla, haz click derecho sobre la terminal de guake y selecciona `Preferencias` en el menú contextual. Tendrás una serie de pestañas donde podrás configurarlo todo.

Como último apunte, te aconsejo que configures tu sistema para que al encenderse el PC, se inicie guake automáticamente.

## ¿Por qué es tan buena para la productividad?

La terminal es una herramienta muy útil. Pero no siempre la necesitas, por lo que a veces resulta tedioso tenerla en una ventana abierta. Y cuando la cierras y en algún momento la vuelves a necesitar, la abres y tienes que volver a entrar en el directorio en el que estabas trabajando, o volver a lanzar ciertos comandos.

Bueno, pues con guake solucionas ésto. Una vez la abres, presionando `F12` muestras la terminal, y pulsando otra vez la misma tecla, la ocultas.

_Se oculta, pero no se cierra_

Si estabas ejecutando algún servicio, éste sigue ejecutándose cuando vuelves a pulsar `F12`. Si estabas situado en un directorio, sigues ahí cuando vuelves a mostrar la terminal. ¡Ésto es fantástico!

Otra razón por la que esta terminal es tan productiva es porque puedes controlarla por completo usando atajos de teclado. Para ver los atajos de teclado disponibles, e incluso modificarlos, haz click con el botón derecho sobre cualquier punto de guake, y ve a `Preferencias > Atajos de teclado`.

## Pestañas: añade tantas terminales como quieras

En guake también puedes usar pestañas. En cada pestaña tendrás una terminal diferente, y podrás ejecutar distintos servicios y scripts en cada una. Lo mejor de todo es que puedes gestionar las pestañas y navegar entre ellas usando atajos de teclado.

![Pestañas en Guake]({{ site.baseurl }}/img/gifs/guake-pestanas.gif  "Pestañas en guake")

## Atajos de teclado para copiado y pegado de texto

En esta terminal, también puedes copiar y pegar texto.

Para copiar, selecciona el texto y pulsa `ctrl + shift + c`.

Para pegar, pulsa `ctrl + shift + v`.

## Pantalla completa o pantalla partida, tu eliges

Pulsando `F12` muestras la terminal. Inicialmente, la terminal te aparecerá ocupando la mitad de arriba de la pantalla.

Con el ratón puedes acercarlo a la zona más baja de la terminal y redimensionarla.

Si pulsas `F11`, la terminal pasa a ocupar la pantalla completa (yo la prefiero así).

Y si vuelves a pulsar `F11`, vuelves a tener la terminal con su tamaño anterior.

En las preferencias puedes configurar el tamaño por defecto.

![Tamaños de Guake]({{ site.baseurl }}/img/gifs/guake-tamanos.gif  "Tamaños de guake")

## Conclusión final

Para mi gusto, **guake** es la mezcla perfecta de sencillez y productividad. Una terminal que siempre tendrás abierta, accesible a toque de una tecla y muy customizable.

¡Pruébala y me cuentas!

Nos vemos en el próximo artículo ;)

---

_PD: Combina esta termnal con los poderes de [tmux][34a22e8c] y [tmuxinator][e3fa24e4] para elevar al cubo tu productividad._

  [34a22e8c]: {{ site.baseurl }}/blog/tmux-multiplexa-la-terminal/ "Tmux: app para multiplexar la terminal"
  [e3fa24e4]: {{ site.baseurl }}/blog/tmuxinator-plantillas-para-tmux/ "Tmuxinator: plantillas para tmux"
