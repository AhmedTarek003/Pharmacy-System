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
      userName: "Ali",
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
  {
    _id: "6728a343092e1c17cbf1b3b7",
    supplier: {
      _id: "671ce70ce9d1a74dacbecbc7",
      userName: "houda",
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
    status: "canceled",
    createdAt: "2024-11-04T10:34:43.852Z",
    updatedAt: "2024-11-04T10:34:43.852Z",
    __v: 0,
  },
  {
    _id: "6728a343092e1c17cbf1b3b7",
    supplier: {
      _id: "671ce70ce9d1a74dacbecbc7",
      userName: "houda",
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
    status: "confirmed",
    createdAt: "2024-11-04T10:34:43.852Z",
    updatedAt: "2024-11-04T10:34:43.852Z",
    __v: 0,
  },
];

const medicines = [
  {
    _id: "6716666dec661253f17bfe90",
    medicineName: "m2",
    company: "company1",
    expireDate: "2024-10-20T16:34:47.783Z",
    medicineImage: {
      url: "https://res.cloudinary.com/dyyjz2ymv/image/upload/v1729521265/fiizqea8vbmljubzxnjf.jpg",
      publicId: "fiizqea8vbmljubzxnjf",
    },
    price: 300,
    stock: 93,
    createdAt: "2024-10-21T14:34:21.127Z",
    updatedAt: "2024-10-23T13:10:09.437Z",
    __v: 0,
  },
  {
    _id: "6717a534352bdfde60b75001",
    medicineName: "m1",
    company: "company1",
    expireDate: "2024-11-23T13:45:46.311Z",
    medicineImage: {
      url: "https://res.cloudinary.com/dyyjz2ymv/image/upload/v1729602873/zqmkjlpr6vrreihvlwew.jpg",
      publicId: "zqmkjlpr6vrreihvlwew",
    },
    price: 20,
    stock: 200,
    createdAt: "2024-10-22T13:14:28.309Z",
    updatedAt: "2024-10-23T17:35:27.385Z",
    __v: 0,
  },
  {
    _id: "6717b394fcbdadf26c685136",
    medicineName: "m3",
    company: "company2",
    expireDate: "2024-12-25T16:34:47.783Z",
    medicineImage: {
      url: "https://res.cloudinary.com/dyyjz2ymv/image/upload/v1729606554/hwjcpy5ml4ucbr9cgvzn.jpg",
      publicId: "hwjcpy5ml4ucbr9cgvzn",
    },
    price: 120,
    stock: 100,
    createdAt: "2024-10-22T14:15:48.980Z",
    updatedAt: "2024-10-22T14:15:48.980Z",
    __v: 0,
  },
  {
    _id: "6718f583bc0629bb0073f45e",
    medicineName: "m4",
    company: "company3",
    expireDate: "2026-02-01T16:34:47.783Z",
    medicineImage: {
      url: "https://res.cloudinary.com/dyyjz2ymv/image/upload/v1729688970/tsfsvu4knjkycp9gdtov.jpg",
      publicId: "tsfsvu4knjkycp9gdtov",
    },
    price: 20,
    stock: 0,
    createdAt: "2024-10-23T13:09:23.804Z",
    updatedAt: "2024-10-27T15:14:23.307Z",
    __v: 0,
  },
  {
    _id: "6718fcc21483f1153ab31081",
    medicineName: "m5",
    company: "company3",
    expireDate: "2026-02-01T16:34:47.783Z",
    medicineImage: {
      url: "https://res.cloudinary.com/dyyjz2ymv/image/upload/v1729690825/pjsc0pkogfjeyf6ggagm.jpg",
      publicId: "pjsc0pkogfjeyf6ggagm",
    },
    price: 20,
    stock: 11,
    createdAt: "2024-10-23T13:40:18.701Z",
    updatedAt: "2024-10-27T15:14:23.296Z",
    __v: 0,
  },
  {
    _id: "671933dfef1bc94e5c2cdd49",
    medicineName: "m12",
    company: "c1",
    expireDate: "2024-11-01T13:45:46.311Z",
    medicineImage: {
      url: null,
      publicId: null,
    },
    price: 120,
    stock: 98,
    createdAt: "2024-10-23T17:35:27.392Z",
    updatedAt: "2024-10-27T16:03:33.576Z",
    __v: 0,
  },
  {
    _id: "67193404ef1bc94e5c2cdd58",
    medicineName: "m13",
    company: "c1",
    expireDate: "2024-12-23T13:45:46.311Z",
    medicineImage: {
      url: null,
      publicId: null,
    },
    price: 120,
    stock: 100,
    createdAt: "2024-10-23T17:36:04.354Z",
    updatedAt: "2024-11-04T10:42:18.397Z",
    __v: 0,
  },
  {
    _id: "6728a50a1a78b78212973128",
    medicineName: "m123",
    company: "c1",
    expireDate: "2024-11-23T13:45:46.311Z",
    medicineImage: {
      url: null,
      publicId: null,
    },
    price: 20,
    stock: 200,
    createdAt: "2024-11-04T10:42:18.392Z",
    updatedAt: "2024-11-04T10:42:18.392Z",
    __v: 0,
  },
];

const suppliers = [
  {
    _id: "6717d410f7954c9e52c78197",
    userName: "ahmed",
    email: "at@gmail.com",
    phoneNumber: "011238938",
    address: "cairo",
    createdAt: "2024-10-22T16:34:24.448Z",
    updatedAt: "2024-10-22T17:07:01.849Z",
    __v: 0,
  },
  {
    _id: "6717d7aca49cb73ee80783b7",
    userName: "ali",
    email: "ali@gmail.com",
    phoneNumber: "0102838373",
    address: "cairo",
    createdAt: "2024-10-22T16:49:48.765Z",
    updatedAt: "2024-10-22T17:06:30.351Z",
    __v: 0,
  },
  {
    _id: "671ce70ce9d1a74dacbecbc7",
    userName: "Ahmed Tarek",
    email: "at3616464@gmail.com",
    phoneNumber: "01065861035",
    address: "Elmahallah",
    createdAt: "2024-10-26T12:56:44.991Z",
    updatedAt: "2024-10-26T12:56:44.991Z",
    __v: 0,
  },
  {
    _id: "6728a790dafce4cbdea58605",
    userName: "hamada",
    email: "at3616@gmail.com",
    phoneNumber: "01165861035",
    address: "Alexandria",
    createdAt: "2024-11-04T10:53:04.153Z",
    updatedAt: "2024-11-04T10:53:04.153Z",
    __v: 0,
  },
];

const invoices = [
  {
    _id: "671e645563562f8573488909",
    medicines: [
      {
        medicineId: {
          _id: "671933dfef1bc94e5c2cdd49",
          medicineName: "m12",
          price: 120,
        },
        quantity: 1,
        _id: "671e645563562f857348890a",
      },
      {
        medicineId: {
          _id: "67193404ef1bc94e5c2cdd58",
          medicineName: "m13",
          price: 120,
        },
        quantity: 2,
        _id: "671e645563562f857348890b",
      },
    ],
    totalAmount: 360,
    createdAt: "2024-10-27T16:03:33.590Z",
    updatedAt: "2024-10-27T16:03:33.590Z",
    __v: 0,
  },
  {
    _id: "671e58ea64f9e83c3509afc3",
    medicines: [
      {
        medicineId: {
          _id: "671933dfef1bc94e5c2cdd49",
          medicineName: "m12",
          price: 120,
        },
        quantity: 1,
        _id: "671e58ea64f9e83c3509afc4",
      },
      {
        medicineId: {
          _id: "67193404ef1bc94e5c2cdd58",
          medicineName: "m13",
          price: 120,
        },
        quantity: 1,
        _id: "671e58ea64f9e83c3509afc5",
      },
    ],
    totalAmount: 240,
    createdAt: "2024-10-27T15:14:50.609Z",
    updatedAt: "2024-10-27T15:14:50.609Z",
    __v: 0,
  },
  {
    _id: "671e58cf64f9e83c3509afbb",
    medicines: [
      {
        medicineId: {
          _id: "6718fcc21483f1153ab31081",
          medicineName: "m5",
          price: 20,
        },
        quantity: 1,
        _id: "671e58cf64f9e83c3509afbc",
      },
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 2,
        _id: "671e58cf64f9e83c3509afbd",
      },
    ],
    totalAmount: 60,
    createdAt: "2024-10-27T15:14:23.313Z",
    updatedAt: "2024-10-27T15:14:23.313Z",
    __v: 0,
  },
  {
    _id: "6718fe0a6bf7f78c7e890196",
    medicines: [
      {
        medicineId: {
          _id: "6718fcc21483f1153ab31081",
          medicineName: "m5",
          price: 20,
        },
        quantity: 1,
        _id: "6718fe0a6bf7f78c7e890197",
      },
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718fe0a6bf7f78c7e890198",
      },
    ],
    totalAmount: 40,
    createdAt: "2024-10-23T13:45:46.316Z",
    updatedAt: "2024-10-23T13:45:46.316Z",
    __v: 0,
  },
  {
    _id: "6718fdf36bf7f78c7e890188",
    medicines: [
      {
        medicineId: {
          _id: "6718fcc21483f1153ab31081",
          medicineName: "m5",
          price: 20,
        },
        quantity: 1,
        _id: "6718fdf36bf7f78c7e890189",
      },
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718fdf36bf7f78c7e89018a",
      },
    ],
    totalAmount: 40,
    createdAt: "2024-10-23T13:45:23.624Z",
    updatedAt: "2024-10-23T13:45:23.624Z",
    __v: 0,
  },
  {
    _id: "6718fdd86bf7f78c7e89017c",
    medicines: [
      {
        medicineId: {
          _id: "6718fcc21483f1153ab31081",
          medicineName: "m5",
          price: 20,
        },
        quantity: 1,
        _id: "6718fdd86bf7f78c7e89017d",
      },
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718fdd86bf7f78c7e89017e",
      },
    ],
    totalAmount: 40,
    createdAt: "2024-10-23T13:44:56.174Z",
    updatedAt: "2024-10-23T13:44:56.174Z",
    __v: 0,
  },
  {
    _id: "6718fdbc6bf7f78c7e890172",
    medicines: [
      {
        medicineId: {
          _id: "6718fcc21483f1153ab31081",
          medicineName: "m5",
          price: 20,
        },
        quantity: 1,
        _id: "6718fdbc6bf7f78c7e890173",
      },
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718fdbc6bf7f78c7e890174",
      },
    ],
    totalAmount: 40,
    createdAt: "2024-10-23T13:44:28.749Z",
    updatedAt: "2024-10-23T13:44:28.749Z",
    __v: 0,
  },
  {
    _id: "6718fd1a1483f1153ab310af",
    medicines: [
      {
        medicineId: {
          _id: "6718fcc21483f1153ab31081",
          medicineName: "m5",
          price: 20,
        },
        quantity: 1,
        _id: "6718fd1a1483f1153ab310b0",
      },
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718fd1a1483f1153ab310b1",
      },
    ],
    totalAmount: 40,
    createdAt: "2024-10-23T13:41:46.007Z",
    updatedAt: "2024-10-23T13:41:46.007Z",
    __v: 0,
  },
  {
    _id: "6718fcfb1483f1153ab310a3",
    medicines: [
      {
        medicineId: {
          _id: "6718fcc21483f1153ab31081",
          medicineName: "m5",
          price: 20,
        },
        quantity: 1,
        _id: "6718fcfb1483f1153ab310a4",
      },
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718fcfb1483f1153ab310a5",
      },
    ],
    totalAmount: 40,
    createdAt: "2024-10-23T13:41:15.973Z",
    updatedAt: "2024-10-23T13:41:15.973Z",
    __v: 0,
  },
  {
    _id: "6718fcee1483f1153ab31097",
    medicines: [
      {
        medicineId: {
          _id: "6718fcc21483f1153ab31081",
          medicineName: "m5",
          price: 20,
        },
        quantity: 1,
        _id: "6718fcee1483f1153ab31098",
      },
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718fcee1483f1153ab31099",
      },
    ],
    totalAmount: 40,
    createdAt: "2024-10-23T13:41:02.128Z",
    updatedAt: "2024-10-23T13:41:02.128Z",
    __v: 0,
  },
  {
    _id: "6718fce01483f1153ab3108d",
    medicines: [
      {
        medicineId: {
          _id: "6718fcc21483f1153ab31081",
          medicineName: "m5",
          price: 20,
        },
        quantity: 1,
        _id: "6718fce01483f1153ab3108e",
      },
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718fce01483f1153ab3108f",
      },
    ],
    totalAmount: 40,
    createdAt: "2024-10-23T13:40:48.371Z",
    updatedAt: "2024-10-23T13:40:48.371Z",
    __v: 0,
  },
  {
    _id: "6718fc45c3c4512a87cd4fa4",
    medicines: [
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718fc45c3c4512a87cd4fa5",
      },
    ],
    totalAmount: 20,
    createdAt: "2024-10-23T13:38:13.564Z",
    updatedAt: "2024-10-23T13:38:13.564Z",
    __v: 0,
  },
  {
    _id: "6718fc33c3c4512a87cd4f9c",
    medicines: [
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718fc33c3c4512a87cd4f9d",
      },
    ],
    totalAmount: 20,
    createdAt: "2024-10-23T13:37:55.312Z",
    updatedAt: "2024-10-23T13:37:55.312Z",
    __v: 0,
  },
  {
    _id: "6718fc25c3c4512a87cd4f96",
    medicines: [
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718fc25c3c4512a87cd4f97",
      },
    ],
    totalAmount: 20,
    createdAt: "2024-10-23T13:37:41.618Z",
    updatedAt: "2024-10-23T13:37:41.618Z",
    __v: 0,
  },
  {
    _id: "6718fc13c3c4512a87cd4f90",
    medicines: [
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718fc13c3c4512a87cd4f91",
      },
    ],
    totalAmount: 20,
    createdAt: "2024-10-23T13:37:23.467Z",
    updatedAt: "2024-10-23T13:37:23.467Z",
    __v: 0,
  },
  {
    _id: "6718fae7787515a67c384c19",
    medicines: [
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718fae7787515a67c384c1a",
      },
    ],
    totalAmount: 20,
    createdAt: "2024-10-23T13:32:23.081Z",
    updatedAt: "2024-10-23T13:32:23.081Z",
    __v: 0,
  },
  {
    _id: "6718f735032d376eb81d0edc",
    medicines: [
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718f735032d376eb81d0edd",
      },
    ],
    totalAmount: 20,
    createdAt: "2024-10-23T13:16:37.074Z",
    updatedAt: "2024-10-23T13:16:37.074Z",
    __v: 0,
  },
  {
    _id: "6718f724bba25a07ddf1c50e",
    medicines: [
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718f724bba25a07ddf1c50f",
      },
    ],
    totalAmount: 20,
    createdAt: "2024-10-23T13:16:20.568Z",
    updatedAt: "2024-10-23T13:16:20.568Z",
    __v: 0,
  },
  {
    _id: "6718f5e7bc0629bb0073f46e",
    medicines: [
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 1,
        _id: "6718f5e7bc0629bb0073f46f",
      },
    ],
    totalAmount: 20,
    createdAt: "2024-10-23T13:11:03.224Z",
    updatedAt: "2024-10-23T13:11:03.224Z",
    __v: 0,
  },
  {
    _id: "6718f5b1bc0629bb0073f466",
    medicines: [
      {
        medicineId: {
          _id: "6716666dec661253f17bfe90",
          medicineName: "m2",
          price: 300,
        },
        quantity: 1,
        _id: "6718f5b1bc0629bb0073f467",
      },
      {
        medicineId: {
          _id: "6718f583bc0629bb0073f45e",
          medicineName: "m4",
          price: 20,
        },
        quantity: 12,
        _id: "6718f5b1bc0629bb0073f468",
      },
    ],
    totalAmount: 540,
    createdAt: "2024-10-23T13:10:09.454Z",
    updatedAt: "2024-10-23T13:10:09.454Z",
    __v: 0,
  },
  {
    _id: "6717b31dc69d6e59a53ae626",
    medicines: [
      {
        medicineId: {
          _id: "6716666dec661253f17bfe90",
          medicineName: "m2",
          price: 300,
        },
        quantity: 2,
        _id: "6717b31dc69d6e59a53ae627",
      },
      {
        medicineId: {
          _id: "6717a534352bdfde60b75001",
          medicineName: "m1",
          price: 20,
        },
        quantity: 2,
        _id: "6717b31dc69d6e59a53ae628",
      },
    ],
    totalAmount: 1200,
    createdAt: "2024-10-22T14:13:49.630Z",
    updatedAt: "2024-10-22T14:13:49.630Z",
    __v: 0,
  },
  {
    _id: "6717b315c69d6e59a53ae61e",
    medicines: [
      {
        medicineId: {
          _id: "6716666dec661253f17bfe90",
          medicineName: "m2",
          price: 300,
        },
        quantity: 2,
        _id: "6717b315c69d6e59a53ae61f",
      },
      {
        medicineId: {
          _id: "6717a534352bdfde60b75001",
          medicineName: "m1",
          price: 20,
        },
        quantity: 1,
        _id: "6717b315c69d6e59a53ae620",
      },
    ],
    totalAmount: 900,
    createdAt: "2024-10-22T14:13:41.580Z",
    updatedAt: "2024-10-22T14:13:41.580Z",
    __v: 0,
  },
];

