import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <div>OBS REACTJS TEST</div>
      </div>
      <div className="mb-4">
        <input
          className="border rounded-md px-2 py-1"
          placeholder="User ID"
          value={values.userId}
          onChange={(e) => setValue("userId", e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="border rounded-md px-2 py-1"
          placeholder="Password"
          value={values.password}
          onChange={(e) => setValue("password", e.target.value)}
        />
      </div>
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-1"
          onClick={isLoading ? undefined : onSubmit}
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </div>
      <div>Forgot My Password</div>
      {isError && !isLoading && <div>Invalid Credentials!</div>}
    </div>
  );
}
