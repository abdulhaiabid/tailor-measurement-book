function CustomerContainer() {
  return (
    <section className="w-full px-4 py-2 bg-cream-200">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4">
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </div>
    </section>
  );
}

function CustomerCard() {
  return (
    <div className="bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.2)] rounded-xl overflow-hidden">
      {/* Name, Phone and added date */}
      <div className="p-4 flex justify-between items-start bg-cream-100 ">
        <div>
          <h1 className="text-xl text-maroon-700 font-bold">
            Chaudhry Usman Khan
          </h1>
          <p className="mt-0.5 flex items-center gap-1 text-sm text-maroon-700/70 font-medium">
            <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-base! text-gold-600 leading-4 select-none">
              call
            </span>
            0300-99876543
          </p>
        </div>
        <p className="px-2 py-1 text-[0.6rem] xs:text-xs text-maroon-700/70 text-nowrap font-medium xs:font-normal bg-cream-200 border border-cream-300 rounded-lg">
          10 Aug 2026
        </p>
      </div>

      {/* Measurements */}
      <div className="flexflex-colsm:flex-rowsm:justify-evenly p-4 grid sm:grid-rows-2 grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 border-y-2 border-cream-300">
        {/* Qameez */}
        <div className="sm:row-span-2 flex-1">
          <h2 className="flex items-center gap-1 text-base xs:text-lg text-maroon-700 uppercase font-bold">
            <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-base! text-gold-500 select-none">
              apparel
            </span>
            Qameez
          </h2>
          <table className="mt-1 w-full">
            <tbody className="flex flex-col gap-2 text-sm xs:text-base text-maroon-600/80 *:py-1 *:px-3 *:sm:px-5 *:flex *:justify-between *:items-center *:rounded *:bg-cream-100 *:border *:border-cream-300">
              <tr>
                <td>Qameez Length
                  <span className="urdu" dir="rtl">(لمبائی) </span>:
                </td>
                <td className="font-semibold">40&Prime;</td>
              </tr>
              <tr>
                <td>Sleeve Length
                  <span className="urdu" dir="rtl">(بازو) </span>:
                </td>
                <td className="font-semibold">24&Prime;</td>
              </tr>
              <tr>
                <td>Shoulder
                  <span className="urdu" dir="rtl">(تِیرا) </span>:
                </td>
                <td className="font-semibold">40&Prime;</td>
              </tr>
              <tr>
                <td>Neck
                  <span className="urdu" dir="rtl">(گلا) </span>:
                </td>
                <td className="font-semibold">42&Prime;</td>
              </tr>
              <tr>
                <td>Chest
                  <span className="urdu" dir="rtl">(چھاتی) </span>:
                </td>
                <td className="font-semibold">42&Prime;</td>
              </tr>
              <tr>
                <td>Waist
                  <span className="urdu" dir="rtl">(کمر) </span>:
                </td>
                <td className="font-semibold">24&Prime;</td>
              </tr>
              <tr>
                <td>Hip
                  <span className="urdu" dir="rtl">(کولھا) </span>:
                </td>
                <td className="font-semibold">42&Prime;</td>
              </tr>
              <tr>
                <td>Armhole
                  <span className="urdu" dir="rtl">(بغل) </span>:
                </td>
                <td className="font-semibold">42&Prime;</td>
              </tr>
              <tr>
                <td>Cuff
                  <span className="urdu" dir="rtl">(کَف) </span>:
                </td>
                <td className="font-semibold">24&Prime;</td>
              </tr>
              {/* <tr>
                <td>
                  <label htmlFor="collar">
                    <input type="radio" name="neck-type" id="collar" />
                    Collar
                  </label>
                </td>
                <td>
                  <label htmlFor="bain">
                    <input type="radio" name="neck-type" id="bain" />
                    Bain
                  </label>
                </td>
                <td>
                  <label htmlFor="maghzi">
                    <input type="radio" name="neck-type" id="maghzi" />
                    Maghzi
                  </label>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>

        {/* Shalwar */}
        <div className="sm:px-0 sm:row-span-1 flex-1">
          <h2 className="flex items-center gap-1 text-base xs:text-lg text-maroon-700 uppercase font-bold">
            <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-base! text-gold-500 select-none">
              apparel
            </span>
            Shalwar
          </h2>
          <table className="mt-1 w-full">
            <tbody className="flex flex-col gap-2 text-sm xs:text-base text-maroon-600/80 *:py-1 *:px-3 *:sm:px-5 *:flex *:justify-between *:items-center *:rounded *:bg-cream-100 *:border *:border-cream-300">
              <tr>
                <td>Shalwar Length
                  <span className="urdu" dir="rtl">(لمبائی) </span>:
                </td>
                <td className="font-semibold">40&Prime;</td>
              </tr>
              <tr>
                <td>Bottom / Paincha
                  <span className="urdu" dir="rtl">(پائنچہ) </span>:
                </td>
                <td className="font-semibold">24&Prime;</td>
              </tr>
              <tr>
                <td>Ghera / Circumference
                  <span className="urdu" dir="rtl">(گھیرہ) </span>:
                </td>
                <td className="font-semibold">40&Prime;</td>
              </tr>
              <tr>
                <td>Rise / Aasan
                  <span className="urdu" dir="rtl">(آسن) </span>:
                </td>
                <td className="font-semibold">42&Prime;</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div className="py-4 space-y-2">
          <div className="flex gap-1">
            <p className="px-4 py-1 text-sm text-maroon-700/80 font-semibold bg-gold-100 border border-gold-300 rounded">
              Maghzi
            </p>
            <p className="px-4 py-1 text-sm text-maroon-700/80 font-semibold bg-cream-200 border border-cream-300 rounded">
              Loose Fit
            </p>
          </div>
          <div className="p-4 sm:row-start-2 sm:col-start-2 border border-gold-500 rounded-lg">
            <h2 className="text-xs text-gold-600 uppercase font-semibold">
              Special Notes / Instructions
            </h2>
            <p className="mt-2 text-sm italic">
              "Round cuff buttons, light stiffening on collar."
            </p>
          </div>
        </div>
      </div>

      {/* Receipt, Edit and Delete Button */}
      <div className="p-4 flex justify-between items-center bg-cream-100">
        <button className="px-4 py-1 flex items-center gap-1 text-maroon-700 font-semibold bg-gold-400 rounded-lg transition-colors duration-300 cursor-pointer hover:bg-gold-500">
          <span className="material-symbols-outlined [font-variation-settings:'FILL'1] text-base! select-none">
            receipt
          </span>
          Receipt
        </button>

        <div className="flex items-end gap-2">
          <button className="flex justify-center items-center cursor-pointer">
            <span className="material-symbols-outlined leading-2 font-normal! select-none">
              edit
            </span>
          </button>
          <button className="flex justify-center items-center cursor-pointer">
            <span className="material-symbols-outlined leading-2 font-normal! select-none">
              delete
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerContainer;