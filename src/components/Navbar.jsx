import { useState } from "react";
import AddCustomerDialog from "./AddCustomerDialog";
import { useToastNotification } from "./ToastNotification";

function Navbar() {
  const [isAddCustomerDialogOpen, setIsAddCustomerDialogOpen] = useState(false);
  const { showToastNotification } = useToastNotification();

  function onAddCustomerDialogClose() {
    setIsAddCustomerDialogOpen(false);
  }

  return (
    <header className="w-full px-4 py-1 text-accent-light bg-accent-dark border-b-4 border-accent-light">
      <nav className="max-w-7xl mx-auto py-2 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 flex justify-center items-center text-accent-dark bg-accent-light rounded-xl">
            <span className="material-symbols-outlined select-none">
              content_cut
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base sm:text-xl font-bold">
              Tailor's Measurement Book
            </h1>
            <p className="text-xs text-bg-low/70">
              Smart Customer Measurement System
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsAddCustomerDialogOpen(true)}
          className="px-3 py-1 sm:py-1 flex justify-center items-center text-sm text-accent-dark font-semibold bg-accent-light rounded-lg transition-colors duration-300 cursor-pointer hover:bg-accent-light/80">
          <span className="material-symbols-outlined text-xl! select-none">
            add
          </span>
          Add Customer
        </button>
        {/* Temporary Button */}
        {/* <button
          onClick={() => showToastNotification("Hello, I'm a toast.")}
          className="px-3 py-1 sm:py-1 flex justify-center items-center text-sm text-accent-dark font-semibold bg-accent-light rounded-lg transition-colors duration-300 cursor-pointer hover:bg-accent-light/80">
          <span className="material-symbols-outlined text-xl! select-none">
            add
          </span>
          Show Toast
        </button> */}
        <AddCustomerDialog
          isOpen={isAddCustomerDialogOpen}
          onClose={onAddCustomerDialogClose}>
        </AddCustomerDialog>
      </nav>
    </header>
  );
}

export default Navbar;