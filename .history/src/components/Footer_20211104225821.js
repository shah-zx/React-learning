import React from 'react'

function Footer(props) {
    return (
        <footer class="page-footer font-small pt-4" style={{ backgroundColor: "orange", color: "white" }}>

            <div class="container-fluid text-center text-md-left">

                <div class="row">

                    <div class="col-md-6 mt-md-0 mt-3">

                        <h5 class="text-uppercase">{props.heading}</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>

                    </div>

                    <hr class="clearfix w-100 d-md-none pb-3" />

                    <div class="col-md-3 mb-md-0 mb-3">

                        <h5 class="text-uppercase">Contact us</h5>

                        <ul class="list-unstyled">
                            <li>
                                <a href="#!">{props.link1}</a>
                            </li>
                            <li>
                                <a href="#!">{props.ls}</a>
                            </li>
                        </ul>

                    </div>

                    <div class="col-md-3 mb-md-0 mb-3">

                        <h5 class="text-uppercase">Work with us</h5>

                        <ul class="list-unstyled">
                            <li>
                                <a href="#!">{props.oneLink}</a>
                            </li>
                            <li>
                                <a href="#!">{props.secLink}</a>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

            <div class="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> Infuzex</a>
            </div>

        </footer>
    )
}

export default Footer
