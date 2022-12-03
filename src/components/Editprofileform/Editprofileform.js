import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../utils/axios'
import baseUrl from '../../utils/Urls';
import {useState} from 'react'

function Editprofileform() {

    const[actualname,setActualname]=useState('')
  const[phno,setPhno]=useState('')
  const[userimg,setUserimg]=useState()

   

    const handleSubmit=(e)=>{
        axiosInstance.post(`${baseUrl}/user-detail/`,{
            
          "actual_name":actualname,
          "phno":phno,
          "user_image":userimg,
          "user_foreign":localStorage.getItem('userid')
          
        })

        e.preventDefault();
    
}

    
  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group>
       <h5>Name</h5>
        <Form.Control
            type="text"
            placeholder="Name *"
            name="name"
            value={actualname}
           onChange = { (e) => setActualname(e.target.value)}
            
        />
    </Form.Group><br/>
    <Form.Group>
       <h5>Profile photo</h5>
        <Form.Control
            type="file"
            placeholder="pic"
            name="name"
            value={userimg}
           onChange = { (e) => setUserimg(e.target.value)}
            
        />
    </Form.Group><br/>
    
    <Form.Group>
       <h5>Linkedin</h5>
        <Form.Control
            type="text"
            placeholder="phone number"
            name="name"
            value={phno}
           onChange = { (e) => setPhno(e.target.value)}
        
        />
    </Form.Group><br/>
    

    <Button onClick={handleSubmit} variant="success" type="submit" block>
        Save Changes
    </Button>
</Form>

  );
}

export default Editprofileform;