import React from 'react';


class CoolComponent extends React.Component {

    onInputChange(event) {
        console.log(event.target.value)
    }



    render(){
        return(
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input
                                type="text" placeholder='search Cool Component...'
                                onChange={this.onInputChange}
                            />
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CoolComponent;