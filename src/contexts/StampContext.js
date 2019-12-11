import React, { createContext, Component } from 'react';

export const StampContext = createContext();

class StampContextProvider extends Component {
    state = {
        shirt: null,
        stamp: null
    }
    setStamp = (e) => {
        this.setState({
            stamp: URL.createObjectURL(e.target.files[0])
        });
    }
    render(){
        return (
            
            <StampContext.Provider value={{...this.state, setStamp: this.setStamp}}>
                {this.props.children}
            </StampContext.Provider>
            
        );
    }
}

export default StampContextProvider;