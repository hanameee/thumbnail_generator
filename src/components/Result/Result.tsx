import React, { useState } from "react";

interface IResultProps {
    menus: Array<string>;
    color: string;
}
const Result: React.FC<IResultProps> = ({ menus }) => {
    const [tab, setTab] = useState("color");
    return (
        <nav className="shadow">
            <ul className="flex text-white h-10 bg-gray-500">
                {menus
                    ? menus.map((menu) => (
                          <li
                              className={`flex flex-row items-center px-6 hover:bg-gray-600 ${
                                  tab == menu ? "bg-gray-600" : ""
                              } cursor-pointer`}
                              onClick={() => {
                                  setTab(menu);
                              }}
                          >
                              {menu}
                          </li>
                      ))
                    : ""}
            </ul>
        </nav>
    );
};

export default Result;
