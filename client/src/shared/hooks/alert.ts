import { useSnackbar, VariantType } from 'notistack';
import { useCallback } from 'react';

type TVertical = 'top' | 'bottom';
type THorizontal = 'left' | 'center' | 'right';
export const useAlert = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showAlert = useCallback((
    message: string,
    variant: VariantType = 'info',
    delay = 2000,
    vertical: TVertical = 'bottom',
    horizontal: THorizontal = 'center',
  ) => {
    enqueueSnackbar(message, {
      preventDuplicate: true,
      variant,
      autoHideDuration: delay,
      anchorOrigin: {
        vertical,
        horizontal,
      },
    });
  },[enqueueSnackbar]);
    
  return showAlert;
};
