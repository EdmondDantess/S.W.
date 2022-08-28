import usersPageReducer, {followUnFollow} from './usersPage-reducer';

// test.skip('Its tests for usersPage reducer', ()=> {
//    const startState = [{ id: 1, followed: true}]
//
//     const changeFollowStatus = followUnFollow(1)
//     const test1 = usersPageReducer(startState, changeFollowStatus)
//
//    expect(test1.followed).toBe(false)
//
// })