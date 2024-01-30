
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '40px 0',
    display: 'flex',
    flexDirection: 'col',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(121,70,252,0.5) 100%)',

  },
  text: {
    color: 'black',
    opacity: '50%',
    margin: '10px 0',
    borderRadius: 15,
  },
  image: {
    marginTop: '15px',
    marginBottom: '15px',
  },
}));
