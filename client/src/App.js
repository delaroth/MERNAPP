import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts'

import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import useStyles from './styles'

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    return (
        <Container maxWidth="lg" className={classes.Container}>
            <AppBar position="static" color="inherit" className={classes.appBar}>
                <Typography className={classes.heading} variant="h2" align="center">Memories <img src="http://bit.ly/memories_image" alt="memories" width="60" /></Typography>
            </AppBar>
            <Grow in className={classes.Grow}>
                <Container className={classes.Container}>
                    <Grid className={classes.Grid} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid className={classes.Grid} item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid className={classes.Grid} item xs={12} sm={4}>
                            <Form />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}

export default App;