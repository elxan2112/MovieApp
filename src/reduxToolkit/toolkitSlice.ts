import { createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        post: [
            {
                text: 'text1',
                id: 'id1',
                image: 'https://all-auto.org/uploads/posts/2015-07/1437152136_nissan-240sx-20.jpg'
            },
            {
                text: 'text2',
                id: 'id2'
            },
            {
                text: 'text3',
                id: 'id3',
                image: 'https://i.pinimg.com/originals/73/ee/a0/73eea0f3f5402177fafdb1145039cce3.jpg'
            },
            {
                text: 'text4',
                id: 'id4',
                image: 'https://i.ytimg.com/vi/2LRwCJHt6e0/sddefault.jpg'
            },
            {
                text: 'text5',
                id: 'id5',
                image: 'https://a.d-cd.net/WFF9tUZBfSIh60MUAGco_3qlPkA-960.jpg'

            }],
        favoritePosts: [
            {
                text: 'text1',
                id: 'id1',
                image: 'https://all-auto.org/uploads/posts/2015-07/1437152136_nissan-240sx-20.jpg'
            },
            {
                text: 'text2',
                id: 'id2'
            },
        ],
    },
    reducers: {
        increment(state, action) {
            state.favoritePosts = state.favoritePosts.filter(post => {post.id != action.payload.id; console.log('post', post.id); console.log('action',action.payload.id);})
            console.log('state', state.favoritePosts);
            
        },
        addToFavorites(state, action) {
            console.log('addToFavorites');
            
            state.favoritePosts.push(action.payload)
        }
    }
})

export default toolkitSlice.reducer;
export const { increment, addToFavorites } = toolkitSlice.actions;