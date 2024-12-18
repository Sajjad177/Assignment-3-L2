import { TErrorSource, TGenericErrorResponse } from "../interface/globalInterface";

const handleDuplicateError = (error : any): TGenericErrorResponse => {
  const match = error?.message.match(/"([^"]*)"/);
  const extractedField = match && match[1];

  const errorSource: TErrorSource = [
    {
      path: extractedField,
      message: `${extractedField} already exists`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: "Duplicate field value entered",
    errorSource,
  };
};

export default handleDuplicateError;
