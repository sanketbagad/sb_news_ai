import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import useStyles from "./styles"
import classNames from 'classnames'
const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticles}) => {

    const classes = useStyles()
    return (
        <Card className={classNames(classes.card, activeArticles === i && classes.activeCard) } >
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage} />
                <div className={classes.details} >
                    <Typography variant="body2" color="textSecondary" component="h2">
                        {(new Date(publishedAt)).toDateString()}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="h2">
                        {source.name}
                    </Typography>
                </div >
                <Typography className={classes.title} gutterBottom variant="h5">
                    {title}
                </Typography>

                <CardContent>
                   
                   <Typography variant="body2" component="p" color="textSecondary">
                       {description}
                   </Typography> 

                </CardContent>
            </CardActionArea>

            <CardActions className={classes.cardActions} >
                <Button size="small" color="primary">
                    Learn More
                </Button>
                <Typography variant="h5" color="textSecondary">
                        {i+ 1}
                </Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard

// 33a2cbe7ebe249b69f3582035859217c
