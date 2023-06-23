import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getGreeting } from '../redux/greetingsSlice';

const Greeting = ({ csrfToken }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting(csrfToken));
  }, [dispatch, csrfToken]);

  const greeting = useSelector((state) => state?.greetings.greeting);

  const textStyles = {
    fontSize: '40px',
    fontWeight: '600',
  };

  return (
    <>
      <h1 style={textStyles}>{greeting}</h1>
    </>
  );
};

Greeting.propTypes = {
  csrfToken: PropTypes.string.isRequired,
};

export default Greeting;
