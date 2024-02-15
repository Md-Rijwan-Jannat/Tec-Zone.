"use client";
import React from "react";
import { FaProductHunt, FaSellsy, FaUsers } from "react-icons/fa";
import Icon from "../ui/icon/Icon";
import { FaSackDollar } from "react-icons/fa6";
import { BiBorderAll } from "react-icons/bi";
import { GiFlamethrowerSoldier } from "react-icons/gi";

interface UserDashboardProps {
  text: string;
  quantity: number;
}

const items = [
  { text: "Total Users", quantity: 243, icon: <FaUsers size={20} /> },
  { text: "Seller", quantity: 150, icon: <FaSellsy size={20} /> },
  { text: "Products", quantity: 500, icon: <FaProductHunt size={20} /> },
  { text: "৳ Sales", quantity: 36750, icon: <FaSackDollar size={20} /> },
  { text: "Orders", quantity: 200, icon: <BiBorderAll size={20} /> },
  {
    text: "Sold items",
    quantity: 100,
    icon: <GiFlamethrowerSoldier size={20} />,
  },
];

const UserDashboard: React.FC<UserDashboardProps> = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-7 mt-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white p-7 rounded-md shadow-md flex items-center gap-3 justify-between border"
        >
          <Icon icon={item.icon} />
          <div className="flex items-start flex-col">
            <span className="font-semibold">{item.quantity}</span>
            <span className="text-gray-500 text-sm">{item.text}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UserDashboard;
