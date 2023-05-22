import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'
import Top from './Top' 
import React from 'react'
import { ReactDOM } from 'react'

function App() {
  const [loading , setLoading]=React.useState(true)
  const [data, setData]=React.useState([])

  React.useEffect(() => {
      loadData();
  }, [])

  const loadData = async ()=>{
    await fetch("https://www.coursehubiitg.in/api/codingweek/contributions")
        .then(res => res.json())
        .then(data => setData(data))
    setLoading(false)
  }


  // console.log(data)
  const objects = data;
  console.log(objects)
  objects.sort((first, second) => second.points - first.points);
  console.log(objects)


  return (
    loading?
    <div>hii</div>
    :
    (<div className='mainbody'>
      <header className='header'>
        Leaderboard
      </header>
      <header className='top3bg'>
        <Top className='firstpos' top={false} profile={objects[1]} index="2" />
        <Top className='secondpos' top={true} profile={objects[0]} index="1" />
        <Top className='thirdpos' top={false} profile={objects[2]} index="3"/>
      </header>
      <List profile={objects}/>
    </div>)
  )
}

export default App
