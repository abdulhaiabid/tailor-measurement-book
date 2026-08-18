import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "*", element: <ErrorPage /> },
]);

export default router;

---

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

---

import ToastNotificationProvider from "../components/ToastNotification";
import CustomerDataProvider from "../components/CustomerDataProvider";

import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import CustomerContainer from "../components/CustomerContainer";

function HomePage() {
  return (
    <>
      <ToastNotificationProvider>
        <CustomerDataProvider>
          <Navbar />
          <Searchbar />
        </CustomerDataProvider>
      </ToastNotificationProvider>
    </>
  );
}

export default HomePage;

---

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

---

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

    if (!savedCustomers) {
      return [...initialCustomers];
    }

    const parsedCustomers = JSON.parse(savedCustomers);

    return parsedCustomers.length > 0
      ? parsedCustomers
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

---

import { useState } from "react";
import AddCustomerDialog from "./AddCustomerDialog";

function Navbar() {
  const [isAddCustomerDialogOpen, setIsAddCustomerDialogOpen] = useState(false);

  function onAddCustomerDialogClose() {
    setIsAddCustomerDialogOpen(false);
  }

  return (
    <header className="w-full px-4 py-1 text-accent-light bg-accent-dark border-b-4 border-accent-light">
      <nav className="max-w-7xl mx-auto py-2 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 flex justify-center items-center text-accent-dark bg-accent-light rounded-xl">
            <img
              src="icon-png.png"
              alt="icon"
              className="size-8" />
            {/* <span className="material-symbols-outlined [font-variation-settings:'FILL'1] select-none">
              book_2
            </span> */}
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
        <AddCustomerDialog
          isOpen={isAddCustomerDialogOpen}
          onClose={onAddCustomerDialogClose}>
        </AddCustomerDialog>
      </nav>
    </header>
  );
}

export default Navbar;

---

import { useState, useMemo, useEffect } from "react";
import CustomerContainer from "./CustomerContainer";
import { useCustomerData } from "./CustomerDataProvider";

function Searchbar() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [sortValue, setSortValue] = useState("recent");

  const { customers } = useCustomerData();

  const filteredCustomers = useMemo(() => {
    if (!customers) return [];
    const searchValue = searchInputValue.trim().toLowerCase();

    // Searching
    const filtered = customers.filter(customer => (
      customer.name.toLowerCase().includes(searchValue) ||
      customer.phone.toLowerCase().includes(searchValue)
    ));

    // Now sorting
    switch (sortValue) {
      case "oldest":
        return filtered.sort((a, b) => (
          new Date(a.createdAt) - new Date(b.createdAt)
        ));

      case "a-z":
        return filtered.sort((a, b) => (
          a.name.localeCompare(b.name)
        ));

      case "z-a":
        return filtered.sort((a, b) => (
          b.name.localeCompare(a.name)
        ));

      default:
        return filtered.sort((a, b) => (
          new Date(b.createdAt) - new Date(a.createdAt)
        ));
    }
  }, [searchInputValue, customers, sortValue]);

  return (
    <main>
      <section className="px-4 py-2 pt-4 bg-bg-low print:hidden">
        <div className="max-w-7xl mx-auto p-4 flex flex-col gap-3 bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-xl">
          {/* Search bar */}
          <div className="relative">
            <input
              value={searchInputValue}
              onChange={e => setSearchInputValue(e.target.value)}
              id="search-bar"
              type="search"
              placeholder="Search customer by name or phone number..."
              className="w-full p-2 pl-8 text-sm border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none focus:ring-2 focus:ring-accent-light focus:border-transparent placeholder:text-sm" />
            <label htmlFor="search-bar">
              <span className="material-symbols-outlined absolute top-1/2 left-2 -translate-y-1/2 text-xl! text-accent-dark select-none">
                search
              </span>
            </label>
          </div>

          {/* Filters */}
          <div className="flex flex-col-reverse xs:flex-row justify-between xs:items-end gap-2 xs:gap-0">
            <p className="text-sm text-accent-dark/80">
              Showing {filteredCustomers.length} of {customers.length} customers
            </p>

            <div className="max-w-max px-2 pl-6 py-1 relative border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none focus-within:ring-2 focus-within:ring-accent-light focus-within:border-transparent">
              <select
                value={sortValue}
                onChange={e => setSortValue(e.target.value)}
                name="sort"
                id="sort"
                className="text-sm font-medium outline-none cursor-pointer">
                <option value="recent">
                  Recently Added
                </option>
                <option value="oldest">
                  Oldest First
                </option>
                <option value="a-z">
                  Name (A - Z)
                </option>
                <option value="z-a">
                  Name (Z - A)
                </option>
              </select>
              <label
                htmlFor="sort"
                className="absolute top-1/2 left-1 -translate-y-1/2">
                <span className="material-symbols-outlined text-lg! text-accent-light select-none cursor-pointer">sort</span>
              </label>
            </div>
          </div>
        </div>
      </section>
      <CustomerContainer
        customers={filteredCustomers} />
    </main>
  );
}

export default Searchbar;

---

import { useState, useEffect } from "react";
import CustomerCard from "./CustomerCard";
import EditCustomerDialog from "./EditCustomerDialog";
import CustomerReceipt from "./CustomerReceipt";

