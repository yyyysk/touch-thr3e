import { connect } from 'react-redux';
import Header from '../components/Header';
import { openModal } from '../actions/modals';


function mapStateToProps({ modalOpenFlag, modalType }) {
  return {
    modalOpenFlag,
    modalType,
  };
}

/**
 * openModal() をHeaderで実行すると
 * Storeにdispatchされるようmap
 * @param dispatch 
 */
function mapDispatchToProps(dispatch) {
  return {
    openModal(modalOpenFlag, modalType) {
      dispatch(openModal(modalOpenFlag, modalType));
    },
  };
}

/**
 * HeaderコンポーネントとStoreを接続
 */
export default connect(mapStateToProps, mapDispatchToProps)(Header);