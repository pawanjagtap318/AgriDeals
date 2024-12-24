import React from "react";

function Footer() {
    return(
        <div className="w-full text-white bg-slate-600 flex h-80 justify-center place-items-center">
            <div className="font-extrabold text-2xl p-2 text-left flex w-1/3 ml-1 mr-2">
                <svg className="max-w-8 px-1 bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 150.7l42.9 160.7h-85.8L224 150.7zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-65.3 325.3l-94.5-298.7H159.8L65.3 405.3H156l111.7-91.6 24.2 91.6h90.8z"/></svg>
                <div className="text-white px-2">AgriDeals</div>
            </div>
            <div className="text-base m-4">
                <p className="font-semibold mb-2 text-lg">Help</p>
                <p className="hover:underline">About Us</p>
                <p className="hover:underline">Contact Us</p>
                <p className="hover:underline">Career</p>
            </div>
            <div className="text-base m-4">
                <p className="font-semibold mb-2 text-lg">Consumer Policy</p>
                <p className="hover:underline">Terms and Conditions</p>
                <p className="hover:underline">Security</p>
                <p className="hover:underline">Privacy</p>
            </div>
            <div className="text-base m-4">
                <p className="font-semibold mb-2 text-lg">Connect with Us</p>
                <p className="hover:underline">Facebook</p>
                <p className="hover:underline">Twitter</p>
                <p className="hover:underline">Instagram</p>
            </div>
        </div>
    )
}

export default Footer