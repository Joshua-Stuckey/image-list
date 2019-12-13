import React from 'react';


class TextBox extends React.Component {

    onInputChange(event) {
        console.log(event.target.value)
    }



    render(){
        return(
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                            <input
                                type="text" placeholder='search Cool Component...'
                                onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default TextBox;