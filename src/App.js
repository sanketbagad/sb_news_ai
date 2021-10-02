import React, {useState, useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './Components/NewsCards/NewsCards'
import useStyles from "./styles"
import wordsToNumbers from 'words-to-numbers'

const alanKey = "3d5bc52aec087d97032ff656d7a62dd82e956eca572e1d8b807a3e2338fdd0dc/stage"



const App = () => {

    const classes = useStyles()

   const [newsArticles, setNewsArticles] = useState([])
   const [activeArticles, setActiveArticles] = useState(-1)
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles, number }) => {
                if(command === "newHeadlines") {
                    setNewsArticles(articles)
                    setActiveArticles(-1)
                } else if(command === "highlight") {
                    setActiveArticles((prevActiveArticle) => prevActiveArticle + 1)
                } else if (command === "open") {
                    const parseNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy : true}) : number  
                    const article = articles[parseNumber - 1]

                    if(parseNumber > 20) {
                        alanBtn().playText("Please Try That Again")
                    } else if(article) {
                        window.open(article.url, "_blank")
                    }

                }
            }
        })
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img alt="Sanket Bagad" src="https://image.shutterstock.com/z/stock-vector-letter-sb-logo-vector-download-1509294749.jpg" className={classes.alanLogo} />
            </div>
            <NewsCards articles={newsArticles} activeArticles={activeArticles}/>
        </div>
    )
}

export default App
