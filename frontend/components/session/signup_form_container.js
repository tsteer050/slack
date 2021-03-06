import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  formType: 'signup',
  errors: errors.session

});


const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);