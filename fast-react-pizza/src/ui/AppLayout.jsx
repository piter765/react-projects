import { Outlet, useNavigation } from "react-router-dom";

import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid-rows-3-[auto_1fr_auto] grid h-screen">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3x">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
