export const usersMoc = [
  {
    id: 1,
    name: "Ann",
  },
  {
    id: 2,
    name: "Alex",
  },
  {
    id: 3,
    name: "Max",
  },
];

export const LastOrdersMoc = [
  {
    id: 1,
    customer: "Testt Reff",
    product: "Cushion for decor",
    ref: "JNMSCFEJW",
    date: "2021-05-16",
    location: "Quebec",
    price: 132,
    status: {
      code: "Shipped",
      id: 4,
    },
  },
  {
    id: 2,
    customer: "Anna Snow",
    product: "Demo product",
    ref: "QWSSCFEJW",
    date: "2021-05-14",
    location: "Ottawa",
    price: 165,
    status: {
      code: "Shipped",
      id: 4,
    },
  },
  {
    id: 3,
    customer: "Testt Reff",
    product: "Cushion for decor",
    ref: "JNMSCFEJW",
    date: "2021-04-14",
    location: "Quebec",
    price: 72,
    status: {
      code: "Shipped",
      id: 4,
    },
  },
];

export const salesMoc = [
  {
    label: "Cushion for decor",
    value: 190,
  },
  {
    label: "Demo product",
    value: 320,
  },
  {
    label: "Rainbow Pencil Holder",
    value: 120,
  },
  {
    label: "Hand Craft Cupcake Deodorizer",
    value: 80,
  },
  {
    label: "Unique Pencil Holder",
    value: 40,
  },
  {
    label: "Pattern Card Holder",
    value: 160,
  },
];

export const orderStatuses = [
  "Payment accepted",
  "Shipped",
  "Delivered",
  "Canceled",
];
