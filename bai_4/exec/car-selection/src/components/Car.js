import { useState } from "react";

function Car() {
  let carList = ["Huyndai", "Honda", "Yamaha"];
  let colorList = ["Black", "White", "Red"];
  const [selectCar, setSelectCar] = useState({
    car: carList[0],
    color: colorList[0],
  });

  return (
    <div>
      <div>
        Select car
        <select
          onChange={(e) => {
            setSelectCar((state) => ({ ...state, car: e.target.value }));
          }}
        >
          {carList.map((car) => (
            <option value={car}>{car}</option>
          ))}
        </select>
      </div>
      <div>
        Select color
        <select
          onChange={(e) =>
            setSelectCar((state) => ({ ...state, color: e.target.value }))
          }
        >
          {colorList.map((color) => (
            <option value={color}>{color}</option>
          ))}
        </select>
      </div>
      <h1>
        You selected a {selectCar.color} - {selectCar.car}
      </h1>
    </div>
  );
}

export default Car;
