import React, {useState, useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './Components/NewsCards/NewsCards'

const alanKey = "3d5bc52aec087d97032ff656d7a62dd82e956eca572e1d8b807a3e2338fdd0dc/stage"


const App = () => {

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
            <h1> Sanket Bagad's AI for News Reading</h1>
            <NewsCards articles={newsArticles}/>
        </div>
    )
}

export default App
