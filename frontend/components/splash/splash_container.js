import { connect } from 'react-redux';
import Splash from './splash';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);