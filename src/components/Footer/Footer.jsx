import React from 'react'

import { FooterCon, FooterList } from './Styled'

function Footer() {
  return (
    <FooterCon>
        <p>Questions? Call 1-800-012-298</p>
        <FooterList>
            <ul>
                <li><a href='#'>FAQ</a></li>
                <li><a href='#'>Media Center</a></li>
                <li><a href='#'>Redeem Gift Cards</a></li>
                <li><a href='#'>Terms of Use</a></li>
                <li><a href='#'>Corporate Information</a></li>
                <li><a href='#'>Legal Notices</a></li>
            </ul>
            <ul>
                <li><a href='#'>Help Center</a></li>
                <li><a href='#'>Investor Relations</a></li>
                <li><a href='#'>Buy Gift Cards</a></li>
                <li><a href='#'>Privacy</a></li>
                <li><a href='#'>Contact Us</a></li>
                <li><a href='#'>Only on Netflix</a></li>
            </ul>
            <ul>
                <li><a href='#'>Account</a></li>
                <li><a href='#'>Jobs</a></li>
                <li><a href='#'>Ways to WatchBuy Gift Cards</a></li>
                <li><a href='#'>Cookie Preferences</a></li>
                <li><a href='#'>Speed Test</a></li>
            </ul>
        </FooterList>
        <div style={{padding: '12px 0px'}}>
            <a style={{padding: '6px 36px', border: '1px solid rgba(255,255,255,0.7)', borderRadius: '5px', display: 'inline-block', color: 'rgba(255,255,255,0.7)', textDecoration: 'none'}} href='#' >English</a>
        </div>
        <p>Netflix Thailand</p>
    </FooterCon>
  )
}

export default Footer