import React, { createContext, useContext, ReactNode } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastContextType = {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
  warn: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const success = (message: string) => {
    toast.success(message, {
      /* ... other options ... */
    });
  };

  const error = (message: string) => {
    toast.error(message, {
      /* ... other options ... */
    });
  };

  const info = (message: string) => {
    toast.info(message, {
      /* ... other options ... */
    });
  };

  const warn = (message: string) => {
    toast.warn(message, {
      /* ... other options ... */
    });
  };

  return (
    <ToastContext.Provider value={{ success, error, info, warn }}>
      <ToastContainer theme="dark" />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
