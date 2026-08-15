import { useState, createContext, useContext, useEffect } from "react";
import { useToastNotification } from "./ToastNotification";

export const CustomerDataContext = createContext(null);

const initialCustomers = [
  {
    id: crypto.randomUUID(),
    name: "Muhammad",
    phone: "03085237890",
    qameez: {
      length: "42",
      sleeve: "24.5",
      shoulder: "18",
      neck: "16",
      chest: "23.5",
      waist: "24",
      hip: "24.5",
      armhole: "9.5",
      cuff: "9"
    },
    shalwaar: {
      length: "39",
      hem: "8",
      circumference: "20",
      rise: "19.5"
    },
    instructions:
      "2 side pocket",
    collar: "Ban Collar",
    fitting: "Loose Fit"
  },
];

function CustomerDataProvider({ children }) {
  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem("customers");

    return savedCustomers !== null
      ? JSON.parse(savedCustomers)
      : [
        {
          id: crypto.randomUUID(),
          name: "Muhammad",
          phone: "03085237890",
          qameez: {
            length: "42",
            sleeve: "24.5",
            shoulder: "18",
            neck: "16",
            chest: "23.5",
            waist: "24",
            hip: "24.5",
            armhole: "9.5",
            cuff: "9"
          },
          shalwaar: {
            length: "39",
            hem: "8",
            circumference: "20",
            rise: "19.5"
          },
          instructions:
            "2 side pocket",
          collar: "Ban Collar",
          fitting: "Loose Fit"
        },
      ];
  });
  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);
  const { showToastNotification } = useToastNotification();

  function addCustomer(newCustomer) {
    setCustomers(current => [...current, newCustomer]);
  }

  function deleteCustomer(id) {
    setCustomers(current => {
      return current.filter(item => item.id !== id)
    });
    showToastNotification(`Deleted record for ${customers.find(customer => customer.id === id).name}`);
  }

  function editCustomer(id, editedCustomer) {
    setCustomers(current => current.map(item => item.id === id ? editedCustomer : item));
  }

  return (
    <CustomerDataContext.Provider value={{ customers, addCustomer, deleteCustomer, editCustomer }}>
      {children}
    </CustomerDataContext.Provider>
  );
}

export const useCustomerData = () => useContext(CustomerDataContext);
export default CustomerDataProvider;