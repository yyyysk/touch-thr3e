import { connect } from 'react-redux';
import Screen from '../components/Screen';

const mapStateToProps = (state) => {
  return {
    src: state.srcHandler.src,
  };
}


/**
 * コンポーネントとStoreを接続
 */
export default connect(mapStateToProps)(Screen);
