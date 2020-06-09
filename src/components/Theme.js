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
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
};

theme.typography.h6 = {
  ...theme.typography.h6,
  fontWeight: 500,
  fontSize: '1.0rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
};

theme.typography.h3 = {
  ...theme.typography.h3,
  fontWeight: 700,
  fontSize: '1.0rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

export default theme