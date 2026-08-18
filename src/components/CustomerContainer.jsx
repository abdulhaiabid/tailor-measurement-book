import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import CustomerCard from "./CustomerCard";
import EditCustomerDialog from "./EditCustomerDialog";
import CustomerReceipt from "./CustomerReceipt";

function CustomerContainer({ customers }) {
  const [isEditCustomerDialogOpen, setIsEditCustomerDialogOpen] = useState(false);
  const [editCustomerId, setEditCustomerId] = useState(null);
  const [receiptCustomer, setReceiptCustomer] = useState(null);

  useEffect(() => {
    if (!isEditCustomerDialogOpen) return;

    const orignalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = orignalOverflow;
    }
  }, [isEditCustomerDialogOpen]);

  useEffect(() => {
    if (!receiptCustomer) return;

    const printTimer = setTimeout(() => {
      window.print();
    }, 100);

    return () => {
      clearTimeout(printTimer);
    }

  }, [receiptCustomer]);

  useEffect(() => {
    function handleAfterPrint() {
      setReceiptCustomer(null);
    }

    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("afterprint", handleAfterPrint);
    }
  }, []);

  function onEditCustomerDialogClose() {
    setIsEditCustomerDialogOpen(false);
    setEditCustomerId(null);
  }

  return (
    <section className="w-full px-4 py-2 bg-bg-low">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4">
        {
          customers && customers.map(customer => {
            return (
              <CustomerCard
                key={customer.id}
                setIsEditCustomerDialogOpen={setIsEditCustomerDialogOpen}
                setEditCustomerId={setEditCustomerId}
                onReceipt={() => setReceiptCustomer(customer)}
                {...customer} />
            )
          })
        }
        {
          isEditCustomerDialogOpen && (
            <EditCustomerDialog
              isOpen={isEditCustomerDialogOpen}
              onClose={onEditCustomerDialogClose}
              customerId={editCustomerId} />
          )
        }
        {
          receiptCustomer && createPortal(
            <CustomerReceipt customer={receiptCustomer} />
            , document.querySelector("#modal-container")
          )
        }
      </div>
    </section>
  );
}

export default CustomerContainer;