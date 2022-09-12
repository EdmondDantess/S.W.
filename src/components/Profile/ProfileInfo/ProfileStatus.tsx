import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string,
    updateStatusThunk: (status: string) => void
}
type StateType = {
    editMode: boolean,
    status: string
}


export class ProfileStatus extends React.Component<ProfileStatusType, StateType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status)
    }
    statusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
                status: e.currentTarget.value
            }
        )
    }

    componentDidUpdate(prevProps: ProfileStatusType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <b>Status:</b> <span
                        onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input value={this.state.status}
                               onChange={this.statusChange}
                               autoFocus
                               onBlur={this.deActivateEditMode}/>
                    </div>}
            </div>
        );
    }
}
