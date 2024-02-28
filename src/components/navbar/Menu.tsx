import { Menu, Transition } from "@headlessui/react";
import { Item } from "./Navbar";
import { PiArrowUpRight } from "react-icons/pi";
import { Fragment } from "react";
import { MENU_ITEMS } from "../../constants";

export const MoreMenu = () => {
  return (
    <Menu>
      <Menu.Button as={Item} addStyle="hover:brightness-75">
        More
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform translate-y-[20px] opacity-0 scale-95"
        enterTo="transform translate-y-[0px] opacity-1 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform translate-y-[0px] opacity-1 scale-100"
        leaveTo="transform translate-y-[20px] opacity-0 scale-95"
      >
        <Menu.Items
          className={
            "absolute right-0 bottom-16 px-1 py-2 bg-nav rounded-lg flex flex-col items-start w-36 ring-none focus:outline-none"
          }
        >
          {MENU_ITEMS.map((item) => (
            <Menu.Item>
              {() => (
                <div
                  className={`flex flex-row items-center rounded px-2 cursor-pointer py-1 hover:underline`}
                >
                  <a href={item.link} target="_blank">
                    {item.title}
                  </a>
                  <PiArrowUpRight />
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
