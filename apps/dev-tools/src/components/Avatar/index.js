import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';
import { shortenAddress } from '../../utils/helpers';
import Text from '../Text';
import Circle from '../Circle';

const Avatar = props => {
  const {
    size,
    name,
    address,
    nameTextScale,
    nameTextColor,
    nameTextWeight,
    addressTextScale,
    addressTextColor,
    border,
    img,
    hash,
    className,
    src,
    onClick,
    link
  } = props;

  const renderName = () => {
    if (!name) {
      return null;
    }

    return (
      <div className={styles.nameText}>
        <Text
          typeScale={nameTextScale}
          weight={nameTextWeight}
          color={nameTextColor}
        >
          {name}
        </Text>
      </div>
    );
  };

  const renderAddress = () => {
    if (!address) {
      return null;
    }

    return (
      <div className={link ? styles.addressText: ''}>
        <Text
          typeScale={addressTextScale}
          color={addressTextColor}
          src={src ? src : '/profile/' + address}
          onClick={onClick}
          link={link}
        >
          {shortenAddress(address)}
        </Text>
      </div>
    );
  };

  return (
    <div className={`${styles.avatar} ${className}`}>
      <div>
        <Circle
          border={border}
          size={size}
          color="white"
          input={img ? img : hash}
          type={img ? 'img' : 'blocky'}
        />
      </div>
      {name || address ? (
        <div className={styles.textWrapper}>
          {renderName()}
          {renderAddress()}
        </div>
      ) : null}
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  img: PropTypes.string,
  border: PropTypes.bool,
  name: PropTypes.string,
  address: PropTypes.string,
  className: PropTypes.string,
  hash: PropTypes.string,
  nameTextScale: PropTypes.string,
  nameTextColor: PropTypes.string,
  nameTextWeight: PropTypes.string,
  addressTextScale: PropTypes.string,
  addressTextColor: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.bool
};

Avatar.defaultProps = {
  link: true,
  size: 'small',
  border: false,
  nameTextScale: 'h3',
  nameTextWeight: 'fontWeight-bold',
  addressTextScale: 'Body'
};

export default Avatar;
