import React from "react";

function Header() {
    return (
        <div>
            <div className="w-full flex bg-black p-2 ">
                <div className="font-extrabold text-2xl p-2 text-left flex w-1/3 ml-1 mr-20">
                    <svg className="max-w-8 px-1 cursor-pointer bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 150.7l42.9 160.7h-85.8L224 150.7zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-65.3 325.3l-94.5-298.7H159.8L65.3 405.3H156l111.7-91.6 24.2 91.6h90.8z"/></svg>
                    <div className="text-white px-2 cursor-pointer">AgriDeals</div>
                </div>
                <div className="flex w-full h-8 bg-white place-content-start place-self-center rounded-xl">
                    <input 
                      type="text"
                      placeholder="Search"
                      className="w-full py-4 pl-2 outline-none rounded-lg"
                    />
                    <button className="text-black bg-amber-500 p-1 rounded-lg">Search</button>
                </div>
                <div className="w-3/5 flex text-white font-bold justify-evenly align-middle items-center">
                    <div className="cursor-pointer">Buyer</div>
                    <div className="cursor-pointer">Owner</div>
                    <div className="cursor-pointer">Dealer</div>
                </div>
                <div className="w-1/5 text-white font-bold content-center">
                    <button className="bg-blue-600 rounded-xl p-2">Register</button>
                </div>
            </div>
            <div className="place-self-end mt-4 flex">
                <div className="mx-4">
                    <label className="font-semibold text-sm">
                        Filter
                        <select className="font-normal text-xs ml-2">
                            <option value="price">Price</option>
                            <option value="area">Area</option>
                            <option value="discount">Discount</option>
                            <option value="rating">Rating</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label className="font-semibold text-sm">
                        Sort
                        <select className="font-normal text-xs ml-2">
                            <option value="price">Price</option>
                            <option value="area">Area</option>
                            <option value="discount">Discount</option>
                            <option value="rating">Rating</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Header