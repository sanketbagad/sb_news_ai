import React, {useState, useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './Components/NewsCards/NewsCards'
import useStyles from "./styles"

const alanKey = "3d5bc52aec087d97032ff656d7a62dd82e956eca572e1d8b807a3e2338fdd0dc/stage"



const App = () => {

    const classes = useStyles()

   const [newsArticles, setNewsArticles] = useState([])

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles }) => {
                if(command === "newHeadlines") {
                    setNewsArticles(articles)
                }
            }
        })
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img alt="Sanket Bagad" src="https://image.shutterstock.com/z/stock-vector-letter-sb-logo-vector-download-1509294749.jpg" className={classes.alanLogo} />
            </div>
            <NewsCards articles={newsArticles}/>
            {console.log("fuck you!!")}
        </div>
    )
}

export default App
