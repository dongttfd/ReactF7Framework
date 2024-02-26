import { f7 } from 'framework7-react';

export const useToast = () => {
  const openToast = (
    text: string,
    cssClass: 'toast-success' | 'toast-failed' = 'toast-success',
    closeTimeout = 3000,
    destroyOnClose = true,
    position: 'center' | 'top' | 'bottom' | undefined = 'top',
  ) => {
    const toast = f7.toast.create({
      text,
      cssClass,
      closeTimeout,
      destroyOnClose,
      position,
    });
    toast.open();
  };
  return { openToast };
};
