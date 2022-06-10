import React from 'react';
import styled from 'styled-components'
import twitterIMG from '../../assets/images/twitter.png'
import redditIMG from '../../assets/images/reddit.png'
import { nFormatter } from '../../utils';

const MediaStreamStyled = styled.div`
  background: ${props => props.twitter ? '#effbff' : '#fff9f3'};
  max-width: 275px;
  width: 100%;
  padding: 30px;
  border-radius: 25px;
  overflow: hidden;
  a {
    display: flex;
    text-decoration: none;
    padding: 0 0 40px;

    .media-image {
      background: white;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-right: 15px;
      box-shadow: 0 2px 40px 15px rgba(0, 0, 0, 0.10);

      span {
        width: 100%;
        height: 100%;
        display: inline-block;
        background: url(${props => props.twitter ? `${twitterIMG}` : `${redditIMG}`}) no-repeat center;
        background-size: 25px 25px;
        
      }
    }

    .media-header {
      color: black;
      &__crypto {
        font-size: 16px;
      }

      &__media-name {
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }
  .media-followers {
    &__followers {
      font-size: 32px;
      font-weight: bold;
    }
    &__caption {
      opacity: 0.6;
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`

const MediaStream = ({cryptoName, crypto, linkToPage, ...props}) => {
    const twitter = props.twitter

    return (
      <MediaStreamStyled {...props}>
          <a href={twitter ? `https://www.twitter.com/${cryptoName}` : linkToPage}>
              <div className={'media-image'}>
                  <span />
              </div>
              <div className="media-header">
                <h2 className={'media-header__crypto'}>{cryptoName}</h2>
                <p className={'media-header__media-name'}>{twitter ? 'Twitter' : 'Reddit'}</p>
              </div>
          </a>
          <div className="media-followers">
              <div className="media-followers__followers">{nFormatter(twitter ? crypto?.twitter_followers : crypto?.reddit_subscribers)}</div>
              <div className="media-followers__caption">followers</div>
          </div>
      </MediaStreamStyled>
    );
};

export default MediaStream;