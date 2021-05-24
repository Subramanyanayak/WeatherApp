import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudRain, faCloud, faSun } from '@fortawesome/free-solid-svg-icons'

const card = (props) => {
    return(
        <div className="card">
            <div className="inner">
                <Card>
                    <CardContent>
                        <Typography variant="body2" className="content" >
                        {(() => {
                                if (props.icon == "Clear") {
                                return (
                                    <FontAwesomeIcon className="fas fa-camera fa-6x sun" icon={faSun}/>
                                )
                                } else if (props.icon == "Clouds") {
                                return (
                                    <FontAwesomeIcon className="fas fa-camera fa-6x cloud" icon={faCloud}/>
                                )
                                } else {
                                return (
                                    <FontAwesomeIcon className="fas fa-camera fa-6x cloud" icon={faCloudRain}/>
                                )
                                }
        })()}
                        <div className="description">
                        Temp:&nbsp;{props.temp}
                        </div>
                        <div>
                        Date:&nbsp;{props.date}
                        </div>
                        <div>
                        time:&nbsp;{props.time}
                        </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default card;