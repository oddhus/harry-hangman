import { createMuiTheme } from '@material-ui/core/styles'

const hpRed = "#7F0909"
const hpGold = "#FFC500"

export default createMuiTheme({
    palette: {
        common: {
            hpRed,
            hpGold
        },
        primary: {
            main: hpRed
        },
        secondary: {
            main: hpGold
        }
    },
    typography: {
      info: {
          fontFamily: "Roboto",
          textTransform: "none",
          fontWeight: 700,
          fontSize: "1rem"
      }
    }
})