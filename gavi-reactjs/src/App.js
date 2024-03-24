import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeDark from './pages/dark/Home';
import Blogs from './pages/dark/blogs';
import Works from './pages/dark/works';
import SingleProject from './pages/dark/single-project';
import HomeLight from './pages/light/Home';
import LightBlogs from './pages/light/blogs';
import LightSingleBlog from './pages/light/single-blog';
import LightSingleProject from './pages/light/single-project';
import LightWorks from './pages/light/works';
import SingleBlog from './pages/dark/single-blog';
import { useEffect, useState } from 'react';
import Error from './Error';
import React from 'react';
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [errorr,setErrorr] = useState(true)
  // useEffect(() => {
  //   let data1 = fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae").then(res => { return res.json() }).then(re => {setData(re)
  // setLoading(false)
  // })
  // }, [])
  


useEffect(()=>{fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(dataa => {
  // Handle successful API response
  setData(dataa)
  console.log("api fetch successfully");
})
.catch(error => {
  // Handle errors
 
  console.error('Error fetching data:', error);
  setErrorr(false)
});},[])


  return (<>

{errorr?<Router>
     <Routes>
       <Route path="/" element={<Home data={data}/>} />
       <Route path="/dark" element={<HomeDark  data={data}/>} />
       <Route path="/blogs" element={<Blogs />} />
       <Route path="/works" element={<Works />} />
       <Route path="/single-project" element={<SingleProject />} />
       <Route path="/single-blog" element={<SingleBlog />} />
       <Route path="/light-m" element={<HomeLight data={data} />} />
       <Route path="/l-blogs" element={<LightBlogs />} />
       <Route path="/l-single-blog" element={<LightSingleBlog />} />
       <Route path="/l-single-project" element={<LightSingleProject />} />
       <Route path="/l-works" element={<LightWorks />} />
     </Routes>
   </Router>:<Error/>}

     </>
 
  );
}

export default App;
