import React from "react";
function Footer() {
    return (
        <>

            <div class="my-1">

                <footer style={{backgroundColor:"aliceblue"}} class="text-dark text-center text-lg-start bg-body-tertiary ">

                    <div class=" p-4">
                        <div class="row mt-4">

                            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                                <h5 class="text-uppercase mb-4">About company</h5>

                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti.
                                </p>

                                <p>
                                    Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                    molestias.
                                </p>


                            </div>



                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase mb-4 pb-1">Search something</h5>

                                <div class="form-outline form-white mb-4">
                                    <input type="text" id="formControlLg" class="form-control form-control-lg" />
                                    <label class="form-label" for="formControlLg">Search</label>
                                </div>

                                
                            </div>



                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase mb-4">Opening hours</h5>

                                <table class="table text-center text-dark">
                                    <tbody class="fw-normal">
                                        <tr>
                                            <td>Mon - Thu:</td>
                                            <td>8am - 9pm</td>
                                        </tr>
                                        <tr>
                                            <td>Fri - Sat:</td>
                                            <td>8am - 1am</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday:</td>
                                            <td>9am - 10pm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>


                    

                </footer>

            </div>

        </>
    )
}
export default Footer;