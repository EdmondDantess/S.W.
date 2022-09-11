import React from 'react';
import {Preloader} from '../../../common/Preloader';

export class ProfileStatus extends React.Component<any> {
    state = {
        editMode: false
    }
    activateEditMode =()=>  {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        if (!this.props.status) {
            return <Preloader/>
        }
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <b>Status:</b> <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input type="text" value={this.props.status} autoFocus onBlur={this.deActivateEditMode}/>
                    </div>}
            </div>
        );
    }
}
