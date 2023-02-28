type TLoginProps = {
  userId: string;
  password: string;
};

export const login = ({ userId, password }: TLoginProps) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Validating userId & password...");
      if (userId === "admin" && password === "admin") resolve("success");
      else reject("error");
    }, 2000);
  });
