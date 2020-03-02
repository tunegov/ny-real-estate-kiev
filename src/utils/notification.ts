import { store } from 'react-notifications-component';

export const show = (
  title: string,
  message: string,
  type: string = 'success'
) => {
  store.addNotification({
    title,
    message,
    type,
    insert: 'bottom',
    container: 'bottom-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 3000,
      onScreen: true
    },
    slidingExit: {
      duration: 800,
      timingFunction: 'ease-out',
      delay: 0
    }
  });
};
