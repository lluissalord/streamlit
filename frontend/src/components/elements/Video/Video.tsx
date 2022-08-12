import React, { ReactElement, useContext, useEffect, useRef } from "react"
import AppContext from "src/components/core/AppContext"
import { Video as VideoProto } from "src/autogen/proto"
import { buildMediaUri } from "src/lib/UriUtil"

export interface VideoProps {
  width: number
  element: VideoProto
}

export default function Video({ element, width }: VideoProps): ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { getBaseUriParts } = useContext(AppContext)

  /* Element may contain "url" or "data" property. */

  const { type, url } = element

  useEffect(() => {
    const videoNode = videoRef.current

    const onLoadedMetadata: () => void = () => {
      if (videoNode) {
        // setStartTime
        videoNode.currentTime = element.startTime

        /* height of HTML video element needs to be set to avoid scrolling issue: https://github.com/streamlit/streamlit/issues/5069
           initially HTML video has height 0 and when tabs are switched page auto scrolls up
           because of "lack of content" on the page, setting height of HTML video element fixes it
         */
        videoNode.height = videoNode.videoHeight
      }
    }

    if (videoNode) {
      videoNode.addEventListener("loadedmetadata", onLoadedMetadata)
    }

    return () => {
      if (videoNode) {
        videoNode.removeEventListener("loadedmetadata", onLoadedMetadata)
      }
    }
  }, [element])

  const getYoutubeSrc = (url: string): string => {
    const { startTime } = element
    if (startTime) {
      return `${url}?start=${startTime}`
    }
    return url
  }

  /* Is this a YouTube link? If so we need a fancier tag.
       NOTE: This part assumes the URL is already an "embed" link.
    */
  if (type === VideoProto.Type.YOUTUBE_IFRAME) {
    const height = width * 0.75

    return (
      <iframe
        title={url}
        src={getYoutubeSrc(url)}
        width={width}
        height={height}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    )
  }

  return (
    <video
      ref={videoRef}
      controls
      src={buildMediaUri(url, getBaseUriParts())}
      className="stVideo"
      style={{ width }}
    />
  )
}
