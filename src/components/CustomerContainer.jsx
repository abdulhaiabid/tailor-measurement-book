import { useState, useEffect } from "react";
import { useCustomerData } from "./CustomerDataProvider";
import EditCustomerDialog from "./EditCustomerDialog";

function CustomerContainer() {
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

  const { customers } = useCustomerData();

  function onEditCustomerDialogClose() {
    setIsEditCustomerDialogOpen(false);
    setEditCustomerId(null);
  }

  return (
    <section className="w-full px-4 py-2 bg-bg-low">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4">
        {
          customers.map(customer => {
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

function CustomerCard({ id, name, phone, qameez, shalwaar, instructions, collar, fitting, setIsEditCustomerDialogOpen, setEditCustomerId }) {
  const { deleteCustomer } = useCustomerData();
  return (
    <div className="col-span-1 bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-xl overflow-hidden">
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
          10 Aug 2026
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
                <td className="font-semibold">{qameez.length}&Prime;</td>
              </tr>
              <tr>
                <td>Sleeve Length
                  <span className="urdu" dir="rtl">(بازو) </span>:
                </td>
                <td className="font-semibold">{qameez.sleeve}&Prime;</td>
              </tr>
              <tr>
                <td>Shoulder
                  <span className="urdu" dir="rtl">(تِیرا) </span>:
                </td>
                <td className="font-semibold">{qameez.shoulder}&Prime;</td>
              </tr>
              <tr>
                <td>Neck
                  <span className="urdu" dir="rtl">(گلا) </span>:
                </td>
                <td className="font-semibold">{qameez.neck}&Prime;</td>
              </tr>
              <tr>
                <td>Chest
                  <span className="urdu" dir="rtl">(چھاتی) </span>:
                </td>
                <td className="font-semibold">{qameez.chest}&Prime;</td>
              </tr>
              <tr>
                <td>Waist
                  <span className="urdu" dir="rtl">(کمر) </span>:
                </td>
                <td className="font-semibold">{qameez.waist}&Prime;</td>
              </tr>
              <tr>
                <td>Hip
                  <span className="urdu" dir="rtl">(کولھا) </span>:
                </td>
                <td className="font-semibold">{qameez.hip}&Prime;</td>
              </tr>
              <tr>
                <td>Armhole
                  <span className="urdu" dir="rtl">(بغل) </span>:
                </td>
                <td className="font-semibold">{qameez.armhole}&Prime;</td>
              </tr>
              <tr>
                <td>Cuff
                  <span className="urdu" dir="rtl">(کَف) </span>:
                </td>
                <td className="font-semibold">{qameez.cuff}&Prime;</td>
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
                <td className="font-semibold">{shalwaar.length}&Prime;</td>
              </tr>
              <tr>
                <td>Bottom / Hem
                  <span className="urdu" dir="rtl">(پائنچہ) </span>:
                </td>
                <td className="font-semibold">{shalwaar.hem}&Prime;</td>
              </tr>
              <tr>
                <td>Circumference
                  <span className="urdu" dir="rtl">(گھیرہ) </span>:
                </td>
                <td className="font-semibold">{shalwaar.circumference}&Prime;</td>
              </tr>
              <tr>
                <td>Rise / Aasan
                  <span className="urdu" dir="rtl">(آسن) </span>:
                </td>
                <td className="font-semibold">{shalwaar.rise}&Prime;</td>
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
            "{instructions}"
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
        <button className="px-4 py-1 flex items-center gap-1 text-text-light font-semibold bg-accent-light brightness-110 rounded-lg transition-[filter] duration-300 cursor-pointer hover:brightness-104">
          <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-base! select-none">
            receipt
          </span>
          Receipt
        </button>

        <div className="flex items-end gap-2">
          <button
            onClick={() => {
              setIsEditCustomerDialogOpen(true);
              setEditCustomerId(id);
            }}
            className="flex justify-center items-center cursor-pointer">
            <span className="material-symbols-outlined p-1 text-accent-dark! leading-2 font-normal! rounded-lg transition-colors duration-300 select-none hover:bg-accent-dark/10">
              edit
            </span>
          </button>
          <button
            onClick={() => deleteCustomer(id)}
            className="flex justify-center items-center cursor-pointer">
            <span className="material-symbols-outlined p-1 text-accent-dark! leading-2 font-normal! rounded-lg transition-colors duration-300 select-none hover:bg-accent-dark/10">
              delete
            </span>
          </button>
        </div>
      </div>
    </div >
  );
}

export default CustomerContainer;