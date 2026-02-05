import { weatherSchema } from "./schemas/weatherSchema"
import { GeocodeSchema } from "./schemas/geocodeSchema"
import { AirPollutionSchema } from "./schemas/airPollutionSchema"

const API_KEY = import.meta.env.VITE_API_KEY

export async function getWeather({ lat, lon }: { lat: number, lon: number }) {
    const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,alerts&appid=${API_KEY}`)
    const data = await res.json()
    if (!res.ok) {
        throw new Error(`OpenWeather error ${res.status}: ${data?.message ?? "Unknown error"}`)
    }
    if (data?.current && data?.daily?.[0]) {
        if (data.current.sunrise === undefined) data.current.sunrise = data.daily[0].sunrise
        if (data.current.sunset === undefined) data.current.sunset = data.daily[0].sunset
    }
    return weatherSchema.parse(data)
}

export async function getGeocode(location: string) {
    const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`)
    const data = await res.json()
    if (!res.ok) {
        throw new Error(`OpenWeather error ${res.status}: ${data?.message ?? "Unknown error"}`)
    }
    return GeocodeSchema.parse(data)
}

export async function getAirPollution({ lat, lon }: { lat: number, lon: number }) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    const data = await res.json()
    if (!res.ok) {
        throw new Error(`OpenWeather error ${res.status}: ${data?.message ?? "Unknown error"}`)
    }
    return AirPollutionSchema.parse(data)
}
