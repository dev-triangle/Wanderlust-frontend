import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Editprofileform({actualname,setActualname,phno,setPhno,userimg,setUserimg}) {

   

   

    const handleSubmit=(e)=>{
        
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