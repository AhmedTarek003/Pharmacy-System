const orders = [
  {
    _id: "6728a21e3458a83834cf2663",
    supplier: {
      _id: "671ce70ce9d1a74dacbecbc7",
      userName: "Ahmed Tarek",
    },
    medicines: [
      {
        medicineName: "m123",
        company: "c1",
        expireDate: "2024-11-23T13:45:46.311Z",
        medicineImage: {
          url: null,
          publicId: null,
        },
        unitPrice: 20,
        quantity: 200,
        _id: "6728a21e3458a83834cf2664",
      },
      {
        medicineName: "m13",
        company: "c1",
        expireDate: "2024-12-23T13:45:46.311Z",
        medicineImage: {
          url: null,
          publicId: null,
        },
        unitPrice: 120,
        quantity: 100,
        _id: "6728a21e3458a83834cf2665",
      },
    ],
    expectedDate: "2024-11-23T13:45:46.311Z",
    totalAmount: 200,
    status: "received",
    createdAt: "2024-11-04T10:29:50.956Z",
    updatedAt: "2024-11-04T10:42:18.402Z",
    __v: 0,
  },
  {
    _id: "6728a343022e1c17cbf1b3b7",
    supplier: {
      _id: "671ce70ce9d1a74dacbecbc7",
      userName: "Ahmed Tarek",
    },
    medicines: [
      {
        medicineName: "bandol",
        company: "c1",
        expireDate: "2027-11-23T13:45:46.311Z",
        medicineImage: {
          url: null,
          publicId: null,
        },
        unitPrice: 10,
        quantity: 100,
        _id: "6728a343022e1c17cbf1b3b8",
      },
      {
        medicineName: "revo",
        company: "c1",
        expireDate: "2028-12-23T13:45:46.311Z",
        medicineImage: {
          url: null,
          publicId: null,
        },
        unitPrice: 5,
        quantity: 100,
        _id: "6728a343022e1c17cbf1b3b9",
      },
    ],
    expectedDate: "2024-12-01T13:45:46.311Z",
    totalAmount: 1500,
    status: "pending",
    createdAt: "2024-11-04T10:34:43.852Z",
    updatedAt: "2024-11-04T10:34:43.852Z",
    __v: 0,
  },
];

export { orders };
