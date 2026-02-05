import { Switch } from "./ui/switch"
import Sun from "/src/assets/sun.svg?react"
import Moon from "/src/assets/moon.svg?react"
import { useTheme } from "./ThemeProvider"

type Props = {}

const LightDarkToggle = ({}: Props) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="flex items-center gap-2">
      <Sun className="size-5" />
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
      <Moon className="size-5" />
    </div>
  )
}
export default LightDarkToggle