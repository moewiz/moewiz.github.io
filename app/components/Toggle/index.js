/**
 * Toggle component
 */
import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import Select from './Select';
import ToggleOption from '../ToggleOption';

function Toggle(props) {
  let content = (<option>---</option>);

  // If we have items, render them
  if (props.options) {
    content = map(props.options, (option) => (
      <ToggleOption key={option} value={option} message={props.messages[option]} />
    ));
  }

  return (
    <Select value={props.value} onChange={props.onToggle}>
      {content}
    </Select>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object,
};

export default Toggle;
