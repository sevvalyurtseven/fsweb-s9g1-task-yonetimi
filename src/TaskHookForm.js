import React from "react";
import { useForm } from "react-hook-form";

export default function TaskHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      people: [],
    },
  });
  return (
    <div>
      Formunuzu react-hook-form kullanarak burada oluşturun. TaskForm
      dosyasındaki HTML yapısını vs app.css içerisindeki classları
      kullanabilirsiniz.
    </div>
  );
}
