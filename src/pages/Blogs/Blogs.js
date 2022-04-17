import React from 'react';

const Blogs = () => {
    return (
        <div style={{ marginBottom: '300px' }}>
            <h2 className='text-center'>Blogs</h2>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Q1:Difference between authorization and authentication?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            authorization is like identify.and authentication is power of identifyer. first of all need to know who want access our app.when we find this user is correct we allow this user.when this is user is not exist in our database,don't allow this user.say to one talk Authentication verifies who the user is.Authorization always takes place after authentication.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Q2:Why are you using firebase? What other options do you have to implement authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            firebase is easier. firbase provide more facility like hosting. this is product of google.
                            we can use firbase hooks to easy manage users. here showing five other options of firebase:
                            Parse ,
                            Back4app ,
                            Kinvey ,
                            Backendless,
                            Kuzzle
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Q3:What other services does firebase provide other than authentication?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            1.firestore Database. 2.Realtime Database. 3.Storage. 4.Hosting. 5.Functions. 6.Machine Learning. 7.Extentions.
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Blogs;