import { auth } from "@/firebase";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";
import { signOutUser } from "@/redux/userSlice";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  async function handleSignOut(){
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignupModal());
    dispatch(closeLoginModal())
  }

  return (
    <>
      <div className="h-full hidden sm:flex flex-col fixed xl:ml-24 sm:ml-2">
        <nav className="h-full relative xl:space-y-1.5">
          <div className="flex justify-center xl:justify-start items-center xl:p-3 py-3">
            <Image src={"/assets/twitter-logo.png"} width={34} height={34} />
          </div>
          <SidebarLink text={"Home"} Icon={HomeIcon} />
          <SidebarLink text={"Explore"} Icon={HashtagIcon} />
          <SidebarLink text={"Notifications"} Icon={BellIcon} />
          <SidebarLink text={"Messages"} Icon={InboxIcon} />
          <SidebarLink text={"Messages"} Icon={ClipboardListIcon} />
          <SidebarLink text={"Bookmarks"} Icon={BookmarkIcon} />
          <SidebarLink text={"Profile"} Icon={UserIcon} />
          <SidebarLink text={"More"} Icon={DotsCircleHorizontalIcon} />
          <button className="hidden xl:inline bg-[#1d9bf0] rounded-full h-[53px] w-[200px] text-lg font-bold mt-w">
            Tweet
          </button>
          <div
          onClick={handleSignOut} 
          className="hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer absolute bottom-0 flex justify-center items-center space-x-3 xl:p-3">
            <img className="w-10 h-10 rounded-full object-cover" src={user.photoUrl || "/assets/gordon.png" }/>
            <div className="hidden xl:inline">
              <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
              <h1 className="text-gray-500">@{user.username}</h1>
            </div>
            <DotsCircleHorizontalIcon className="h-5 hidden xl:inline" />
          </div>
        </nav>
      </div>
    </>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="flex mb-3 items-center text-xl space-x-3 hoverAnimation xl:justify-start justify-center">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}

export default Sidebar;
