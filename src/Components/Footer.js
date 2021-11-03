import React from "react";
import {Container, Button, Row, Col} from 'react-bootstrap'
import './styles/footer.css'

const Footers = () =>{
    return(
      <>
       <div className="footer bg-dark">
		    <Container className="p-4">
				<div>
					<Button href="/signin" className="btn btn-outline-white btn-rounded">Sign-in</Button>
				</div>
			</Container>
			
	   </div>

	   <div className="ooter">
	   		<Container>
				<div className="pt-2">
					<p className="text-white">© 2021 Copyright: i-Vote.com</p>
				</div>
			</Container>
			</div>
      </>
    );
};
export default Footers;
