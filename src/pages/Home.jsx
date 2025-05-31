import { useEffect } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

import { Contact } from './Contact.jsx';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const fetchContacts = async () = {
	try {
		const response = await fetch(https://playground.4geeks.com/contact/agendas/dwane_dunn/contacts);
		const resultData = await response.json();
		dispatch({});
	} catch (error) {
		throw new Error(error);
	}
  }

  useEffect(()=> {
	fetchContacts()
  },[])


  return (
    <div className="text-center mt-5">
      <h1>Contact List</h1>
      <Contact />
    </div>
  );
};
