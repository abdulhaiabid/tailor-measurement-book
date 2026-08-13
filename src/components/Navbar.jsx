function Navbar() {
  return (
    <header className="w-full px-4 py-1 text-gold-300 bg-maroon-900 border-b-4 border-gold-500">
      <nav className="max-w-7xl mx-auto py-2 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 flex justify-center items-center text-maroon-900 bg-gold-500 rounded-xl">
            <span className="material-symbols-outlined select-none">
              content_cut
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base sm:text-xl font-bold">
              Tailor's Measurement Book
            </h1>
            <p className="text-xs text-gold-100/70">
              Smart Customer Measurement System
            </p>
          </div>
        </div>

        <button className="px-3 py-1 sm:py-1 flex justify-center items-center text-sm text-maroon-900 font-semibold bg-gold-500 rounded-lg cursor-pointer">
          <span className="material-symbols-outlined text-xl! select-none">
            add
          </span>
          Add Customer
        </button>
      </nav>
    </header>
  );
}

export default Navbar;