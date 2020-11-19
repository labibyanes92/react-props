import React from 'react'; 
import PropTypes from "prop-types";




    return (

        <div className="container">
            <div onClick={handleName}>
                {props.children}
                </div>
            <div className="left-row">
                <h1  style={{ fontSize: "50px", color:" rgb(109 95 24)" }}  >{props.fullname}</h1>
                <h2   style={{ fontSize: "30px", color:"#635f5f" }} >{props.profession}</h2>
                <p   style={{ fontSize: "14px", color:"white" , textAlign: "justify" }}>{props.bio}</p>
        </div>



        
        </div>



    );
}
export default Profile;

Profile.defaultProps={
fullname:"luca modric ",
proffession:"Joueur du football",
bio:"joueur de l'equipe real madrid"

};

Profile.propType = {
    fullname: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
  };

