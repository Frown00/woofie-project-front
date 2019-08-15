import pet1 from '../img/mockup_data/pets/pimpek.jpg';
import pet2 from '../img/mockup_data/pets/skora.jpg';

import person1 from '../img/mockup_data/people/woman1.jpg';
import person2 from '../img/mockup_data/people/man1.jpg';

export const pets = [
  {
    id: 1000,
    image: pet1,
    name: 'Pimpek',
    specie: 'Pies',
    breed: 'York',
    description: 'Mały wesoły piesek, uwielbia bawi się i gryźć kości',
    rating: '4.0',
    allRatings: [
      {
        rating: '3.5',
        user: {
          name: "Adam Nowak"
        }
      },
      {
        rating: '4.5',
        user: {
          name: "Adam Nowak"
        }
      }
    ]
  },
  {
    id: 2000,
    image: pet2,
    name: 'Skóra',
    specie: 'Kot',
    breed: 'Dachowiec',
    description: 'Puszysty kot z rodowodem persa',
    rating: 3.7,
    allRatings: [
      {
        rating: '3.5',
        user: {
          name: "Adam Nowak"
        }
      },
      {
        rating: '4.5',
        user: {
          name: "Adam Nowak"
        }
      }
    ]
  },

]

export const users = [
  {
    userId: 1000,
    name: "Janusz Kowalski",
    rating: 4.7,
    allRatings: [
      {
        rating: 4,
        user: {
          name: "Adam Nowak",
          body: "Polecam tego użytkownika"
        }
      },
      {
        rating: 5,
        user: {
          name: "Piotr Frączewski",
          body: "Polecam i pozdrawiam!"
        }
      },
      {
        rating: 5,
        user: {
          name: "Iza Małysz",
          body: "Polecam!"
        }
      },
    ],
    phoneNumber: "645890345",
    city: "Wrocław",
    street: "Warszawska",
    pets: [
      pets[0],
      pets[1]
    ],
    avatar: person2,
    buildingNumber: "16",
    birthDate: "1987-10-10"
  },
  {
    userId: 1200,
    name: "Małgorzata Konewka",
    rating: '4.0',
    allRatings: [
      {
        rating: 4,
        user: {
          name: "Janusz Kowalski",
          body: "Polecam tego użytkownika"
        }
      }
    ],
    phoneNumber: "64456788",
    city: "Wrocław",
    street: "Piastowska",
    pets: [
      pets[1]
    ],
    avatar: person1,
    buildingNumber: "16",
    birthDate: "1987-10-10"
  }
];




export const notices = [
  {
    id: '1234',
    publishDate: '10-10-2019 10:53:45',
    keepingDateFrom: '2019-10-10T13:24:00',
    keepingDateTo: '2019-10-15T23:24:00',
    reward: 200,
    status: 'aktywny',
    city: 'Wrocław',
    street: 'Warszawska',
    remarks: 'Lorem Lorem Ipsum Ipsum',
    owner: users[0],
    pets: [
      users[0].pets[0],
      users[0].pets[1]
    ]
  },
  {
    id: '1300',
    publishDate: '10-10-2019 10:53:45',
    keepingDateFrom: '2019-10-10T13:24:00',
    keepingDateTo: '2019-10-15T23:24:00',
    reward: 200,
    status: 'aktywny',
    city: 'Wrocław',
    street: 'Warszawska',
    remarks: 'Lorem Lorem Ipsum Ipsum',
    owner: users[0],
    pets: [
      users[0].pets[1],
    ]
  },
  {
    id: '1400',
    publishDate: '10-10-2019 10:53:45',
    keepingDateFrom: '2019-10-10T13:24:00',
    keepingDateTo: '2019-10-15T23:24:00',
    reward: 200,
    status: 'aktywny',
    city: 'Wrocław',
    street: 'Warszawska',
    remarks: 'Lorem Lorem Ipsum Ipsum',
    owner: users[0],
    pets: [
      users[0].pets[0],
      users[0].pets[1]
    ]
  },
  {
    id: '1500',
    publishDate: '10-10-2019 10:53:45',
    keepingDateFrom: '2019-10-10T13:24:00',
    keepingDateTo: '2019-10-15T23:24:00',
    reward: 200,
    status: 'aktywny',
    city: 'Wrocław',
    street: 'Warszawska',
    remarks: 'Lorem Lorem Ipsum Ipsum',
    owner: users[0],
    pets: [
      users[0].pets[1],
    ]
  },
];


