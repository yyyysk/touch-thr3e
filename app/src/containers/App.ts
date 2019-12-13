import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
  return {
    modalOpenFlag: state.modalHandler.modalOpenFlag,
  };
}

/**
 * @param dispatch 
 */
function mapDispatchToProps() {
  return {};
}

/**
 * コンポーネントとStoreを接続
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
