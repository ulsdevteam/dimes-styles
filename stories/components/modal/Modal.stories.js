import Modal from './modal.handlebars'

export default {
  component: Modal,
  title: "Components/Modal",
  args:{
    title: 'Request Item',
    text: 'Are you sure you want to request this item?'
  }
};

export const basic = (args) => Modal(args)
