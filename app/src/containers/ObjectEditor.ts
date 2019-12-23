import { connect } from 'react-redux';
import ObjectEditor from '../components/ObjectEditor';
import { append, update, remove } from '../actions/objects';
import { closeModal } from '../actions/modals';


const mapStateToProps = (state) => {

  return {
    objectsLength: state.objectHandler.objects.length,
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
    closeModal() {
      dispatch(closeModal());
    },
  };
};

/**
 * コンポーネントとStoreを接続
 */
export default connect(mapStateToProps, mapDispatchToProps)(ObjectEditor);
