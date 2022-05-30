import Tornado from '../Images/WeatherForecastIcons/0_Tornado.svg'
import TropicalStorm from '../Images/WeatherForecastIcons/1_Tropical_Storm.svg'
import Hurricane from '../Images/WeatherForecastIcons/2_Hurricane.svg'
import StrongStorms from '../Images/WeatherForecastIcons/3_Strong_Storms.svg'
import ThunderStorms from '../Images/WeatherForecastIcons/4_Thunderstorms.svg'
import RainShow from '../Images/WeatherForecastIcons/5_Rain_Snow.svg'
import RainSleet from '../Images/WeatherForecastIcons/6_Rain_Sleet.svg'
import WintryMix from '../Images/WeatherForecastIcons/7_Wintry_Mix.svg'
import FreezingDrizzle from '../Images/WeatherForecastIcons/8_Freezing_Drizzle.svg'
import Drizzle from '../Images/WeatherForecastIcons/9_Drizzle.svg'
import FreezingRain from '../Images/WeatherForecastIcons/10_Freezing_Rain.svg'
import Showers from '../Images/WeatherForecastIcons/11_Showers.svg'
import Rain from '../Images/WeatherForecastIcons/12_Rain.svg'
import Flurries from '../Images/WeatherForecastIcons/13_Flurries.svg'
import SnowShowers from '../Images/WeatherForecastIcons/14_Snow_Showers.svg'
import SnowFlake from '../Images/WeatherForecastIcons/15_Snowflake.svg'
import Snow from '../Images/WeatherForecastIcons/16_Snow.svg'
import Hail from '../Images/WeatherForecastIcons/17_Hail.svg'
import Sleet from '../Images/WeatherForecastIcons/18_Sleet.svg'
import BlowingDust from '../Images/WeatherForecastIcons/19_Blowing_Dust.svg'
import Foggy from '../Images/WeatherForecastIcons/20_Foggy.svg'
import Haze from '../Images/WeatherForecastIcons/21_Haze.svg'
import Smoke from '../Images/WeatherForecastIcons/22_Smoke.svg'
import Wind23 from '../Images/WeatherForecastIcons/23_Wind.svg'
import Wind24 from '../Images/WeatherForecastIcons/24_Wind.svg'
import BlowingSnow from '../Images/WeatherForecastIcons/25_Blowing_Snow.svg'
import Cloudy from '../Images/WeatherForecastIcons/26_Cloudy.svg'
import MostlyCloudyNight from '../Images/WeatherForecastIcons/27_Mostly_Cloudy_Night.svg'
import MostlyCloudy from '../Images/WeatherForecastIcons/28_Mostly_Cloudy.svg'
import PartlyCloudyNight from '../Images/WeatherForecastIcons/29_Partly_Cloudy_Night.svg'
import PartlyCloudy from '../Images/WeatherForecastIcons/30_Partly_Cloudy.svg'
import ClearNight from '../Images/WeatherForecastIcons/31_Clear_Night.svg'
import Sunny from '../Images/WeatherForecastIcons/32_Sunny.svg'
import MostlyClearNight from '../Images/WeatherForecastIcons/33_Mostly_Clear_Night.svg'
import MostlySunny from '../Images/WeatherForecastIcons/34_Mostly_Sunny.svg'
import MixedRainAndHail from '../Images/WeatherForecastIcons/35_Mixed_Rain_And_Hail.svg'
import Hot from '../Images/WeatherForecastIcons/36_Hot.svg'
import IsolatedTStorms from '../Images/WeatherForecastIcons/37_Isolated_T_Storms.svg'
import ScatteredTStorms from '../Images/WeatherForecastIcons/38_Scattered_T_Storms.svg'
import ScatteredShowers from '../Images/WeatherForecastIcons/39_Scattered_Showers.svg'
import HeavyRain from '../Images/WeatherForecastIcons/40_Heavy_Rain.svg'
import ScatteredSnowShowers from '../Images/WeatherForecastIcons/41_Scattered_Snow_Showers.svg'
import HeavySnow from '../Images/WeatherForecastIcons/42_Heavy_Snow.svg'
import Blizzard from '../Images/WeatherForecastIcons/43_Blizzard.svg'
import Default from '../Images/WeatherForecastIcons/44_Default.svg'
import ScatteredShowersNight from '../Images/WeatherForecastIcons/45_Scattered_Showers_Night.svg'
import ScatteredSnowShowersNight from '../Images/WeatherForecastIcons/46_Scattered_Snow_Showers_Night.svg'
import ScatteredTStormsNight from '../Images/WeatherForecastIcons/47_Scattered_T_Storms_Night.svg'

export const getWeatherForecastIcon = iconCode => {
  switch (iconCode) {
    case 0:
      return Tornado
    case 1:
      return TropicalStorm
    case 2:
      return Hurricane
    case 3:
      return StrongStorms
    case 4:
      return ThunderStorms
    case 5:
      return RainShow
    case 6:
      return RainSleet
    case 7:
      return WintryMix
    case 8:
      return FreezingDrizzle
    case 9:
      return Drizzle
    case 10:
      return FreezingRain
    case 11:
      return Showers
    case 12:
      return Rain
    case 13:
      return Flurries
    case 14:
      return SnowShowers
    case 15:
      return SnowFlake
    case 16:
      return Snow
    case 17:
      return Hail
    case 18:
      return Sleet
    case 19:
      return BlowingDust
    case 20:
      return Foggy
    case 21:
      return Haze
    case 22:
      return Smoke
    case 23:
      return Wind23
    case 24:
      return Wind24
    case 25:
      return BlowingSnow
    case 26:
      return Cloudy
    case 27:
      return MostlyCloudyNight
    case 28:
      return MostlyCloudy
    case 29:
      return PartlyCloudyNight
    case 30:
      return PartlyCloudy
    case 31:
      return ClearNight
    case 32:
      return Sunny
    case 33:
      return MostlyClearNight
    case 34:
      return MostlySunny
    case 35:
      return MixedRainAndHail
    case 36:
      return Hot
    case 37:
      return IsolatedTStorms
    case 38:
      return ScatteredTStorms
    case 39:
      return ScatteredShowers
    case 40:
      return HeavyRain
    case 41:
      return ScatteredSnowShowers
    case 42:
      return HeavySnow
    case 43:
      return Blizzard
    case 44:
      return Default
    case 45:
      return ScatteredShowersNight
    case 46:
      return ScatteredSnowShowersNight
    case 47:
      return ScatteredTStormsNight
  }
}
