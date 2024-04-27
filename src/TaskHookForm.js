import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";

export default function TaskHookForm({ kisiler, submitFn }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      id: nanoid(5),
      title: "",
      description: "",
      people: [],
    },
    mode: "onChange",
  });

  const onSubmit = (formData, event) => {
    submitFn({
      ...formData,
      //id: nanoid(5),
      status: "yapılacak",
    });
    //formu sıfırlar
    event.target.reset();
  };
  return (
    <div>
      Formunuzu react-hook-form kullanarak burada oluşturun. TaskForm
      dosyasındaki HTML yapısını vs app.css içerisindeki classları
      kullanabilirsiniz.
    </div>
  );
}
