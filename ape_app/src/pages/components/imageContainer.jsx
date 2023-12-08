import React from 'react'
import CardImageContainer from './cardImageContainer'
import MuiBox from './muiBox'
import PictureSpan from './pictureSpan'
import TopLeftContainer from './topLeftContainer'
import TopRightContainer from './topRightContainer'
import TopLeftContainer from './topLeftContainer'
import BottomLeftContainer from './bottomLeftContainer'
import BottomRightContainer from './bottomRightContainer'

const ImageContainer = ({children}) => {
  return (
    <div className='imageContainer flex justify-center align-center px-4 py-0 '>
        <CardImageContainer>
            <MuiBox>
                <PictureSpan>
                    {children}
                </PictureSpan>
            </MuiBox>
            <TopLeftContainer/>
            <TopRightContainer/>
            <BottomLeftContainer/>
            <BottomRightContainer/>
        </CardImageContainer>
    </div>
  )
}

export default ImageContainer