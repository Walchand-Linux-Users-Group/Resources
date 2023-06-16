import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styles from "./BlogCard.module.css";

export default function MultiActionAreaCard({
  _id,
  title,
  image,
  author,
  date,
  description,
  content,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://backendtechno.onrender.com/images/${image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={styles.BlogCard_Heading}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.BlogCard_para}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/Detail/${_id}`}>
          <Button size="small" color="primary">
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

// import React from 'react'
// import styles from './BlogCard.module.css'
// import { Link } from 'react-router-dom'

// const BlogCard = () => {
//   return (
//     <div className={styles.BlogCard}>
//       <div className={styles.imageContainer}>
//         <img
//           src='https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
//           alt='blogImg'
//         />
//       </div>
//       <div className={styles.InfoContainer}>
//         <div className={classes.BlogCard_} ></div>
//         <h3>Title</h3>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit
//           similique reprehenderit numquam, eos inventore iste ab eum commodi
//         </p>
//         <Link to={`/Detail/12345`}>Read More</Link>
//       </div>
//     </div>
//   )
// }

// export default BlogCard
