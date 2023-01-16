import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void
    isOwner: boolean
}

export const ProfileStatusHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [localstatus, setLocalStatus] = useState<string>(props.status)

    useEffect(() => {
        setLocalStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        props.isOwner &&   setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(localstatus)
    }
    const statusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status:</b> <span
                    onDoubleClick={activateEditMode}>{props.status}</span>
                </div>}
            {editMode &&
                <div>
                    <input value={localstatus}
                           onChange={statusChange}
                           autoFocus
                           onBlur={deActivateEditMode}/>
                </div>}
        </div>
    );

}
