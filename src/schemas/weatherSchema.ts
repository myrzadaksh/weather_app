import { z } from "zod"

const WeatherConditionSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
})

export const weatherSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),

  current: z.object({
    dt: z.number(),
    sunrise: z.number().optional(),
    sunset: z.number().optional(),
    temp: z.number(),
    feels_like: z.number(),
    pressure: z.number(),
    humidity: z.number(),
    dew_point: z.number(),
    uvi: z.number(),
    clouds: z.number(),
    visibility: z.number(),
    wind_speed: z.number(),
    wind_deg: z.number(),
    wind_gust: z.number().optional(),
    weather: z.array(WeatherConditionSchema),
  }),

  hourly: z.array(
    z.object({
      dt: z.number(),
      temp: z.number(),
      feels_like: z.number(),
      pressure: z.number(),
      humidity: z.number(),
      dew_point: z.number(),
      uvi: z.number(),
      clouds: z.number(),

      visibility: z.number().optional(),     // ✅ было обязательным
      wind_speed: z.number(),
      wind_deg: z.number(),
      wind_gust: z.number().optional(),      // ✅ было обязательным

      weather: z.array(WeatherConditionSchema),
      pop: z.number(),
    })
  ),

  daily: z.array(
    z.object({
      dt: z.number(),
      sunrise: z.number(),
      sunset: z.number(),
      moonrise: z.number(),
      moonset: z.number(),
      moon_phase: z.number(),

      summary: z.string().optional(),        // ✅ было обязательным

      temp: z.object({
        day: z.number(),
        min: z.number(),
        max: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
      }),
      feels_like: z.object({
        day: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
      }),
      pressure: z.number(),
      humidity: z.number(),
      dew_point: z.number(),
      wind_speed: z.number(),
      wind_deg: z.number(),
      wind_gust: z.number().optional(),      // ✅ было обязательным

      weather: z.array(WeatherConditionSchema),
      clouds: z.number(),
      pop: z.number(),
      rain: z.number().optional(),
      uvi: z.number(),
    })
  ),
})
