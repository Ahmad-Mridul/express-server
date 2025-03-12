import { useLoaderData, useNavigate } from "react-router";

const SinglePhone = () => {
    const phone = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className="border rounded-xl shadow-lg p-6 m-6 flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <figure className="w-full md:w-1/3 flex items-center justify-center overflow-hidden">
            <img
            src={phone.image_url}
            alt={phone.name}
            className="w-full h-[250px] object-cover rounded-lg"
            />
        </figure>

        {/* Details Section */}
        <div className="flex-1 flex flex-col justify-between">
            <div>
            <h2 className="text-2xl font-bold">{phone.name}</h2>
            <p className="text-lg text-gray-500">{phone.brand}</p>
            <p className="text-xl font-semibold text-blue-600 mt-2">
                ${phone.price}
            </p>
            <p className="text-gray-700 mt-4">{phone.description}</p>

            {/* Specifications */}
            <div className="mt-4 space-y-2">
                <p>
                <strong>📱 Display:</strong> {phone.details.display}
                </p>
                <p>
                <strong>⚡ Processor:</strong> {phone.details.processor}
                </p>
                <p>
                <strong>💾 Storage Options:</strong>{" "}
                {phone.details.storage_options}
                </p>
                <p>
                <strong>📸 Camera:</strong> {phone.details.camera}
                </p>
                <p>
                <strong>🔋 Battery Life:</strong> {phone.details.battery_life}
                </p>
                <p>
                <strong>🖥️ OS:</strong> {phone.details.operating_system}
                </p>
            </div>
            </div>
        <button onClick={()=>navigate(-1)} className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-blue-600 w-full md:w-1/3">
            Back to mobiles
        </button>
        </div>
        </div>
    );
};

export default SinglePhone;
