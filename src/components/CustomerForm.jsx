import { NumberField } from "./NumberField";

function CustomerForm({ isOpen, onClose, title, formData, setFormData, saveCustomerData }) {
  return (
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
                {title}
              </h1>
              <p className="text-xs text-bg-low/70">
                Enter customer details & measurements
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl transition-colors duration-300 cursor-pointer hover:bg-bg-high/10">
            <span className="material-symbols-outlined p-2 text-white select-none">close</span>
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
                  value={formData.name}
                  onChange={e => setFormData(current => ({ ...current, name: e.target.value }))}
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
                  value={formData.phone}
                  onChange={e => setFormData(current => ({ ...current, phone: e.target.value }))}
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
                inputValue={formData.qameez.length}
                inputOnChange={e => setFormData(current => ({ ...current, qameez: { ...current.qameez, length: e.target.value } }))}
                titleEN={"Qameez Length"}
                titleUR={"لمبائی"}
              />
              <NumberField
                inputValue={formData.qameez.sleeve}
                inputOnChange={e => setFormData(current => ({ ...current, qameez: { ...current.qameez, sleeve: e.target.value } }))}
                titleEN={"Sleeve Length"}
                titleUR={"بازو"}
              />
              <NumberField
                inputValue={formData.qameez.shoulder}
                inputOnChange={e => setFormData(current => ({ ...current, qameez: { ...current.qameez, shoulder: e.target.value } }))}
                titleEN={"Shoulder"}
                titleUR={"تیرا"}
              />
              <NumberField
                inputValue={formData.qameez.neck}
                inputOnChange={e => setFormData(current => ({ ...current, qameez: { ...current.qameez, neck: e.target.value } }))}
                titleEN={"Neck"}
                titleUR={"گلا"}
              />
              <NumberField
                inputValue={formData.qameez.chest}
                inputOnChange={e => setFormData(current => ({ ...current, qameez: { ...current.qameez, chest: e.target.value } }))}
                titleEN={"Chest"}
                titleUR={"چھاتی"}
              />
              <NumberField
                inputValue={formData.qameez.waist}
                inputOnChange={e => setFormData(current => ({ ...current, qameez: { ...current.qameez, waist: e.target.value } }))}
                titleEN={"Waist"}
                titleUR={"کمر"}
              />
              <NumberField
                inputValue={formData.qameez.hip}
                inputOnChange={e => setFormData(current => ({ ...current, qameez: { ...current.qameez, hip: e.target.value } }))}
                titleEN={"Hip"}
                titleUR={"کولھا"}
              />
              <NumberField
                inputValue={formData.qameez.armhole}
                inputOnChange={e => setFormData(current => ({ ...current, qameez: { ...current.qameez, armhole: e.target.value } }))}
                titleEN={"Arm Hole"}
                titleUR={"مونڈا/بغل"}
              />
              <NumberField
                inputValue={formData.qameez.cuff}
                inputOnChange={e => setFormData(current => ({ ...current, qameez: { ...current.qameez, cuff: e.target.value } }))}
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
                inputValue={formData.shalwaar.length}
                inputOnChange={e => setFormData(current => ({ ...current, shalwaar: { ...current.shalwaar, length: e.target.value } }))}
                titleEN={"Shalwar Length"}
                titleUR={"لمبائی"}
              />
              <NumberField
                inputValue={formData.shalwaar.hem}
                inputOnChange={e => setFormData(current => ({ ...current, shalwaar: { ...current.shalwaar, hem: e.target.value } }))}
                titleEN={"Bottom / Paincha"}
                titleUR={"پائنچہ"}
              />
              <NumberField
                inputValue={formData.shalwaar.circumference}
                inputOnChange={e => setFormData(current => ({ ...current, shalwaar: { ...current.shalwaar, circumference: e.target.value } }))}
                titleEN={"Ghera / Circumference"}
                titleUR={"گھیرہ"}
              />
              <NumberField
                inputValue={formData.shalwaar.rise}
                inputOnChange={e => setFormData(current => ({ ...current, shalwaar: { ...current.shalwaar, rise: e.target.value } }))}
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
                  value={formData.collar}
                  onChange={e => setFormData(current => ({ ...current, collar: e.target.value }))}
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
                  value={formData.fitting}
                  onChange={e => setFormData(current => ({ ...current, fitting: e.target.value }))}
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
                  value={formData.instructions}
                  onChange={e => setFormData(current => ({ ...current, instructions: e.target.value }))}
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
  );
}

export default CustomerForm;