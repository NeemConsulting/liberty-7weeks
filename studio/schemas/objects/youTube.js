import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import {FaYoutube} from 'react-icons/fa'

const Preview = ({value}) => {
  const {url} = value
  const id = getYouTubeId(url)
  return <YouTube videoId={id} />
}

export default {
  name: 'youTube',
  type: 'object',
  icon: FaYoutube,
  title: 'YouTube Video',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Paste in your full youTube URL',
      description: 'E.g. https://www.youtube.com/watch?v=V_VrtBUhjLw',
      validation: Rule => Rule.error('please fill provide the video url').required()
    },
    {
      name: 'youTubeCaption',
      type: 'string',
      title: 'Caption'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: Preview
  }
}
