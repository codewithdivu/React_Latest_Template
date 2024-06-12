import { toast } from 'react-hot-toast';

const useToaster = () => {
  const notifySuccess = (message) => {
    toast.success(message);
  };

  const notifyError = (message) => {
    toast.error(message);
  };

  const notifyPromise = (promise, messages) => {
    toast.promise(promise, {
      loading: messages.loading,
      success: messages.success,
      error: messages.error,
    });
  };

  const notifyMultiline = (message, duration = 6000) => {
    toast(message, { duration });
  };

  const notifyEmoji = (message, icon) => {
    toast(message, { icon });
  };

  return {
    notifySuccess,
    notifyError,
    notifyPromise,
    notifyMultiline,
    notifyEmoji,
  };
};

export default useToaster;
