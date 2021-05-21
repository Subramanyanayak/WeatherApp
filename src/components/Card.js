import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const card = (props) => {
    return(
        <div className="card">
            <div className="inner">
                <Card>
                    <CardContent>
                        <Typography variant="body2">
                        <div>
                        Temp:
                        {props.temp}
                        </div>
                        <div>
                        Date:
                        {props.date}
                        </div>
                        <div>
                        time: 
                        {props.time}
                        </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default card;