import React from 'react'
import firebase from '../firebase/firebase'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { Container, CircularProgress, TableContainer, Table, TableRow, TableCell, TableBody, TableHead, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment'

const useStyles = makeStyles({
  table: {
    maxWidth: "md",
  },
});

export default function LeaderBoard() {
  const classes = useStyles();

  const [scores, loading, error] = useCollectionDataOnce(
    firebase.db.collection('scores').orderBy('streak').limit(20),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )
  if (loading) {
    return(
      <Container maxWidth="sm" disableGutters>
        <CircularProgress/>
      </Container>
    )
  }
  console.log(scores)

  return (
    <Container maxWidth="sm" disableGutters>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Streak</TableCell>
            <TableCell align="right">Time ago</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scores.map((score) => (
            <TableRow key={score.username}>
              <TableCell component="th" scope="row">
                {score.username}
              </TableCell>
              <TableCell align="right">{score.streak}</TableCell>
              <TableCell align="right">{moment.unix(score.created.seconds).fromNow()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>  
  );
}
