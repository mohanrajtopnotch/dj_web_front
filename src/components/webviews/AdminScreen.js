import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Input } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {
  Paper,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  makeStyles
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
    root: {
      width: "1000px",
    },
    media: {
      height: "200px",
      padding: "10px", // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
export default function AdminScreen() {
  const [list, setList] = React.useState([]);
  const classes = useStyles();
  return (
    <div
      style={{ padding: "10px", margin: "10px", backgroundColor: "#ef5446"  }}
    >
      <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:'100px',marginBottom:'50px'}}>
        <Paper
          style={{ width: "600px", height: "500px", margin: "10px" }}
          elevation={3}
        >   
        <h3 style={{textAlign:'center'}}>Upload Product Image Here !!</h3>
          <Grid container direction="row" justify="center" alignItems="center" style={{padding:'20px'}}>
            <Input type="file" />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center" style={{padding:'20px'}}>
            <TextField
              id="outlined-multiline-static"
              label="Title" 
              rows={1}
              defaultValue="Product Title"
              variant="outlined"
              style={{width:'400px'}}
            />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center" style={{padding:'20px'}}>
            <TextField
              id="outlined-multiline-static"
              label="Descriptions"
              multiline 
              rows={4}
              defaultValue="Product Details"
              variant="outlined"
              style={{width:'400px'}}
            />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center" style={{padding:'20px'}} >
            <button
              onClick={() => {
                let ele = "Mohan";
                setList([...list, ele]);
              }}
            >
              Click to Add Product{" "}
            </button>
          </Grid>
        </Paper>
      </Grid>
      <h1 style={{textAlign:'center',color:'white'}}>Added Items Display Below</h1>
      <Grid container direction="row" justify="center" alignItems="center">
        {list.map((item) => (
          <Paper
          style={{ width: "1000px", height: "420px", margin: "10px" }}
          elevation={3}
        >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                A
              </Avatar>
            }
            title={list.title}
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image={item.imgUrl}
            title="Product"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing style={{height:'20px'}}>
                    <TextField
                        id="outlined-multiline-static"
                        rows={1}
                        defaultValue="Admin : Enter Your Reply to Users Comment"
                        variant="outlined"
                        style={{width:'500px'}}
                    />
                    <button style={{ color:'black',marginLeft:'10px',height:'50px',width:'70px',backgroundColor:'white',border:'1px solid grey'}}>
                        send
                    </button>
                </CardActions>
        </Paper>
        ))}
      </Grid>
    </div>
  );
}
