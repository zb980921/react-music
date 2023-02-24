import { useRouteError } from 'react-router-dom'

interface RouteError {
  status: number
  statusText: string
  internal: boolean
  data: string
  error: Error
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status} - {error.statusText}</i>
      </p>
    </div>
  )
}
