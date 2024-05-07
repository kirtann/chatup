export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Devil",
    _id: "1",
    groupChat: false,
    members: ["1", "2", "3", "4"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Ghost",
    _id: "2",
    groupChat: true,
    members: ["2", "3"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Ghost",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Devil",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Ghost",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Devil",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "asdfsa",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    // content: "Message Example",
    _id: "dfjlsdjfljsdlfjjf",
    sender: {
      _id: "user._id",
      name: "Ghost",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [
      // {
      //   public_id: "asdfsa 2",
      //   url: "https://www.w3schools.com/howto/img_avatar.png",
      // },
    ],
    content: "Good image",
    _id: "dfjlsdjfljsdlfjjffsd",
    sender: {
      _id: "dlsfja",
      name: "Devil",
    },
    chat: "chatId",
    createdAt: "2024-03-12T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "Ghost",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "ghost",
      friends: 10,
      groups: 2,
    },
    {
      name: "Devil",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "devil",
      friends: 5,
      groups: 1,
    },
  ],

  chats: [
    {
      name: "Group 1",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "3", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "4", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 10,
      totalMessages: 100,
      creator: {
        name: "Ghost",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Group 2",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "3", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "4", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 5,
      totalMessages: 50,
      creator: {
        name: "Devil",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],
  messages: [
    {
      attachments: [
        // {
        //   public_id: "asdfsa",
        //   url: "https://www.w3schools.com/howto/img_avatar.png",
        // },
      ],
      content: "Message Example",
      _id: "dfjlsdjfljsdlfjjf",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Ghost",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
    {
      attachments: [
        {
          public_id: "asdfsa 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "dfjlsdjfljsdlfjjffsd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Devil",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-03-12T10:41:30.630Z",
    },
  ],
};
