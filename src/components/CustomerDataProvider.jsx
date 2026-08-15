import { useState, createContext, useContext, useEffect } from "react";
import { useToastNotification } from "./ToastNotification";

export const CustomerDataContext = createContext();

const initialCustomers = [
  {
    id: crypto.randomUUID(),
    name: "Ali",
    phone: "03248284641",
    createdAt: new Date("2026-08-01T10:30:00"),
    updatedAt: new Date("2026-08-01T10:30:00"),
    qameez: {
      length: "42",
      sleeve: "24.5",
      shoulder: "18",
      neck: "16",
      chest: "23.5",
      waist: "24",
      hip: "24.5",
      armhole: "9.5",
      cuff: "9",
    },
    shalwaar: {
      length: "39",
      hem: "8",
      circumference: "20",
      rise: "19.5",
    },
    instructions: "2 side pockets",
    collar: "Ban Collar",
    fitting: "Loose Fit",
  },
  {
    id: crypto.randomUUID(),
    name: "Ahmed",
    phone: "03001234567",
    createdAt: new Date("2026-08-03T14:15:00"),
    updatedAt: new Date("2026-08-05T11:20:00"),
    qameez: {
      length: "41",
      sleeve: "24",
      shoulder: "17.5",
      neck: "15.5",
      chest: "22.5",
      waist: "23",
      hip: "24",
      armhole: "9",
      cuff: "8.5",
    },
    shalwaar: {
      length: "40",
      hem: "8.5",
      circumference: "21",
      rise: "19",
    },
    instructions: "1 chest pocket",
    collar: "Shirt Collar",
    fitting: "Regular Fit",
  },
  {
    id: crypto.randomUUID(),
    name: "Usman",
    phone: "03111234567",
    createdAt: new Date("2026-08-05T09:45:00"),
    updatedAt: new Date("2026-08-05T09:45:00"),
    qameez: {
      length: "43",
      sleeve: "25",
      shoulder: "19",
      neck: "16.5",
      chest: "25",
      waist: "25.5",
      hip: "26",
      armhole: "10",
      cuff: "9.5",
    },
    shalwaar: {
      length: "41",
      hem: "9",
      circumference: "22",
      rise: "20",
    },
    instructions: "2 side pockets, 1 chest pocket",
    collar: "Ban Collar",
    fitting: "Comfort Fit",
  },
  {
    id: crypto.randomUUID(),
    name: "Hamza",
    phone: "03331234567",
    createdAt: new Date("2026-08-07T16:30:00"),
    updatedAt: new Date("2026-08-10T13:10:00"),
    qameez: {
      length: "40",
      sleeve: "23.5",
      shoulder: "17",
      neck: "15",
      chest: "22",
      waist: "22.5",
      hip: "23",
      armhole: "8.5",
      cuff: "8",
    },
    shalwaar: {
      length: "38",
      hem: "7.5",
      circumference: "19",
      rise: "18.5",
    },
    instructions: "No pockets",
    collar: "Simple Collar",
    fitting: "Slim Fit",
  },
  {
    id: crypto.randomUUID(),
    name: "Bilal",
    phone: "03451234567",
    createdAt: new Date("2026-08-09T12:00:00"),
    updatedAt: new Date("2026-08-09T12:00:00"),
    qameez: {
      length: "42.5",
      sleeve: "25",
      shoulder: "18.5",
      neck: "16",
      chest: "24",
      waist: "25",
      hip: "25.5",
      armhole: "9.5",
      cuff: "9",
    },
    shalwaar: {
      length: "40",
      hem: "8",
      circumference: "21",
      rise: "19.5",
    },
    instructions: "2 side pockets",
    collar: "Ban Collar",
    fitting: "Regular Fit",
  },
  {
    id: crypto.randomUUID(),
    name: "Hassan",
    phone: "03059876543",
    createdAt: new Date("2026-08-11T15:20:00"),
    updatedAt: new Date("2026-08-14T10:40:00"),
    qameez: {
      length: "44",
      sleeve: "26",
      shoulder: "20",
      neck: "17",
      chest: "26",
      waist: "27",
      hip: "27",
      armhole: "10.5",
      cuff: "10",
    },
    shalwaar: {
      length: "42",
      hem: "9",
      circumference: "23",
      rise: "21",
    },
    instructions: "2 side pockets, loose sleeves",
    collar: "Shirt Collar",
    fitting: "Loose Fit",
  },
  {
    id: crypto.randomUUID(),
    name: "Zain",
    phone: "03159876543",
    createdAt: new Date("2026-08-14T17:00:00"),
    updatedAt: new Date("2026-08-14T17:00:00"),
    qameez: {
      length: "41.5",
      sleeve: "24",
      shoulder: "17.5",
      neck: "15.5",
      chest: "23",
      waist: "23.5",
      hip: "24",
      armhole: "9",
      cuff: "8.5",
    },
    shalwaar: {
      length: "39.5",
      hem: "8",
      circumference: "20",
      rise: "19",
    },
    instructions: "1 side pocket",
    collar: "Ban Collar",
    fitting: "Regular Fit",
  },
];

function CustomerDataProvider({ children }) {
  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem("customers");
    console.log(savedCustomers)
    return savedCustomers !== null
      ? JSON.parse(savedCustomers)
      : [...initialCustomers];
  });
  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);
  const { showToastNotification } = useToastNotification();

  function addCustomer(newCustomer) {
    setCustomers(current => [...current, newCustomer]);
  }

  // function deleteCustomer(id) {
  //   setCustomers(current => {
  //     return current.filter(item => item.id !== id)
  //   });
  //   showToastNotification(`Deleted record for ${customers.find(customer => customer.id === id).name}`);
  // }

  function deleteCustomer(id) {
    setCustomers(current => {
      const customer = current.find(item => item.id === id);

      if (!customer) return current;

      showToastNotification(`Deleted record for ${customer.name}`);

      return current.filter(item => item.id !== id);
    });
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