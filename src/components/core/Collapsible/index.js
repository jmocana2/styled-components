import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CollapsibleItem from './CollapsibleItem';
import { CollapsibleStyle } from './style';

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { activeElement: null };
  }

  onClick(id) {
    this.setState(state => ({
      activeElement: state.activeElement !== id && id
    }));
  }

  render() {
    return (
      <CollapsibleStyle onClick={() => {}}>
        {React.Children.map(this.props.children, child => {
          const { props } = child;
          return (
            <div onClick={() => this.onClick(props.id)}>
              {React.cloneElement(child, {
                isActive: this.state.activeElement === props.id
              })}
            </div>
          );
        })}
      </CollapsibleStyle>
    );
  }
}

Collapsible.propTypes = {
  children: PropTypes.node.isRequired
};

export { CollapsibleItem };
export default Collapsible;
