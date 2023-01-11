const tl = gsap.timeline({defaults: {duration: 0.75, ease: "circ.out"}})

tl.fromTo('.cookie-container', {scale:0}, {scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.5}, ) // aparece tipo explosion al poner scale 0 a scale 1 // agg pa que quede mejor // 
tl.fromTo('.cookie', {opacity: 0, x:-50, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'}, '<' ) // agg la coma para que no tarde el contenido y sea en simultaneo
tl.fromTo('.text', {x:30, opacity:0}, {x: 0, opacity: 1}, '<') // ! El pacman es para que las animaciones sean al mismo tiempo!!!


//  * una animacion va despues de la otra 

// !2:00 QUEDAN

// gsap.fromTo('.text' ,{opacity: 0, y: 100}, {opacity: 1, duration: 1}) // el 100 modificas la opacida de la animacion uwu

// gsap.to('.text', {y: 100, opacity: 0, duration: 1}) //  esto es por si quiero que baje la animacion de las letras