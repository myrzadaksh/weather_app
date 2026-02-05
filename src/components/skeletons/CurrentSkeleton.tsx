import Card from "../cards/Card"
import { Skeleton } from "../ui/skeleton"

type Props = {}

const CurrentSkeleton = ({}: Props) => {
  return (
    <Card title="Current Weather" className="md:pb-11" childrenClassName="flex flex-col items-center gap-6 2xl:justify-between">
            <div className="flex flex-col gap-2 items-center">
                <Skeleton className="w-30 h-15" />
                <Skeleton className="size-14 rounded-full" />
                <Skeleton className="w-36 h-7" />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-xl text-center">Local Time:</p>
                <Skeleton className="w-36 h-10" />
            </div>
            <div className="flex justify-between w-full">
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500">Feels Like</p>
                    <Skeleton className="w-16 h-6" />
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500">Humidity</p>
                    <Skeleton className="w-16 h-6" />
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500">Wind</p>
                    <Skeleton className="w-16 h-6" />
                </div>
            </div>
        </Card>
  )
}

export default CurrentSkeleton

//{Math.round((data.current.temp - 32) * 5 / 9)}°C