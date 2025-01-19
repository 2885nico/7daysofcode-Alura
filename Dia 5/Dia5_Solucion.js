let miFruta = [];
let miLacteo = [];
let miCongelado = [];
let miDulce = [];
producto="";
while (producto != "caca"){
    agregar = prompt("Deseas agregar un producto?(si|no): ")
    if(agregar=="si"){
        producto = prompt("Que eseas agregar?: ")
        if(producto=="")
        {
            alert("no te entendi perrito")
            
        } else {
        categoria = prompt("Ah si?, y a que categoria pertenece ese producto?(fruta|lacteo|congelado|dulce): ")
        
        if(categoria=='fruta'){
            miFruta.push(producto);
        } else {
            if(categoria=='lacteo'){
            miLacteo.push(producto);

        } else {
            if(categoria=='congelado'){
            miCongelado.push(producto);
        } else {
            if(categoria=='dulce'){
                miDulce.push(producto);
        }
        else{
            alert("No te entendi perritox")
        }
        }
        }
        }
    } 
        
    }else {
        if(agregar=="no"){
            alert(`Bien, tu lista de compra es:\n Frutas: ${miFruta}\n Verduras: ${miLacteo}\n Congelados: ${miCongelado}\n Dulces: ${miDulce}`)
        break;
        }else{
            alert("no te entendi perrito")
        }

}
}
