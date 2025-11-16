function formatCurrencyArray(values) {
  if (!Array.isArray(values)) {
   console.log("Ожидался массив, но получено:", typeof values);
   return
  }

  const result = values.map((value, index) => {
    if (typeof value !== 'string' || value.trim() === '') {
      return `Элемент №${index + 1} ("${value}") не является строкой с числом`;
    }

    const n = Number(value);
    if (Number.isNaN(n)) {
      return `Элемент №${index + 1} ("${value}") не является числом`;
    }

    const formattedCurrency =  n.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formattedCurrency;
  });

  console.log(result);
  return result;
}

const arr = ["122", "1234", "23590876280", 436478, 45345, "wefewwef", "324fbgfft", ""];

formatCurrencyArray(arr);
formatCurrencyArray(12341243);
formatCurrencyArray({});