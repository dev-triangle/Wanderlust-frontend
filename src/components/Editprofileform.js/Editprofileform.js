import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Editprofileform() {

   

   

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
            value={name}
           onChange = { (e) => setName(e.target.value)}
            
        />
    </Form.Group><br/>
    <Form.Group>
       <h5>Profile photo</h5>
        <Form.Control
            type="file"
            placeholder="pic"
            name="name"
            value={dob}
           onChange = { (e) => setDob(e.target.value)}
            
        />
    </Form.Group><br/>
    
    <Form.Group>
       <h5>Linkedin</h5>
        <Form.Control
            type="text"
            placeholder="Linkedin"
            name="name"
            value={linkedin}
           onChange = { (e) => setLinkedin(e.target.value)}
        
        />
    </Form.Group><br/>
    <Form.Group>
       <h5>Github</h5>
        <Form.Control
            type="text"
            placeholder="Github"
            name="name"
            value={github}
           onChange = { (e) => setGithub(e.target.value)}
            
        />
    </Form.Group><br/>
    <Form.Group>
       <h5>Email</h5>
        <Form.Control
            type="text"
            placeholder="Name *"
            name="name"
            value={email}
           onChange = { (e) => setEmail(e.target.value)}
            
        />
    </Form.Group><br/>
    <Form.Group>
    <h5>Skills</h5>
        <Form.Control
            type="text"
            placeholder="skills *"
            name="skills"
           value={skills}
           onChange = { (e) => setSkills(e.target.value)}
            
        />
    </Form.Group><br/>
    
   
   
    <Form.Group>
    <h5>Experience</h5>
        <Form.Control
            as="textarea"
            type="text"
            rows={3}
            placeholder="Experience"
            name="Experience"
           value={experience}
            onChange = { (e) => setExperience(e.target.value)}
        />
    </Form.Group><br/>
    <Form.Group>
    <h5>Projects</h5>
    <Form.Control
        as="textarea"
        type="text"
        rows={3}
        placeholder="Projects"
        name="projects"
      
        value={project}
        onChange = { (e) => setProject(e.target.value)}
    />
</Form.Group><br/>
<Form.Group>
<h5>Description</h5>
<Form.Control
    type="text"
    placeholder="Description"
    name="Description"
    value={description}
    onChange = { (e) => setDescription(e.target.value)}
    
/>
</Form.Group><br/>

    <Button variant="success" type="submit" block>
        Save Changes
    </Button>
</Form>

  );
}

export default Editprofileform;