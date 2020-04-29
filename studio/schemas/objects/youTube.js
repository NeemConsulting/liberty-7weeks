import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import {MdMoveToInbox} from 'react-icons/md'

const Preview = ({value}) => {
  const {url} = value
  const id = getYouTubeId(url)
  return <YouTube videoId={id} />
}

export default {
  name: 'youTube',
  type: 'object',
  title: 'YouTube Video',
  icon: MdMoveToInbox,
  fields: [
    {
      name: 'youTubeCaption',
      type: 'string',
      title: 'Caption'
    },
    {
      name: 'url',
      type: 'url',
      title: 'Paste in your full youTube URL',
      description: 'E.g. https://www.youtube.com/watch?v=V_VrtBUhjLw',
      validation: Rule => Rule.error('please fill provide the video url').required()
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: Preview
  }
}
