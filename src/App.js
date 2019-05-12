import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers= [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '조재성',
  'birthday' : '871218',
  'gender' : '남자',
  'job' : '대학생'
}, {
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '김석영',
  'birthday' : '880122',
  'gender' : '여자',
  'job' : '대학생'
}, {
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/4',
  'name' : '조재경',
  'birthday' : '871218',
  'gender' : '남자',
  'job' : '직장인'
}, 
]

class App extends Component {
  render(){
    return (
      <div>
        {
        customers.map( c => { 
          return(
            <Customer
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />
          )
        })  
      }       
      </div>
        
      );
  }

}

export default App;
