import { setPosts } from "./getPosts"

describe('Testa actions de setPosts', () => {
    test('Testa create action setPosts', () => {
        const postDeTeste = 'post de teste'

        const action = setPosts(postDeTeste)

        expect(action.type).toEqual('SET_POSTS')
    })
})