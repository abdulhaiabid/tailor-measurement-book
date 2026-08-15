import { forwardRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useCustomerData } from "./CustomerDataProvider";

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

  function saveCustomerData() {
    if (
      !nameRef &&
      !phoneRef &&
      !qameezLengthRef &&
      !qameezSleeveRef &&
      !qameezShoulderRef &&
      !qameezNeckRef &&
      !qameezChestRef &&
      !qameezWaistRef &&
      !qameezHipRef &&
      !qameezArmholeRef &&
      !qameezCuffRef &&
      !shalwaarLengthRef &&
      !shalwaarHemRef &&
      !shalwaarCircumferenceRef &&
      !shalwaarRiseRef &&
      !instructionsRef &&
      !collarRef &&
      !fittingRef
    ) return;

    const newCustomer = {
      id: crypto.randomUUID(),
      name: nameRef.current.value,
      phone: phoneRef.current.value,
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
      instructions: instructionsRef.current.value,
      collar: collarRef.current.value,
      fitting: fittingRef.current.value
    }

    addCustomer(newCustomer);
    console.log("Save.");
  }

  return createPortal(
    <>
      <div
        onClick={onClose}
        className={`bg-black/50 backdrop-blur-xs starting:opacity-0 transition-[display,opacity] transition-discrete duration-300 ${isOpen ? "fixed inset-0 opacity-100 " : "opacity-0 hidden"} `}>
      </div>
      <dialog
        open={isOpen}
        className={`h-[90%] w-[90%] top-1/2 left-1/2 -translate-1/2 flex flex-col shadow-[0_0_18px_0_rgba(0,0,0,0.2)] border-2 border-accent-light rounded-xl transition-[display,opacity] transition-discrete duration-300 overflow-hidden ${isOpen ? "fixed inset-0 opacity-100 " : "opacity-0 hidden"}`}>
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
        <div className="p-4 space-y-4 text-text-dark bg-bg-low overflow-y-auto">
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
                  type="text"
                  placeholder="e.g. 0312-3456789"
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

                  <option value="ban-collar">
                    Ban Collar (بین کالر)
                  </option>
                  <option value="shirt-collar">
                    Shirt Collar (شرٹ کالر)
                  </option>
                  <option value="maghzi-collar">
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
                  <option value="normal-fit">
                    Normal / Regular Fit (مناسب فٹنگ)
                  </option>
                  <option value="slim-fit">
                    Slim Fit (تنگ فٹنگ)
                  </option>
                  <option value="loose-fit">
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
                  required
                  className="px-2 py-2 text-sm text-text-muted/90 bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none focus:ring-2 focus:ring-accent-light focus:border-transparent"></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Saving Options */}
        <div className="px-4 py-3 flex justify-end items-center gap-2 bg-bg-low shadow-[0_0_8px_0_rgba(0,0,0,0.4)] border-t-4 border-bg-low">
          <button
            onClick={saveCustomerData}
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

const NumberField = forwardRef(NumberFieldRef);
export default AddCustomerDialog;