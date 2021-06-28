import react from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
// import {addproducts} from "../../actions";
// import {connect} from "react-redux";
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  const styles ={
    "textAlign": "left",
    "fontSize": "16px", 
    "fontWeight": "400",
    "letterSpacing": "0.5px",
    "color": "rgb(27, 25, 25)",
    "boxSizing": "borderBox",
    "fontFamily": '"Montserrat," sans-serif'
}
const Cards = ({id,name,preview,brand,price}) => {
    const classes = useStyles();
    return (   <Card className= {classes.root} style = {{"width":"200px","marginRight":"13px","height":"410px","marginBottom":"30px"}}>
       <Link to={`/shoplanewebsite/product/${id}`} style ={{"textDecoration" : "none"}}>
        <CardActionArea className="oncardhover">
          <CardMedia
            component= "img"
            alt={brand}
            
            image= {preview}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3" className="stylesofname" style ={{"fontSize":"16px"}}>
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h4" className= "brandstyles" style={{"fontSize" : "12px","marginTop":"5px"}}>
              {brand}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style = {{"color":"teal","fontSize":"18px","marginTop":"5px"}}>
             {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
{/*     
        <CardActions className="oncardhover">
          <Button size="small" color="primary" style={{"backgroundColor":"#eee","color":"black"}}>
            ADD
          </Button>
          <Button size="small" color="primary"  style={{"backgroundColor":"#eee","color":"black"}}>
            REMOVE
          </Button>
        </CardActions> */}
     
      </Card>);
}
// const mapDispatchToProps = (dispatch) =>({
//   sendproducts : (payload) => dispatch(addproducts(payload)),
// }) 
// export default connect(null,mapDispatchToProps)(Cards);
export default Cards;