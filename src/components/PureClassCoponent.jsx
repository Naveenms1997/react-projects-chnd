import React, { PureComponent } from 'react'

//Extend PureComponent instead of Component to make class component PureComponent
export class PureClassComponent extends PureComponent {

    state ={
        userName:'',
        age:10,
        address:{
            state:"Karnataka"
        }
    }

    updateName=()=>{
        console.log('update name executed');
        this.setState({
            userName:'Guru'
        })
    }

    updateAddress=()=>{
        console.log('update address executed')
        this.setState({
            address:{
                state:'Kerala'
            }
        })
    }

    componentDidUpdate(){
        console.log('componentDidUpdate executed');
    }

    // if we extends PureComponent react will do a shallow comparision of the prev state and next state
    //  we shouldn't write shouldComponentUpdate when extending PureComponent bcz react will write the logic of comparision in shouldComponentUpdate

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('shouldComponentUpdate executed');
    //     if (nextState.userName!==nextProps.userName){
    //         return true
    //     }else{
    //         return false
    //     }
    // }


    render() {
        console.log('render executed');
        return (
            <div>
                <p>user name - {this.state.userName}</p>
                <p>user adress - {this.state.address.state}</p>

                <button onClick={()=>{
                    this.updateName()
                }}>Update name</button>

                <button onClick={()=>{
                    this.updateAddress()
                }}>Update address</button>
            </div>
        )
    }
}
