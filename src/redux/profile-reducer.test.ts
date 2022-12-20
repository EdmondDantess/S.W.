export {}
// test('Test for ProfilePage reducer', () => {
//     const startState: profilePagePropsType = {
//         profile: null,
//         postTextValue: '',
//         postsData: [
//             {id: 1, message: 'Hello World', Likes: 22},
//             {id: 2, message: 'Nice site', Likes: 2},
//         ],
//     }
//
//     const testChangeTextAreaValue = changeTextValuePostAC('HI-HI')
//     const test1 = profileReducer(startState, testChangeTextAreaValue)
//     const testAddPost = addPostAC('Its just a post')
//     const test2 = profileReducer(startState, testAddPost)
//
//     expect(test1.postTextValue).toBe('HI-HI')
//     expect(test2.postsData[0].Likes).toBe(0)
//     expect(test2.postsData[0].message).toBe('Its just a post')
// })