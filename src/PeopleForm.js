import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const PeopleForm = ({ kisiler, submitFn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: "",
    },
    mode: "onChange",
  });

  //const [isim, setIsim] = useState("");
  //const [error, setError] = useState(null);

  /* useEffect(() => {
    if (kisiler.includes(isim)) {
      setError("Bu isim daha önce eklenmiş")
    } else {
      setError(null)
    }
  }, [isim, kisiler]) */

  /* function handleIsimChange(e) {
    setIsim(e.target.value);
  } */

  function myHandleSubmit(formData, event) {
    //e.preventDefault();
    submitFn(formData.title);
    //setIsim("");
    event.target.reset();
  }

  return (
    <form className="taskForm" onSubmit={handleSubmit(myHandleSubmit)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          İsim
        </label>
        <input
          className="input-text"
          id="title"
          //name="title"
          {...register("title", {
            required: "Isim girmek zorunludur",
            minLength: {
              value: 3,
              message: "Isim en az 3 karakter olmalı",
            },
            validate: (value) =>
              !kisiler.includes(value) || "Bu isim daha önce eklenmiş",
          })}
          type="text"
          //onChange={handleIsimChange}
          //value={isim}
        />
        <p className="input-error">{errors.title?.message}</p>
      </div>

      <div className="form-line">
        <button className="submit-button" type="submit" disabled={!isValid}>
          Ekle
        </button>
      </div>
    </form>
  );
};

export default PeopleForm;
