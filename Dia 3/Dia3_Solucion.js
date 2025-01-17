let camino = prompt("Que camino desea seguir? \n 1. Backend \n 2. Frontend \n opcion: ");
i=0;
let conocimientos=[];
function aprender(){
    while(aprender!="nop"){
        let aprender=prompt("Hay alguna tecnologia que te gustaria aprender? :o : ");
        if(aprender=="nop"){
            alert("Estas son las cosas que quieres aprender :o");
            break;
        }
        conocimientos.push(aprender);
    }
    return conocimientos;
}
    alert(`Genial, quieres ser ${camino == 1 ? 'backend':'frontend'}, te ira excelente`);
    if(camino==1){
        let tec = prompt("Que camino desea seguir? \n 1. C# \n 2. Java \n opcion: ");
        alert(`Genial, quieres aprender ${tec == 1 ? 'C#':'Java'}, te ira maravilloso`);
    }
    else{
        let tec = prompt("Que camino desea seguir? \n 1. React \n 2. Vue \n opcion: ");
        alert(`Genial, quieres aprender ${tec == 1 ? 'React':'Java'}, te ira maravilloso`);
    }
    
    aprender().forEach(function(materia) {
        alert(`\tQuieres aprender: ${materia}`);
    });

    let opcion=prompt("Quieres volverte Full stack?: ")
    if(opcion=="si"){
       alert("Genial, quieres ser full stack, te ira excelente"); 
    }
    else{
        alert(`ooh, ya veo, quieres especializarte en ${camino == 1 ? 'backend':'frontend'}, te ira excelente c:`);
    }
