import { ToastContainer } from "react-toastify";


import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <>
      <RoutesMain />
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </>
  );
};
