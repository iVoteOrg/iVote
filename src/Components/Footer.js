import React from "react";
import {Container} from 'react-bootstrap'
import './styles/footer.css'

const Footers = () =>{
    return(
      <>
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
