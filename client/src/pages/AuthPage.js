import React, {useState} from "react"
import {useHttp} from "../hooks/http.hook";

export const AuthPage = () => {
    const {loading, error, request} = useHttp()
    const [formReg, setFormReg] = useState({
        email: '', nick: '', password: ''
    })
    const [formAuth, setFormAuth] = useState({
        email: '', password: ''
    })

    const changeHandlerReg = event => {
        setFormReg( formReg => ({ ...formReg, [event.target.name]: event.target.value }))
    }
    const changeHandlerAuth = event => {
        setFormAuth( formAuth => ({ ...formAuth, [event.target.name]: event.target.value }))
    }

    const register = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...formReg})
            console.log('Data', data)
        } catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>
                    Auth Page
                </h1>
                <div className="card blue-grey darken-1 z-depth-5">
                    <div className="card-content white-text">
                        <span className="card-title">Register</span>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" name="email" onChange={changeHandlerReg}/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="nick" type="text" className="validate" name="nick" onChange={changeHandlerReg}/>
                                <label htmlFor="first_name">Nick</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" name="password" onChange={changeHandlerReg}/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="waves-effect waves-light btn" disabled={loading} onClick={register}>Register</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1 z-depth-5">
                    <div className="card-content white-text">
                        <span className="card-title">Login</span>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" name="email" onChange={changeHandlerAuth}/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" name="password" onChange={changeHandlerAuth}/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="waves-effect waves-light btn">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}