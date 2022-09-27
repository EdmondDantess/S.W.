import dialogsPageReducer, {
    addMessageInDialogsAC,
    dialogsPagePropsType,
} from './dialogsPage-reducer';

test('test for reducer dialogsPage', () => {

    let startState: dialogsPagePropsType = {
        messageData: [],
        dialogsData: [],
    }


    const testAddMessage = addMessageInDialogsAC('HELLO')
    const test1 = dialogsPageReducer(startState, testAddMessage)


    expect(test1.messageData[0].message).toBe('HELLO')

})