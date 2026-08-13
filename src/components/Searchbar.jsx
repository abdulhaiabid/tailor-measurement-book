function Searchbar() {
  return (
    <section className="px-4 py-2 pt-4 bg-cream-200">
      <div className="max-w-7xl mx-auto p-4 flex flex-col gap-3 bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.2)] borderborder-gold-300 rounded-xl">
        {/* Search bar */}
        <div className="relative">
          <input
            id="search-bar"
            type="search"
            placeholder="Search customer by name or phone number..."
            className="w-full p-2 pl-8 border border-cream-400 rounded-lg transition-shadow duration-300 outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent placeholder:text-sm" />
          <label htmlFor="search-bar">
            <span className="material-symbols-outlined absolute top-1/2 left-2 -translate-y-1/2 text-xl! text-maroon-600 select-none">
              search
            </span>
          </label>
        </div>

        {/* Filters */}
        <div className="flex flex-col-reverse xs:flex-row justify-between xs:items-center gap-2 xs:gap-0">
          <p className="text-sm text-maroon-900/60">
            Showing 3 of 3 customers
          </p>

          <div className="max-w-max px-2 pl-6 py-1 relative border border-cream-400 rounded-lg transition-shadow duration-300 outline-none focus-within:ring-2 focus-within:ring-gold-400 focus-within:border-transparent">
            <select
              name="sort"
              id="sort"
              className="text-sm font-medium outline-none cursor-pointer">
              <option value="recently-added">
                Recently Added
              </option>
              <option value="oldest-first">
                Oldest First
              </option>
              <option value="name-a-to-z">
                Name (A - Z)
              </option>
              <option value="name-z-to-a">
                Name (Z - A)
              </option>
            </select>
            <label
              htmlFor="sort"
              className="absolute top-1/2 left-1 -translate-y-1/2">
              <span className="material-symbols-outlined text-lg! text-gold-500 select-none cursor-pointer">sort</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Searchbar;