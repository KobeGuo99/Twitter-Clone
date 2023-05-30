import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";
import React, { useState, useEffect } from "react";
import { setUser } from "@/redux/userSlice";
import { current } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

function SignupModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "/assets/profilePictures/pfp7.png"
    });

    router.reload();
  }

  async function handleGuestSignIn() {
    await signInWithEmailAndPassword(auth, "guest12220@gmail.com", "!ER@POL");
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      //handle Redux actions
      dispatch(
        setUser({
          username: currentUser.displayName.split(" "),
          name: currentUser.displayName,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: currentUser.photoURL,
        })
      );
    });
    return unsubscribe;
  }, []);

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
            <button
              className="bg-white text-black w-full font-bold text-lg p-2 rounded-md"
              onClick={handleGuestSignIn}
            >
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
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-8"
              onClick={handleSignUp}
            >
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SignupModal;
