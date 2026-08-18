function CustomerReceipt({ customer }) {
  if (!customer) return null;

  return (
    <section className="receipt-print-area w-full px-4 py-2 bg-bg-low">
      <div className="receipt print:mx-[10mm] print:mt-[10mm] max-w-7xl mx-auto p-4 flex flex-col gap-4 border-3 ">
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
            <span className="font-mono font-semibold">{crypto.randomUUID().slice(0, 8)}</span>
          </p>
          <p className="flex items-center gap-2">
            Date:
            <span className="font-mono font-semibold">
              {
                new Date().toLocaleDateString("en-GB", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })
              }
            </span>
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
            "{customer.instructions ? customer.instructions : `No instructions...`}"
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