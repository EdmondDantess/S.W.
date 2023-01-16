import {follow} from './users-reducer';
import {usersAPI} from '../api/users-api';
import {APIResponseType, ResultCodesEnum} from '../api/api';

jest.mock('../api/users-api')


test('follow thunk', async () => {
    const getStateMock = jest.fn()
    const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
    const res: APIResponseType = {
        resultCode: ResultCodesEnum.Succes,
        messages: [],
        data: {}
    }
    userAPIMock.follow.mockReturnValue(Promise.resolve(res))
    const thunk = follow(1)
    const dispatchMock = jest.fn()
    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)
})