import { useEffect, useState } from "react";

import useAuthentication from "../../hooks/useAuthentication";
import TopBarContainer from "../../templates/TopBarContainer";

import StyledInput from "../../atoms/Input";
import StyledButton from "../../atoms/Button";

const LoginPage = ({ onSuccess = () => {} }) => {
  const { validating, validateUser, error, success } = useAuthentication();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    validateUser(username, password);
  };

  const handleOnInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (inputName === "username") {
      setUsername(inputValue);
      return;
    }

    setPassword(inputValue);
  };

  useEffect(() => {
    if (success) {
      onSuccess();
    }
  }, [success, onSuccess]);

  return (
    <TopBarContainer>
      <form onSubmit={handleOnSubmit}>
        <StyledInput
          type="text"
          name="username"
          onChange={handleOnInputChange}
          placeholder="Username"
          disabled={validating}
        />
        <StyledInput
          type="password"
          name="password"
          onChange={handleOnInputChange}
          placeholder="Password"
          disabled={validating}
        />
        <StyledButton type="submit" value="Login" disabled={validating} />
      </form>
    </TopBarContainer>
  );
};

export default LoginPage;
