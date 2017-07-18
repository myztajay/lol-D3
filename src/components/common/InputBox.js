import React from 'react';
import { Link } from 'react-router-dom'

const InputBox = ({handleUsernameChange, username}) => {
    return(
      <form>
        <label>
          Username:
          <input type="text" name="name" value={username} onChange={handleUsernameChange} />
        </label>
        <Link to={username}> GO</Link>
      </form>
    )
}

export default InputBox;
