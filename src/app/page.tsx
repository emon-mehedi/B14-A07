'use client'
import { FaCheckCircle, FaRocket } from "react-icons/fa";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />


    {/* Delete from here */}
      <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-5">
        <div className="card w-96 bg-base-100 shadow-xl p-6 text-center flex flex-col items-center">
          <h1 className="text-2xl font-bold flex items-center justify-center gap-2 mb-4 text-blue-600">
            <FaRocket className="text-primary" /> Welcome Mehedi
          </h1>

          <p className="text-gray-600 mb-6">
            Tailwind CSS, DaisyUI, React Icons and React Hot Toast set up successfully
          </p>

          {/* DaisyUI Button with React Icon */}
          <button onClick={() => {
            toast.success('DaisyUI, Icons and Toast working correctly!');
          }} className="btn btn-primary gap-2 flex flex-row items-center">
            <FaCheckCircle /> <span>Test Toast Notification</span>
          </button>
        </div>
      </div>

    </div>
  );
}
