import { Title } from "components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "services";

type TValues = {
  userId: string;
  password: string;
};

export function LoginPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState<TValues>({
    userId: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const setValue = (key: keyof TValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = () => {
    setIsLoading(true);
    login(values)
      .then(() => {
        setIsLoading(false);
        localStorage.setItem("userId", values.userId);
        navigate("/");
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <div>
      <div className="mb-4">
        <Title />
      </div>
      <div className="mb-4">
        <input
          className="border border-blue-400 rounded-md px-2 py-1 focus:border-blue-600 focus:outline-0"
          placeholder="User ID"
          value={values.userId}
          onChange={(e) => setValue("userId", e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="border border-blue-400 rounded-md px-2 py-1 focus:border-blue-600 focus:outline-0"
          placeholder="Password"
          value={values.password}
          onChange={(e) => setValue("password", e.target.value)}
        />
      </div>
      <div className="mb-4">
        <button
          className="bg-gradient-to-b from-blue-200 to-blue-600 text-white rounded-md px-4 py-1"
          onClick={isLoading ? undefined : onSubmit}
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </div>
      {isError && !isLoading && (
        <div className="mb-4 text-red-500">Invalid Credentials</div>
      )}
      <div className="mb-4">
        <Link
          className="text-blue-600 underline underline-offset-4"
          to="/forgot-password"
        >
          Forgot My Password
        </Link>
      </div>
    </div>
  );
}
