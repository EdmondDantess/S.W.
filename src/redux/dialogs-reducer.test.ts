import dialogsReducer, {addMessageInDialogs} from './dialogs-reducer';

test('test for reducer dialogsPage', () => {

    let startState = {
        messageData: [],
        dialogsData: [],
    }

    const testAddMessage = addMessageInDialogs('HELLO')
    const test1 = dialogsReducer(startState, testAddMessage)


    expect(test1.messageData[0].message).toBe('HELLO')

})