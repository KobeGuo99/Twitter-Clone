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
import Image from "next/image";

function Sidebar() {
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
          <div className="absolute bottom-0">User</div>
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
