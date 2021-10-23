import React from 'react';

const User = (props) => {
 const {familiar}=props;
 //1.element variable
 let greeting;
 if(familiar){
  greeting=<h4>How are you??</h4>
 }
 else{
  greeting=<h4>Doný know</h4>
 }

 return (
  <div>
   <div>
    <h2>Greetings</h2>
    <p>{greeting}</p>
   </div>
   {/* //2.ternary operator */}
   <div>
    <h2>Food</h2>
    {familiar ? <p>Biryani</p>:<p>taka nai</p>}
   </div>
   <div>
    <h2> a lot of things </h2>
    {
     familiar?<div>
      <h3>My title</h3>
      <p>This is para</p>
     </div>
     :
     <h1>Hobena</h1>
    }
   </div>
   <div>
    <h2>connection</h2>
   </div>
  </div>
 );
};

export default User;