import React from "react";
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
const list = [
  {
    id: "1",
    title: "Test Json",
    imgUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkinsta.com%2Fknowledgebase%2Fwordpress-change-url%2F&psig=AOvVaw31GgGQiTwaxErE_1U_rxsR&ust=1617883156809000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiXk8qK7O8CFQAAAAAdAAAAABAD",
    description:
      " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    createdDate: "April 7",
    rating: 2,
  },
  {
    id: "2",
    title: "Test Json",
    imgUrl:
      "https://staging.perlubantuan.com/wp-content/uploads/2020/03/change-wordpress-url-1.png",
    description:
      " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    createdDate: "April 7",
    rating: 3,
  },
  {
    id: "3",
    title: "Test Json",
    imgUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsen842cova.blogspot.com%2F2015%2F03%2Furl-anatomy.html&psig=AOvVaw31GgGQiTwaxErE_1U_rxsR&ust=1617883156809000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiXk8qK7O8CFQAAAAAdAAAAABAO",
    description:
      " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    createdDate: "April 7",
    rating: 5,
  },
  {
    id: "4",
    title: "Test Json",
    imgUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkinsta.com%2Fknowledgebase%2Fwordpress-change-url%2F&psig=AOvVaw31GgGQiTwaxErE_1U_rxsR&ust=1617883156809000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiXk8qK7O8CFQAAAAAdAAAAABAD",
    description:
      " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    createdDate: "April 7",
    rating: 2.5,
  },
  {
    id: "5",
    title: "Test Json",
    imgUrl:
      "https://staging.perlubantuan.com/wp-content/uploads/2020/03/change-wordpress-url-1.png",
    description:
      " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    createdDate: "April 7",
    rating: 5,
  },
  {
    id: "6",
    title: "Test Json",
    imgUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsen842cova.blogspot.com%2F2015%2F03%2Furl-anatomy.html&psig=AOvVaw31GgGQiTwaxErE_1U_rxsR&ust=1617883156809000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiXk8qK7O8CFQAAAAAdAAAAABAO",
    description:
      " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    createdDate: "April 7",
    rating: 2.5,
  },
  {
    id: "7",
    title: "Test Json",
    imgUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkinsta.com%2Fknowledgebase%2Fwordpress-change-url%2F&psig=AOvVaw31GgGQiTwaxErE_1U_rxsR&ust=1617883156809000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiXk8qK7O8CFQAAAAAdAAAAABAD",
    description:
      " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    createdDate: "April 7",
    rating: 3.5,
  },
  {
    id: "8",
    title: "Test Json",
    imgUrl:
      "https://staging.perlubantuan.com/wp-content/uploads/2020/03/change-wordpress-url-1.png",
    description:
      " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    createdDate: "April 7",
    rating: 5,
  },
  {
    id: "9",
    title: "Test Json",
    imgUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsen842cova.blogspot.com%2F2015%2F03%2Furl-anatomy.html&psig=AOvVaw31GgGQiTwaxErE_1U_rxsR&ust=1617883156809000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiXk8qK7O8CFQAAAAAdAAAAABAO",
    description:
      " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    createdDate: "April 7",
    rating: 1,
  },
];

export default function HomeScreen() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <div
      style={{ padding: "10px", margin: "10px", backgroundColor: "#ef5446" }}
    >
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
              title={item.title}
              subheader={item.createdDate}
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
  );
}
