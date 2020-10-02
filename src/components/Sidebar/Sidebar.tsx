import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import colorData from "@/data/colorData";
import ColorCircle from "../ColorCircle/ColorCircle";
import { wordType, menuType } from "@/type/scheme";
import wordData from "@/data/wordData";

interface ISidebarProps {
    setMenus: Function;
    setColor: Function;
}

const menus = {
    "색상 팔레트": false,
    "Material UI Theme": false,
    "데모 페이지": false,
};

const Sidebar: React.FC<ISidebarProps> = ({ setMenus, setColor }) => {
    const [selectedWord, setSelectedWord] = useState<wordType>(null);
    const [selectedColor, setSelectedColor] = useState<number>(null);
    const [selectedMenus, setSelectedMenus] = useState(menus);
    const [selectedHsl, setSelectedHsl] = useState<string>("");
    const data = wordData.wordRGG[selectedWord];
    const handleMakeTheme = () => {
        const menus = Object.keys(selectedMenus).filter(
            (menu: menuType) => selectedMenus[menu] === true
        );
        setMenus(menus);
        setColor(selectedHsl);
    };
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedMenus({
            ...selectedMenus,
            [e.target.name]: e.target.checked,
        });
    };
    useEffect(() => {
        return setSelectedColor(null);
    }, [selectedWord]);
    return (
        <div className="p-5">
            <h2 className="my-2 text-lg font-medium">
                1. 원하는 느낌을 골라주세요
            </h2>
            <Dropdown
                selectedData={selectedWord}
                setSelectedData={setSelectedWord}
                menus={Object.keys(colorData.chartWordPosition)}
            />
            <h2 className="pt-5 my-2 text-lg font-medium">
                2. 선호하는 색상을 골라주세요
            </h2>
            {selectedWord ? (
                <div className="flex flex-wrap justify-center">
                    {data.map((hsl, idx) => (
                        <ColorCircle
                            key={idx}
                            hsl={hsl}
                            idx={idx}
                            selectedColor={selectedColor}
                            setSeletedHsl={setSelectedHsl}
                            setSelectedColor={setSelectedColor}
                        />
                    ))}
                </div>
            ) : (
                <div>느낌을 고르시면 색상이 나타납니다.</div>
            )}
            <h2 className="pt-5 my-2 text-lg font-medium">
                3. 필요한 띰 형식을 모두 골라주세요
            </h2>
            <div className="flex flex-col">
                {Object.keys(menus).map((menu) => (
                    <label key={menu} className="inline-flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox text-gray-600 focus:outline-none focus:border-none focus:shadow-none focus:border-gray-300 h-4 w-4"
                            onChange={(e) => handleCheckboxChange(e)}
                            name={menu}
                        />
                        <span className="ml-2">{menu}</span>
                    </label>
                ))}
            </div>
            <div className="pt-5 flex justify-center">
                <button
                    onClick={handleMakeTheme}
                    className="bg-white hover:bg-gray-100 focus:outline-none text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-sm"
                >
                    띰 생성하기
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
