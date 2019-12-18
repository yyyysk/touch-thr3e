import { connect } from 'react-redux';
import ObjectEditor from '../components/ObjectEditor';
import { setSrc } from '../actions/srcs';


const mapStateToProps = (state) => {
  return {
    src: state.srcHandler.src,
  };
}

/**
 * @param dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    setSrc(src) {
      dispatch(setSrc(src));
    },
  };
}

/**
 * コンポーネントとStoreを接続
 */
export default connect(mapStateToProps, mapDispatchToProps)(ObjectEditor);
