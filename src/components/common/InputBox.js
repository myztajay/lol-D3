import React from 'react';

const InputBox = ({handleUsernameChange, username}) => {
    return(
      <form>
        <label>
          Username:
          <input type="text" name="name" value={username} onChange={handleUsernameChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default InputBox;
