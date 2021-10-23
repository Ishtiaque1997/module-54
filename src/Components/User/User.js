import React from 'react';
import Player from '../Player/Player';
import Teacher from '../Teacher/Teacher';

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
    <h2>Profession</h2>
    {
    familiar?<Teacher></Teacher>:<Player></Player>

    }
   </div>
   <div>
    <h2>connection</h2>
    {
     familiar && <div>
      <p>Asho khelbo</p>
     </div>
    }
    {
     familiar && <Player></Player>
    }
   </div>
   <div>
    <h2>Share drink</h2>
    {
     familiar || <p>Drink khabao</p>
    }
   </div>
  </div>
 );
};

export default User;