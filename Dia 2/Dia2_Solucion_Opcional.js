nombre=prompt("¿Cuál es tu nombre?: ")
edad=prompt("¿Cuántos años tienes?: ")
lenguaje=prompt("¿Qué lenguaje de programación estás estudiando?: ")

alert(`Hola ${nombre}, tienes ${edad} años y ya estas aprendiendo ${lenguaje}`)

gustaEstudiar=prompt(`¿Te gusta estudiar ${lenguaje}?
Responde:
    1 para si
    2 para no
    `)
    
if (gustaEstudiar==1){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
}else if (gustaEstudiar==2){
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
}else{
    alert("Pillin, esa no es una opcion valida")
}
