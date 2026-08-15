import { useState, createContext, useContext } from "react";

export const CustomerDataContext = createContext(null);

function CustomerDataProvider({ children }) {
  const [customers, setCustomers] = useState([
    {
      id: crypto.randomUUID(),
      name: "Abu Bakar",
      phone: "03226489210",
      qameez: {
        length: "41",
        sleeve: "24",
        shoulder: "40",
        neck: "39",
        chest: "32",
        waist: "25",
        hip: "29",
        armhole: "31",
        cuff: "30"
      },
      shalwaar: {
        length: "37",
        hem: "27",
        circumference: "20",
        rise: "28"
      },
      instructions:
        "Front pocket with hidden zip. Soft inner ban lining. Double stitching on side slits.",
      collar: "Ban Collar",
      fitting: "Regular Fit"
    }
  ]);

  function addCustomer(newCustomer) {
    setCustomers(current => [...current, newCustomer]);
  }

  function deleteCustomer(id) {
    setCustomers(current => {
      return current.filter(item => item.id !== id)
    });
  }

  return (
    <CustomerDataContext.Provider value={{ customers, addCustomer, deleteCustomer }}>
      {children}
    </CustomerDataContext.Provider>
  );
}

export const useCustomerData = () => useContext(CustomerDataContext);
export default CustomerDataProvider;