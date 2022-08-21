import dialogsPageReducer, {
    addMessageInDialogsAC,
    dialogsPagePropsType,
    textAreaValueMessageAC
} from './dialogsPage-reducer';

test('test for reducer dialogsPage', () => {

    let startState: dialogsPagePropsType = {
        messageData: [],
        messageValueTextarea: '',
        dialogsData: [],
    }


    const testAddMessage = addMessageInDialogsAC('HELLO')
    const test1 = dialogsPageReducer(startState, testAddMessage)
    const testChangeTextAreaValue = textAreaValueMessageAC('HI')
    const test2 = dialogsPageReducer(startState, testChangeTextAreaValue)


    expect(test1.messageData[0].message).toBe('HELLO')
    expect(test2.messageValueTextarea).toBe('HI')

})