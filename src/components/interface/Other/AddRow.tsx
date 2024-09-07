import React, { ReactNode, ForwardedRef } from "react";
import { FaPlus } from "react-icons/fa6";



const AddRow = React.forwardRef<HTMLButtonElement>(
    ({ ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
        return (
            <button
                ref={ref} 
                className="flex items-center m-[] text-[#F9FAFB] hover:text-gray-500"
                {...props}
            >
                <FaPlus className="m-[3px] text-xs"/> Add row
            </button>
        );
    }
);

AddRow.displayName = 'AddRow'; 

export default AddRow;