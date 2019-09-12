import React , {Component} from 'react';
import './SearchBar.css';
//import FontAwesome from 'react-fontawesome';
//import FontAwesome from '@fortawesome/free-solid-svg-icons';
//import * as Icon from '@fortawesome/react-fontawesome'


class SearchBar extends Component
{
    state={
        value: ''
    }
    timeout= null;

    doSearch = (event) =>
    {
        this.setState({value: event.target.value}); //After 500ms(not sure) the search will automaticaly called
        clearTimeout(this.timeout);

        this.timeout= setTimeout( () => {
            this.props.callback(this.state.value);
        },500);
    }

    render() {
        return (
             <div className='rmdb-searchbar'>
                 <div className='rmdb-searchbar-content'>
                     <input 
                        type='text'
                        className='rmdb-searchbar-input'
                        placeholder='SearchBar'
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
               </div>
             </div>
        );
    }

}

export default SearchBar;