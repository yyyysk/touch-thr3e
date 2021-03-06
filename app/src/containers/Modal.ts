import { connect } from 'react-redux';
import Modal from '../components/Modal';
import { closeModal } from '../actions/modals';


function mapStateToProps(state) {
  return {
    modalType: state.modalHandler.modalType,
  };
}

/**
 * closeModal() をModalで実行すると
 * Storeにdispatchされるようmap
 * @param dispatch 
 */
function mapDispatchToProps(dispatch) {
  return {
    closeModal() {
      dispatch(closeModal());
    },
  };
}

/**
 * コンポーネントとStoreを接続
 */
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
