import React from 'react';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Contacts from './Contacts/Contacts';
import DisplayContacts from './Contacts/DisplayContacts';
import CreateContacts from './Contacts/CreateContacts';
import DisplayBlogs from './Blogs/DisplayBlogs';
import CreateBlogs from './Blogs/CreateBlogs';
import Blogs from './Blogs/Blogs';
import Layout from './Components/layout/Layout';





const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} >
          <Route path="displayContacts" element={<DisplayContacts />} />
          <Route path="createContacts" element={<CreateContacts />} />
        </Route>
        <Route exact path="/blogs" element={<Blogs />} >
          <Route path="displayBlogs" element={<DisplayBlogs />} />
          <Route path="createBlogs" element={<CreateBlogs />} />
        </Route>
      </Routes >
    </Layout>
  );
}

export default App;
