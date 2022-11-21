import React, {useState} from 'react';
 
function App() {
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
 

    const handleChange =(e)=>{
      setName(e.target.value);
    }
    
    const handleAgeChange =(e)=>{
      setAge(e.target.value);
    }
    
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
      
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
     
    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }
    
    const handleSubmit=(e)=>{
      if(password!==confPassword)
      {
        // if 'password' and 'confirm password'
        // does not match.
        alert("password Not Match");
      }
      else{
        // display alert box with user
        // 'name' and 'email' details .
        alert('A form was submitted with Name :"' + name +
        '" ,Age :"'+age +'" and Email :"' + email + '"');
      }
      e.preventDefault();
 
    }
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
     {/*when user submit the form , handleSubmit()
        function will be called .*/}
    <h1> Sign-up Form </h1>
        <label >
          Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e) => {handleChange(e)}} /><br/>
          { /*when user write in name input box , handleChange()
              function will be called. */}
        <label >
          Age:
        </label><br/>
        <input type="text" value={age} required onChange={(e)=> {handleAgeChange(e)}} /><br/>
            { /*when user write in age input box , handleAgeChange()
               function will be called. */}
        <label>
          Email:
        </label><br/>
        <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br/>
          {/* when user write in email input box , handleEmailChange()
              function will be called.*/}
        <label>
          Password:
        </label><br/>
        <input type="password" value={password} required onChange={(e)=> {handlePasswordChange(e)}} /><br/>
              {/* when user write in password input box ,
                  handlePasswordChange() function will be called.*/}
        <label>
          Confirm Password:
        </label><br/>
        <input type="password" value={confPassword} required onChange={(e)=> {handleConfPasswordChange(e)}} /><br/>
                {/* when user write in confirm password  input box ,
                    handleConfPasswordChange() function will be called.*/}
        <input type="submit" value="Submit"/>
      </form>
    </header>
    </div>
  );
}
 
export default App;