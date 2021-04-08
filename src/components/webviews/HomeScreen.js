import React , { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import {
  Paper,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  makeStyles,
  TextField,
} from "@material-ui/core";
import Header from "../material_ui/Header"
import { red } from "@material-ui/core/colors";
import  { readProduct } from '../axios/productService'
import {API_URL} from "../constants"
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

export default function HomeScreen() {
  const classes = useStyles();
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [listService ,setListService ] = useState([])
  
  useEffect(() => {
    let getProduct = async () => {
      const {result} = await readProduct();
      console.log(result)
      setListService(result);
    };
    getProduct()
  }, []);
  
  return (
    <>
    <Header/>
    <div
      style={{ padding: "10px", margin: "10px", backgroundColor: "#ef5446" }}
    >
      <Grid container direction="row" justify="center" alignItems="center">
        {listService.map((item) => (
          
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
              title={item.title}
              subheader={item.createdDate}
            />
            <div>{item.productImage.split('/')[0]}</div>
            <CardMedia
              className={classes.media}
              image={`${API_URL}+${item.productImage.split('/')[1]}`}
              title="Product"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.descriptions}
              </Typography>
            </CardContent>
            <CardActions disableSpacing style={{ height: "20px" }}>
              <Rating
                name="hover-feedback"
                value={item.rating}
                precision={0.5}
                style={{ margin: "30px" }}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              <TextField
                id="outlined-multiline-static"
                rows={1}
                defaultValue="Enter Your Comment"
                variant="outlined"
                style={{ width: "500px" }}
              />
              <button
                style={{
                  color: "black",
                  marginLeft: "10px",
                  height: "50px",
                  width: "70px",
                  backgroundColor: "white",
                  border: "1px solid grey",
                }}
              >
                send
              </button>
              
            </CardActions>
          </Paper>
        ))}
      </Grid>
    </div>
    </>
  );
}
