import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './app/routes';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './views/Login';
import { Home } from './views/Home';
import { Map } from './components/Map';
import { Data } from './views/Data';
import { Secondary } from './views/Secondary';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import Spinner from './components/spinner';
import { Background } from './components/Background';

export const App = () => {
  const sessionKey = useSelector((state: RootState) => state.global.sessionKey)
  const loading = useSelector((state: RootState) => state.global.loading)

  return (
    <>
      <Routes>
        <Route index element={<Navigate to={ROUTES.home} />} />
        {!loading && <Route path={ROUTES.login} element={<Login />} />}
        <Route path={ROUTES.home} element={
          <PrivateRoute sessionKey={sessionKey}>
            <Home />
          </PrivateRoute>
        } />
        <Route path={ROUTES.map} element={<PrivateRoute sessionKey={sessionKey}><Map /></PrivateRoute>}>
          <Route path={ROUTES.secondary} element={<Secondary sessionKey={sessionKey} />} />
          <Route path={ROUTES.data} element={<Data sessionKey={sessionKey} />} />
        </Route>
      </Routes>

      <Background />
      <Spinner loading={loading} />
    </>
  );
};
