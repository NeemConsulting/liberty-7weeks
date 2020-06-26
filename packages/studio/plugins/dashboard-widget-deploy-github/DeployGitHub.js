import React, {useState, useEffect, useRef} from 'react'
import fetch from 'node-fetch'
import styles from './DeployGitHub.css'
function useInterval (callback, delay) {
  const savedCallback = useRef()
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  // Set up the interval.
  useEffect(() => {
    function tick () {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
const DeployGitHub = () => {
  const [deployingStudio, setDeployingStudio] = useState(false)
  const [deployingWeb, setDeployingWeb] = useState(false)
  const [disableStudio, setDisableStudio] = useState(false)
  const [disableWeb, setDisableWeb] = useState(false)
  const deployStudio = () => {
    setDeployingStudio(true)
    setDisableStudio(true)
    fetch(
      'WEBHOOK_URL',
      {
        method: 'POST',
        body: JSON.stringify({event_type: 'studio-build-deploy'}),
        headers: {'Content-Type': 'application/json'}
      }
    )
      .then(res => res.json())
      .then(() => {
        setDeployingStudio(false)
        setTimeout(() => setDisableStudio(true), 180000)
      })
  }
  const deployWeb = () => {
    setDeployingWeb(true)
    setDisableWeb(true)
    fetch(
      'WEBHOOK_URL',
      {
        method: 'POST',
        body: JSON.stringify({event_type: 'web-build-deploy'}),
        headers: {'Content-Type': 'application/json'}
      }
    )
      .then(res => res.json())
      .then(() => {
        setDeployingWeb(false)
        setTimeout(() => setDisableWeb(false), 180000)
      })
  }
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Build & Deploy</h2>
        </header>
        <p>
          NOTE: Because these sites are static builds, they need to be re-deployed to see the
          changes when documents are published.
        </p>
        <hr />
        <ul>
          <li style={{ display: 'flex' }}>
            <figure>
              <img src="../../static/badge-studio.svg" />
              <figcaption>
                <a href="STUDIO_ACTION_URL">
                  View Studio Deployment
                </a>
              </figcaption>
            </figure>
            <button
              className={styles.button}
              type="button"
              disabled={disableStudio}
              onClick={deployStudio}
            >
              {deployingStudio ? 'Deploying...' : 'Deploy'}
            </button>
            <hr />
          </li>

          <li style={{ display: 'flex'}}>
            <figure>
              <img src="../../static/badge.svg" />
              <figcaption>
                <a href="WEB_ACTION_URL">
                  View Web Deployment
                </a>
              </figcaption>
            </figure>
            <button
              className={styles.button}
              type="button"
              onClick={deployWeb}
              disabled={disableWeb}
            >
              {deployingWeb ? 'Deploying...' : 'Deploy'}
            </button>
          </li>
        </ul>
        <div className={styles.link}>
          <a href="https://www.netlify.com/" target="_blank">
            Manage Sites at Netlify
          </a>
        </div>
      </div>
    </>
  )
}
export default DeployGitHub
