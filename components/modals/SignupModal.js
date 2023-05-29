import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";

function SignupModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();
  console.log(isOpen);

  return (
    <>
      <button
        onClick={() => dispatch(openSignupModal())}
        className="bg-white text-black w-[160px] h-[40px] rounded-full hover:bg-[#cbd2d7] font-bold"
      >
        Sign In
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[600px] bg-black text-white md:w-[560px] md:h-[600px] border border-gray-700 rounded-lg flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md">
              Sign In as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className="text-center mt-4 font-bold text-4xl">
              Create your Account
            </h1>
            <input
              placeholder="Full Name"
              className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8"
              type={"text"}
            />
            <input
              placeholder="Email"
              className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8"
              type={"email"}
            />
            <input
              placeholder="Password"
              className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8"
              type={"password"}
            />
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-8">
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SignupModal;
