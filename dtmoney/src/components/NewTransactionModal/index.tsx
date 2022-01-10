import Modal from 'react-modal';
import { Container } from './styles';

Modal.setAppElement('#root');

interface NewtransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({isOpen, onRequestClose} : NewtransactionModalProps) {
    return (

    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <Container>
            <h2>Cadastrar transação</h2>
        
        <input placeholder='Tituilo'/>
        <input type="number" placeholder='valor'/>
        <input placeholder='Cateroria'/>
        <button type="submit">Cadastrar</button>


        </Container>
  </Modal>

    );
}