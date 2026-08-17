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