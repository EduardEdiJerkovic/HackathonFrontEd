import toast from '../components/shared/Toast/toast';

const Toast = {
  triggerError,
  triggerSuccess
};

function triggerSuccess(message) {
  toast.success(message);
}

function triggerError(error) {
  toast.error(error);
}

export default Toast;
