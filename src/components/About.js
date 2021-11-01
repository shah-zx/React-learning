import React, { useState } from 'react'

export default function About() {  // theme provider //



    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'Purple'
    })     // This is the useState which is used to say that , this will be the color and this will be the backgroundColor //

    const [btntext, setBtntext] = useState("Enable dark mode")

    const toggleStyle = () => {
        if (myStyle.color == 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtntext("Enable dark mode")
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'Purple'
            })
            setBtntext("Enable light mode")
        }
    }
        // This will be the code if we want to enabke green mode //

        // const [pColor, cColor] = useState({
        //     color: 'white',
        //     backgroundColor: 'green'
        // })   // This is for the css or color wala part //

        // This is for green mode //

        const [pMsg, nMsg] = useState("Enable green mode")  // This is for the button wala part //

        const giveColor = () => {
            if (myStyle.color === 'white') {
                setMyStyle({
                    color: 'green',
                    backgroundColor: 'white'
                })
                nMsg("Enable green mode")
            }
            else {
                setMyStyle({
                    color: 'white',
                    backgroundColor: 'green'
                })
                nMsg("Enable light mode")
            }
        }

        // This is for red mode //////////////////////////////////

        const [prMsg , neMsg] = useState("Enable red mode")
        
        const colroIt =  () => {
            if (myStyle.color === 'white') {
                setMyStyle({
                    color: 'red' ,
                    backgroundColor: 'white'
                })
                neMsg("Enable light mode")
            }
            else {
                setMyStyle({
                    color: 'white' ,
                    backgroundColor: 'red'
                })
                neMsg("Enable red mode")
            }
        }

    return (
        <div className="container" style={myStyle}>
            <h2 className="my-3">About Us</h2>
            <div id="accordion" style={myStyle}>
                <div className="card">
                    <div className="card-header" id="headingOne" style={myStyle}>
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                Collapsible Group Item #1
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion" style={myStyle} >
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo" style={myStyle}>
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                Collapsible Group Item #2
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree" style={myStyle}>
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                Collapsible Group Item #3
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-info mx-3">{btntext}</button>
                <button onClick={giveColor} type="button" className="btn btn-success mx-3">{pMsg}</button>
                <button onClick={colroIt} type="button" className="btn btn-danger">{prMsg}</button>

            </div>
        </div>

    )

    }


