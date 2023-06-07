import PropTypes from 'prop-types';

const Screen = ({ total, operation, next }) => (
  <div className="screen">
    {total}
    {operation}
    {next}
  </div>
);

Screen.propTypes = {
  total: PropTypes.number,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Screen.defaultProps = {
  total: '',
  operation: null,
  next: null,
};

export default Screen;
