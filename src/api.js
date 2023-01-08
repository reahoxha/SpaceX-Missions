export const getComments = async () => {
    return [
        {
            id: "1",
            body: "Wow that is so nice",
            username: "Arya",
            userId: "1",
            parentId : null,
            createdAt: "2021-07-16T23:00:22.010+02:00"
        },
        {
            id: "2",
            body: "Im amazed by the rocket ",
            username: "Victor",
            userId: "2",
            parentId : null,
            createdAt: "2021-07-16T23:00:22.010+02:00"
        },
        {
            id: "3",
            body: "I know rightttt",
            username: "John",
            userId: "2",
            parentId : "1",
            createdAt: "2021-07-16T23:00:22.010+02:00"
        },
        {
            id: "4",
            body: "Same bro",
            username: "Sam",
            userId: "2",
            parentId : "2",
            createdAt: "2021-07-16T23:00:22.010+02:00"
        },
    ];
};

export const createComment = async(text, parentId = null) => {
    return{
        id:Math.random().toString(36).substr(2,9),
        body: text,
        parentId,
        userId: "1",
        username: "Rea",
        createdAt: new Date().toISOString(),
    };
};

export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };