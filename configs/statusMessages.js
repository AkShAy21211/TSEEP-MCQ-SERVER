const STATUS_MESSAGES = {
  // Authentication
  AUTH: {
    REGISTER_SUCCESS: { code: 200, message: "Registration successful." },
    REGISTER_FAILED: {
      code: 400,
      message: "Registration failed. Please try again.",
    },
    LOGIN_SUCCESS: { code: 200, message: "Login successful." },
    LOGIN_FAILED: { code: 401, message: "Invalid credentials" },
    UNAUTHORIZED: { code: 403, message: "Unauthorized access. Please log in." },
    TOKEN_EXPIRED: {
      code: 401,
      message: "Session expired. Please log in again.",
    },
    ACCOUNT_EXISTS: {
      code: 400,
      message: "Account already exists. Please log in.",
    },
  },

  // Test Handling
  TEST: {
    TEST_STARTED: { code: 200, message: "Test started successfully." },
    TEST_NOT_FOUND: { code: 404, message: "Test not found. Please try again." },
    TEST_SUBMITTED: { code: 200, message: "Test submitted successfully." },
    TEST_ALREADY_SUBMITTED: { code: 400, message: "Test already submitted." },
    TIME_EXCEEDED: {
      code: 400,
      message: "Time limit exceeded. Test not submitted.",
    },
    INVALID_TEST_ID: { code: 400, message: "Invalid test ID." },
  },

  // Feedback
  FEEDBACK: {
    FEEDBACK_SUBMITTED: {
      code: 200,
      message: "Feedback submitted successfully.",
    },
    FEEDBACK_FAILED: {
      code: 500,
      message: "Feedback submission failed. Try again.",
    },
    INVALID_FEEDBACK: { code: 400, message: "Invalid feedback format." },
  },

  // General Errors
  GENERAL: {
    SERVER_ERROR: {
      code: 500,
      message: "Internal server error. Please try again later.",
    },
    BAD_REQUEST: {
      code: 400,
      message: "Bad request. Please check your input.",
    },
    FIELDS_REQUIRED: {
      code: 400,
      message: "All fields are required.",
    },
    NOT_FOUND: { code: 404, message: "Resource not found." },
  },
};

export default STATUS_MESSAGES;
