import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    margin: 'auto',
    border: '3px solid #73AD21',
  },

  TextField: {
    padding: 20,
  },
  
  Label: {
    padding: 10,
  },
  child: {
    position: 'absolute',
    top: '50px',
    left: '20%',
    right: '20%',
    border: '3px solid #73AD21',
  }

}));

export default useStyles