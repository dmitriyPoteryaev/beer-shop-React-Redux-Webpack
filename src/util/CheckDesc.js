function CheckDesc(desc, amount) {
  return desc.split("").length > amount
    ? [
        ...desc
          .split("")
          .filter((elem, i) => i <= amount)
          .join(""),
        "...",
      ]
    : desc.split("").join("");
}

export default CheckDesc;
