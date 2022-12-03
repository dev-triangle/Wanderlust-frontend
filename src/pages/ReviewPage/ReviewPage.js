import React, { useEffect } from 'react'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import './ReviewPage.css'
import axios from 'axios'
import baseUrl from '../../utils/Urls'
import {useEffect,useState} from 'react'
function ReviewPage() {


useEffect(()=>{
  axios.get(`${baseUrl}/reviews/`).then((response)=>{
    
  })
})

  return (
    <Mainlayout>
    <section class="t-bq-section" id="paul">
    <div class="t-bq-wrapper t-bq-wrapper-boxed">
        <div class="t-bq-quote t-bq-quote-paul">
            <div class="t-bq-quote-paul-userpic"></div>
            <div class="t-bq-quote-paul-qmark">
                &#10077;
            </div>
            <div class="t-bq-quote-paul-pattern">
            </div>
            <div class="t-bq-quote-paul-base">
                <blockquote class="t-bq-quote-paul-text" cite="Strugatsky Brothers">
Psychologically, almost all of them were slaves - slaves of faith, slaves of their own kind, slaves of passions, slaves of greed. And if, by the will of fate, one of them was born or became a master, he did not know what to do with his freedom. He again hurried to become a slave - a slave of wealth, unnatural excesses, a slave of dissolute friends, a slave of his slaves. 
                </blockquote>
                <div class="t-bq-quote-paul-meta">
                    <div class="t-bq-quote-paul-meta-info">
                        <div class="t-bq-quote-paul-author"><cite>Strugatsky Brothers</cite></div>
                        <div class="t-bq-quote-paul-source"><span>Hard to Be a God</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </Mainlayout>
  )
}

export default ReviewPage