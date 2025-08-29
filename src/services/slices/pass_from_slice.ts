import { createSlice } from '@reduxjs/toolkit';

const formResponseSlice = createSlice({
  name: 'formSlice',
  initialState: {
    responsibleForm: {
      firstname: '',
      lastname: '',
      person_phone: '',
      person_date: '',
      person_responsible_name: '',
    },
    visitorForms: [
      {
        name: '',
        id: 0,
        phone: '',
      },
    ],
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

      state.responsibleForm.firstname = firstname;
      state.responsibleForm.lastname = lastname;
      state.responsibleForm.person_phone = person_phone;
      state.responsibleForm.person_date = person_date;
      state.responsibleForm.person_responsible_name = person_responsible_name;
    },
    reset: (state) => {
      state.responsibleForm.firstname = '';
      state.responsibleForm.lastname = '';
      state.responsibleForm.person_phone = '';
      state.responsibleForm.person_date = '';
      state.responsibleForm.person_responsible_name = '';
    },
    addVisitorForm: (state, action) => {
      state.visitorForms.push(action.payload);
    },
    updateVisitorForm: (state, action) => {
      state.visitorForms = action.payload;
    },
  },
});

export const { addToForm, addVisitorForm, updateVisitorForm } =
  formResponseSlice.actions;
export default formResponseSlice.reducer;
