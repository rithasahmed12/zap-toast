import React, { useEffect, useRef } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";
import "./Notification.css";
import { NotificationProps } from "./types";

const iconStyles: React.CSSProperties = { marginRight: "10px", fontSize: "20px" };
const icons: Record<string, JSX.Element> = {
  success: <AiOutlineCheckCircle style={iconStyles} />,
  info: <AiOutlineInfoCircle style={iconStyles} />,
  warning: <AiOutlineWarning style={iconStyles} />,
  error: <AiOutlineCloseCircle style={iconStyles} />,
  default: <AiOutlineInfoCircle style={iconStyles} />,
};

const Notification: React.FC<NotificationProps> = ({
  type = "default",
  message,
  onClose,
  animation = "slide",
}) => {
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (notificationRef.current) {
      notificationRef.current.focus();
    }
  }, []);

  const ariaRole = type === "error" || type === "warning" ? "alert" : "status";
  const ariaLive =
    type === "error" || type === "warning" ? "assertive" : "polite";

  return (
    <div
      className={`notification ${type} ${animation}`}
      role={ariaRole}
      aria-live={ariaLive}
      tabIndex={-1}
      ref={notificationRef}
    >
      <div className="notification-content">
        {icons[type]}
        <span className="notification-message">{message}</span>
      </div>
      <button className="closeBtn" onClick={onClose} aria-label="Close notification">
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default Notification;
