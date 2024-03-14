export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Ghost",
    _id: "1",
    groupChat: false,
    members: ["1", "2", "3", "4"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Devil",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
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
