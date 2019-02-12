// connect throug connect() from redux the App and the reducers
import { connect } from 'react-redux';

import App from '../App';

const mapStateToProps = state => ({
  message: state.message,//from reducer
});

const Game = connect(
  mapStateToProps,
)(App);

export default Game;