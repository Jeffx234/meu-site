import ReactModal from 'react-modal'
import { Styled } from './styled'
import { AiFillCloseCircle } from 'react-icons/ai'
import { ModalClose } from '../../../styles/globals'

export function Modal({ children, isOpen, onRequestClose }) {
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
      >
        <ModalClose onClick={onRequestClose}>
          <AiFillCloseCircle color="white" />
        </ModalClose>
        <Styled.ModalBody>{children}</Styled.ModalBody>
      </ReactModal>
    </div>
  )
}
