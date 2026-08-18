import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useCustomerData } from "./CustomerDataProvider";
import { useToastNotification } from "./ToastNotification";

import CustomerForm from "./CustomerForm";

function EditCustomerDialog({ customerId, isOpen, onClose }) {
  const { customers, editCustomer } = useCustomerData();
  const currentCustomer = customers.find(customer => customer.id === customerId);
  const { showToastNotification } = useToastNotification();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    qameez: {
      length: "",
      sleeve: "",
      shoulder: "",
      neck: "",
      chest: "",
      waist: "",
      hip: "",
      armhole: "",
      cuff: ""
    },
    shalwaar: {
      length: "",
      hem: "",
      circumference: "",
      rise: ""
    },
    collar: "Ban Collar",
    fitting: "Regular Fit",
    instructions: ""
  });

  if (!isOpen) return;

  useEffect(() => {
    if (!isOpen || !currentCustomer) return null;

    setFormData(current => ({
      name: currentCustomer.name,
      phone: currentCustomer.phone,
      qameez: {
        length: currentCustomer.qameez.length,
        sleeve: currentCustomer.qameez.sleeve,
        shoulder: currentCustomer.qameez.shoulder,
        neck: currentCustomer.qameez.neck,
        chest: currentCustomer.qameez.chest,
        waist: currentCustomer.qameez.waist,
        hip: currentCustomer.qameez.hip,
        armhole: currentCustomer.qameez.armhole,
        cuff: currentCustomer.qameez.cuff
      },
      shalwaar: {
        length: currentCustomer.shalwaar.length,
        hem: currentCustomer.shalwaar.hem,
        circumference: currentCustomer.shalwaar.circumference,
        rise: currentCustomer.shalwaar.rise
      },
      collar: currentCustomer.collar,
      fitting: currentCustomer.fitting,
      instructions: currentCustomer.instructions
    }));

  }, [isOpen]);

  if (!isOpen || !currentCustomer) return;

  function saveCustomerData(event) {
    event.preventDefault();

    const editedCustomer = {
      id: currentCustomer.id,
      name: formData.name,
      phone: formData.phone,
      createdAt: currentCustomer.createdAt,
      updatedAt: new Date(),
      qameez: {
        length: formData.qameez.length,
        sleeve: formData.qameez.sleeve,
        shoulder: formData.qameez.shoulder,
        neck: formData.qameez.neck,
        chest: formData.qameez.chest,
        waist: formData.qameez.waist,
        hip: formData.qameez.hip,
        armhole: formData.qameez.armhole,
        cuff: formData.qameez.cuff
      },
      shalwaar: {
        length: formData.shalwaar.length,
        hem: formData.shalwaar.hem,
        circumference: formData.shalwaar.circumference,
        rise: formData.shalwaar.rise
      },
      instructions: formData.instructions.trim(),
      collar: formData.collar,
      fitting: formData.fitting
    }

    editCustomer(customerId, editedCustomer);
    showToastNotification(`Updated measurements for: ${formData.name}`);

    setFormData(current => ({
      name: "",
      phone: "",
      qameez: {
        length: "",
        sleeve: "",
        shoulder: "",
        neck: "",
        chest: "",
        waist: "",
        hip: "",
        armhole: "",
        cuff: ""
      },
      shalwaar: {
        length: "",
        hem: "",
        circumference: "",
        rise: ""
      },
      collar: "",
      fitting: "",
      instructions: ""
    }));

    onClose(); // Closes This Dialog
  }

  return createPortal(
    <CustomerForm
      isOpen={isOpen}
      onClose={onClose}
      title={"Edit Customer"}
      formData={formData}
      setFormData={setFormData}
      saveCustomerData={saveCustomerData} />
    , document.querySelector("#modal-container"));
}

export default EditCustomerDialog;