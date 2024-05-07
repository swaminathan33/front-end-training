import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    no: null,
    school: "",
    title: "",
    date: null,
    company: "",
    position: "",
    responsibility: '',
  });
  const [formD, setFormD] = useState({
    name: "",
    email: "",
    no: null,
    school: "",
    title: "",
    date: null,
    company: "",
    position: "",
    responsibility: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormD(form)
    if(edit){
        console.log(form)
    }
    console.log(formD)
  };

  const handleEdit = () =>{
    setEdit(true)
    console.log('editing - ',edit)
  }
  return (
    <div>
      <AppContext.Provider value={{ form, setForm, handleSubmit, handleEdit, setEdit }}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
