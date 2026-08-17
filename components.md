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

function CustomerReceipt({ customer }) {
  if (!customer) return;
  customer = {
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
  }
}

return (
  <section className="w-full px-4 py-2 bg-bg-low print:block *:print:block">
    <div className="max-w-7xl mx-auto p-4 flex flex-col gap-4 border-3 ">
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
        <p className="text-sm text-center">
          Please bring this ticket when picking up your garments.
        </p>
      </div>


    </div>
  </section>
);
}

export default CustomerReceipt;

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

@media print {
  body * {
    visibility: none;
  }
}