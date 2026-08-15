import { useState, useEffect, createContext, useContext } from "react";
import { createPortal } from "react-dom";

const ToastNotificationContext = createContext();

function ToastNotificationProvider({ children }) {
  const [isToastShowing, setIsToastShowing] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!isToastShowing) return;

    const timeout = setTimeout(() => setIsToastShowing(false), 2500);

    return () => clearTimeout(timeout);
  }, [isToastShowing]);

  function showToastNotification(message) {
    setToastMessage(message);
    setIsToastShowing(true);
  }

  return (
    <ToastNotificationContext.Provider value={{ showToastNotification }}>
      {children}
      {
        isToastShowing && createPortal(
          <div className={`max-w-[80%] px-4 py-2 fixed bottom-6 left-1/2 xs:left-auto xs:right-6 -translate-x-1/2 xs:translate-x-0 flex justify-center items-center gap-2 bg-accent-dark shadow-[0_0_8px_0_rgba(0,0,0,0.3)] border-2 border-accent-light rounded-xl transition-[bottom,opacity] opacity-100 starting:bottom-1 starting:opacity-0 select-none`}>
            <span className="material-symbols-outlined text-accent-light">
              check_circle
            </span>
            <p className="w-max text-xs sm:text-base text-custom-gold-300 font-semibold">
              {toastMessage}
            </p>
          </div>, document.querySelector("#modal-container")
        )
      }
    </ToastNotificationContext.Provider>
  );
}

export const useToastNotification = () => useContext(ToastNotificationContext);
export default ToastNotificationProvider;