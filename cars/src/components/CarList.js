import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const cars = useSelector((state) => state.cars.carsList);
  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car));
  };

  const renderedCarsList = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return <div className="car-list">{renderedCarsList}</div>;
}

export default CarList;
