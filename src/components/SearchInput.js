import React from 'react';

//uncontrolled element into a controlled element
// why do we prefer controlled elements






class SearchInput extends React.Component {
   //  constructor(){
   //     super()

   //     this.onFormSubmit = this.onFormSubmit.bind(this)
   // }

    // arrow functions bind for all values of this within the function

    state = {entry: ''}

    onFormSubmit = (event) => {
        event.preventDefault()
         this.props.onSearchSubmit(this.state.entry)
    }

    render(){
        return(
        <div className='ui segment'>
            <form onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                    <div className='ui massive icon input'>
                        <input
                            type="text" placeholder='search...'
                            onChange={(event) => this.setState({entry:event.target.value})}
                            value={this.state.entry}
                        />
                        <i className='search icon'></i>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

export default SearchInput;