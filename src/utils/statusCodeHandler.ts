import {internalServerError} from "../constants";

export const statusCodeHandler = (code: number) => {
    return (code === 500) ? `${internalServerError} ${code}` : code;
}