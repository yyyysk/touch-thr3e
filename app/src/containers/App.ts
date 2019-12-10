import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps({ modalOpenFlag, }) {
  return {
    modalOpenFlag,
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
