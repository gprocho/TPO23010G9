// API Clima utilizada: https://open-meteo.com
const getClimaAxios = async () => {
    try {
        const respuesta = await axios('https://api.open-meteo.com/v1/forecast?latitude=-34.61&longitude=-58.38&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&current_weather=true&forecast_days=3&timezone=America%2FSao_Paulo')
        console.log("Respuesta:", respuesta.data);

        const { createApp } = Vue
        createApp({
            data() {
                return {
                    datos: respuesta.data
                    




                }
            }
        }).mount("#api-clima-axios")
    } catch (error) { console.log("Hubo un error", error) }
}
getClimaAxios()

// API Cambio utilizada: https://docs.awesomeapi.com.br/api-de-moedas
const getCambioAxios = async () => {
    try {
        const respuesta = await axios ('https://economia.awesomeapi.com.br/last/USD-ARS,EUR-ARS,BRL-ARS')
        console.log("Respuesta:", respuesta.data);

        const { createApp } = Vue
        createApp({
            data() {
                return {
                    datos: respuesta.data
                }
            }
        }).mount("#api-cambio-axios")
    } catch (error) { console.log("Hubo un error", error) }
}
getCambioAxios()
