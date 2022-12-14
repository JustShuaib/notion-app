import { notion, databaseId } from ".";
// const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;
// const secret = process.env.NEXT_PUBLIC_NOTION_KEY as string;

const createPage = async (link: string) => {
  // const notion = new Client({ auth: secret });
  // const response = await notion.pages.create({
  //   cover: {
  //     type: "external",
  //     external: {
  //       url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=3600",
  //     },
  //   },
  //   icon: {
  //     type: "emoji",
  //     emoji: "🔗",
  //   },
  //   parent: {
  //     type: "database_id",
  //     database_id: databaseId,
  //   },
  //   properties: {
  //     Name: {
  //       title: [
  //         {
  //           text: {
  //             content: "____links____",
  //           },
  //         },
  //       ],
  //     },
  //   },
  //   children: [
  //     {
  //       object: "block",
  //       heading_2: {
  //         rich_text: [
  //           {
  //             text: {
  //               content: "Here are the links saved for you",
  //             },
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       object: "block",
  //       paragraph: {
  //         rich_text: [
  //           {
  //             text: {
  //               // I think this can later change to ```document.title``` of the current page
  //               // But for now, it is the link entered into the form
  //               content: link,
  //               link: {
  //                 url: link,
  //               },
  //             },
  //           },
  //         ],
  //         color: "default",
  //       },
  //     },
  //   ],
  // });

  // Creating a new page in the database
  const response = await notion.pages.create({
    cover: {
      type: "external",
      external: {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=3600",
      },
    },
    icon: {
      type: "emoji",
      emoji: "🔗",
    },
    parent: {
      type: "database_id",
      database_id: databaseId,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: "____links____",
            },
          },
        ],
      },
    },
    children: [
      {
        object: "block",
        heading_2: {
          rich_text: [
            {
              text: {
                content: "Here are the links saved for you",
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: {
          rich_text: [
            {
              text: {
                // I think this can later change to ```document.title``` of the current page
                // But for now, it is the link entered into the form
                content: link,
                link: {
                  url: link,
                },
              },
            },
          ],
          color: "blue",
        },
      },
    ],
  });
  return response;
};
export default createPage;
