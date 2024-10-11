window.addEventListener("load",()=>{
    console.log("hola");
    document.getElementById("btnAgregar").addEventListener("click",()=>{
        console.log("enderpeeel");
        let eNombre = document.getElementById("Nombre");
        let eDirector = document.getElementById("Director");
        let eDatee = document.getElementById("Datee");
        let eValoracion = document.getElementById("Valoracion");
        let eGenero = document.getElementById("Genero");
        let eMayorEdad = document.getElementById("mayorEdad");
        //recupero contenido
        let vNombre = eNombre.value;
        let vDirector = eDirector.value;
        let vDatee = eDatee.value;
        let vValoracion = eValoracion.value;
        let vGenero = eGenero.value;
        let vMayorEDad= eMayorEdad.checked;

        console.log(vNombre)
        console.log(vDirector)
        console.log(vDatee)
        console.log(vValoracion)
        console.log(vGenero)
        console.log(vMayorEDad)

        let Peliculas={
            Nombre:vNombre,
            Director:vDirector,
            Datee:vDatee,
            Valoracion:vValoracion,
            Genero:vGenero,
            MayorEdad:vMayorEDad
        }
        console.log(Peliculas);
    })
})

