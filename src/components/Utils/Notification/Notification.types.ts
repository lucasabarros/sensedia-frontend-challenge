export interface NotificationProps {
  message: string;
  onClose: () => void;
  type: "success" | "error";
}

export interface NotificationStyleProps {
  type: "success" | "error";
}
