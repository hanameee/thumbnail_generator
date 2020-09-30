import React, { useState } from "react";

interface IDropdownProps {
    selectedData: string;
    setSelectedData: Function;
    menus: Array<string>;
}

const Dropdown: React.FC<IDropdownProps> = ({
    selectedData,
    setSelectedData,
    menus,
}) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    };
    const handleMenuClick = (menu: string) => {
        setSelectedData(menu);
        toggleOpen();
    };

    return (
        <div className="w-full relative text-left">
            <div>
                <span className="rounded-md shadow-sm">
                    <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-lg border border-gray-400 px-4 py-2 bg-white leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none border-gray-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 shadow-sm"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={toggleOpen}
                    >
                        {selectedData ? selectedData : "단어를 골라주세요 🙏"}
                    </button>
                </span>
            </div>
            {open && (
                <div className="mt-1 w-full rounded-md shadow-lg">
                    <div className="rounded-md bg-white shadow-xs">
                        <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            {menus.map((menu: string) => (
                                <div
                                    className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 text-center cursor-pointer"
                                    role="menuitem"
                                    onClick={() => handleMenuClick(menu)}
                                    key={menu}
                                >
                                    {menu}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
