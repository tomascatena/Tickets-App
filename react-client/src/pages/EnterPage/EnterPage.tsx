import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { getAgentFromStorage } from '../../helpers/getAgentFromStorage';
import { useHideMenu } from '../../hooks/useHideMenu';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';

type Props = {};

const EnterPage: React.FC<Props> = () => {
  useHideMenu({ shouldHideMenu: true });
  const navigate = useNavigate();

  React.useEffect(() => {
    if (getAgentFromStorage().hasPersistedAgent) {
      navigate('/desk');
    }
  }, []);

  const [agentName, setAgentName] = React.useState('');
  const [deskNumber, setDeskNumber] = React.useState<number | string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    localStorage.setItem('agent', JSON.stringify({
      name: agentName,
      desk: deskNumber,
    }));

    navigate('/desk');
  };

  const handleDeskNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const enteredNumber = parseInt(value, 10);

    if (enteredNumber >= 0 && enteredNumber <= 999) {
      setDeskNumber(enteredNumber);
    } else if (value === '') {
      setDeskNumber('');
    }
  };

  return (
    <Container>
      <Typography variant='h4'>Enter</Typography>

      <Typography>Enter your name and desk number.</Typography>

      <Divider sx={{ mt: 3, mb: 3 }} />

      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
          >
            <TextField
              sx={{ width: '100%' }}
              id="filled-basic"
              label="Agent Name"
              variant="filled"
              placeholder='Please enter your name'
              value={agentName}
              onChange={(event) => setAgentName(event.target.value)}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
          >
            <TextField
              id="filled-basic"
              label="Desk Number"
              variant="filled"
              type='number'
              placeholder='Enter your desk number'
              value={deskNumber}
              onChange={handleDeskNumberChange}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
          >
            <Button
              type='submit'
              variant='contained'
              sx={{ mt: 2 }}
            >
              Enter
              <SendIcon sx={{ marginLeft: 1 }} />
            </Button>
          </Grid>
        </Grid>

      </form>
    </Container>
  );
};

export default EnterPage;
