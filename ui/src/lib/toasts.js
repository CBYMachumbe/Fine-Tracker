import React from "react";
import { toast } from "react-toastify";

const ToastTypes = {
  error: "Error",
  info: "Info",
  warning: "Warning",
  success: "Success",
};

const toastConfiguration = {
  autoClose: 10000,
  draggable: false,
  position: toast.POSITION.TOP_RIGHT,
  pauseOnHover: true,
  closeOnClick: true,
  hideProgressBar: false,
  newestOnTop: true,
};

export const notifyError = (message, err, forceNewNotify = false) => {
  console.error(message, err);
  if (err.code !== 401) {
    if (forceNewNotify) {
      toast.error(`${message} Please contact support.`);
    } else {
      if (!toast.isActive(ToastTypes.error)) {
        const toastId = toast.error(
          `${message} Please contact support.`,
          toastConfiguration
        );
        toast.update(toastId, { toastId: ToastTypes.error });
      } else {
        toast.update(ToastTypes.error, {
          render: `${message} Please contact support.`,
        });
      }
    }
  }
};

export const notifyWarning = (message, err) => {
  console.warn(message, err);

  if (!toast.isActive(ToastTypes.warning)) {
    const toastId = toast.warn(
      `${message} Please contact support.`,
      toastConfiguration
    );
    toast.update(toastId, { toastId: ToastTypes.warning });
  } else {
    toast.update(ToastTypes.warning, {
      render: `${message} Please contact support.`,
    });
  }
};

export const notifyPreConditionFailure = (
  descrptionOfWhatUserNeedsDoBeforeTheyClickTheButton
) => {
  if (!toast.isActive(ToastTypes.warning)) {
    const toastId = toast.warn(
      `${descrptionOfWhatUserNeedsDoBeforeTheyClickTheButton}`,
      toastConfiguration
    );
    toast.update(toastId, { toastId: ToastTypes.warning });
  } else {
    toast.update(ToastTypes.warning, {
      render: `${descrptionOfWhatUserNeedsDoBeforeTheyClickTheButton}`,
    });
  }
};

export const notifyInfo = (message, err) => {
  // eslint-disable-next-line no-console
  console.info(message, err);

  if (!toast.isActive(ToastTypes.info)) {
    const toastId = toast.info(message, toastConfiguration);
    toast.update(toastId, { toastId: ToastTypes.info });
  } else {
    toast.update(ToastTypes.info, { render: message });
  }
};

export const notifySuccess = (message, additionalInfo, onClickUrl) => {
  // eslint-disable-next-line no-console
  console.info(message, additionalInfo);
  const nonClickableToastAlreadyExists =
    !onClickUrl && !toast.isActive(ToastTypes.success);
  const nonClickableToastDoesNotExist =
    !onClickUrl && toast.isActive(ToastTypes.success);

  if (nonClickableToastAlreadyExists || nonClickableToastDoesNotExist) {
    const toastId = toast.success(message, toastConfiguration);
    toast.update(toastId, { toastId: ToastTypes.success });
  } else {
    //make new toast because url is toast dependant
    const clickableToast = (
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          window.location.href = onClickUrl;
        }}
        onKeyDown={() => {
          window.location.href = onClickUrl;
        }}
      >
        {message}
      </div>
    );
    const toastId = toast.success(message);
    const modifiedToastConfig = toastConfiguration;
    modifiedToastConfig.render = clickableToast;
    toast.update(toastId, modifiedToastConfig);
  }
};
