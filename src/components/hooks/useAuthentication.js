import { useState } from "react";

import { authenticate } from "../../api/authentication";

import { LOGIN_ERROR_MESSAGE } from "../../constants/messages";

const useAuthentication = () => {
  const [validating, setValidating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateUser = async (username, password) => {
    setValidating(true);

    try {
      await authenticate(username, password);

      // we need to save the response just incase we need to store tokens
      setError("");
      setSuccess(true);
    } catch (e) {
      // Here we just set now a static error message. We don't want the user to know the exact error in the server
      setError(LOGIN_ERROR_MESSAGE);
    } finally {
      setValidating(false);
    }
  };

  return {
    validating,
    error,
    validateUser,
    success,
  };
};

export default useAuthentication;
