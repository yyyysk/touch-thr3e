import { connect } from 'react-redux';
import ObjectEditor from '../components/ObjectEditor';
import { append, update, remove } from '../actions/objects';


const mapStateToProps = (state) => {

  return {
    // objects: state.objectHandler.objects,
  };
};

/**
 * @param dispatch 
 */
const mapDispatchToProps = (dispatch) => {

  return {
    append(data) {
      dispatch(append(data));
    },
    update(data) {
      dispatch(update(data));
    },
    remove(id) {
      dispatch(remove(id));
    },
  };
};

/**
 * コンポーネントとStoreを接続
 */
export default connect(mapStateToProps, mapDispatchToProps)(ObjectEditor);
