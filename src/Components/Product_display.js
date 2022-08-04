import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
export default function Product_display(props) {
    const [model, setmodel] = useState(false)


    const handleclick = (a) => {
        setmodel(!model)
        console.log('clicked')
        console.log(a)



    }
    return (
        <>

<div>
            <div className="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-6  font-Poppins">
                {/* Card 1 */}
                <div className="mx-2 w-72 lg:mb-0 mb-8">
                    <div>
                        <img src={props.img} className="w-full h-44" alt="nimg" />
                    </div>
                    <div className="bg-white">
                        <div className="flex items-center justify-between px-4 pt-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                </svg>
                            </div>
                            <div className="bg-colornav py-1.5 px-6 rounded-full">
                                <p className="text-xs text-colortxt">Featured</p>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center">
                                <h2 className="text-lg font-semibold text-colortxt">{props.name}</h2>
                                <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">{props.desc}</p>
                            <div className="flex items-center justify-between py-4">
                                <h2 className="text-[#F27AAC] text-xs font-medium">Bay Area, San Francisco</h2>
                                <h3 className="text-[#F27AAC] text-xl font-medium">${props.price}</h3>
                            </div>
                            <div className="flex items-center justify-between ">

                                <button type="button" class="text-[#2E2E2E] bg-[#F27AAC]  font-medium rounded-lg text-sm px-3 py-2  space-x-1 " onClick={handleclick} ><EditIcon /><label>Edit</label></button>
                                <button type="button" class=" bg-white  border border-red-600 font-medium rounded-lg text-sm px-3 py-2  space-x-1 text-red-500 " ><label>Delete</label></button></div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Card 1 Ends */}

            <div className={model ? '' : 'hidden'}>
                <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center font-Poppins">
                    <div className="bg-white p-2 rounded w-4/12">

                        <div class="flex justify-between items-start p-4 rounded-t border-b ">
                            <h3 class="text-2xl font-semibold text-gray-900 ">
                                Edit Product
                            </h3>
                            <button type="button" onClick={handleclick} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>

                        </div>
                        <div className='flex space-x-5'>
                            <div className='flex flex-col space-y-8 mt-2 text-colortxt '>
                                <label>Name :</label>
                                <label>Price :</label>
                                <label>Description :</label>


                            </div>
                            <div className='flex flex-col space-y-2 mt-2 text- text-sm'>
                                <input className="bg-white  outline-none border border-[#FACFE0] focus:ring-4 focus:ring-[#FACFE0]  placeholder:text-gray-300 text-sm rounded-lg block w-full p-2.5" placeholder="Iphone xs" />
                                <input className="bg-white  outline-none border border-[#FACFE0] focus:ring-4 focus:ring-[#FACFE0]  placeholder:text-gray-300 text-sm rounded-lg block w-full p-2.5" placeholder="$1050"/>

                            </div>

                        </div> 
                        <textarea className="bg-white mt-3 outline-none border border-[#FACFE0] focus:ring-4 focus:ring-[#FACFE0]  placeholder:text-gray-300 text-sm rounded-lg block w-full h-[200px] p-2.5" placeholder="The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos"/>
                        <div className="mt-5 mb-5 flex">
                            <label for="myfile" className="">Select an img :</label>
                            <input type="file" id="myfile" name="myfile" className="ml-2" />

                        </div>
                        <hr />
                        <div className='flex justify-around mt-2'>
                            <button type="button" class="text-[#2E2E2E] bg-[#F27AAC]  border  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Save</button>
                            <button type="button" class="text-red-700 bg-white  border border-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Discard</button>
                        </div>

                    </div>
                </div>
            </div>

            </div>

        </>
    );
}