function CustomerContainer({ customers }) {
  const [isEditCustomerDialogOpen, setIsEditCustomerDialogOpen] = useState(false);
  const [editCustomerId, setEditCustomerId] = useState(null);
  const [receiptCustomer, setReceiptCustomer] = useState(null);

  useEffect(() => {
    if (isEditCustomerDialogOpen) {
      document.body.style.height = "100dvh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
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
          receiptCustomer && <CustomerReceipt customer={receiptCustomer} />
        }
      </div>
    </section>
  );
}

export default CustomerContainer;

---

import { useCustomerData } from "./CustomerDataProvider";
import { useToastNotification } from "./ToastNotification";


function CustomerCard(
  {
    id,
    name,
    phone,
    createdAt,
    updatedAt,
    qameez,
    shalwaar,
    instructions,
    collar,
    fitting,
    setIsEditCustomerDialogOpen,
    setEditCustomerId,
    onReceipt
  }
) {
  const { deleteCustomer } = useCustomerData();
  const { showToastNotification } = useToastNotification();

  function handleShareButton() {
    let text = `*TAILOR'S MEASUREMENT TICKET*\n`;
    text += `---------------------------------\n`;
    text += `*Customer:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    text += `*Date:* ${new Date(updatedAt).toLocaleDateString("en-GB", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })}\n\n`;

    text += `*QAMEEZ MEASUREMENTS (inches):*\n`;
    text += `- Length (لمبائی): ${qameez.length ? `${qameez.length}″` : "N/A"}\n`
    text += `- Sleeve (بازو): ${qameez.sleeve ? `${qameez.sleeve}″` : "N/A"}\n`
    text += `- Shoulder (تیرا): ${qameez.shoulder ? `${qameez.shoulder}″` : "N/A"}\n`
    text += `- Neck (گلا): ${qameez.neck ? `${qameez.neck}″` : "N/A"}\n`
    text += `- Chest (چھاتی): ${qameez.chest ? `${qameez.chest}″` : "N/A"}\n`
    text += `- Waist (کمر): ${qameez.waist ? `${qameez.waist}″` : "N/A"}\n`
    text += `- Hip (کولھا): ${qameez.hip ? `${qameez.hip}″` : "N/A"}\n`
    text += `- Armhole (مونڈا): ${qameez.armhole ? `${qameez.armhole}″` : "N/A"}\n`
    text += `- Cuff (کف): ${qameez.cuff ? `${qameez.cuff}″` : "N/A"}\n`

    text += `\n*SHALWAR MEASUREMENTS (inches):*\n`;
    text += `- Length (لمبائی): ${shalwaar.length ? `${shalwaar.length}″` : "N/A"}\n`;
    text += `- Bottom / Hem (پائنچہ): ${shalwaar.hem ? `${shalwaar.hem}″` : "N/A"}\n`;
    text += `- Circumference (گھیرہ): ${shalwaar.circumference ? `${shalwaar.circumference}″` : "N/A"}\n`;
    text += `- Rise (آسن): ${shalwaar.rise ? `${shalwaar.rise}″` : "N/A"}\n`;

    text += `\n*Collar:* ${collar || 'N/A'} | *Fitting:* ${fitting || 'N/A'}\n`;
    text += `*Notes:* ${instructions ? instructions : "N/A"}`;

    navigator.clipboard.writeText(text).then(() => {
      showToastNotification('Measurement ticket copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text:', err);
      showToastNotification('Could not copy automatically');
    });
  }
  return (
    <div className={`col-span-1 bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-xl overflow-hidden`}>
      {/* Name, Phone and added date */}
      <div className="p-4 flex justify-between items-start bg-bg-mid">
        <div>
          <h1 className="text-xl text-text-light font-bold">
            {name}
          </h1>
          <p className="mt-0.5 flex items-center gap-1 text-sm text-text-light/70 font-medium">
            <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-base! text-accent-light leading-4 select-none">
              call
            </span>
            {phone}
          </p>
        </div>
        <p className="px-2 py-1 text-[0.6rem] xs:text-xs text-text-light/90 text-nowrap font-semibold xs:font-medium bg-accent-light/20 border border-accent-light/60 rounded-lg">
          {
            updatedAt && new Date(updatedAt).toLocaleDateString("en-GB", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })
          }
        </p>
      </div>

      {/* Measurements */}
      <div className="p-4 grid sm:grid-rows-2 grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 border-y-2 border-accent-dark/20">
        {/* Qameez */}
        <div className="sm:row-span-2 flex-1">
          <h2 className="flex items-center gap-1 text-base xs:text-lg text-text-light uppercase font-bold">
            <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-base! text-accent-light select-none">
              apparel
            </span>
            Qameez
          </h2>
          <table className="mt-1 w-full">
            <tbody className="flex flex-col gap-2 text-xs xs:text-sm text-text-muted/80 *:py-1 *:px-3 *:sm:px-5 *:flex *:justify-between *:items-center *:rounded *:bg-bg-mid *:border *:border-accent-dark/20">
              <tr>
                <td>Qameez Length
                  <span className="urdu" dir="rtl">(لمبائی) </span>:
                </td>
                <td className="font-semibold">{qameez.length ? `${qameez.length}″` : "--"}</td>
              </tr>
              <tr>
                <td>Sleeve Length
                  <span className="urdu" dir="rtl">(بازو) </span>:
                </td>
                <td className="font-semibold">{qameez.sleeve ? `${qameez.sleeve}″` : "--"}</td>
              </tr>
              <tr>
                <td>Shoulder
                  <span className="urdu" dir="rtl">(تِیرا) </span>:
                </td>
                <td className="font-semibold">{qameez.shoulder ? `${qameez.shoulder}″` : "--"}</td>
              </tr>
              <tr>
                <td>Neck
                  <span className="urdu" dir="rtl">(گلا) </span>:
                </td>
                <td className="font-semibold">{qameez.neck ? `${qameez.neck}″` : "--"}</td>
              </tr>
              <tr>
                <td>Chest
                  <span className="urdu" dir="rtl">(چھاتی) </span>:
                </td>
                <td className="font-semibold">{qameez.chest ? `${qameez.chest}″` : "--"}</td>
              </tr>
              <tr>
                <td>Waist
                  <span className="urdu" dir="rtl">(کمر) </span>:
                </td>
                <td className="font-semibold">{qameez.waist ? `${qameez.waist}″` : "--"}</td>
              </tr>
              <tr>
                <td>Hip
                  <span className="urdu" dir="rtl">(کولھا) </span>:
                </td>
                <td className="font-semibold">{qameez.hip ? `${qameez.hip}″` : "--"}</td>
              </tr>
              <tr>
                <td>Armhole
                  <span className="urdu" dir="rtl">(بغل) </span>:
                </td>
                <td className="font-semibold">{qameez.armhole ? `${qameez.armhole}″` : "--"}</td>
              </tr>
              <tr>
                <td>Cuff
                  <span className="urdu" dir="rtl">(کَف) </span>:
                </td>
                <td className="font-semibold">{qameez.cuff ? `${qameez.cuff}″` : "--"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Shalwar */}
        <div className="sm:px-0 sm:row-span-1 flex-1">
          <h2 className="flex items-center gap-1 text-base xs:text-lg text-text-light uppercase font-bold">
            <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-base! text-accent-light select-none">
              apparel
            </span>
            Shalwar
          </h2>
          <table className="mt-1 w-full">
            <tbody className="flex flex-col gap-2 text-xs xs:text-sm text-text-muted/80 *:py-1 *:px-3 *:sm:px-5 *:flex *:justify-between *:items-center *:rounded *:bg-bg-mid *:border *:border-accent-dark/20">
              <tr>
                <td>Shalwar Length
                  <span className="urdu" dir="rtl">(لمبائی) </span>:
                </td>
                <td className="font-semibold">{shalwaar.length ? `${shalwaar.length}″` : "--"}</td>
              </tr>
              <tr>
                <td>Bottom / Hem
                  <span className="urdu" dir="rtl">(پائنچہ) </span>:
                </td>
                <td className="font-semibold">{shalwaar.hem ? `${shalwaar.hem}″` : "--"}</td>
              </tr>
              <tr>
                <td>Circumference
                  <span className="urdu" dir="rtl">(گھیرہ) </span>:
                </td>
                <td className="font-semibold">{shalwaar.circumference ? `${shalwaar.circumference}″` : "--"}</td>
              </tr>
              <tr>
                <td>Rise / Aasan
                  <span className="urdu" dir="rtl">(آسن) </span>:
                </td>
                <td className="font-semibold">{shalwaar.rise ? `${shalwaar.rise}″` : "--"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Instructions */}
        <div className="p-4 sm:row-start-2 sm:col-start-2 flex flex-col border border-accent-light/80 rounded-lg">
          <h2 className="text-xs text-accent-light uppercase font-bold">
            Instructions
          </h2>
          <p className="mt-2 flex-1 text-sm italic">
            {instructions ? `"${instructions}"` : "No instructions..."}
          </p>
          <div className="mt-4 flex items-center gap-1">
            <p className="px-3 py-1 text-xs text-text-light/80 font-semibold bg-accent-light/10 border border-accent-light/40 rounded">
              {collar}
            </p>
            <p className="px-3 py-1 text-xs text-text-light/80 font-semibold bg-accent-dark/5 border border-accent-dark/16 rounded">
              {fitting}
            </p>
          </div>
        </div>

      </div>

      {/* Receipt, Edit and Delete Button */}
      <div className="p-4 flex justify-between items-center bg-bg-mid">
        <button
          onClick={onReceipt}
          className="px-4 py-1 flex items-center gap-1 text-text-light font-semibold bg-accent-light brightness-110 rounded-lg transition-[filter] duration-300 cursor-pointer hover:brightness-104">
          <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-base! select-none">
            receipt
          </span>
          Receipt
        </button>

        <div className="flex items-end gap-1">
          <button
            onClick={handleShareButton}
            className="flex justify-center items-center cursor-pointer">
            <span className="material-symbols-outlined p-1 text-accent-dark! leading-2 font-light! rounded-lg transition-colors duration-300 select-none hover:bg-accent-dark/7">
              content_copy
            </span>
          </button>
          <button
            onClick={() => {
              setIsEditCustomerDialogOpen(true);
              setEditCustomerId(id);
            }}
            className="flex justify-center items-center cursor-pointer">
            <span className="material-symbols-outlined p-1 text-accent-dark! leading-2 font-light! rounded-lg transition-colors duration-300 select-none hover:bg-accent-dark/7">
              edit
            </span>
          </button>
          <button
            onClick={() => deleteCustomer(id)}
            className="flex justify-center items-center cursor-pointer">
            <span className="material-symbols-outlined p-1 text-accent-dark! leading-2 font-light! rounded-lg transition-colors duration-300 select-none hover:bg-accent-dark/7">
              delete
            </span>
          </button>
        </div>
      </div>
    </div >
  );
}

export default CustomerCard;

---

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useCustomerData } from "./CustomerDataProvider";
import { useToastNotification } from "./ToastNotification";
import { NumberField } from "./NumberField";

function AddCustomerDialog({ children, isOpen, onClose }) {
  const nameRef = useRef();
  const phoneRef = useRef();

  const qameezLengthRef = useRef();
  const qameezSleeveRef = useRef();
  const qameezShoulderRef = useRef();
  const qameezNeckRef = useRef();
  const qameezChestRef = useRef();
  const qameezWaistRef = useRef();
  const qameezHipRef = useRef();
  const qameezArmholeRef = useRef();
  const qameezCuffRef = useRef();

  const shalwaarLengthRef = useRef();
  const shalwaarHemRef = useRef();
  const shalwaarCircumferenceRef = useRef();
  const shalwaarRiseRef = useRef();

  const instructionsRef = useRef();
  const collarRef = useRef();
  const fittingRef = useRef();

  const { addCustomer } = useCustomerData();
  const { showToastNotification } = useToastNotification();

  useEffect(() => {
    if (isOpen) {
      document.body.style.height = "100dvh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  if (!isOpen) return;

  function saveCustomerData(event) {
    event.preventDefault();

    const newCustomer = {
      id: crypto.randomUUID(),
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      createdAt: new Date(),
      updatedAt: new Date(),
      qameez: {
        length: qameezLengthRef.current.value,
        sleeve: qameezSleeveRef.current.value,
        shoulder: qameezShoulderRef.current.value,
        neck: qameezNeckRef.current.value,
        chest: qameezChestRef.current.value,
        waist: qameezWaistRef.current.value,
        hip: qameezHipRef.current.value,
        armhole: qameezArmholeRef.current.value,
        cuff: qameezCuffRef.current.value
      },
      shalwaar: {
        length: shalwaarLengthRef.current.value,
        hem: shalwaarHemRef.current.value,
        circumference: shalwaarCircumferenceRef.current.value,
        rise: shalwaarRiseRef.current.value
      },
      instructions: instructionsRef.current.value.trim(),
      collar: collarRef.current.value,
      fitting: fittingRef.current.value
    }

    addCustomer(newCustomer);
    showToastNotification(`Saved new customer: ${nameRef.current.value}`);
    onClose(); // Closes This Dialog

    nameRef.current.value = "";
    phoneRef.current.value = "";
    qameezLengthRef.current.value = "";
    qameezSleeveRef.current.value = "";
    qameezShoulderRef.current.value = "";
    qameezNeckRef.current.value = "";
    qameezChestRef.current.value = "";
    qameezWaistRef.current.value = "";
    qameezHipRef.current.value = "";
    qameezArmholeRef.current.value = "";
    qameezCuffRef.current.value = "";
    shalwaarLengthRef.current.value = "";
    shalwaarHemRef.current.value = "";
    shalwaarCircumferenceRef.current.value = "";
    shalwaarRiseRef.current.value = "";
    instructionsRef.current.value = "";
    collarRef.current.value = "";
    fittingRef.current.value = "";
  }

  return createPortal(
    <>
      <div
        onClick={onClose}
        className={`bg-black/50 backdrop-blur-xs starting:opacity-0 transition-[display,opacity] transition-discrete duration-300 ${isOpen ? "fixed inset-0 opacity-100 " : "opacity-0 hidden"} `}>
      </div>
      <dialog
        open={isOpen}
        className={`h-[90%] w-[90%] top-1/2 left-1/2 -translate-1/2 flex flex-col shadow-[0_0_18px_0_rgba(0,0,0,0.2)] border-2 border-accent-light rounded-xl transition-[display,opacity] transition-discrete duration-300 overflow-hidden ${isOpen ? "fixed inset-0 opacity-100" : "opacity-0 hidden"}`}>
        <div className="p-4 flex justify-between items-center bg-accent-dark border-b-4 border-accent-light">
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="p-2 flex justify-center items-center text-accent-dark bg-accent-light rounded-xl">
              <span className="material-symbols-outlined select-none">
                person_add
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-base sm:text-xl text-accent-light font-bold">
                Add New Customer
              </h1>
              <p className="text-xs text-bg-low/70">
                Enter customer details & measurements
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl transition-colors duration-300 cursor-pointer hover:bg-bg-high/10">
            <span className="material-symbols-outlined p-2  text-white select-none">close</span>
          </button>
        </div>

        {/* Body */}
        <form
          id="customer-form"
          onSubmit={saveCustomerData}
          className="p-4 space-y-4 text-text-dark bg-bg-low overflow-y-auto">
          {/* Customer Information */}
          <div className="p-4 bg-bg-mid shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-lg">
            <h2 className="flex items-center gap-2 text-sm uppercase font-bold border-bborder-accent-light/80">
              <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-xl! text-accent-light select-none">
                person
              </span>
              Customer Information *
            </h2>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2">
              <div className="flex-1 flex flex-col space-y-1">
                <label
                  htmlFor="name-input"
                  className="text-xs font-medium">
                  Customer Name
                  <span
                    dir="rtl"
                    className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                    (نام)
                  </span>*
                </label>
                <input
                  ref={nameRef}
                  id="name-input"
                  type="text"
                  placeholder="e.g. Ali"
                  required
                  className="px-2 py-1.5 text-sm bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none focus:ring-2 focus:ring-accent-light focus:border-transparent placeholder:text-sm" />
              </div>

              <div className="flex-1 flex flex-col space-y-1">
                <label
                  htmlFor="phone-number-input"
                  className="text-xs font-medium">
                  Phone Number
                  <span
                    dir="rtl"
                    className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                    (فون نمبر)
                  </span>*
                </label>
                <input
                  ref={phoneRef}
                  id="phone-number-input"
                  type="tel"
                  placeholder="e.g. 0312-3456789"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  className="px-2 py-1.5 text-sm bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none focus:ring-2 focus:ring-accent-light focus:border-transparent placeholder:text-sm" />
              </div>
            </div>

          </div>

          {/* Qameez Measurements */}
          <div className="p-4 bg-bg-mid shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-lg">
            <h2 className="flex items-center gap-2 text-sm uppercase font-bold border-bborder-accent-light/80">
              <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-lg! text-accent-light select-none">
                apparel
              </span>
              Qameez Measurements *
            </h2>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 align-items-end gap-2">
              <NumberField
                ref={qameezLengthRef}
                titleEN={"Qameez Length"}
                titleUR={"لمبائی"}
              />
              <NumberField
                ref={qameezSleeveRef}
                titleEN={"Sleeve Length"}
                titleUR={"بازو"}
              />
              <NumberField
                ref={qameezShoulderRef}
                titleEN={"Shoulder"}
                titleUR={"تیرا"}
              />
              <NumberField
                ref={qameezNeckRef}
                titleEN={"Neck"}
                titleUR={"گلا"}
              />
              <NumberField
                ref={qameezChestRef}
                titleEN={"Chest"}
                titleUR={"چھاتی"}
              />
              <NumberField
                ref={qameezWaistRef}
                titleEN={"Waist"}
                titleUR={"کمر"}
              />
              <NumberField
                ref={qameezHipRef}
                titleEN={"Hip"}
                titleUR={"کولھا"}
              />
              <NumberField
                ref={qameezArmholeRef}
                titleEN={"Arm Hole"}
                titleUR={"مونڈا/بغل"}
              />
              <NumberField
                ref={qameezCuffRef}
                titleEN={"Cuff"}
                titleUR={"کَف"}
              />
            </div>

          </div>

          {/* Shalwar Measurements */}
          <div className="p-4 bg-bg-mid shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-lg">
            <h2 className="flex items-center gap-2 text-sm uppercase font-bold border-bborder-accent-light/80">
              <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-lg! text-accent-light select-none">
                apparel
              </span>
              Shalwar Measurements *
            </h2>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 align-items-end gap-2">
              <NumberField
                ref={shalwaarLengthRef}
                titleEN={"Shalwar Length"}
                titleUR={"لمبائی"}
              />
              <NumberField
                ref={shalwaarHemRef}
                titleEN={"Bottom / Paincha"}
                titleUR={"پائنچہ"}
              />
              <NumberField
                ref={shalwaarCircumferenceRef}
                titleEN={"Ghera / Circumference"}
                titleUR={"گھیرہ"}
              />
              <NumberField
                ref={shalwaarRiseRef}
                titleEN={"Rise / Aasan"}
                titleUR={"آسن"}
              />
            </div>
          </div>

          {/* Fitting Options & Extra Notes */}
          <div className="p-4 bg-bg-mid shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-lg">
            <h2 className="flex items-center gap-2 text-sm uppercase font-bold border-bborder-accent-light/80">
              <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-lg! text-accent-light select-none">
                apparel
              </span>
              Fitting Options & Extra Notes *
            </h2>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="collar-style"
                  className="text-xs font-medium">
                  Collar / Gala Style
                  <span
                    dir="rtl"
                    className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                    (گلا)
                  </span>
                </label>

                <select
                  ref={collarRef}
                  name="collar-style"
                  id="collar-style"
                  required
                  className="w-full px-1 py-1.5 flex items-center text-sm text-text-muted/90 bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none overflow-clip focus-within:ring-2 focus-within:ring-accent-light focus-within:border-transparent">

                  <option value="Ban Collar">
                    Ban Collar (بین کالر)
                  </option>
                  <option value="Shirt Collar">
                    Shirt Collar (شرٹ کالر)
                  </option>
                  <option value="Maghzi Collar">
                    Maghzi Collar (مغزی کالر)
                  </option>
                </select>
              </div>

              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="fitting-preference"
                  className="text-xs font-medium">
                  Fitting Preference
                  <span
                    dir="rtl"
                    className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                    (فٹنگ)
                  </span>
                </label>

                <select
                  ref={fittingRef}
                  name="fitting-preference"
                  id="fitting-preference"
                  required
                  className="w-full px-1 py-1.5 flex items-center text-sm text-text-muted/90 bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none overflow-clip focus-within:ring-2 focus-within:ring-accent-light focus-within:border-transparent">
                  <option value="Regular Fit">
                    Normal / Regular Fit (مناسب فٹنگ)
                  </option>
                  <option value="Slim Fit">
                    Slim Fit (تنگ فٹنگ)
                  </option>
                  <option value="Loose Fit">
                    Loose / Traditional Fit (کھلی فٹنگ)
                  </option>
                </select>
              </div>

              <div className="sm:col-span-2 flex flex-col space-y-1">
                <label
                  htmlFor="instructions"
                  className="text-xs font-medium">
                  Instructions
                  <span
                    dir="rtl"
                    className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                    (فٹنگ)
                  </span>
                </label>

                <textarea
                  ref={instructionsRef}
                  name="instructions"
                  id="instructions"
                  rows="4"
                  placeholder="e.g. Side zipper pocket on right, double stitching on collar, round cuff buttons..."
                  className="px-2 py-2 text-sm text-text-muted/90 bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none focus:ring-2 focus:ring-accent-light focus:border-transparent"></textarea>
              </div>
            </div>
          </div>
        </form>

        {/* Saving Options */}
        <div className="px-4 py-3 flex justify-end items-center gap-2 bg-bg-low shadow-[0_0_8px_0_rgba(0,0,0,0.4)] border-t-4 border-bg-low">
          <button
            type="submit"
            form="customer-form"
            className="px-6 py-1.5 flex justify-center items-center gap-1 text-text-light font-semibold bg-accent-light brightness-110 rounded-lg transition-[filter] duration-300 cursor-pointer hover:brightness-104">
            <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-base! select-none">
              save
            </span>
            Save
          </button>
        </div>

      </dialog>
    </>
    , document.querySelector("#modal-container"));
}

export default AddCustomerDialog;

---

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useCustomerData } from "./CustomerDataProvider";
import { useToastNotification } from "./ToastNotification";
import { NumberField } from "./NumberField";

function EditCustomerDialog({ customerId, isOpen, onClose }) {
  const { customers, editCustomer } = useCustomerData();

  const currentCustomer = customers.find(customer => customer.id === customerId);

  const nameRef = useRef();
  const phoneRef = useRef();
  const qameezLengthRef = useRef();
  const qameezSleeveRef = useRef();
  const qameezShoulderRef = useRef();
  const qameezNeckRef = useRef();
  const qameezChestRef = useRef();
  const qameezWaistRef = useRef();
  const qameezHipRef = useRef();
  const qameezArmholeRef = useRef();
  const qameezCuffRef = useRef();
  const shalwaarLengthRef = useRef();
  const shalwaarHemRef = useRef();
  const shalwaarCircumferenceRef = useRef();
  const shalwaarRiseRef = useRef();
  const instructionsRef = useRef();
  const collarRef = useRef();
  const fittingRef = useRef();

  const { showToastNotification } = useToastNotification();

  useEffect(() => {
    if (!isOpen || !currentCustomer) return null;

    nameRef.current.value = currentCustomer.name;
    phoneRef.current.value = currentCustomer.phone;
    qameezLengthRef.current.value = currentCustomer.qameez.length;
    qameezSleeveRef.current.value = currentCustomer.qameez.sleeve;
    qameezShoulderRef.current.value = currentCustomer.qameez.shoulder;
    qameezNeckRef.current.value = currentCustomer.qameez.neck;
    qameezChestRef.current.value = currentCustomer.qameez.chest;
    qameezWaistRef.current.value = currentCustomer.qameez.waist;
    qameezHipRef.current.value = currentCustomer.qameez.hip;
    qameezArmholeRef.current.value = currentCustomer.qameez.armhole;
    qameezCuffRef.current.value = currentCustomer.qameez.cuff;
    shalwaarLengthRef.current.value = currentCustomer.shalwaar.length;
    shalwaarHemRef.current.value = currentCustomer.shalwaar.hem;
    shalwaarCircumferenceRef.current.value = currentCustomer.shalwaar.circumference;
    shalwaarRiseRef.current.value = currentCustomer.shalwaar.rise;
    instructionsRef.current.value = currentCustomer.instructions;
    collarRef.current.value = currentCustomer.collar;
    fittingRef.current.value = currentCustomer.fitting;

  }, [isOpen, currentCustomer]);

  if (!isOpen || !currentCustomer) return;

  function saveCustomerData(event) {
    event.preventDefault();

    const editedCustomer = {
      id: currentCustomer.id,
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      createdAt: currentCustomer.createdAt,
      updatedAt: new Date(),
      qameez: {
        length: qameezLengthRef.current.value,
        sleeve: qameezSleeveRef.current.value,
        shoulder: qameezShoulderRef.current.value,
        neck: qameezNeckRef.current.value,
        chest: qameezChestRef.current.value,
        waist: qameezWaistRef.current.value,
        hip: qameezHipRef.current.value,
        armhole: qameezArmholeRef.current.value,
        cuff: qameezCuffRef.current.value
      },
      shalwaar: {
        length: shalwaarLengthRef.current.value,
        hem: shalwaarHemRef.current.value,
        circumference: shalwaarCircumferenceRef.current.value,
        rise: shalwaarRiseRef.current.value
      },
      instructions: instructionsRef.current.value.trim(),
      collar: collarRef.current.value,
      fitting: fittingRef.current.value
    }
    editCustomer(customerId, editedCustomer);
    showToastNotification(`Updated measurements for: ${editedCustomer.name}`);
    onClose(); // Closes This Dialog
  }

  return createPortal(
    <>
      <div
        onClick={onClose}
        className={`bg-black/50 backdrop-blur-xs starting:opacity-0 transition-[display,opacity] transition-discrete duration-300 ${isOpen ? "fixed inset-0 opacity-100 " : "opacity-0 hidden"} `}>
      </div>
      <dialog
        open={isOpen}
        className={`h-[90%] w-[90%] top-1/2 left-1/2 -translate-1/2 flex flex-col shadow-[0_0_18px_0_rgba(0,0,0,0.2)] border-2 border-accent-light rounded-xl transition-[display,opacity] transition-discrete duration-300 overflow-hidden ${isOpen ? "fixed inset-0 opacity-100" : "opacity-0 hidden"}`}>
        <div className="p-4 flex justify-between items-center bg-accent-dark border-b-4 border-accent-light">
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="p-2 flex justify-center items-center text-accent-dark bg-accent-light rounded-xl">
              <span className="material-symbols-outlined select-none">
                edit
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-base sm:text-xl text-accent-light font-bold">
                Edit Customer
              </h1>
              <p className="text-xs text-bg-low/70">
                Enter customer details & measurements
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl transition-colors duration-300 cursor-pointer hover:bg-bg-high/10">
            <span className="material-symbols-outlined p-2  text-white select-none">close</span>
          </button>
        </div>

        {/* Body */}
        <form
          id="customer-form"
          onSubmit={saveCustomerData}
          className="p-4 space-y-4 text-text-dark bg-bg-low overflow-y-auto">
          {/* Customer Information */}
          <div className="p-4 bg-bg-mid shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-lg">
            <h2 className="flex items-center gap-2 text-sm uppercase font-bold border-bborder-accent-light/80">
              <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-xl! text-accent-light select-none">
                person
              </span>
              Customer Information *
            </h2>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2">
              <div className="flex-1 flex flex-col space-y-1">
                <label
                  htmlFor="name-input"
                  className="text-xs font-medium">
                  Customer Name
                  <span
                    dir="rtl"
                    className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                    (نام)
                  </span>*
                </label>
                <input
                  ref={nameRef}
                  id="name-input"
                  type="text"
                  placeholder="e.g. Ali"
                  required
                  className="px-2 py-1.5 text-sm bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none focus:ring-2 focus:ring-accent-light focus:border-transparent placeholder:text-sm" />
              </div>

              <div className="flex-1 flex flex-col space-y-1">
                <label
                  htmlFor="phone-number-input"
                  className="text-xs font-medium">
                  Phone Number
                  <span
                    dir="rtl"
                    className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                    (فون نمبر)
                  </span>*
                </label>
                <input
                  ref={phoneRef}
                  id="phone-number-input"
                  type="tel"
                  placeholder="e.g. 0312-3456789"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  className="px-2 py-1.5 text-sm bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none focus:ring-2 focus:ring-accent-light focus:border-transparent placeholder:text-sm" />
              </div>
            </div>

          </div>

          {/* Qameez Measurements */}
          <div className="p-4 bg-bg-mid shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-lg">
            <h2 className="flex items-center gap-2 text-sm uppercase font-bold border-bborder-accent-light/80">
              <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-lg! text-accent-light select-none">
                apparel
              </span>
              Qameez Measurements *
            </h2>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 align-items-end gap-2">
              <NumberField
                ref={qameezLengthRef}
                titleEN={"Qameez Length"}
                titleUR={"لمبائی"}
              />
              <NumberField
                ref={qameezSleeveRef}
                titleEN={"Sleeve Length"}
                titleUR={"بازو"}
              />
              <NumberField
                ref={qameezShoulderRef}
                titleEN={"Shoulder"}
                titleUR={"تیرا"}
              />
              <NumberField
                ref={qameezNeckRef}
                titleEN={"Neck"}
                titleUR={"گلا"}
              />
              <NumberField
                ref={qameezChestRef}
                titleEN={"Chest"}
                titleUR={"چھاتی"}
              />
              <NumberField
                ref={qameezWaistRef}
                titleEN={"Waist"}
                titleUR={"کمر"}
              />
              <NumberField
                ref={qameezHipRef}
                titleEN={"Hip"}
                titleUR={"کولھا"}
              />
              <NumberField
                ref={qameezArmholeRef}
                titleEN={"Arm Hole"}
                titleUR={"مونڈا/بغل"}
              />
              <NumberField
                ref={qameezCuffRef}
                titleEN={"Cuff"}
                titleUR={"کَف"}
              />
            </div>

          </div>

          {/* Shalwar Measurements */}
          <div className="p-4 bg-bg-mid shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-lg">
            <h2 className="flex items-center gap-2 text-sm uppercase font-bold border-bborder-accent-light/80">
              <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-lg! text-accent-light select-none">
                apparel
              </span>
              Shalwar Measurements *
            </h2>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 align-items-end gap-2">
              <NumberField
                ref={shalwaarLengthRef}
                titleEN={"Shalwar Length"}
                titleUR={"لمبائی"}
              />
              <NumberField
                ref={shalwaarHemRef}
                titleEN={"Bottom / Paincha"}
                titleUR={"پائنچہ"}
              />
              <NumberField
                ref={shalwaarCircumferenceRef}
                titleEN={"Ghera / Circumference"}
                titleUR={"گھیرہ"}
              />
              <NumberField
                ref={shalwaarRiseRef}
                titleEN={"Rise / Aasan"}
                titleUR={"آسن"}
              />
            </div>
          </div>

          {/* Fitting Options & Extra Notes */}
          <div className="p-4 bg-bg-mid shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-lg">
            <h2 className="flex items-center gap-2 text-sm uppercase font-bold border-bborder-accent-light/80">
              <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-lg! text-accent-light select-none">
                apparel
              </span>
              Fitting Options & Extra Notes *
            </h2>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="collar-style"
                  className="text-xs font-medium">
                  Collar / Gala Style
                  <span
                    dir="rtl"
                    className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                    (گلا)
                  </span>
                </label>

                <select
                  ref={collarRef}
                  name="collar-style"
                  id="collar-style"
                  required
                  className="w-full px-1 py-1.5 flex items-center text-sm text-text-muted/90 bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none overflow-clip focus-within:ring-2 focus-within:ring-accent-light focus-within:border-transparent">

                  <option value="Ban Collar">
                    Ban Collar (بین کالر)
                  </option>
                  <option value="Shirt Collar">
                    Shirt Collar (شرٹ کالر)
                  </option>
                  <option value="Maghzi Collar">
                    Maghzi Collar (مغزی کالر)
                  </option>
                </select>
              </div>

              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="fitting-preference"
                  className="text-xs font-medium">
                  Fitting Preference
                  <span
                    dir="rtl"
                    className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                    (فٹنگ)
                  </span>
                </label>

                <select
                  ref={fittingRef}
                  name="fitting-preference"
                  id="fitting-preference"
                  required
                  className="w-full px-1 py-1.5 flex items-center text-sm text-text-muted/90 bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none overflow-clip focus-within:ring-2 focus-within:ring-accent-light focus-within:border-transparent">
                  <option value="Regular Fit">
                    Normal / Regular Fit (مناسب فٹنگ)
                  </option>
                  <option value="Slim Fit">
                    Slim Fit (تنگ فٹنگ)
                  </option>
                  <option value="Loose Fit">
                    Loose / Traditional Fit (کھلی فٹنگ)
                  </option>
                </select>
              </div>

              <div className="sm:col-span-2 flex flex-col space-y-1">
                <label
                  htmlFor="instructions"
                  className="text-xs font-medium">
                  Instructions
                  <span
                    dir="rtl"
                    className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                    (فٹنگ)
                  </span>
                </label>

                <textarea
                  ref={instructionsRef}
                  name="instructions"
                  id="instructions"
                  rows="4"
                  placeholder="e.g. Side zipper pocket on right, double stitching on collar, round cuff buttons..."
                  className="px-2 py-2 text-sm text-text-muted/90 bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none focus:ring-2 focus:ring-accent-light focus:border-transparent"></textarea>
              </div>
            </div>
          </div>
        </form>

        {/* Saving Options */}
        <div className="px-4 py-3 flex justify-end items-center gap-2 bg-bg-low shadow-[0_0_8px_0_rgba(0,0,0,0.4)] border-t-4 border-bg-low">
          <button
            type="submit"
            form="customer-form"
            className="px-6 py-1.5 flex justify-center items-center gap-1 text-text-light font-semibold bg-accent-light brightness-110 rounded-lg transition-[filter] duration-300 cursor-pointer hover:brightness-104">
            <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-base! select-none">
              save
            </span>
            Save Changes
          </button>
        </div>

      </dialog>
    </>
    , document.querySelector("#modal-container"));
}

export default EditCustomerDialog;

---

import { forwardRef } from "react";

function NumberFieldRef({ titleEN, titleUR }, ref) {
  return (
    <div className="space-y-1 flex flex-col justify-end">
      <label
        htmlFor="collar-style"
        className="text-xs font-medium">
        {titleEN}
        <span
          dir="rtl"
          className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
          ({titleUR})
        </span>
      </label>
      <div className="w-full flex items-center text-sm bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none overflow-clip focus-within:ring-2 focus-within:ring-accent-light focus-within:border-transparent">
        <input
          ref={ref}
          id="qameez-length-input"
          type="number"
          step="0.2"
          placeholder="0.0"
          className="w-full pl-2 py-1.5 bg-bg-high outline-none placeholder:font-semibold" />
        <label
          htmlFor="qameez-length-input"
          className="pr-2 pl-1 font-medium select-none">in</label>
      </div>
    </div>
  );
}

export const NumberField = forwardRef(NumberFieldRef);

---

function CustomerReceipt({ customer }) {
  if (!customer) return null;

  return (
    <section className="receipt-print-area w-full px-4 py-2 bg-bg-low">
      <div className="receipt max-w-7xl mx-auto p-4 flex flex-col gap-4 border-3 ">
        {/* Title */}
        <div className="py-4">
          <h1 className="text-2xl text-center font-bold">Tailor's Measurement Receipt</h1>
        </div>

        {/* Dashed Divider */}
        <div className="border-b border-dashed  border-accent-dark"></div>

        {/* ID and Date */}
        <div className="flex justify-between items-center text-sm">
          <p className="flex items-center gap-2">
            Receipt ID:
            <span className="font-mono font-semibold">#00001</span>
          </p>
          <p className="flex items-center gap-2">
            Date:
            <span className="font-mono font-semibold">{new Date().toLocaleDateString()}</span>
          </p>
        </div>

        {/* Divider */}
        <div className="border-b border-accent-dark"></div>

        {/* Name and Phone */}
        <div className="px-3 py-3 flex justify-between items-center border-2 border-accent-light/80 rounded-lg">
          <div>
            <h3 className="text-xs uppercase font-medium">
              Customer Name
            </h3>
            <h2 className="text-xl font-semibold">
              {customer.name}
            </h2>
          </div>
          <div>
            <h3 className="text-xs text-end uppercase font-medium">
              PHONE NUMBER
            </h3>
            <h2 className="text-base font-semibold">
              {customer.phone.slice(0, 4) + "-" + customer.phone.slice(4)}
            </h2>
          </div>
        </div>

        {/* Qameez Measurements */}
        <div>
          <div>
            <h2 className="text-accent-dark/60 tracking-tight uppercase font-semibold">
              Qameez Measurements
              <span>(قمیص)</span>
            </h2>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 print:grid-cols-4 gap-2">
            <li className="px-2 py-3 flex flex-col justify-center border-2 border-accent-dark/10 rounded-lg">
              <h3 className="text-xs font-medium">
                Qameez Length
                <span>(لمبائی)</span>
              </h3>
              <p className="font-mono font-semibold">
                {customer.qameez.length} in
              </p>
            </li>
            <li className="px-2 py-3 flex flex-col justify-center border-2 border-accent-dark/10 rounded-lg">
              <h3 className="text-xs font-medium">
                Sleeve Length
                <span>(بازو)</span>
              </h3>
              <p className="font-mono font-semibold">
                {customer.qameez.sleeve} in
              </p>
            </li>
            <li className="px-2 py-3 flex flex-col justify-center border-2 border-accent-dark/10 rounded-lg">
              <h3 className="text-xs font-medium">
                Shoulder
                <span>(تِیرا)</span>
              </h3>
              <p className="font-mono font-semibold">
                {customer.qameez.shoulder} in
              </p>
            </li>
            <li className="px-2 py-3 flex flex-col justify-center border-2 border-accent-dark/10 rounded-lg">
              <h3 className="text-xs font-medium">
                Neck
                <span>(گلا)</span>
              </h3>
              <p className="font-mono font-semibold">
                {customer.qameez.neck} in
              </p>
            </li>
            <li className="px-2 py-3 flex flex-col justify-center border-2 border-accent-dark/10 rounded-lg">
              <h3 className="text-xs font-medium">
                Chest
                <span>(چھاتی)</span>
              </h3>
              <p className="font-mono font-semibold">
                {customer.qameez.chest} in
              </p>
            </li>
            <li className="px-2 py-3 flex flex-col justify-center border-2 border-accent-dark/10 rounded-lg">
              <h3 className="text-xs font-medium">
                Waist
                <span>(کمر)</span>
              </h3>
              <p className="font-mono font-semibold">
                {customer.qameez.waist} in
              </p>
            </li>
            <li className="px-2 py-3 flex flex-col justify-center border-2 border-accent-dark/10 rounded-lg">
              <h3 className="text-xs font-medium">
                Hip
                <span>(کولھا)</span>
              </h3>
              <p className="font-mono font-semibold">
                {customer.qameez.hip} in
              </p>
            </li>
            <li className="px-2 py-3 flex flex-col justify-center border-2 border-accent-dark/10 rounded-lg">
              <h3 className="text-xs font-medium">
                Arm Hole
                <span>(مونڈا/بغل)</span>
              </h3>
              <p className="font-mono font-semibold">
                {customer.qameez.armhole} in
              </p>
            </li>
            <li className="px-2 py-3 flex flex-col justify-center border-2 border-accent-dark/10 rounded-lg">
              <h3 className="text-xs font-medium">
                Cuff
                <span>(کَف)</span>
              </h3>
              <p className="font-mono font-semibold">
                {customer.qameez.cuff} in
              </p>
            </li>
          </ul>
        </div>

        {/* Shalwaar Measurements */}
        <div>
          <div>
            <h2 className="text-accent-dark/60 tracking-tight uppercase font-semibold">
              Shalwaar Measurements
              <span>(قمیص)</span>
            </h2>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 print:grid-cols-4 gap-2">
            <li className="px-2 py-3 flex flex-col justify-center border-2 border-accent-dark/10 rounded-lg">
              <h3 className="text-xs font-medium">
                Shalwar Length
                <span>(لمبائی)</span>
              </h3>
              <p className="font-mono font-semibold">
                {customer.shalwaar.length} in
              </p>
            </li>
            <li className="px-2 py-3 flex flex-col justify-center border-2 border-accent-dark/10 rounded-lg">
              <h3 className="text-xs font-medium">
                Bottom / Paincha
                <span>(پائنچہ)</span>
              </h3>
              <p className="font-mono font-semibold">
                {customer.shalwaar.hem} in
              </p>
            </li>
            <li className="px-2 py-3 flex flex-col justify-center border-2 border-accent-dark/10 rounded-lg">
              <h3 className="text-xs font-medium">
                Ghera / Circumference
                <span>(گھیرہ)</span>
              </h3>
              <p className="font-mono font-semibold">
                {customer.shalwaar.circumference} in
              </p>
            </li>
            <li className="px-2 py-3 flex flex-col justify-center border-2 border-accent-dark/10 rounded-lg">
              <h3 className="text-xs font-medium">
                Rise / Aasan
                <span>(آسن)</span>
              </h3>
              <p className="font-mono font-semibold">
                {customer.shalwaar.rise} in
              </p>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-b  border-accent-dark"></div>

        {/* Instructions */}
        <div className="px-3 py-3 sm:row-start-2 sm:col-start-2 flex flex-col border-2 border-accent-light/80 rounded-lg">
          <h2 className="text-xs text-accent-light uppercase font-bold">
            Instructions
          </h2>
          <p className="mt-2 flex-1 text-sm italic">
            "{customer.instructions}"
          </p>
          <div className="mt-4 flex items-center gap-1">
            <p className="px-3 py-1 text-xs text-text-light/80 font-semibold bg-accent-light/10 border border-accent-light/40 rounded">
              {customer.collar}
            </p>
            <p className="px-3 py-1 text-xs text-text-light/80 font-semibold bg-accent-dark/5 border border-accent-dark/16 rounded">
              {customer.fitting}
            </p>
          </div>
        </div>

        {/* Dashed Divider */}
        <div className="border-b border-dashed  border-accent-dark"></div>


        {/* Final Words */}
        <div className="py-4 flex flex-col items-center">
          <h3 className="text-center font-semibold">
            Thank you for visiting our store
          </h3>
          {/* <p className="text-sm text-center">
            Please bring this ticket when picking up your garments.
          </p> */}
        </div>


      </div>
    </section>
  );
}

export default CustomerReceipt;

---

@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@layer base {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
    interpolate-size: allow-keywords;
  }
  
  body {
    color: #2d080e;
    background-color: var(--bg-low);
  }

  #modal-container {
    position: relative;
  }

    /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #f5efe3;
  }
  ::-webkit-scrollbar-thumb {
    background: #d4af37;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #800020;
  }
}
:root {
  --custom-maroon-50: #fdf2f4;
  --custom-maroon-100: #fbe5e8;
  --custom-maroon-200: #f7ced5;
  --custom-maroon-300: #f0aa9f;
  --custom-maroon-600: #9b1c2e;
  --custom-maroon-700: #800020;
  --custom-maroon-800: #610018;
  --custom-maroon-900: #4a0e17;
  --custom-maroon-950: #2d080e;

  --custom-gold-100: #fdf8e6;
  --custom-gold-200: #f9eebe;
  --custom-gold-300: #f4e292;
  --custom-gold-400: #ebd15b;
  --custom-gold-500: #d4af37;
  --custom-gold-600: #b88e1e;
  --custom-gold-700: #916c10;

  --custom-cream-50: #fdfbf7;
  --custom-cream-100: #fbf7ef;
  --custom-cream-200: #f5efe3;
  --custom-cream-300: #eae0d0;
  --custom-cream-400: #d8c8b2;

  --custom-text: #2d080e;
  --custom-bg: #fbf7ef;

  --accent-light: #d4af37;
  --accent-dark: #4a0e17;

  --text-light: #800020;
  --text-dark: #4a0e17;
  --text-muted: #9b1c2e;

  --bg-high: #fdfbf7;
  --bg-mid: #fbf7ef;
  --bg-low: #f5efe3;
}

@theme inline {
  --color-custom-maroon-50: var(--custom-maron-50);
  --color-custom-maroon-100: var(--custom-maron-100);
  --color-custom-maroon-200: var(--custom-maron-200);
  --color-custom-maroon-300: var(--custom-maron-300);
  --color-custom-maroon-600: var(--custom-maron-600);
  --color-custom-maroon-700: var(--custom-maron-700);
  --color-custom-maroon-800: var(--custom-maron-800);
  --color-custom-maroon-900: var(--custom-maron-900);
  --color-custom-maroon-950: var(--custom-maron-950);

  --color-custom-gold-100: var(--custom-gold-100);
  --color-custom-gold-200: var(--custom-gold-200);
  --color-custom-gold-300: var(--custom-gold-300);
  --color-custom-gold-400: var(--custom-gold-400);
  --color-custom-gold-500: var(--custom-gold-500);
  --color-custom-gold-600: var(--custom-gold-600);
  --color-custom-gold-700: var(--custom-gold-700);

  --color-custom-cream-50 : var(--custom-cream-50);
  --color-custom-cream-100: var(--custom-cream-100);
  --color-custom-cream-200: var(--custom-cream-200);
  --color-custom-cream-300: var(--custom-cream-300);
  --color-custom-cream-400: var(--custom-cream-400);

  --color-custom-text: var(--custom-text);
  --color-custom-bg: var(--custom-bg);

  --color-accent-light: var(--accent-light);
  --color-accent-dark: var(--accent-dark);

  --color-text-light: var(--text-light);
  --color-text-dark: var(--text-dark);
  --color-text-muted: var(--text-muted);

  --color-bg-high: var(--bg-high);
  --color-bg-mid: var(--bg-mid);
  --color-bg-low: var(--bg-low);

  --breakpoint-xs: 425px;
}

@utility urdu {
    @apply text-[0.65rem] xs:text-xs;
    font-family: "Noto Nastaliq Urdu", serif;
    direction: rtl;
}

/* @media print {
  body * {
    display: none !important;
  }

  .receipt-print-area,
  .receipt-print-area * {
    display: block;
  }

  .receipt-print-area {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    padding: 0 !important;
    margin: 0 !important;

    background: white !important;
  }

  @page {
    size: A4;
    margin: 10mm;
  }
} */
@media print {
  /* Hide everything normally */
  body * {
    visibility: hidden;
  }

  /* Make the receipt visible */
  .receipt-print-area,
  .receipt-print-area * {
    visibility: visible;
  }

  /* Remove the receipt from the normal document flow */
  .receipt-print-area {
    position: absolute !important;
    left: 0 !important;
    top: 0 !important;

    width: 100% !important;
    height: auto !important;

    margin: 0 !important;
    padding: 0 !important;

    background: white !important;
  }

  .receipt {
    /* width: 100% !important; */
    /* max-width: none !important; */

    margin: 0 !important;
    padding: 10mm !important;

    background: white !important;
  }

  @page {
    size: A4;
    margin: 10mm;
  }
}