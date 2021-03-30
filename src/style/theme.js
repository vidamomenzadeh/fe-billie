import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'

export const theme = createMuiTheme({
  palette: {
    secondary: {
      light: teal[100],
      main: teal[500],
      dark: teal[700]
    }
  }
})

export default (props) => (
  <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
)
