import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapperTabs, StyledUlTabs } from './style';
import Tab from './Tab';

const Tabs = ({ activeIndex, children, vertical }) => (
  <StyledWrapperTabs vertical={vertical}>
    <StyledUlTabs>
      {children}
    </StyledUlTabs>
    {React.Children.toArray(children)[activeIndex].props.children}
  </StyledWrapperTabs>
);

Tabs.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool
};

Tabs.defaultProps = {
  activeIndex: 0,
  children: []
};

// Tab componente completo por defecto
// Tabs interior o item del componente que entre corchetes sirve para exportar cualquier otro elemento
export { Tab, Tabs };
