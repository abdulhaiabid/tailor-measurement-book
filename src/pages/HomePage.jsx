import ToastNotificationProvider from "../components/ToastNotification";
import CustomerDataProvider from "../components/CustomerDataProvider";

import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import CustomerContainer from "../components/CustomerContainer";

function HomePage() {
  return (
    <>
      <ToastNotificationProvider>
        <CustomerDataProvider>
          <Navbar />
          <Searchbar />
        </CustomerDataProvider>
      </ToastNotificationProvider>
    </>
  );
}

export default HomePage;