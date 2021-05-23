import React, { PropTypes } from 'react';
import { RBGlyphicon } from 'react-bootstrap';

const Glyphicon = props => (
  <RBGlyphicon
    id={props.id}
    bsClass={props.clClass}
    glyph={props.glyph}
  />
);

Glyphicon.defaultProps = {
  id: undefined,
  clClass: 'glyphicon',
  glyph: undefined,
};

Glyphicon.propTypes = {
  id: PropTypes.string,
  clClass: PropTypes.string,
  glyph: PropTypes.string.isRequired,
};

export default Glyphicon;