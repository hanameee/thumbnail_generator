import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Result from "./Result/Result";
export default function Layout() {
    return (
        <div className="flex">
            <div className="w-1/3 md:w-1/4 bg-gray-300 h-screen">
                <Sidebar />
            </div>
            <div className="w-2/3 md:w-3/4 h-12">
                <Result />
            </div>
        </div>
    );
}
