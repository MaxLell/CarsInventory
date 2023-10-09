import { createSlice, nanoid } from '@reduxjs/toolkit';
const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    carsList: [],
  },
  reducers: {
    changeSearchTerm(state, actions) {
      state.searchTerm = actions.payload;
    },
    addCar(state, action) {
      // assumption:
      // action.payload === {name: 'Subaru', cost: 100000}
      state.carsList.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      // Assumption:
      // action.payload === the id we want to remove
      // Find the Array element, which has the respective ID
      // Slice this array element out.
      const updatedCarsList = state.carsList.filter((element) => {
        return element.id !== action.payload.id;
      });
      state.carsList = updatedCarsList;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } =
  carsSlice.actions;
export const carsReducer = carsSlice.reducer;
