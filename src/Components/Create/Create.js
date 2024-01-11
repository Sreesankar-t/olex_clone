import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const history =useHistory()
  const date =new Date()
  const {firebase}= useContext(FirebaseContext)
  const {user}= useContext(AuthContext)
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState('')
  const [error,setError]=useState('')

  const handleSubmit = ()=>{
    if(user){
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({
          name,
          price,
          category,
          url,
          userId:user.uid,
          createAt:date.toDateString()
        })
        history.push('/')
        })
      })

    }else{
      setError("Oops! It looks like you're not logged in yet.Please log in to access this page.")
   setTimeout(() => {
      
      history.push('/login')
   },4000);
    }
    
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <p style={{color:'red',fontWeight:'bolder' }}>{error}</p>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input"
             type="number"
               id="fname"
               value={price}
               onChange={(e)=>setPrice(e.target.value)}
                name="Price"/>
            <br />
         
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image  ?  URL.createObjectURL(image): ""}></img>
         
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
