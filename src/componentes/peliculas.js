import React, {useState, useEffect} from 'react';
 

const Peliculas =  () => {

    const [pelis, setPelis] = useState([]);

    const btnAnterior = document.getElementById("btnAnterior");
    const btnPosterior = document.getElementById("btnPosterior");
    let pagina = 1;

    btnAnterior.addEventListener("click", () => {
            if (pagina > 1){
                pagina -= 1;
                obtenerPeliculas();
            }
        })

    btnPosterior.addEventListener("click", () => {
        if (pagina < 1000){
            pagina += 1;
            obtenerPeliculas();
        }
    })

    useEffect(() => {
            obtenerPeliculas()
             }, [])
        
    const obtenerPeliculas = async () => {
            const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b99d7773e83eff1759b62bfc0e8a373f&languaje=es-MX&page=${pagina}`)

            if (respuesta.status === 200){
                const datos = await respuesta.json();
                console.log(datos);
                let peliculas = "";
                datos.results.forEach( pelicula => {
                    peliculas += `
                        <div>
                            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                            <h3 class="titulo">${pelicula.title}</h3>
                        </div>
                    `;
                });

               document.getElementById("contenedor").innerHTML = peliculas;
            }

        }

    
            console.log(pelis.results);
            console.log( Object.entries(pelis));
            pelis.forEach((element) => {
                console.log(element)
                
                })
    }


export default Peliculas;