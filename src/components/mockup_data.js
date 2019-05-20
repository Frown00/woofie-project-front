import pet1 from '../img/mockup_data/pets/pimpek.jpg';
import pet2 from '../img/mockup_data/pets/skora.jpg';

import person1 from '../img/mockup_data/people/woman1.jpg';
import person2 from '../img/mockup_data/people/man1.jpg';

export const pets = [
  {
    image: pet1,
    name: 'Pimpek',
    specie: 'Pies',
    breed: 'York',
    description: 'Mały wesoły piesek, uwielbia bawi się i gryźć kości',
    rating: 4.0
  },
  {
    image: pet2,
    name: 'Skóra',
    specie: 'Kot',
    breed: 'Dachowiec',
    description: 'Puszysty kot z rodowodem persa',
    rating: 3.7
  },

]

export const users = [
  {
    name: "Janusz Kowalski",
    rating: 3.5,
    allRatings: [
      {
        rating: 3.5,
        user: {
          name: "Adam Nowak"
        }
      }
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
    name: "Małgorzata Konewka",
    rating: 3.9,
    allRatings: [
      {
        rating: 3.5,
        user: {
          name: "Janusz Kowalski"
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
      users[0].pets[0],
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
      users[0].pets[0],
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
        {

        }
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

export const userNotices = [
  {
    destination: "#"
  }
];

export const applicationsAccepted = [
  {
    status: 'ACCEPTED',
    applicationDate: new Date('10.10.2019 10:55:00'),
    responseDate: null,
    announcement: {
      publishDate: '10-10-2019 10:53:45',
      keepingDateFrom: '2019-10-10T13:24:00',
      keepingDateTo: '2019-10-15T23:24:00',
      reward: 200,
      status: 'Aktywny',
      city: 'Wrocław',
      street: 'Warszawska',
      owner: {
        name: 'Janusz Kowalski',
        rating: 3.5,
      },
      pet: {
        image: pet1,
        name: 'Pimpek',
        specie: 'Pies',
        breed: 'York',
        rating: 4.0
      }
    }
  }
];

export const applications = [
  {
    status: 'PENDING',
    applicationDate: new Date('10.10.2019 10:55:00'),
    responseDate: null,
    announcement: {
      publishDate: '10-10-2019 10:53:45',
      keepingDateFrom: '2019-10-10T13:24:00',
      keepingDateTo: '2019-10-15T23:24:00',
      reward: 200,
      status: 'ACTIVE',
      city: 'Wrocław',
      street: 'Warszawska',
      owner: {
        name: 'Janusz Kowalski',
        rating: 3.5,
      },
      pet: {
        image: pet1,
        name: 'Pimpek',
        specie: 'Pies',
        breed: 'York',
        rating: 4.0
      }
    }
  },
  {
    status: 'ACCEPTED',
    applicationDate: new Date('10.10.2019 10:55:00'),
    responseDate: null,
    announcement: {
      publishDate: '10-10-2019 10:53:45',
      keepingDateFrom: '2019-10-10T13:24:00',
      keepingDateTo: '2019-10-15T23:24:00',
      reward: 200,
      status: 'Aktywny',
      city: 'Wrocław',
      street: 'Warszawska',
      owner: {
        name: 'Janusz Kowalski',
        rating: 3.5,
      },
      pet: {
        image: pet1,
        name: 'Pimpek',
        specie: 'Pies',
        breed: 'York',
        rating: 4.0
      }
    }
  }
];


