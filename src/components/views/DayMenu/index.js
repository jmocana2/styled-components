import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Label from './Label';
import { Tabs } from '../../core/Tabs';
import {
  StyledTab,
  StyledWrapperListaMenu,
  StyledListaMenu,
  StyledWrapperMenu,
  StyledDate
} from './style';

class DayMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.onClick = this.onClick.bind(this);
  }

  onClick(activeIndex) {
    this.setState({ activeIndex });
  }

  getLabel(item, i) {
    return (
      <Label active={this.isActive(i)} icon={item.icon}>
        {item.text}
      </Label>
    );
  }

  isActive(index) {
    return index === this.state.activeIndex;
  }

  render() {
    const { date, source, special, img, title, subtitle } = this.props;
    const { activeIndex } = this.state;
    return (
      <StyledWrapperMenu>
        <StyledDate date={date} special={special} />
        {special && <Image img={img} subtitle={subtitle} title={title} />}
        <Tabs activeIndex={activeIndex} vertical>
          {source.map((item, i) => (
            <StyledTab
              active={this.isActive(i)}
              key={item.id}
              label={this.getLabel(item, i)}
              onClick={() => this.onClick(i)}
              vertical
            >
              <StyledWrapperListaMenu>
                <StyledListaMenu>
                  {item.content.map(content => (
                    <li key={content.id}>
                      {content.text}
                    </li>
                  ))}
                </StyledListaMenu>
              </StyledWrapperListaMenu>
            </StyledTab>
          ))}
        </Tabs>
      </StyledWrapperMenu>
    );
  }
}

DayMenu.propTypes = {
  date: PropTypes.number,
  img: PropTypes.string,
  source: PropTypes.arrayOf(PropTypes.object).isRequired,
  special: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

DayMenu.defaultProps = {
  date: 0,
  img: '',
  special: false,
  subtitle: '',
  title: ''
};

export default DayMenu;
