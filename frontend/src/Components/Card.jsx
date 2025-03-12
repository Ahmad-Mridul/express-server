import { NavLink } from "react-router";

const Card = ({ phone }) => {
    return (
    // <div className="card bg-green-300 shadow-sm">
    //     <figure>
    //         <img className="w-full"
    //         src={image_url}
    //         alt={name}
    //         />
    //     </figure>
    //     <div className="card-body">
    //         <h2 className="card-title">{name}</h2>
    //         <h2 className="">Brand: {brand}</h2>
    //         <p>
    //             {description}
    //         </p>
    //         <div className="card-actions justify-end">
    //         <NavLink to={`/phones/${id}`} className="btn btn-primary" >View details</NavLink>
    //         </div>
    //     </div>
    // </div>
    <div className="border rounded-xl shadow-lg p-4 flex flex-col h-[400px]">
      {/* Image Section */}
        <figure className="h-[200px] flex items-center justify-center overflow-hidden rounded-2xl">
            <img
            src={phone.image_url}
            alt={phone.name}
            className="h-full object-cover"
            />
        </figure>

        {/* Card Body */}
        <div className="flex flex-col flex-1 justify-between mt-4">
            <div>
            <h2 className="text-lg font-bold">{phone.name}</h2>
            <p className="text-sm text-gray-500">{phone.brand}</p>
            <p className="text-sm mt-2 text-gray-700">
                {phone.description.length > 100
                ? `${phone.description.substring(0, 100)}...`
                : phone.description}
            </p>
            </div>

            {/* Button Section */}
            <div className="mt-4">
            <NavLink to={`/mobiles/${phone.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600">
                View Details
            </NavLink>
            </div>
        </div>
        </div>
    );
};

export default Card;
