import React from 'react';
import { useAppSelector } from '../store';

const useAuth = () => {
  const token = useAppSelector((state) => state.auth.userData?.token || null);
  const userAuth = React.useMemo(
    () => ({
      token: token,
    }),
    [token],
  );

  return userAuth;
};

export default useAuth;
