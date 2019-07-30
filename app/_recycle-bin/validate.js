import * as validator from "validator"

/** Handle form validation for the login form
 * @param username - user's auth email
 * @param password - user's auth password
 * @param setError - function that handles updating error state value
 */
export const validateLoginForm = (
  username: string,
  password: string,
  setError: (error: string | null) => void
): boolean => {
  // Check for undefined or empty input fields
  if (!username || !password) {
    setError("Please enter a valid Username and password.");
    return false;
  }

  return true;
};