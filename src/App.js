import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Programs from './Programs'

const App = () => {
  const [ programs, setPrograms ] = useState([])
  const channelIDs = [37, 38, 39, 40, 41, 42, 44, 47, 169, 183, 181, 6]
  const viasatIDs = [82, 97, 80, 81, 88, 227, 98, 277]

  let channelPrograms = []
  let viasatPrograms = []

  if (programs.length !== 0) {
    channelPrograms = programs.schedule.filter(schedule =>
      channelIDs.includes(schedule.channel.id)
    )
    viasatPrograms = programs.schedule.filter(schedule =>
      viasatIDs.includes(schedule.channel.id)
    )
  }

  useEffect(() => {
    axios
      .get('https://rest-api.elisaviihde.fi/rest/epg/schedule/live')
      .then(response => {
        setPrograms(response.data)
      })
  }, [])

  return (
    <div>
      <Programs channelPrograms={channelPrograms} viasatPrograms={viasatPrograms}/>
    </div>
  )
}

export default App