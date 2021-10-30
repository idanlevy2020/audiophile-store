import "./Button.css";

const Button = (props) => {
   const {
      bgcolor = "orange",
      variant = "contained",
      size = "small",
      ...rest
   } = props;
   const className = `btn ${bgcolor} ${variant} ${size}`;
   if (bgcolor === "orange" || bgcolor === "black") {
      //default values ​​in the app
      return <button className={className} {...rest} />;
   } else {
      //if deciding to use a different color
      return (<button style={{ background: props.bgcolor }} className={className} {...rest} onClick={props.onClick}/>
      );
   }
};

export { Button };
export default Button; //export without name
