import Card from './Card'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getWeather } from '../../api'
import WeatherIcon from '../WeatherIcon'
import type { Coords } from "../../types"

type Props = {
    coords: Coords
}

const HourlyForecast = ({ coords }: Props) => {
    const { data } = useSuspenseQuery({
        queryKey: ['weather', coords],
        queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon })
    })

    return (
        <Card title="Hourly Forecast (48 hours)" childrenClassName='flex gap-6 overflow-x-scroll'>
            {data.hourly.map(hour => (
                <div key={hour.dt} className='flex flex-col 2xl:justify-between gap-2 items-center p-2'>
                    <p className='whitespace-nowrap 2xl:scale-110'>{new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                    })}</p>
                    <WeatherIcon className='2xl:size-10' src={hour.weather[0].icon}/>
                    <p className='2xl:scale-110'>{Math.round((hour.temp - 32) * 5 / 9)}°C</p>
                </div>
            ))}
        </Card>
    )
}
export default HourlyForecast