import { ADD_POST } from "./actions";

const POSTS = [
    {
        author: "Johnny Depp",
        avatar: "https://ukranews.com/upload/news/2017/06/20/59494e9705766-------_1200.jpg",
        nickname: "Jack Sparrow",
        date: "10.12.21",
        contents: "It's time to drink a glass of rum",
        image: "https://www.kinofilms.ua/images/photos/w680/402456.jpg",
        likes: 25,
        coments: 5,
        reposts: 3,
    },
    {
        author: "Kevin McNally",
        avatar: "https://images.kinorium.com/movie/cast/340130/w150_431013.jpg?1604701409",
        nickname: "Gibbs",
        date: "11.12.21",
        contents: "Forward to adventure",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuO95kTwC19sxVizMVEYoQ7vxyWX19adnkA&usqp=CAU",
        likes: 10,
        coments: 2,
        reposts: 1,
    },
    {
        author: "Orlando Bloom",
        avatar: "https://www.kinonews.ru/insimgs/newsimg/newsimg49265.jpg",
        nickname: "William Turner",
        date: "12.12.21",
        contents: "I made a new sword today",
        image: "http://res.cloudinary.com/dlteazydn/image/upload/v1541166511/zh_bLQrsfR.jpg",
        likes: 35,
        coments: 5,
        reposts: 6,
    },
];

const initialState = {
    posts: POSTS,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                posts: [...state.posts, action.payload],
            }
        default:
            return state;
    }
};

export default reducer;