import React from "react";
import { MdDelete } from "react-icons/md";


type DeleteProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Delete: React.FC<DeleteProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            <MdDelete />
        </button>
    );
}

Delete.displayName = 'Delete';
export default Delete;