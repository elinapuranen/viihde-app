import React, { useState } from 'react'
import { Button } from 'antd'

const Programs = ({ channelPrograms, viasatPrograms }) => {

  const [channelSwitch, setChannelSwitch] = useState(true)
    
  return(
    <div>
      <h2 className="headline">TV:SSÄ JUURI NYT</h2>
      <div className="buttons">
        <Button onClick={() => setChannelSwitch(true)}>Peruskanavat</Button>
        <Button onClick={() => setChannelSwitch(false)}>Viasat-kanavat</Button>
      </div>
      { channelSwitch === true ? (
        <div className="container">
          {channelPrograms.map(program => 
            <div className="item" key={program.channel.id}>
              <h3>{program.channel.name}</h3>
              {program.programs.length > 0 &&
                  <div>
                    {(program.programs[0].startTime.split(' '))[1]} - {(program.programs[0].endTime.split(' '))[1]} <br/>
                    <div className="name">{program.programs[0].name} <br/> </div>
                    {program.programs[0].shortDescription}
                  </div>
              }
            </div>
          )}
        </div>
      ) : (
        <div className="container">
          {viasatPrograms.map(program => 
            <div className="item" key={program.channel.id}>
              <h3>{program.channel.name}</h3>
              {program.programs.length > 0 &&
              <div>
                {(program.programs[0].startTime.split(' '))[1]} - {(program.programs[0].endTime.split(' '))[1]} <br/>
                <div className="name">{program.programs[0].name} <br/> </div>
                {program.programs[0].shortDescription}
              </div>
              }
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Programs