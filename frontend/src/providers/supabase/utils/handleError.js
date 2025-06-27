// @ts-nocheck
export const handleError = (error) => {
  const customError = {
    ...error,
    message: error.message,
    statusCode: Number.parseInt(error.code),
  };
  return Promise.reject(customError);
};