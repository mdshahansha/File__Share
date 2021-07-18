import React,{useState} from 'react';

//custom hooks
function useFormInputs(initalValue){
  const [value,setValue]=useState('');

  function handleChange(e){
    setValue(e.target.value);
  }
  return {
    value,
    onChnage:handleChange,
  }
};
 
 
function LoginFrom(){
  const email=useFormInputs('');
  const password=useFromInputs('');

}
  return (
    <form>
      <div>Email</div>
      <div>
      <input type="text" {...email} />
        {/* <input type="text" value={email.value} onChange={email.onChange} /> */}
      </div>
      <br/>
      <div>Password</div>
      <div>
        <input 
        type="password" {...password}
        // value={password.value}
        // onChange={password.onChange}
        />
      </div>
      <p>
        <strong>
          <em>Email:</em>
        </strong>
        {email.value}
        <strong>
          <em>Password:</em>
        </strong>{' '}
        {password.value}
      </p>
    </form>
  );
   
function SignUpFrom(){
  const email=useFormInputs('');
  const password=useFromInputs('');
  const confirmPassword=useFormInputs('');
 return(
    
  <form>
  <div>Email</div>
  <div>
  <input type="text" {...email} />
    {/* <input type="text" value={email.value} onChange={email.onChange} /> */}
  </div>
  <br/>
  <div>Password</div>
  <div>
    <input 
    type="password"
    { ...password}
    />
    <input type="password" {...confirmPassword}
    />
  </div>
  <p>
    <strong>
      <em>Email:</em>
    </strong>
    {email.value}
    <strong>
      <em>Password:</em>
    </strong>{' '}
    {password.value}
  </p>
  <strong>
      <em>Confirm password:</em>
    </strong>
</form>
  )

} 



function App(props){
  return(
    <div className="App" style={{padding:10}}>
     <h2>Login</h2>

     <LoginForm/>
      <hr/>
    <h3>SignUp</h3>
    <SignupForm/>
    </div>
  
  );
}

export default App;
//  function App() {
//   const [email,setEmail] =useState(' ');
//   // const email=emailState[0];
//   // const setEmail=emailState[1];

//   const nameState=useState(' ');
//   const name=nameState[0];
//   const setName=nameState[1];
 
//   //  const emailState=useState('a@a.com');
//   //  const email=emailState[0];
//   //  const setEmail=emailState[1];
  
//    function handleChange(e){
//      setEmail(e.target.value);
//    }
//    function handleChangeName(e){
//     setName(e.target.value);
    // <div>
    //     <div className="App" style={{padding:10}}>
    //      <input value={email}
    //      onChange={ handleChange}
    //      />

    //      <input value={name}
    //      onChange={ handleChangeName}
    //      />
    //      <p>Email: {email}</p>

    //      <p>Name: {name}</p>
    //     </div>
      
    // </div>
//   )
// }
// export default App;

 