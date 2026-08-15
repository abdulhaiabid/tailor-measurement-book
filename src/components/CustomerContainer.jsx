import { useState, useEffect } from "react";
import CustomerCard from "./CustomerCard";
import EditCustomerDialog from "./EditCustomerDialog";

function CustomerContainer({ customers }) {
  const [isEditCustomerDialogOpen, setIsEditCustomerDialogOpen] = useState(false);
  const [editCustomerId, setEditCustomerId] = useState(null);

  useEffect(() => {
    if (isEditCustomerDialogOpen) {
      document.body.style.height = "100dvh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }, [isEditCustomerDialogOpen]);

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
      </div>
    </section>
  );
}

export default CustomerContainer;