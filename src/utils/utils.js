import Moment from "moment";
import "moment/locale/pt-br";

Moment.locale("pt-BR");

export const formatCurrency = value =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    value
  );

export const removeEmpty = obj => {
  Object.keys(obj).forEach(
    k =>
      (obj[k] && typeof obj[k] === "object" && removeEmpty(obj[k])) ||
      (((!obj[k] && obj[k] !== undefined) || (!obj[k] && obj[k] !== null)) &&
        delete obj[k])
  );
  return obj;
};

export const unMask = value => value.replace(/[^0-9]+/g, "");

export const removeSpaces = stringValue => stringValue.replace(/\s/g, "");

export const cleanObject = objs => objs.map(obj => obj.value);

export const getInitials = name => {
  const initials = name.match(/\b\w/g) || [];
  return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
};

export const formatDate = date => Moment(date).format("DD/MM/YY [às] HH:MM");
export const dateFromNow = date => Moment(date, "YYYYMMDD").fromNow();
export const getDay = date => Moment(date).date();
export const randColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

export const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );

export const parseJwt = token => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};

export const decode_utf8 = s => {
  return decodeURIComponent(escape(s));
};

export const capitalizeString = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const applyExpirationDateMask = date => {
  return date.replace(/^(\d{2})(\d)/, "$1/$2");
};

export const isANumberValue = value => {
  return /^\d*$/.test(value);
};

export const getUpperCaseInitials = fullName => {
  return /^([A-Z]).*\s([A-Z])|([A-Z])/.exec(
    (fullName || "").trim().toUpperCase()
  );
};

export const objectHasValues = obj => {
  return Object.values(obj).filter(item => item !== "").length > 0;
};