const reports = [
  {
    _id: "671f817068ba61f8397f92b8",
    reportType: "Best Selling Medicines",
    weekStartDate: "2024-10-25T21:00:00.000Z",
    weekEndDate: "2024-11-01T21:59:59.999Z",
    bestSellingMedicines: [
      {
        medicineId: "6718fcc21483f1153ab31081",
        quantitySold: 1,
        _id: "671f817068ba61f8397f92b9",
      },
      {
        medicineId: "6718f583bc0629bb0073f45e",
        quantitySold: 2,
        _id: "671f817068ba61f8397f92ba",
      },
      {
        medicineId: "671933dfef1bc94e5c2cdd49",
        quantitySold: 2,
        _id: "671f817068ba61f8397f92bb",
      },
      {
        medicineId: "67193404ef1bc94e5c2cdd58",
        quantitySold: 3,
        _id: "671f817068ba61f8397f92bc",
      },
    ],
    createdAt: "2024-10-28T12:20:00.825Z",
    updatedAt: "2024-10-28T12:20:00.825Z",
    __v: 0,
  },
  {
    _id: "671f817068ba61f8397f92bf",
    reportType: "Orders",
    weekStartDate: "2024-10-25T21:00:00.000Z",
    weekEndDate: "2024-11-01T21:59:59.999Z",
    weeklyOrdersExports: 2400,
    monthlyOrdersExports: [
      {
        _id: 42,
        totalOrders: 2400,
      },
    ],
    createdAt: "2024-10-28T12:20:00.829Z",
    updatedAt: "2024-10-28T12:20:00.829Z",
    __v: 0,
  },
  {
    _id: "671f817068ba61f8397f92c1",
    reportType: "Weekly Revenue",
    weekStartDate: "2024-10-10T21:00:00.000Z",
    weekEndDate: "2024-10-17T21:59:59.999Z",
    weekRevenue: 660,
    monthlyRevenue: [
      {
        _id: 42,
        totalRevenue: 3120,
      },
      {
        _id: 43,
        totalRevenue: 660,
      },
    ],
    weekCountInvoice: 3,
    monthlyCountInvoice: [
      {
        _id: 42,
        invoice: 19,
      },
      {
        _id: 43,
        invoice: 3,
      },
    ],
    createdAt: "2024-09-28T12:20:00.832Z",
    updatedAt: "2024-10-28T12:20:00.832Z",
    __v: 0,
  },
];

