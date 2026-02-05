import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import type { Dispatch, SetStateAction } from "react"

type Props = {
    mapType: string
    setMapType: Dispatch<SetStateAction<string>>
}

const MapTypeDropDown = ({ mapType, setMapType }: Props) => {
    return (
        <Select value={mapType} onValueChange={(value) => setMapType(value)}>
            <SelectTrigger className="w-full xs:w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent className="z-1001">
                {types.map((city) => (
                    <SelectItem key={city} value={city} className="capitalize">
                        {city.split("_")[0]}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

const types = [
    "clouds_new",
    "precipitation_new",
    "pressure_new",
    "wind_new",
    "temp_new",
]

export default MapTypeDropDown