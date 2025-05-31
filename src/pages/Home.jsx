import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

import { Contact } from './Contact.jsx';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="text-center mt-5">
      <h1>Contact List</h1>
      <Contact />
    </div>
  );
};
