import { useEffect } from "react";
import { createPortal } from "react-dom";

function AddCustomerDialog({ children, isOpen, onClose }) {
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

  return createPortal(
    <>
      <div
        onClick={onClose}
        className={`bg-black/50 backdrop-blur-xs starting:opacity-0 transition-[display,opacity] transition-discrete duration-300 ${isOpen ? "fixed inset-0 opacity-100 " : "opacity-0 hidden"} `}>
      </div>
      <dialog
        open={isOpen}
        className={`h-[90%] w-[90%] top-1/2 left-1/2 -translate-1/2 flex flex-col shadow-[0_0_18px_0_rgba(0,0,0,0.2)] border-2 border-accent-light rounded-xl transition-[display,opacity] transition-discrete duration-300 overflow-hidden ${isOpen ? "fixed inset-0 opacity-100 " : "opacity-0 hidden"}`}>
        <div className="p-3 flex justify-between items-center bg-accent-dark border-b-4 border-accent-light">
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

        <div className="p-4 space-y-4 text-text-dark bg-bg-low overflow-y-auto">
          {/* Customer Information */}
          <div className="p-4 bg-bg-mid shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-lg">
            <h2 className="flex items-center gap-2 text-sm uppercase font-bold border-bborder-accent-light/80">
              <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-xl! text-accent-light select-none">
                person
              </span>
              Customer Information *
            </h2>

            <div className="mt-4 space-y-2">
              <div className="flex flex-col space-y-1">
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
                  id="name-input"
                  type="text"
                  placeholder="e.g. Ali"
                  className="px-2 py-1.5 text-sm bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none focus:ring-2 focus:ring-accent-light focus:border-transparent placeholder:text-sm" />
              </div>

              <div className="flex flex-col space-y-1">
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
                  id="phone-number-input"
                  type="text"
                  placeholder="e.g. 0312-3456789"
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

            <div className="mt-4 grid grid-cols-2 gap-2">
              <NumberField
                titleEN={"Qameez Length"}
                titleUR={"لمبائی"}
              />
              <NumberField
                titleEN={"Sleeve Length"}
                titleUR={"بازو"}
              />
              <NumberField
                titleEN={"Shoulder"}
                titleUR={"تیرا"}
              />
              <NumberField
                titleEN={"Neck"}
                titleUR={"گلا"}
              />
              <NumberField
                titleEN={"Chest"}
                titleUR={"چھاتی"}
              />
              <NumberField
                titleEN={"Waist"}
                titleUR={"کمر"}
              />
              <NumberField
                titleEN={"Hip"}
                titleUR={"کولھا"}
              />
              <NumberField
                titleEN={"Arm Hole"}
                titleUR={"مونڈا/بغل"}
              />
              <NumberField
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

            <div className="mt-4 grid grid-cols-2 align-items-end gap-2">
              <NumberField
                titleEN={"Shalwar Length"}
                titleUR={"لمبائی"}
              />
              <NumberField
                titleEN={"Bottom / Paincha"}
                titleUR={"پائنچہ"}
              />
              <NumberField
                titleEN={"Ghera / Circumference"}
                titleUR={"گھیرہ"}
              />
              <NumberField
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

            <div className="mt-4 space-y-2 grid grid-cols-1 gap-2">
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
                  name="collar-style"
                  id="collar-style"
                  className="w-full px-1 py-1.5 flex items-center text-sm text-text-muted/90 bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none overflow-clip focus-within:ring-2 focus-within:ring-accent-light focus-within:border-transparent">
                  {/* <option value="" disabled selected>
                    Select an option
                  </option> */}
                  <option value="ban-collar">
                    Ban Collar
                    <span
                      dir="rtl"
                      className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                      (بین گلا)
                    </span>
                  </option>
                  <option value="shirt-collar">
                    Shirt Collar
                    <span
                      dir="rtl"
                      className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                      (شرٹ کالر)
                    </span>
                  </option>
                  <option value="maghzi-collar">
                    Maghzi Collar
                    <span
                      dir="rtl"
                      className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                      (مغزی کالر)
                    </span>
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
                  name="fitting-preference"
                  id="fitting-preference"
                  className="w-full px-1 py-1.5 flex items-center text-sm text-text-muted/90 bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none overflow-clip focus-within:ring-2 focus-within:ring-accent-light focus-within:border-transparent">
                  <option value="normal-fit">
                    Normal / Regular Fit
                    <span
                      dir="rtl"
                      className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                      (مناسب فٹنگ)
                    </span>
                  </option>
                  <option value="slim-fit">
                    Slim Fit
                    <span
                      dir="rtl"
                      className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                      (تنگ فٹنگ)
                    </span>
                  </option>
                  <option value="loose-fit">
                    Loose / Traditional Fit
                    <span
                      dir="rtl"
                      className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
                      (کھلی فٹنگ)
                    </span>
                  </option>
                </select>
              </div>

              <div className="flex flex-col space-y-1">
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
                  name="instructions"
                  id="instructions"
                  rows="4"
                  placeholder="e.g. Side zipper pocket on right, double stitching on collar, round cuff buttons..."
                  className="px-2 py-2 text-sm text-text-muted/90 bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none focus:ring-2 focus:ring-accent-light focus:border-transparent"></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Saving Options */}
        <div className="px-4 py-3 flex justify-end items-center gap-2 bg-bg-low shadow-[0_0_8px_0_rgba(0,0,0,0.4)] border-t-4 border-bg-low">
          <button className="px-6 py-1.5 flex justify-center items-center gap-1 text-text-light font-semibold bg-accent-light brightness-110 rounded-lg transition-[filter] duration-300 cursor-pointer hover:brightness-104">
            <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-base! select-none">
              receipt
            </span>
            Save
          </button>
        </div>

      </dialog>
    </>
    , document.querySelector("#modal-container"));
}

function NumberField({ titleEN, titleUR }) {
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

export default AddCustomerDialog;