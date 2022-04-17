import React from 'react';

const CheckOut = () => {
    return (
        <div>
            <h2 className='text-center py-md-5'>CheckOut Now</h2>
            <div className="text-center mx-auto w-75">
                <form>
                    <div className="form-row ">
                        <div className="col-md-4 mb-3">

                            <input type="text" className="form-control" id="validationDefault01" placeholder="First name" required />
                        </div>
                        <div className="col-md-4 mb-3">

                            <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" required />
                        </div>
                        <div className="col-md-4 mb-3">

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                </div>
                                <input type="email" className="form-control" id="validationDefaultUsername" placeholder="email" aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">

                            <input type="text" className="form-control" id="validationDefault03" placeholder="City" required />
                        </div>
                        <div className="col-md-3 mb-3">

                            <input type="text" className="form-control" id="validationDefault04" placeholder="State" required />
                        </div>
                        <div className="col-md-3 mb-3">

                            <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required />
                        </div>
                    </div>

                    <button className="btn btn-primary" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;