import { connect } from 'react-redux';
import Header from '../components/Header';
import { openModal } from '../actions/modals';


function mapStateToProps(state) {

  return {
    modalOpenFlag: state.modalHandler.modalOpenFlag,
    modalType: state.modalHandler.modalType,
  };
}

/**
 * openModal() をHeaderで実行すると
 * Storeにdispatchされるようmap
 * @param dispatch 
 */
function mapDispatchToProps(dispatch) {

  return {
    openModal(modalType) {
      dispatch(openModal(modalType));
    },
  };
}

/**
 * HeaderコンポーネントとStoreを接続
 */
export default connect(mapStateToProps, mapDispatchToProps)(Header);