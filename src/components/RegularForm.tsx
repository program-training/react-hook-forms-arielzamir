import { useForm, FieldValues } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function RegularForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Change Me To React Hook Form</h1>
      <div>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 2,
              message: "Username must be at least 2 characters.",
            },
          })}
          type="text"
          id="username"
          name="username"
          placeholder="Enter UserName"
        />
      </div>
      <ErrorMessage errors={errors} name="username" />
      <div>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          type="text"
          id="email"
          name="email"
          placeholder="Enter Email"
        />
      </div>
      <ErrorMessage errors={errors} name="email" />
      <div>
        <input
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/,
              message:
                "Password must contain a number, one uppercase letter, one lowercase letter, and one special character.",
            },
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters.",
            },
            maxLength: {
              value: 20,
              message: "Password must not exceed 20 characters.",
            },
          })}
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
        />
      </div>
      <ErrorMessage errors={errors} name="password" />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default RegularForm;
