import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons'

export default function CRO_SIdebar() {
  const toggleScreen = () => {
    const element = document.getElementById("root")
    const isFullScreen = document.fullscreenElement;
    if (!isFullScreen) {
      element.requestFullscreen()
    }
    else {
      element.exitFullscreen()
    }
  };
  return (
    <div>
      <header class="p-3 text-bg-dark">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end">
            <div class="text-end">
              <button  type="button" class="mx-3" onClick={toggleScreen}><FontAwesomeIcon icon={faExpand} /></button>
              <button type="button" class=" text-white">Logout</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
