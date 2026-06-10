import { v4 as uuidv4 } from "uuid";

export const generateId = () => uuidv4();

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getCurrentTimestamp = () => new Date().toISOString();
