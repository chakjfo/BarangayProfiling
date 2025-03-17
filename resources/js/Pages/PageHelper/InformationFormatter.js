

function formatToCurrency(valueArgs) {
    let value = valueArgs.replace(/[^0-9]/g, "");
    let formattedValue = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
    }).format(value / 100);

    return formattedValue
}

export { formatToCurrency }