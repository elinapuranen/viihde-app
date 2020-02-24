import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [ programs, setPrograms ] = useState([])
    const channelIDs = [37, 38, 39, 40, 41, 42, 44, 47, 169, 183, 191, 6]

    if (programs.length !== 0) {
    const channelsToShow = programs.schedule.filter(schedule =>
        channelIDs.includes(schedule.channel.id)
        )

    console.log(channelsToShow)
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
          :D
        </div>
    )
}

export default App