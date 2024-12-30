import React from "react";

function Filter() {
    return(
        <div className="w-3/5 content-center">
            {/* Price */}
            <div className="flex place-content-center place-items-center mb-8">
                <h3 className="font-bold text-xl mx-8">Price</h3>
                <div className="place-content-start text-left">
                    <label for="101">
                        <input type="radio" name="price" value={500000 - 1500000} id="101"/>
                        5,00,000 - 10,00,000 ₹
                    </label>
                    <br />
                    <label for="102">
                        <input type="radio" name="price" value={1500001 - 4000000} id="102"/>
                        15,00,001 - 40,00,000 ₹
                    </label>
                    <br />
                    <label for="103">
                        <input type="radio" name="price" value={4000001 - 6000000} id="103"/>
                        40,00,001 - 60,00,000 ₹
                    </label>
                    <br />
                    <label for="104">
                        <input type="radio" name="price" value={6000001 - 8000000} id="104"/>
                        60,00,001 - 80,00,000 ₹
                    </label>
                    <br />
                    <label for="105">
                        <input type="radio" name="price" value={8000001 - 10000000} id="105"/>
                        80,00,001 - 1,00,00,000 ₹
                    </label>
                    <br />
                    <label for="106" className="">
                        <input type="radio" name="price" value={10000001 - Infinity} id="106"/>
                        above 1,00,00,001 ₹
                    </label>
                </div>
            </div>

            {/* Area */}
            <div className="flex place-content-center place-items-center mb-8">
                <h3 className="font-bold text-xl mx-8">Area</h3>
                <div className="place-content-start text-left">
                    <label for="201">
                        <input type="radio" name="area" value={20000 - 40000} id="201"/>
                        20,000 - 40,000 sq.ft.
                    </label>
                    <br />
                    <label for="202">
                        <input type="radio" name="area" value={40001 - 70000} id="202"/>
                        40001 - 70000 sq.ft.
                    </label>
                    <br />
                    <label for="203">
                        <input type="radio" name="area" value={70001 - 100000} id="203"/>
                        70001 - 100000 sq.ft.
                    </label>
                    <br />
                    <label for="204">
                        <input type="radio" name="area" value={100001 - 130000} id="204"/>
                        100001 - 130000 sq.ft.
                    </label>
                    <br />
                    <label for="205">
                        <input type="radio" name="area" value={130001 - 150000} id="205"/>
                        130001 - 150000 sq.ft.
                    </label>
                    <br />
                    <label for="206" className="">
                        <input type="radio" name="area" value={150001 - Infinity} id="206"/>
                        above 150001 sq.ft
                    </label>
                </div>
            </div>

            {/* Discount */}
            <div className="flex place-content-center place-items-center mb-8">
                <h3 className="font-bold text-xl mx-8">Discount</h3>
                <div className="place-content-start text-left">
                    <label for="301">
                        <input type="checkbox" name="discount" value={5 - 15} id="301"/>
                        5 - 15 %
                    </label>
                    <br />
                    <label for="302">
                        <input type="checkbox" name="discount" value={16 - 30} id="302"/>
                        16 - 30 %
                    </label>
                    <br />
                    <label for="303">
                        <input type="checkbox" name="discount" value={31 - 50} id="303"/>
                        31 - 50 %
                    </label>
                    <br />
                    <label for="304">
                        <input type="checkbox" name="discount" value={51 - 70} id="304"/>
                        51 - 70 %
                    </label>
                    <br />
                    <label for="305">
                        <input type="checkbox" name="discount" value={71 - 90} id="305"/>
                        71 - 90 %
                    </label>
                    <br />
                    <label for="306" className="">
                        <input type="checkbox" name="discount" value={91 - 100} id="306"/>
                        above 91 %
                    </label>
                </div>
            </div>

            {/* Rating */}
            <div className="flex place-content-center place-items-center mb-8">
                <h3 className="font-bold text-xl mx-8">Rating</h3>
                <div className="place-content-start text-left">
                    <label for="301">
                        <input type="checkbox" name="discount" value={1 - 2} id="301"/>
                        1 - 2
                    </label>
                    <br />
                    <label for="302">
                        <input type="checkbox" name="discount" value={2.1 - 3} id="302"/>
                        2.1 - 3
                    </label>
                    <br />
                    <label for="303">
                        <input type="checkbox" name="discount" value={3.1 - 4} id="303"/>
                        3.1 - 4
                    </label>
                    <br />
                    <label for="304">
                        <input type="checkbox" name="discount" value={4.1 - 4.5} id="304"/>
                        4.1 - 4.5
                    </label>
                    <br />
                    <label for="305">
                        <input type="checkbox" name="discount" value={4.6 - 5} id="305"/>
                        above 4.6
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Filter