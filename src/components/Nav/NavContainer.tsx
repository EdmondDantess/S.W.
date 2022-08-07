import React from "react";
import {Nav} from "./Nav";
import {StoreContext} from "../../StoreContext";

export const NavContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {
            return <Nav state={store.getState().sidebarPage}/>
        }
        }
    </StoreContext.Consumer>
};
