import { Modal } from 'antd';
import NiceModal, { useModal } from '@ebay/nice-modal-react';

export default NiceModal.create(({ name }) => {
  const modal = useModal();
  return (
    <Modal
      title="Hello Antd"
      onOk={() => modal.hide()}
      onCancel={() => modal.hide()}
      afterClose={() => modal.remove()}
    >
      Hello ${name}!
    </Modal>
  );
});