import React from 'react'
import NewsCard from './NewsCard/NewsCard'
import { Grid, Grow, Typography } from '@material-ui/core'
import useStyles from "./styles"

const NewsCards = ({ articles }) => {
    const classes = useStyles()
    return (
        <Grow in>
            <Typography>SB</Typography>
            <Grid className={classes.container} container alignItems="stretch">
            {articles.map((article, i) => {
                <Grid item xs={12} sm={6} md={6} lg={3} style={{display: 'flex'}}>
                <NewsCard article={article} i={i} />
                </Grid>
            })}
            </Grid>
        </Grow>
    )
}

export default NewsCards
