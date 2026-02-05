import Card from "./Card"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getWeather } from "../../api"
import Sunrise from '../../assets/sunrise.svg?react'
import Sunset from '../../assets//sunset.svg?react'
import Cloud from '../../assets/cloud.svg?react'
import Uv from '../../assets/uv.svg?react'
import Wind from '../../assets/wind.svg?react'
import Plessure from '../../assets/pressure.svg?react'
import UpArrow from '../../assets/uparrow.svg?react'
import type { Coords } from "../../types"

type Props = {
    coords: Coords
}

const AdditionalInfo = ({ coords }: Props) => {
    const { data } = useSuspenseQuery({
        queryKey: ['weather', coords],
        queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon })
    })
    return (
        <Card title="Additional Weather Info" childrenClassName="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rows.map(({ label, value, Icon }) => (
                <div className="flex justify-between" key={value}>
                    <div className="flex gap-4">
                        <span className="text-gray-500">{label}</span>
                        <Icon className="size-8" />
                    </div>
                    <span>
                        <FormatComponent value={value} number={data.current[value]} />
                    </span>
                </div>
            ))}
        </Card>
    )
}

function FormatComponent({ value, number }: { value: string, number: number | undefined }) {
    if (number === undefined || Number.isNaN(number)) return "—"
    if (value === "sunrise" || value === 'sunset') {
        return new Date(number * 1000).toLocaleTimeString(undefined, {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        })
    }

    if (value === "wind_deg") {
        return <UpArrow className="size-8 invert" style={{ transform: `rotate(${number}deg)` }} />
    }

    return number
}

const rows = [
    {
        label: "Cloudiness (%)",
        value: "clouds",
        Icon: Cloud
    },
    {
        label: "UV Index",
        value: "uvi",
        Icon: Uv
    },
    {
        label: "Wind Direction",
        value: "wind_deg",
        Icon: Wind
    },
    {
        label: "Pressure (hPa)",
        value: "pressure",
        Icon: Plessure
    },
    {
        label: "Sunrise",
        value: "sunrise",
        Icon: Sunrise
    },
    {
        label: "Sunset",
        value: "sunset",
        Icon: Sunset
    },
] as const

export default AdditionalInfo
