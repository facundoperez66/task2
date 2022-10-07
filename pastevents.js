console.log(data)
const container = document.getElementById(`container`)

//console.log(data.events[0])


function filtrarFechas(array,fecha){
    let filtrados = []
    for(let i = 0; i < array.length; i++){
        if( array[i].date < fecha ){
            filtrados.push(array[i])
        }
    }
    return filtrados
}

const fechas = filtrarFechas( data.events, `2022-01-01`)



function imprimirTarjetas(fecha,container){
    
    container.innerHTML += `  
    <article class="card">
    <img src="${fecha.image}" alt="food">
    <h4>${fecha.name}</h4>
    <p>${fecha.date}</p>
    <p>${fecha.category}</p>
    <div class="ancorbut">
    <a href="./details.html">more info</a>
    </div>
    </article>

`
}

for(let fecha of fechas){
    imprimirTarjetas( fecha, container)
}

console.log(fechas)