import React, { useEffect } from "react";
import { NotificationContainer } from "./Notification.styles";
import { NotificationProps } from "./Notification.types";

export const Notification: React.FC<NotificationProps> = ({
  message,
  onClose,
  type,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return <NotificationContainer type={type}>{message}</NotificationContainer>;
};
