import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const { cars, name } = useSelector(
    ({ form, cars: { carsList, searchTerm } }) => {
      const filteredCars = carsList.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        name: form.name,
      };
    }
  );
  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car));
  };

  const renderedCarsList = cars.map((car) => {
    // Decide which car is to be made bold
    const bold =
      name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
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
