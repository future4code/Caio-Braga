import { setPosts } from "../actions/getPosts";
import postsReducer from "./postsReducer";


describe('testa o postsReducer', () => {
    test('testa se o post funciona', () => {
        const currentState = {
            allPosts: []
        }

        const action = setPosts('post teste')

        const newState = postsReducer(currentState, action)

        expect(newState.allPosts).toHaveLength(10)
        expect(newState.allPosts[0].text).toEqual('post teste')
    })
})