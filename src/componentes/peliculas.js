import { useEffect, useRef } from 'react';


const Peliculas = () => {

    const pagina = useRef(1);

    useEffect(() => {
        const btnAnterior = document.getElementById("btnAnterior");
        const btnPosterior = document.getElementById("btnPosterior");

        btnAnterior.addEventListener("click", () => {
            if (pagina.current > 1) {
                pagina.current -= 1;
                obtenerPeliculas();
            }
        })

        btnPosterior.addEventListener("click", () => {
            if (pagina.current < 1000) {
                pagina.current += 1;
                obtenerPeliculas();
            }
        })

        obtenerPeliculas()
    }, [])

    const obtenerPeliculas = async () => {

        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5d209a6137c34c5c0a01607ee6e13021&languaje=es-MX&page=${pagina.current}`)

        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log(datos);
            let peliculas = "";
            datos.results.forEach(pelicula => {
                peliculas += `
                        <div  class="card">
                            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                            <div class="card-body">
                                <h3 class="card-title">${pelicula.title}</h3>
                                <p class="card-text">${pelicula.overview}</p>
                            </div>                           
                        </div>
                    `;
            });

            document.getElementById("contenedor").innerHTML = '<div class="tarjetas">' + peliculas + '</div>'
        }

    }

}


export default Peliculas;