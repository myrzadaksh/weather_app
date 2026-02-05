import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import type { Dispatch, SetStateAction } from "react"

type Props = {
    location: string
    setLocation: Dispatch<SetStateAction<string>>
}

const LocationDropDown = ({ location, setLocation }: Props) => {
    return (
        <Select value={location} onValueChange={(value) => setLocation(value)}>
            <SelectTrigger className="w-full xs:w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent className="z-1001">
                {location === "custom" && (
                    <SelectItem value="custom">Custom</SelectItem>
                )}
                {locations.map((city) => (
                    <SelectItem key={city} value={city}>
                        {city}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

const locations = [
    "Bangkok",
    "Tokyo",
    "Seoul",
    "Dubai",
    "Manila",
    "London",
    "New York",
    "Paris",
    "Berlin",
    "Madrid",
    "Rome",
    "Lisbon",
]

export default LocationDropDown