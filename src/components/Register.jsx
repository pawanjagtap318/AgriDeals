import React from "react";

function Register() {
    return(
        <div className="w-2/5 h-3/5 place-self-center my-6 outline-dashed">
            <h3 className="font-bold text-2xl place-content-center py-6">Register</h3>
            <div>
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="ml-2 w-3/5 p-2 m-4 rounded-xl outline-blue-500"
                />
                <input 
                  type="number" 
                  placeholder="Mobile"
                  className="ml-2 w-3/5 p-2 m-4 rounded-xl outline-blue-500"
                />
            </div>
            <div className="pb-3">
                <button className="bg-blue-600 my-4 text-white rounded-2xl w-1/5 p-2">Submit</button>
            </div>
        </div>
    )
}

export default Register