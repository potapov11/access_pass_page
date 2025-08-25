import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'formSlice',
  initialState: {
    firstname: '',
    lastname: '',
    person_phone: '',
    person_date: '',
    person_responsible_name: '',
  },
  reducers: {
    addToForm: (state, action) => {
      const {
        firstname,
        lastname,
        person_phone,
        person_date,
        person_responsible_name,
      } = action.payload;

      state.firstname = firstname;
      state.lastname = lastname;
      state.person_phone = person_phone;
      state.person_date = person_date;
      state.person_responsible_name = person_responsible_name;
    },
  },
});

export const { addToForm } = formSlice.actions;
export default formSlice.reducer;
