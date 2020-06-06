import { createMuiTheme } from '@material-ui/core/styles'

const hpRed = "#7F0909"
const hpGold = "#FFC500"

let theme = createMuiTheme({
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
    }
})

theme.typography.h5 = {
  ...theme.typography.h5,
  fontWeight: 700,
  fontSize: '1.0rem',
  '@media (min-width:600px)': {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.1rem',
  },
};

theme.typography.h3 = {
  ...theme.typography.h3,
  fontSize: '1.1rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

export default theme