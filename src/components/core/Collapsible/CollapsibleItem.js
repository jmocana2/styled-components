import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  CollapsibleItemStyle,
  CollapsibleItemHeaderStyle,
  CollapsibleItemBodyStyle
} from './style';

class CollapsibleItem extends PureComponent {
  render() {
    const { header, children, onClick, isActive = false } = this.props;
    return (
      <CollapsibleItemStyle onClick={onClick}>
        <CollapsibleItemHeaderStyle>
          {header}
        </CollapsibleItemHeaderStyle>
        {isActive
          ? <CollapsibleItemBodyStyle>
              {children}
            </CollapsibleItemBodyStyle>
          : ''}
      </CollapsibleItemStyle>
    );
  }
}

CollapsibleItem.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};

CollapsibleItem.defaultProps = {
  children: [],
  header: [],
  isActive: false,
  onClick: () => {}
};

export default CollapsibleItem;
