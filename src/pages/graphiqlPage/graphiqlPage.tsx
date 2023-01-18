import React, { useEffect, useMemo, useState } from 'react'

import GraphiQL from 'graphiql'
import { createGraphiQLFetcher } from '@graphiql/toolkit'
import 'graphiql/graphiql.min.css'
import { Container } from '@mui/material'
import { useMsal } from '@azure/msal-react'

interface GraphiqlPageProps {
  apolloRouterUrl: string
  aadAppClientId: string
}

export const GraphiqlPage: React.FC<GraphiqlPageProps> = ({ apolloRouterUrl, aadAppClientId }) => {
  const { accounts, instance } = useMsal()
  const [token, setToken] = useState('')
  const fetcherNus = useMemo(
    () =>
      createGraphiQLFetcher({
        url: apolloRouterUrl,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }),
    [token],
  )
  useEffect(() => {
    instance
      .acquireTokenSilent({
        account: accounts[0],
        scopes: [`api://${aadAppClientId}/user_impersonation`],
      })
      .then((token) => {
        setToken(token.accessToken)
      })
  }, [accounts, instance])

  return (
    <Container disableGutters={true} id={'lca-graphiql-page-container'} maxWidth={false} sx={{ height: '100vh' }}>
      <GraphiQL docExplorerOpen fetcher={fetcherNus} editorTheme={'dracula'} />
    </Container>
  )
}
