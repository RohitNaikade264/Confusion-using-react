import React from 'react';

function Contactus(){
    return(
        <div className='container'>
        <div className="row row-content mb-3">
           <div className="col-12">
              <h3>Location Information</h3>
           </div>
            <div className="col-12 col-sm-4">
                   <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope"></i>:
                        <a href="mailto:confusion@food.net">confusion@food.net</a>
		           </address>
            </div>
            <div className="col-12 col-sm-6 offset-sm-2">
                <h5>Map of our Location</h5>
            </div>
            <div className="col-12 col-sm-11">
            <div className="btn-group" role="group">
                <a role="button" href="+917522979006" className="btn btn-primary"><i className="fa fa-phone"></i> Call</a>
                <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                <a role="button" href="emailto:naikaderohit833@gmail.com" className="btn btn-success"><i className="fa fa-envelope-o"></i> Email</a>
            </div>
            </div>
        </div>     
       </div>
    );
}
export default Contactus;