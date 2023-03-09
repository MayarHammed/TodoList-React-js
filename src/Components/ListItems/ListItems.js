import React from "react";
import "./ListItems.css";
import Zoom from "react-reveal/Zoom";

export const ListItems = ({ Data, DeleteItems }) => {
  const handelitems = (id) => {
    DeleteItems(id);
  };
  const length = Data.length;
  const data = length
    ? Data.map((item) => {
        return (
          <div key={item.id} className="ListItems">
            <Zoom>
              <span>{item.name}</span>
              <span>{item.age}</span>

              <button className="HR"  onClick={() => {
                handelitems(item.id);
              }}>
          
              Delete

              </button>

            </Zoom>
          </div>
        );
      })
    : (
        <h1>No Found Items</h1>
    );

  return <div className="ListItems">{data}</div>;
};
