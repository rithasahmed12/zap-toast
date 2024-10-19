export type NotificationType = "success" | "error" | "info" | "warning" | "default";
export type PositionType = "top-left" | "top-right" | "bottom-left" | "bottom-right";
export type AnimationType = "fade" | "pop" | "slide";

export interface NotificationProps {
  type: NotificationType;
  message: string;
  duration: number;
  onClose: () => void;
  animation?: AnimationType;
  position: PositionType;
}

export interface ToastOptions {
  type?: NotificationType;
  duration?: number;
  animation?: AnimationType;
  position?: PositionType;
}

export interface UseNotificationReturn {
  dismiss: (id: string) => void;
  dismissAll: () => void;
  NotificationContainer: JSX.Element;
  toast: ToastFunction;
}

export type ToastFunction = {
  (message: string, options?: ToastOptions): string;
  success: (message: string, options?: Partial<ToastOptions>) => string;
  error: (message: string, options?: Partial<ToastOptions>) => string;
  info: (message: string, options?: Partial<ToastOptions>) => string;
  warning: (message: string, options?: Partial<ToastOptions>) => string;
};
