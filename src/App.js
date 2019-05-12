import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// 스타일변수 생성
const styles = theme => ({
  // 1. root 클래스로, id가 root인 것..에 적용
  root : {
    // (1) 너비는 항상 100%로 아무리 창이 커져도 꽉채우기
    width : '100%',
    // (2) 위쪽여백은 단위의 3가중치
    marginTop : theme.spacing.unit * 3,
    // (3) 창이 줄어든다면, X축 방향으로 넘치게
    overflowX : 'auto'
  },
  // 2. root안에 들어가는 table 클래스 같은 경우는 최소너비가 1080px을 만들어, 화면크기가 줄면  가로스크롤바가 생긴다.
  table : {
    minWidth : 1080
  }
})

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
    // 외부에서 만든 style변수의 내용이 자동으로 건네받아지는 것을 {classes} 변수형태로 건네받는다.
    const {classes} = this.props;
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>  
      
          <TableBody>
            { customers.map( c => { return( <Customer key = {c.id}  id = {c.id} image = {c.image}          name = {c.name}
                  birthday = {c.birthday} gender = {c.gender} job = {c.job} /> )  })  }       
          </TableBody>
        </Table>
      </Paper>
      );
  }
}

export default withStyles(styles)(App);