const notifications = [
  {
    _id: "6718fe0a6bf7f78c7e89018e",
    type: "inventory",
    message: "the medicine m5 is less than 20 items, the stock of m5 is 12",
    relatedMedicineId: "6718fcc21483f1153ab31081",
    read: false,
    createdAt: "2024-10-23T13:45:46.303Z",
    updatedAt: "2024-10-23T13:45:46.303Z",
    __v: 0,
  },
  {
    _id: "6718fe0a6bf7f78c7e890193",
    type: "inventory",
    message: "the medicine m4 is less than 20 items, the stock of m4 is 2",
    relatedMedicineId: "6718f583bc0629bb0073f45e",
    read: false,
    createdAt: "2024-10-23T13:45:46.311Z",
    updatedAt: "2024-10-23T13:45:46.311Z",
    __v: 0,
  },
  {
    _id: "67192fb3bac0591cde70a39d",
    type: "order",
    message: "you made a new order",
    relatedOrderId: "67192fb3bac0591cde70a399",
    read: false,
    createdAt: "2024-10-23T17:17:39.589Z",
    updatedAt: "2024-10-23T17:17:39.589Z",
    __v: 0,
  },
  {
    _id: "671933faef1bc94e5c2cdd50",
    type: "order",
    message: "you made a new order",
    relatedOrderId: "671933faef1bc94e5c2cdd4c",
    read: false,
    createdAt: "2024-10-23T17:35:54.701Z",
    updatedAt: "2024-10-23T17:35:54.701Z",
    __v: 0,
  },
  {
    _id: "671ce72be9d1a74dacbecbce",
    type: "order",
    message: "you made a new order",
    relatedOrderId: "671ce72be9d1a74dacbecbca",
    read: true,
    createdAt: "2024-10-26T12:57:15.305Z",
    updatedAt: "2024-10-26T12:57:15.305Z",
    __v: 0,
  },
  {
    _id: "671ce82190d4225c25e9e4cb",
    type: "order",
    message: "you made a new order",
    relatedOrderId: "671ce82190d4225c25e9e4c7",
    read: false,
    createdAt: "2024-10-26T13:01:21.102Z",
    updatedAt: "2024-10-26T13:01:21.102Z",
    __v: 0,
  },
  {
    _id: "671ce85adfaaf866e724ff4d",
    type: "order",
    message: "you made a new order",
    relatedOrderId: "671ce85adfaaf866e724ff49",
    read: false,
    createdAt: "2024-10-26T13:02:18.173Z",
    updatedAt: "2024-10-26T13:02:18.173Z",
    __v: 0,
  },
  {
    _id: "671ce8891a6e3d4fb4bbb54c",
    type: "order",
    message: "you made a new order",
    relatedOrderId: "671ce8891a6e3d4fb4bbb548",
    read: false,
    createdAt: "2024-10-26T13:03:05.736Z",
    updatedAt: "2024-10-26T13:03:05.736Z",
    __v: 0,
  },
];

export { orders, medicines, suppliers, invoices, reports, notifications };