export const messages = [
  {
    destination: "#",
    unread: 5,
    person: {
      name: "Małgorzata Konewka",
      image: person1,
    },
    conversation: {
      id: 1345,
      messages: [
        {
          userId: 1000,
          body: "Cześć!",
          createdAt: "10:59 10.06"
        },
        {
          userId: 1000,
          body: "Czy jesteś w stanie zaopiekować się dłużej moim pupilem?",
          createdAt: "11:00 10.06"
        },
        {
          userId: 1200,
          body: "Cześć!",
          createdAt: "11:02 10.06"
        },
        {
          userId: 1200,
          body: "Jasne!",
          createdAt: "11:03 10.06"
        }
      ]
    }
  },
  {
    destination: "#",
    unread: 5,
    person: {
      name: "Janusz Kowalski",
      image: person2,
    },
    conversation: {
      id: 1348,
      messages: [

      ]
    }
  },
]

export const contacts = [
  {
    destination: "#",
    unread: 5,
    person: {
      name: "Małgorzata Konewka",
      image: person1,
    },
    conversation: {
      id: 1345,
      idOwner: 4444,
      idKeeper: 5555,
      messages: [
        {

        }
      ],
      connection: [
        {
          pet: [
            {

            }
          ]
        }
      ]
    }
  },

];

export const applications = [
  {
    id: '1233',
    status: 'PENDING',
    applicationDate: '10.10.2019 10:55:00',
    responseDate: null,
    announcement: {
      publishDate: '10-10-2019 10:53:45',
      keepingDateFrom: '2019-10-10T13:24:00',
      keepingDateTo: '2019-10-15T23:24:00',
      reward: 200,
      status: 'ACTIVE',
      city: 'Wrocław',
      street: 'Warszawska',
      owner: users[0],
      pets: [
        pets[0]
      ]

    },
    appliedUser: users[0]
  },
  {
    id: '123234',
    status: 'ACCEPTED',
    applicationDate: '10.10.2019 10:55:00',
    responseDate: null,
    announcement: {
      publishDate: '10-10-2019 10:53:45',
      keepingDateFrom: '2019-10-10T13:24:00',
      keepingDateTo: '2019-10-15T23:24:00',
      reward: 200,
      status: 'Aktywny',
      city: 'Wrocław',
      street: 'Warszawska',
      owner: users[0],
      pets: [
        pets[1]
      ]
    }
  }
];

// export const userApplications = [
//   {

//   }
// ]

export const userNotices = [
  {
    id: 12334,
    publishDate: '10-10-2019 10:53:45',
    endDate: null,
    keepingDateFrom: '2019-10-10T13:24:00',
    keepingDateTo: '2019-10-15T23:24:00',
    reward: 200,
    status: 'ACTIVE',
    city: 'Wrocław',
    street: 'Warszawska',
    owner: users[0],
    pets: [
      pets[0]
    ],
    applications: [
      {
        user: users[0],
        status: 'PENDING',
        applicationDate: '10-10-2019 10:55:00',
        responseDate: null,
      },
      {
        user: users[1],
        status: 'PENDING',
        applicationDate: '10-10-2019 10:59:00',
        responseDate: null,
      }
    ]
  },
  {
    id: 12339,
    publishDate: '10-10-2019 10:53:45',
    endDate: '10-11-2019 10:53:45',
    keepingDateFrom: '2019-10-10T13:24:00',
    keepingDateTo: '2019-10-15T23:24:00',
    reward: 200,
    status: 'CLOSED',
    city: 'Wrocław',
    street: 'Warszawska',
    owner: users[0],
    pets: [
      pets[1], pets[0]
    ],
    applications: [

    ]
  },

];

export const applicationsAccepted = [
  {
    status: 'ACCEPTED',
    applicationDate: '10.10.2019 10:55:00',
    responseDate: null,
    announcement: {
      publishDate: '10-10-2019 10:53:45',
      keepingDateFrom: '2019-10-10T13:24:00',
      keepingDateTo: '2019-10-15T23:24:00',
      reward: 200,
      status: 'Aktywny',
      city: 'Wrocław',
      street: 'Warszawska',
      owner: users[0],
      pet: [
        pets[0]
      ]
    }
  }
];




