export const formatPrice = (value: number) => {
    return value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: "currency",
        currency: "USD",
    });
};
