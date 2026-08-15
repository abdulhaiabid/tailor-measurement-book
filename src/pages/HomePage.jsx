import CustomerDataProvider from "../components/CustomerDataProvider";

import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import CustomerContainer from "../components/CustomerContainer";

function HomePage() {
  return (
    <>
      <CustomerDataProvider>
        <Navbar />
        <Searchbar />
        <CustomerContainer />
      </CustomerDataProvider>
    </>
  );
}

export default HomePage;