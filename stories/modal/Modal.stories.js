import Modal from './modal.handlebars'

export default {
  title: 'Components/Modals',
  component: Modal,
  args: {
    title: 'Request Item',
    text: 'Are you sure you want to request this item?'
  }
}

export const Default = (args) => Modal(args)
