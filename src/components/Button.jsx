import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  static propTypes = {
    buttonLabel: PropTypes.string,
    onClick: PropTypes.func,
  };

  render() {
    // console.log(this.props);
    // { buttonLabel: 'somestring', onClick: () => null };
    const { buttonLabel: buttonText, onClick } = this.props;

    return (
      <button className="button" onClick={onClick}>
        {buttonText}
      </button>
    );
  }
}

export default Button;
