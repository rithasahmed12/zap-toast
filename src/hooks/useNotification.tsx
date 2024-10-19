import { useState, useCallback } from "react";
import Notification from "../components/Notification";
import { v4 as uuidv4 } from "uuid";
import {
  NotificationProps,
  UseNotificationReturn,
  ToastOptions,
  ToastFunction,
} from "../components/types";

const useNotification = (): UseNotificationReturn => {
  const [notifications, setNotifications] = useState<
    (NotificationProps & { id: string })[]
  >([]);

  const toast = useCallback(
    (message: string, options?: ToastOptions) => {
      const toastId = uuidv4();
      const newNotification: NotificationProps & { id: string } = {
        id: toastId,
        message,
        type: options?.type || "default",
        duration: options?.duration || 3000,
        onClose: () => dismiss(toastId),
        position: options?.position || "top-right",
        animation: options?.animation || "slide",
      };

      setNotifications((prevNotifications) => [
        ...prevNotifications,
        newNotification,
      ]);

      setTimeout(() => {
        setNotifications((prevNotifications) =>
          prevNotifications.filter((n) => n.id !== toastId)
        );
      }, newNotification.duration);

      return toastId;
    },
    []
  ) as ToastFunction;

  const dismiss = useCallback((id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((n) => n.id !== id)
    );
  }, []);

  const dismissAll = useCallback(() => {
    setNotifications([]);
  }, []);

  toast.success = (message: string, options?: Partial<ToastOptions>) =>
    toast(message, { ...options, type: "success" });
  toast.error = (message: string, options?: Partial<ToastOptions>) =>
    toast(message, { ...options, type: "error" });
  toast.info = (message: string, options?: Partial<ToastOptions>) =>
    toast(message, { ...options, type: "info" });
  toast.warning = (message: string, options?: Partial<ToastOptions>) =>
    toast(message, { ...options, type: "warning" });

  const NotificationContainer = (
    <>
      {["top-left", "top-right", "bottom-left", "bottom-right"].map(
        (position) => (
          <div key={position} className={`notification-container ${position}`}>
            {notifications
              .filter((n) => n.position === position)
              .map((notification) => (
                <Notification
                  key={notification.id}
                  {...notification}
                  onClose={() => dismiss(notification.id)}
                />
              ))}
          </div>
        )
      )}
    </>
  );

  return {
    dismiss,
    dismissAll,
    NotificationContainer,
    toast,
  };
};

export default useNotification;
