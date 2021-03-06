import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon } from 'react-materialize'

const InputBox = ({handleUsernameChange, username}) => {
    return(
      <form>
        <label>
          Username:
          <input type="text" name="name" value={username} onChange={handleUsernameChange} />
        </label>
        <div>  
      		<Link to={username}><Button className='light-blue darken-4' waves='light'>Search Summoner<Icon left>search</Icon></Button></Link>
        </div>
      </form>
    )
}

export default InputBox;
