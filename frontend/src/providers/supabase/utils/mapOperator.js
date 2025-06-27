// @ts-nocheck
export const mapOperator = (operator) => {
  switch (operator) {
    case "ne":
      return "neq";
    case "nin":
      return "not.in";
    case "contains":
      return "ilike";
    case "ncontains":
      return "not.ilike";
    case "containss":
      return "like";
    case "ncontainss":
      return "not.like";
    case "null":
      return "is";
    case "nnull":
      return "not.is";
    case "ina":
      return "cs";
    case "nina":
      return "not.cs";
    case "between":
    case "nbetween":
      throw Error(`Operator ${operator} is not supported`);
    default:
      return operator;
  }
};