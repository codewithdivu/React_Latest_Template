import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { paths } from '../../routes/path';

export default function Page404() {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>

      <Container component="main">
        <Stack
          sx={{
            py: 12,
            m: 'auto',
            maxWidth: 400,
            minHeight: '100vh',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <Box>
            <div>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                Sorry, Page Not Found!
              </Typography>
            </div>
            <div>
              <Typography sx={{ color: 'text.secondary' }}>
                Sorry, we couldn’t find the page you’re looking
                <br />
                for. Perhaps you’ve mistyped the URL? Be sure
                <br />
                to check your spelling.
              </Typography>
            </div>

            <div>
              <Box width="100%" height="100%" sx={{ height: 260, my: { xs: 5, sm: 10 } }}>
                <img src="/assets/illustrations/illu.svg" />
                <img
                  src="/assets/illustrations/404_not_found.svg"
                  height="300"
                  style={{
                    height: 300,
                    position: 'absolute',
                    top: '54%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </Box>
            </div>

            <Button
              component={Link}
              href={paths.dashboard.root}
              size="large"
              variant="contained"
              sx={{ marginTop: '4rem' }}
            >
              Go to Home
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
