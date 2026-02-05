import clsx from "clsx"

type Props = {
    src: string
    className?: string
}

const WeatherIcon = ({src, className}: Props) => {
  return (
    <img
      className={clsx("size-8", className)}
      src={`https://openweathermap.org/img/wn/${src}@2x.png`}
      alt="Weather Icon"
    />
  )
}

export default WeatherIcon
