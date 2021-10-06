import React from "react";

const First = () => {
  const rooms = [
    { room_type: "Queen", vacant_rooms: 5, price: 100 },
    { room_type: "Double", vacant_rooms: 3, price: 75 },
    { room_type: "Twin", vacant_rooms: 8, price: 60 },
  ];

  return (
    <div className="wrapper">
      <ol>
        {rooms.map((item, index) => (
          <li style={{ textAlign: "left" }} key={index}>
            {item.room_type}, {item.vacant_rooms}, ${item.price}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default First;
