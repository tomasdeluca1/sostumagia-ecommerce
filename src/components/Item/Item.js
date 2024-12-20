import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, description, price, type, img, stock }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relativ w-full">
        <img src={img} className="w-full h-48 object-cover" alt={name} />
        <div className="absolute top-4 right-4">
          <span className="bg-[#cd5c5c] text-white px-3 py-1 rounded-full text-sm">
            {type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[#cd5c5c] font-bold text-lg">${price}</span>
            <span className="text-gray-500 text-sm ml-1">ARS</span>
          </div>
          <div className="text-sm text-gray-500">{stock} disponibles</div>
        </div>

        <Link
          to={`/item/${id}`}
          className="block w-full text-center bg-[#cd5c5c] text-white py-2 rounded-md hover:bg-[#b84f4f] transition duration-300"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
