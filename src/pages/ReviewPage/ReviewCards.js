import React from 'react'
import './ReviewPage.css'
function ReviewCards({ desc,rate,name }) {
  return (
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
                {desc}
                </blockquote>
                <div class="t-bq-quote-paul-meta">
                    <div class="t-bq-quote-paul-meta-info">
                        <div class="t-bq-quote-paul-author"><cite>{name}</cite></div>
                        <div class="t-bq-quote-paul-source"><span className='rating__text'>Rating {rate}</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default ReviewCards