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