import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Header({ title, showAddTask, toggleShow }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={!showAddTask ? 'red' : 'purple'}
        text={!showAddTask ? 'Show Add Task Bar' : 'Close Add Task Bar'}
        handleClick={toggleShow}
      ></Button>
    </header>
  );
}

Header.defaultProps = {
  title: 'Default Title',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
