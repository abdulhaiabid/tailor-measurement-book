import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useCustomerData } from "./CustomerDataProvider";
import { useToastNotification } from "./ToastNotification";

import CustomerForm from "./CustomerForm";

function AddCustomerDialog({ children, isOpen, onClose }) {
  const { addCustomer } = useCustomerData();
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

  function saveCustomerData(event) {
    event.preventDefault();

    const newCustomer = {
      id: crypto.randomUUID(),
      name: formData.name,
      phone: formData.phone,
      createdAt: new Date(),
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

    addCustomer(newCustomer);
    showToastNotification(`Saved new customer: ${formData.name}`);

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
      title="Add New Customer"
      formData={formData}
      setFormData={setFormData}
      saveCustomerData={saveCustomerData}
    />
    , document.querySelector("#modal-container"));
}

export default AddCustomerDialog;