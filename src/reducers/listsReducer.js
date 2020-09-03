const initialState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [
            {
                text: "новый текст"
            },
            {
                id:2,
                text: "новый текст 2"
            }
        ]
    },
    {
        title: "Last Episode 2",
        id: 0,
        cards: [
            {
                text: "новый текст"
            },
            {
                id:2,
                text: "новый текст 2"
            },
            {
                id:3,
                text: "новый текст 3"
            },
            {
                id:4,
                text: "новый текст 4"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export default listsReducer;