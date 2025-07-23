import { useState } from "react"
import Divider from "../Divider/Divider"

function Contact() {

    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')


    return (
        <>
            <section>
                <div className='container py-4'>
                    <h2 className="h1 text-center text-uppercase fw-bold mb-3">contact section</h2>
                    <Divider />
                    <form className="py-5 w-50 mx-auto">
                        <div className="form-group mt-5">
                            <input type='text' name='userName' className={`form-control form-control-lg ${userName ? 'typing' : ''}`} id='userName' placeholder='userName' value={userName} onChange={(e) => setUserName(e.target.value)} />
                            <label className="form-label" htmlFor="userName">userName:</label>
                        </div>
                        <div className="form-group mt-5">
                            <input type='number' name='userAge' className={`form-control form-control-lg ${userAge ? 'typing' : ''}`} id='userAge' placeholder='userAge' value={userAge} onChange={(e) => setUserAge(e.target.value)} />
                            <label className="form-label" htmlFor="userAge">userAge:</label>
                        </div>
                        <div className="form-group mt-5">
                            <input type='email' name='userEmail' className={`form-control form-control-lg ${userEmail ? 'typing' : ''}`} id='userEmail' placeholder='userEmail' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                            <label className="form-label" htmlFor="userEmail">userEmail:</label>
                        </div>
                        <div className="form-group mt-5">
                            <input type='password' name='userPass' className={`form-control form-control-lg ${userPass ? 'typing' : ''}`} id='userPass' placeholder='userPassword' value={userPass} onChange={(e) => setUserPass(e.target.value)}  />
                            <label className="form-label" htmlFor="userPass">userPass:</label>
                        </div>
                        <button type='submit' className='btn btn-primary mt-3 text-capitalize'>send</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
